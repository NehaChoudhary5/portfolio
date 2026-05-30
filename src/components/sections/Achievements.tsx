'use client';
import Reveal from '@/components/ui/Reveal';
import { FaTrophy, FaChartLine } from 'react-icons/fa';
import { portfolioData } from '@/lib/data';

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-28"
      style={{ background: 'var(--dark-card)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <div className="section-label inline-flex">
              <FaTrophy size={10} /> Achievements
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] gradient-text mb-4">
              Key <span className="gradient-text">Accomplishments</span>
            </h2>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {portfolioData.achievements.map((item, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div
                className="achieve-left-bar relative rounded-2xl p-8 border overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:border-[#6C63FF]"
                style={{
                  background: 'var(--dark-bg)',
                  borderColor: 'var(--dark-border)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{
                    background:
                      i === 0
                        ? 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,170,0.2))'
                        : 'linear-gradient(135deg, rgba(255,107,107,0.2), rgba(255,165,2,0.2))',
                    color: i === 0 ? 'var(--primary)' : 'var(--accent)',
                  }}
                >
                  {item.icon}
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: '#6b6b82' }}
                >
                  {item.description}
                </p>
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
                  style={{
                    background: 'var(--primary-glow)',
                    color: 'var(--primary)',
                  }}
                >
                  <FaChartLine size={11} /> {item.stat}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
