import { useEffect, useState, useRef } from "react";

export interface TypewriterProps {
  text: string;
  speed?: number;
  loop?: boolean;
  pause?: number;
}

export function Typewriter({ text, speed = 100, loop = false, pause = 1000 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const typingRef = useRef<number | null>(null);
  const deletingRef = useRef<number | null>(null);
  const pauseRef = useRef<number | null>(null);

  useEffect(() => {
    let isCancelled = false;

    function clearAllTimers() {
      if (typingRef.current) clearInterval(typingRef.current);
      if (deletingRef.current) clearInterval(deletingRef.current);
      if (pauseRef.current) clearTimeout(pauseRef.current);
    }

    function startTyping() {
      let i = 0;
      setDisplayed("");
      typingRef.current = window.setInterval(() => {
        setDisplayed((prev) => prev + text.charAt(i));
        i += 1;
        if (i >= text.length) {
          clearInterval(typingRef.current!);
          if (loop) {
            pauseRef.current = window.setTimeout(() => {
              startDeleting();
            }, pause);
          }
        }
      }, speed);
    }

    function startDeleting() {
      let i = text.length;
      deletingRef.current = window.setInterval(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        i -= 1;
        if (i <= 0) {
          clearInterval(deletingRef.current!);
          if (loop && !isCancelled) {
            pauseRef.current = window.setTimeout(() => {
              startTyping();
            }, pause);
          }
        }
      }, speed);
    }

    startTyping();

    return () => {
      isCancelled = true;
      clearAllTimers();
    };
  }, [text, speed, loop, pause]);

  return <span>{displayed}</span>;
}
