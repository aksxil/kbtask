"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Stroke drawing animation
const strokeVariant = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

// Fill fade-in animation
const fillVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 2, duration: 1, ease: "easeInOut" },
  },
};

const polygons = [
  {
    d: "M58.86 75l58.87-37.5L58.86 0 0 37.5z",
  },
  {
    d: "M176.59 75l58.86-37.5L176.59 0l-58.86 37.5z",
  },
  {
    d: "M117.73 112.5L58.86 75 0 112.5 58.86 150z",
  },
  {
    d: "M176.59 150l58.86-37.5L176.59 75l-58.86 37.5z",
  },
  {
    d: "M176.59 162.5L117.73 125l-58.87 37.5 58.87 37.5z",
  },
];

export default function AnimatedPolygonLogo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-35.3175 -50 306.085 300"
      width="1200"
      height="800"
      className="cursor-pointer"
    >
      {polygons.map((polygon, index) => (
        <g key={index}>
          {/* Stroke Path */}
          <motion.path
            d={polygon.d}
            stroke="#0061ff"
            strokeWidth="1"
            fill="none"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={strokeVariant}
          />
          {/* Fill Path */}
          <motion.path
            d={polygon.d}
            fill="#0061ff"
            stroke="none"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fillVariant}
          />
        </g>
      ))}
    </motion.svg>
  );
}
