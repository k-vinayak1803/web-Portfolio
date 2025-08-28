import { useEffect, useRef, useState } from "react";
import "/src/Css/Home.css";
import "/src/Css/media.css";

function TypewriterMultiLine({
  lines = ["Code", "Create", "Innovate"],
  firstDelay = 3500, // delay when shown first time
  repeatDelay = 500, // delay when revisited
  linePause = 800, // delay between lines
  slideDuration = 800, // animation duration
}) {
  const containerRef = useRef(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);
  const [playedOnce, setPlayedOnce] = useState(false);

  // Reset animation
  const resetAnimation = () => {
    setLineIndex(0);
    setVisibleLines([]);
  };

  // 👀 Restart animation when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          resetAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // ⏳ Handle line timing
  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const delay =
      lineIndex === 0
        ? playedOnce
          ? repeatDelay // after first time → 1s
          : firstDelay // first time → 4s
        : linePause;

    const timeout = setTimeout(() => {
      setVisibleLines((prev) => [...prev, lines[lineIndex]]);
      setLineIndex((i) => i + 1);
      if (lineIndex === 0) setPlayedOnce(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [lineIndex, lines, firstDelay, repeatDelay, linePause, playedOnce]);

  return (
    <div
      ref={containerRef}
      className=""
      style={{
        fontFamily: "monospace",
        display: "flex",
        flexDirection: "column",
        gap: "1rem", // vertical spacing
      }}
    >
      {visibleLines.map((line, i) => (
        <div
          key={i}
          className="intro-text"
          style={{
            paddingLeft: "2rem",
            position: "relative",
            left: `${i * 8}rem`,
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontSize: "3.5rem",
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

export default TypewriterMultiLine;
