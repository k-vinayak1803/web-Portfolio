import { useEffect, useRef, useState } from "react";
import "/src/Css/Home.css";
import "/src/Css/media.css";

function TypewriterComp({
  lines = ["Code", "Create", "Innovate"],
  firstDelay = 3500,
  repeatDelay = 500,
  linePause = 800,
  slideDuration = 800,
}) {
  const containerRef = useRef(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);
  const [playedOnce, setPlayedOnce] = useState(false);

  const resetAnimation = () => {
    setLineIndex(0);
    setVisibleLines([]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) resetAnimation();
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const delay =
      lineIndex === 0 ? (playedOnce ? repeatDelay : firstDelay) : linePause;

    const timeout = setTimeout(() => {
      setVisibleLines((prev) => [...prev, lines[lineIndex]]);
      setLineIndex((i) => i + 1);
      if (lineIndex === 0) setPlayedOnce(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [lineIndex, lines, firstDelay, repeatDelay, linePause, playedOnce]);

  return (
    <div ref={containerRef} className="typewriter-lines">
      {visibleLines.map((line, i) => (
        <div
          key={i}
          className="intro-text"
          style={{
            left: `${i * 8}rem`,
            animation: `slideIn ${slideDuration}ms ease-out forwards`,
          }}
        >
          {line}
        </div>
      ))}

      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to   { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default TypewriterComp;
