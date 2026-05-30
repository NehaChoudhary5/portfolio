'use client';
import { useEffect, useState } from 'react';
import {
  FaPaperPlane,
  FaCode,
  FaJava,
  FaRobot,
  FaGitAlt,
  FaCloud,
  FaShieldAlt,
} from 'react-icons/fa';
import { portfolioData } from '@/lib/data';

const { personal, stats, typewriterRoles } = portfolioData;

function useTypewriter(roles: string[]) {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      speed = 2000;
      const t = setTimeout(() => setIsDeleting(true), speed);
      return () => clearTimeout(t);
    }
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
      speed = 500;
    }

    const t = setTimeout(() => {
      setText(
        isDeleting
          ? current.substring(0, charIndex - 1)
          : current.substring(0, charIndex + 1)
      );
      setCharIndex((c) => (isDeleting ? c - 1 : c + 1));
    }, speed);

    return () => clearTimeout(t);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return text;
}

export default function Hero() {
  const typedText = useTypewriter(typewriterRoles);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{
        background:
          'linear-gradient(135deg, #0c0c1d 0%, #1a1a3e 50%, #0f0f2d 100%)',
      }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg" />

      {/* Glows */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full -top-[10%] -right-[5%] pointer-events-none"
        style={{ background: '#6C63FF', filter: 'blur(120px)', opacity: 0.15 }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full -bottom-[10%] -left-[5%] pointer-events-none"
        style={{ background: '#00D4AA', filter: 'blur(120px)', opacity: 0.15 }}
      />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: '20%', left: '10%', delay: '0s' },
          { top: '60%', left: '80%', delay: '2s' },
          { top: '30%', left: '60%', delay: '4s', size: '6px' },
          { top: '80%', left: '30%', delay: '1s' },
          { top: '15%', left: '45%', delay: '3s', size: '3px' },
          { top: '70%', left: '70%', delay: '5s' },
        ].map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: p.top,
              left: p.left,
              animationDelay: p.delay,
              width: p.size || '4px',
              height: p.size || '4px',
            }}
          />
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
          {/* Content */}
          <div>
            {/* Status */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium mb-8 border"
              style={{
                background: 'rgba(0, 212, 170, 0.1)',
                borderColor: 'rgba(0, 212, 170, 0.2)',
                color: 'var(--secondary)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full pulse-dot"
                style={{ background: 'var(--secondary)' }}
              />
              Available for opportunities
            </div>

            {/* Title */}
            <h1 className="font-display font-extrabold leading-tight mb-3 text-[clamp(40px,6vw,68px)]">
              <span className="block text-white">Hello, I&apos;m</span>
              <span className="block gradient-text">Neha Choudhary</span>
            </h1>

            {/* Typewriter */}
            <div
              className="font-mono text-lg mb-6 flex items-center gap-2"
              style={{ color: 'var(--primary-light)' }}
            >
              <span>// </span>
              <span>{typedText}</span>
              <span className="blink" style={{ color: 'var(--secondary)' }}>
                |
              </span>
            </div>

            <p
              className="text-[17px] max-w-[520px] mb-10 leading-relaxed"
              style={{ color: '#a0a0b8' }}
            >
              {personal.tagline}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    'linear-gradient(135deg, #6C63FF 0%, #00D4AA 100%)',
                  boxShadow: '0 8px 30px rgba(108, 99, 255, 0.3)',
                }}
              >
                <FaPaperPlane /> Get In Touch
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    'linear-gradient(135deg, #6C63FF 0%, #00D4AA 100%)',
                  boxShadow: '0 8px 30px rgba(108, 99, 255, 0.3)',
                }}
              >
                <FaCode /> View Projects
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-12">
              {stats.map((stat, i) => (
                <div key={i} className="relative">
                  <h3 className="text-4xl font-extrabold font-display gradient-text">
                    {stat.value}
                  </h3>
                  <p className="text-xs mt-1" style={{ color: '#6b6b82' }}>
                    {stat.label}
                  </p>
                  {i < stats.length - 1 && (
                    <div
                      className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-px h-10"
                      style={{ background: 'var(--dark-border)' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div className="flex items-center justify-center order-first lg:order-last">
            <div className="relative">
              {/* Main avatar box */}
              <div
                className="w-72 h-72 lg:w-[350px] lg:h-[350px] rounded-[30px] flex items-center justify-center text-[140px] relative overflow-hidden"
                style={{
                  background:
                    'linear-gradient(135deg, #6C63FF 0%, #00D4AA 100%)',
                  transform: 'rotate(3deg)',
                  boxShadow: 'var(--shadow-glow)',
                }}
              >
                <div
                  className="absolute inset-[3px] rounded-[27px] z-10 flex items-center justify-center"
                  style={{ background: 'var(--dark-card)' }}
                >
                  <span className="text-[100px] lg:text-[140px]">👩🏻‍💻</span>
                </div>
              </div>

              {/* Badge 1 */}
              <div
                className="float-anim absolute top-8 -right-5 flex items-center gap-3 px-4 py-3 rounded-2xl border z-10 backdrop-blur"
                style={{
                  background: 'var(--dark-card)',
                  borderColor: 'var(--dark-border)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{
                    background: 'linear-gradient(135deg, #f5576c, #ff6b6b)',
                  }}
                >
                  <FaJava size={18} />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray font-sans">
                    Backend
                  </h5>
                  <p className="text-[11px]" style={{ color: '#6b6b82' }}>
                    Java & Spring Boot
                  </p>
                </div>
              </div>

              {/* Badge 2 */}
              <div
                className="float-anim absolute top-2 -left-6 flex items-center gap-3 px-4 py-3 rounded-2xl border z-10 backdrop-blur"
                style={{
                  background: 'var(--dark-card)',
                  borderColor: 'var(--dark-border)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{
                    background: 'linear-gradient(135deg, #1E90FF, #1E98FF)',
                  }}
                >
                  <FaRobot size={18} />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray font-sans">
                    AI tools
                  </h5>
                  <p className="text-[09px]" style={{ color: '#6b6b82' }}>
                    Claude, GitLab Duo, Copilot
                  </p>
                </div>
              </div>

              {/* Badge 3 */}
              <div
                className="float-anim-2 absolute bottom-8 -left-8 flex items-center gap-3 px-4 py-3 rounded-2xl border z-10 backdrop-blur"
                style={{
                  background: 'var(--dark-card)',
                  borderColor: 'var(--dark-border)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{
                    background: 'linear-gradient(135deg, #6C63FF, #8B83FF)',
                  }}
                >
                  <FaGitAlt size={18} />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray font-sans">
                    Version Control
                  </h5>
                  <p className="text-[11px]" style={{ color: '#6b6b82' }}>
                    Git, GitLab, BitBucket
                  </p>
                </div>
              </div>

              {/* Badge 4 */}
              <div
                className="float-anim-3 absolute -bottom-3 right-5 flex items-center gap-3 px-4 py-3 rounded-2xl border z-10 backdrop-blur"
                style={{
                  background: 'var(--dark-card)',
                  borderColor: 'var(--dark-border)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-gray"
                  style={{
                    background: 'linear-gradient(135deg, #00D4AA, #00B894)',
                  }}
                >
                  <FaCloud size={18} />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-gray font-sans">
                    Cloud
                  </h5>
                  <p className="text-[11px]" style={{ color: '#6b6b82' }}>
                    AWS services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
