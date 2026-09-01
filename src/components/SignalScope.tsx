import { useEffect, useRef } from "react";

function sawtooth(phase: number) {
  const wrapped = ((phase % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  return wrapped / Math.PI - 1;
}

export function SignalScope() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: 0.35, y: 0.4 });
  const scroll = useRef(0);
  const time = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let running = true;

    const sizeToParent = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);

      context.strokeStyle = "rgb(161 161 170 / 0.35)";
      context.lineWidth = 0.75;
      context.beginPath();
      context.moveTo(0, height / 2);
      context.lineTo(width, height / 2);
      context.stroke();

      const mix = pointer.current.x;
      const amplitude = height * (0.18 + pointer.current.y * 0.26);
      const frequency = 1.6 + pointer.current.x * 2.8 + scroll.current * 1.4;
      const speed = reduce ? 0 : 0.032;
      time.current += speed;

      context.strokeStyle = "#4cc3f5";
      context.lineWidth = 1.35;
      context.beginPath();

      for (let x = 0; x <= width; x += 1) {
        const unit = x / width;
        const phase = unit * frequency * Math.PI * 2 + time.current;
        const sine = Math.sin(phase);
        const saw = sawtooth(phase);
        const envelope = 0.62 + 0.38 * Math.sin(unit * Math.PI);
        const sample =
          height / 2 + (sine * (1 - mix) + saw * mix) * amplitude * envelope;
        if (x === 0) {
          context.moveTo(x, sample);
        } else {
          context.lineTo(x, sample);
        }
      }

      context.stroke();

      if (!reduce && running) {
        frame = requestAnimationFrame(draw);
      }
    };

    const onPointer = (event: PointerEvent) => {
      pointer.current = {
        x: Math.min(1, Math.max(0, event.clientX / window.innerWidth)),
        y: Math.min(1, Math.max(0, event.clientY / window.innerHeight)),
      };
      if (reduce) {
        draw();
      }
    };

    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scroll.current = Math.min(1, window.scrollY / max);
      if (reduce) {
        draw();
      }
    };

    sizeToParent();
    onScroll();
    draw();
    window.addEventListener("resize", sizeToParent);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", sizeToParent);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="mt-10 block h-24 w-full"
      aria-hidden="true"
    />
  );
}
