import { useEffect, useRef, useState } from 'react';

export function useCountUp(target = 0, durationMs = 1200) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          function tick(now) {
            const p = Math.min((now - start) / durationMs, 1);
            setValue(Math.floor(p * target));
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, durationMs]);

  return { ref, value };
}


