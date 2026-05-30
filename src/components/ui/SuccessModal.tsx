'use client';
import { FaCheck } from 'react-icons/fa';

interface Props {
  show: boolean;
  onClose: () => void;
}

export default function SuccessModal({ show, onClose }: Props) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-5"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="rounded-3xl p-12 max-w-sm w-full text-center border animate-[modalPop_0.4s_ease]"
        style={{
          background: 'var(--dark-card)',
          borderColor: 'var(--dark-border)',
        }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl border-2"
          style={{
            background: 'rgba(0,212,170,0.1)',
            borderColor: 'rgba(0,212,170,0.2)',
            color: 'var(--secondary)',
          }}
        >
          <FaCheck />
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-2">
          Message Sent! 🎉
        </h3>
        <p className="text-sm mb-6" style={{ color: '#6b6b82' }}>
          Thanks for reaching out! I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={onClose}
          className="w-full py-3 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, #6C63FF 0%, #00D4AA 100%)',
          }}
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
