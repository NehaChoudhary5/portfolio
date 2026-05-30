'use client';
import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 w-12 h-12 text-white rounded-xl z-[999]
        flex items-center justify-center transition-all duration-400
        hover:-translate-y-1
        ${show ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      style={{
        background: 'linear-gradient(135deg, #6C63FF 0%, #00D4AA 100%)',
        boxShadow: '0 5px 20px rgba(108, 99, 255, 0.4)',
      }}
      aria-label="Back to top"
    >
      <FaChevronUp size={16} />
    </button>
  );
}
