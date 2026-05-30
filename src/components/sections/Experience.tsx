'use client';
import Reveal from '@/components/ui/Reveal';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { portfolioData } from '@/lib/data';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28"
      style={{ background: 'var(--dark-bg)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <div className="section-label inline-flex">
              <FaBriefcase size={10} /> Career Path
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] gradient-text mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="text-[17px] max-w-xl mx-auto"
              style={{ color: '#6b6b82' }}
            >
              My professional journey building enterprise software applications.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative max-w-[900px] mx-auto timeline-line">
          {portfolioData.experience.map((exp, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="relative pl-[90px] mb-12 last:mb-0">
                {/* Dot */}
                <div
                  className="absolute left-[30px] top-6 w-5 h-5 rounded-full border-[3px] z-10"
                  style={{
                    background: 'var(--dark-bg)',
                    borderColor: 'var(--primary)',
                  }}
                >
                  <div
                    className="absolute inset-1 rounded-full"
                    style={{ background: 'var(--primary)' }}
                  />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-8 border transition-all duration-400 hover:border-[#6C63FF] hover:translate-x-1"
                  style={{
                    background: 'var(--dark-card)',
                    borderColor: 'var(--dark-border)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-gray-900">
                        {exp.company}
                      </h3>
                      <p
                        className="text-sm font-semibold mt-1"
                        style={{ color: 'var(--secondary)' }}
                      >
                        {exp.role}
                      </p>
                      <p
                        className="text-sm mt-1 flex items-center gap-1.5"
                        style={{ color: '#6b6b82' }}
                      >
                        <FaMapMarkerAlt size={11} /> {exp.location}
                      </p>
                    </div>
                    <span
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold"
                      style={{
                        background: 'var(--primary-glow)',
                        color: 'var(--primary)',
                      }}
                    >
                      <FaCalendarAlt size={10} /> {exp.date}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: '#6b6b82' }}
                      >
                        <span
                          className="text-base mt-[-2px] flex-shrink-0"
                          style={{ color: 'var(--primary)' }}
                        >
                          ▹
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
