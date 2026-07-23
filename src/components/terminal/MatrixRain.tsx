"use client";

import React, { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isActive = true;

    // Katakana + Latin + Numerals
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ".split("");

    let fontSize = 14;
    let columns: number;
    let drops: number[];

    const resizeCanvas = () => {
      // Reduce font size on very small screens for better density
      fontSize = window.innerWidth < 600 ? 10 : 14;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1).map(() => Math.random() * -100); // Start off-screen
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Reduced motion check
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      isActive = false;
    }
    const handleMotionChange = (e: MediaQueryListEvent) => {
      isActive = !e.matches && document.visibilityState === "visible";
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    // Visibility check
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isActive = false;
      } else if (!mediaQuery.matches) {
        isActive = true;
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let lastDrawTime = 0;
    const fps = 30; // Limit FPS to save CPU/battery
    const interval = 1000 / fps;

    const draw = (timestamp: number) => {
      if (!isActive) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      if (timestamp - lastDrawTime > interval) {
        // Semi-transparent black to create trailing effect
        ctx.fillStyle = "rgba(10, 10, 10, 0.1)"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00FF41"; // Terminal Green
        ctx.font = `${fontSize}px monospace`;
        ctx.textAlign = "center";

        for (let i = 0; i < drops.length; i++) {
          // Occasional empty drop or skip to create gaps
          if (Math.random() > 0.05) {
            const text = charset[Math.floor(Math.random() * charset.length)];
            ctx.fillText(text, i * fontSize + fontSize/2, drops[i] * fontSize);
          }

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        lastDrawTime = timestamp;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      mediaQuery.removeEventListener("change", handleMotionChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-10 mix-blend-screen"
      aria-hidden="true"
    />
  );
}
