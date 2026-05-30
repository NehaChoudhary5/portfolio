'use client';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '@/lib/data';

const { personal } = portfolioData;

export default function Footer() {
  const socials = [
    { href: personal.linkedin, icon: <FaLinkedinIn />, label: 'LinkedIn' },
    { href: personal.github, icon: <FaGithub />, label: 'GitHub' },
    { href: `mailto:${personal.email}`, icon: <FaEnvelope />, label: 'Email' },
  ];

  return (
    <footer
      className="py-10 border-t"
      style={{
        background: 'var(--dark-bg)',
        borderColor: 'var(--dark-border)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-between items-center gap-5">
        <p className="text-sm" style={{ color: '#6b6b82' }}>
          © 2026{' '}
          <span className="font-semibold" style={{ color: 'var(--primary)' }}>
            Neha Choudhary
          </span>
          .
        </p>
        <div className="flex gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-base border transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6C63FF] hover:border-[#6C63FF] hover:text-white"
              style={{
                background: 'var(--dark-card)',
                borderColor: 'var(--dark-border)',
                color: '#6b6b82',
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
