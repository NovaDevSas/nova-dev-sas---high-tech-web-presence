import React, { useRef, useEffect } from 'react';

// Helper to convert hex color to an RGB array [r, g, b]
function hexToRgb(hex: string): number[] | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}

// Helper to linearly interpolate between two colors
// FIX: Renamed the constant 'b' to 'blue' to avoid a name collision with the function parameter 'b'. This resolves the "Duplicate identifier" error.
function lerpColor(a: number[], b: number[], amount: number): string {
  const [r1, g1, b1] = a;
  const [r2, g2, b2] = b;

  const r = Math.round(r1 + (r2 - r1) * amount);
  const g = Math.round(g1 + (g2 - g1) * amount);
  const blue = Math.round(b1 + (b2 - b1) * amount);

  return `rgb(${r},${g},${blue})`;
}


const PostFooter: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;
    let time = 0;

    const gradientColors = [
        hexToRgb('#8548ef'), // brand-accent
        hexToRgb('#f5f5f7'), // brand-light
        hexToRgb('#8548ef')  // brand-accent again for seamless loop
    ].filter(c => c !== null) as number[][];

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120, // Radius of mouse effect
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      density: number;
      size: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x + (Math.random() - 0.5) * 50; // Start scattered
        this.y = y + (Math.random() - 0.5) * 50; // Start scattered
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 40) + 5;
        this.size = 2;
        this.color = '#f5f5f7';
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Spring back to original position
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    const init = () => {
        particlesArray = [];
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);

        const text = "NOVA DEV";
        const fontSize = Math.min(canvas.width / dpr / 8, 100);
        ctx.font = `900 ${fontSize}px Orbitron`;
        ctx.fillStyle = '#ffffff'; // Use white to map pixels accurately
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, canvas.width / dpr / 2, canvas.height / dpr / 2);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixelStep = Math.max(2, Math.floor(6 / dpr)); 

        for (let y = 0; y < imageData.height; y += pixelStep) {
            for (let x = 0; x < imageData.width; x += pixelStep) {
                const alphaIndex = (y * imageData.width + x) * 4 + 3;
                if (imageData.data[alphaIndex] > 128) {
                    particlesArray.push(new Particle(x / dpr, y / dpr));
                }
            }
        }
        ctx.clearRect(0,0, canvas.width, canvas.height);
    };

    const animate = () => {
      time += 0.002; // Controls speed of gradient animation
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dpr = window.devicePixelRatio || 1;

      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];

        // Calculate dynamic color based on a moving gradient
        const gradientPosition = (p.baseX / (canvas.width / dpr) + time) % 1;
        const colorStopIndex = Math.floor(gradientPosition * (gradientColors.length - 1));
        const localPosition = (gradientPosition * (gradientColors.length - 1)) % 1;
        const color1 = gradientColors[colorStopIndex];
        const color2 = gradientColors[colorStopIndex + 1];

        if (color1 && color2) {
            p.color = lerpColor(color1, color2, localPosition);
        }

        p.update();
        p.draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    const parentElement = canvas.parentElement;
    if (!parentElement) return;

    const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(animationFrameId);
        init();
        animate();
    });

    resizeObserver.observe(parentElement);
    
    init();
    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-transparent"></canvas>
  );
};

export default PostFooter;