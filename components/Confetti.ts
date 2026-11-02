'use client';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotSpeed: number;
  opacity: number;
  shape: 'rect' | 'circle';
}

let confettiCanvas: HTMLCanvasElement | null = null;
let isAnimating = false;
const particles: Particle[] = [];

function getOrCreateCanvas(): HTMLCanvasElement {
  if (typeof window === 'undefined') return null as unknown as HTMLCanvasElement;
  if (!confettiCanvas) {
    let c = document.getElementById('confetti-canvas') as HTMLCanvasElement;
    if (!c) {
      c = document.createElement('canvas');
      c.id = 'confetti-canvas';
      c.style.position = 'fixed';
      c.style.top = '0';
      c.style.left = '0';
      c.style.width = '100vw';
      c.style.height = '100vh';
      c.style.pointerEvents = 'none';
      c.style.zIndex = '9999';
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      window.addEventListener('resize', () => {
        if (c) {
          c.width = window.innerWidth;
          c.height = window.innerHeight;
        }
      });
      document.body.appendChild(c);
    }
    confettiCanvas = c;
  }
  return confettiCanvas;
}

export function fireConfetti(
  x: number = typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
  y: number = typeof window !== 'undefined' ? window.innerHeight / 2 : 400
) {
  if (typeof window === 'undefined') return;
  const canvas = getOrCreateCanvas();
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const count = 75;
  const colors = ['#68be00', '#ffc629', '#ff6b3e', '#00b6d2', '#8a38f5', '#f66f8e', '#043629'];

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 4;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      opacity: 1,
      shape: Math.random() > 0.4 ? 'rect' : 'circle',
    });
  }

  if (!isAnimating) {
    isAnimating = true;
    requestAnimationFrame(render);
  }

  function render() {
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25;
      p.vx *= 0.98;
      p.rotation += p.rotSpeed;
      p.opacity -= 0.018;

      if (p.opacity <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.strokeStyle = '#043629';
      ctx.lineWidth = 1.5;

      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.strokeRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
      ctx.restore();
    }

    if (particles.length > 0) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      isAnimating = false;
    }
  }
}

