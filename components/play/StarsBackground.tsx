"use client";

import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div
        className="stars-parallax stars-small"
        style={{ transform: `translate(${offset.x * 0.3}px, ${offset.y * 0.3}px)` }}
      />
      <div
        className="stars-parallax stars-medium"
        style={{ transform: `translate(${offset.x * 0.6}px, ${offset.y * 0.6}px)` }}
      />
      <div
        className="stars-parallax stars-large"
        style={{ transform: `translate(${offset.x * 0.9}px, ${offset.y * 0.9}px)` }}
      />
      <div
        className="nebula-glow nebula-a"
        style={{ transform: `translate(${offset.x * 0.4}px, ${offset.y * 0.4}px)` }}
      />
      <div
        className="nebula-glow nebula-b"
        style={{ transform: `translate(${offset.x * -0.35}px, ${offset.y * -0.35}px)` }}
      />
    </>
  );
}