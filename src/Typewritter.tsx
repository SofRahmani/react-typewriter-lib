import { useEffect, useState } from "react";

export interface TypewriterProps {
  text: string;
  speed?: number;
  loop?: boolean;
}

export function Typewriter({ text, speed = 100, loop = false }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    function loopText() {
      let i = 0;
      const timer = setInterval(() => {
        setDisplayed((prev) => prev + text.charAt(i));
        i += 1;
        if (i >= text.length) clearInterval(timer);
      }, speed);

      while (loop) {
        loopText(); // Call the function recursively to loop the text infinetely
      }

      return () => clearInterval(timer);
    }

    loopText();

  }, [text, speed, loop]);

  return <span>{displayed}</span>;
}
