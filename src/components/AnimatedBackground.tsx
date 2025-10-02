
import React, { useRef, useEffect, CSSProperties } from 'react';

interface AnimatedBackgroundProps {
  style?: CSSProperties;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ style }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particleCount = prefersReducedMotion
      ? 20
      : (window.innerWidth < 768 ? 30 : 50);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 0.4 - 0.2;
        this.vy = Math.random() * 0.4 - 0.2;
        this.radius = Math.random() * 1.5 + 0.5;
        this.color = `rgba(133, 72, 239, 0.5)`; // Corresponds to #8548ef
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    init();

    const connect = () => {
      const maxDist = prefersReducedMotion ? 100 : 150;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDist) {
            const opacityValue = 1 - (distance / maxDist);
            ctx.strokeStyle = `rgba(133, 72, 239, ${opacityValue})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    let animationFrameId: number;
    let running = true;
    const loop = () => {
      if (!running) {
        animationFrameId = requestAnimationFrame(loop);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    const handleResize = () => {
        resizeCanvas();
        init();
    };

    window.addEventListener('resize', handleResize);
    const handleVisibility = () => { running = !document.hidden; };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={style} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default AnimatedBackground;