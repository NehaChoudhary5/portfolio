'use client';
import Reveal from '@/components/ui/Reveal';
import {
  FaRocket,
  FaExternalLinkAlt,
  FaGithub,
  FaCheckCircle,
} from 'react-icons/fa';
import { portfolioData } from '@/lib/data';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28"
      style={{ background: 'var(--dark-card)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <div className="section-label inline-flex">
              <FaRocket size={10} /> Portfolio
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] gradient-text mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className="rounded-2xl border overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-[#6C63FF] flex flex-col"
                style={{
                  background: 'var(--dark-bg)',
                  borderColor: 'var(--dark-border)',
                }}
              >
                {/* Preview */}
                <div
                  className={`h-48 relative flex items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >
                  <span className="text-[60px] drop-shadow-xl">
                    {project.emoji}
                  </span>
                  <span
                    className="absolute top-4 right-4 text-xs font-mono font-semibold text-gray-900 px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(0,0,0,0.4)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: '#6b6b82' }}
                  >
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-[11px] font-mono font-medium border"
                        style={{
                          background: 'var(--primary-glow)',
                          borderColor: 'var(--dark-border)',
                          color: 'var(--primary)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {project.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-[13px]"
                        style={{ color: '#6b6b82' }}
                      >
                        <FaCheckCircle
                          size={11}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: 'var(--secondary)' }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex justify-center gap-3">
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium border transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6C63FF] hover:text-[#6C63FF]"
                      style={{
                        background:
                          'linear-gradient(135deg, #00B894 0%, #00D4AA 100%)', // subtle green gradient
                        boxShadow: '0 8px 30px rgba(0, 212, 170, 0.3)', // soft green glow
                      }}
                    >
                      <FaGithub size={11} /> Source
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
