"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

export function WorldMap({
  dots = [],
  lineColor = "#60A5FA",
  dotColor = "#60A5FA",
  dotSize = 2,
  pulseColor = "#60A5FA",
  pulseSize = 8
}) {
  const svgRef = useRef(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const svgMap = map.getSVG({
    radius: 0.22,
    color: currentTheme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] dark:bg-black/40 bg-white/40 rounded-lg relative font-sans backdrop-blur-xl border border-white/20 p-8">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)] pointer-events-none select-none opacity-80"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={`url(#path-gradient-${i})`}
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: 0.5 * i,
                  ease: "easeInOut",
                }}
              />
              <defs>
                <linearGradient id={`path-gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={theme === "dark" ? "#000" : "#fff"} stopOpacity="0" />
                  <stop offset="15%" stopColor={lineColor} stopOpacity="1" />
                  <stop offset="85%" stopColor={lineColor} stopOpacity="1" />
                  <stop offset="100%" stopColor={theme === "dark" ? "#000" : "#fff"} stopOpacity="0" />
                </linearGradient>
              </defs>
            </g>
          );
        })}

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r={dotSize}
                fill={dotColor}
                className="drop-shadow-2xl shadow-white"
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r={dotSize}
                fill={pulseColor}
                opacity="0.5"
                className="drop-shadow-2xl shadow-white">
                <animate
                  attributeName="r"
                  from={dotSize}
                  to={pulseSize}
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r={dotSize}
                fill={dotColor}
                className="drop-shadow-2xl shadow-white"
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r={dotSize}
                fill={pulseColor}
                opacity="0.5"
                className="drop-shadow-2xl shadow-white">
                <animate
                  attributeName="r"
                  from={dotSize}
                  to={pulseSize}
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
