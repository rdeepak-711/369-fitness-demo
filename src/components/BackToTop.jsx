import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-brand-red text-white shadow-lg hover:scale-105 transition"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;


