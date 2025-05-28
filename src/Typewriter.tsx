import { useEffect, useState } from "react";

export interface TypewriterProps {
  text: string;
  speed?: number;
  loop?: boolean;
  pause?: number;
}

export function Typewriter({ text, speed = 100, loop = false, pause = 1000 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let isCancelled = false;
    let i = 0;
    let mode: "typing" | "deleting" = "typing";
    let timer: number;

    function step() {
      if (isCancelled) return;

      if (mode === "typing") {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
          timer = window.setTimeout(step, speed);
        } else if (loop) {
          mode = "deleting";
          timer = window.setTimeout(step, pause);
        }
      } else {
        if (i > 0) {
          setDisplayed(text.slice(0, i - 1));
          i--;
          timer = window.setTimeout(step, speed);
        } else if (loop) {
          mode = "typing";
          timer = window.setTimeout(step, pause);
        }
      }
    }

    step();

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [text, speed, loop, pause]);

  return <span>{displayed}</span>;
}
