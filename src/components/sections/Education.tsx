'use client';
import Reveal from '@/components/ui/Reveal';
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
  FaUniversity,
} from 'react-icons/fa';
import { portfolioData } from '@/lib/data';

const { education } = portfolioData;

export default function Education() {
  return (
    <section
      id="education"
      className="py-28"
      style={{ background: 'var(--dark-bg)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <div className="section-label inline-flex">
              <FaGraduationCap size={10} /> Education
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] gradient-text mb-4">
              Academic <span className="gradient-text">Background</span>
            </h2>
          </Reveal>
        </div>

        {/* Edu card */}
        <Reveal delay={0.15}>
          <div
            className="max-w-[800px] mx-auto rounded-2xl p-10 border flex flex-col sm:flex-row gap-8 items-center transition-all duration-400 hover:border-[#6C63FF]"
            style={{
              background: 'var(--dark-card)',
              borderColor: 'var(--dark-border)',
            }}
          >
            {/* Icon */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl text-gray-900 flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #00D4AA 100%)',
              }}
            >
              <FaUniversity />
            </div>

            {/* Content */}
            <div className="text-center sm:text-left">
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-1">
                {education.university}
              </h3>
              <p
                className="font-semibold mb-1"
                style={{ color: 'var(--primary)' }}
              >
                {education.degree}
              </p>
              <p className="text-sm mb-3" style={{ color: '#a0a0b8' }}>
                {education.fullName}
              </p>

              <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
                <span
                  className="text-sm flex items-center gap-1.5"
                  style={{ color: '#6b6b82' }}
                >
                  <FaCalendarAlt
                    size={11}
                    style={{ color: 'var(--primary)' }}
                  />{' '}
                  {education.duration}
                </span>
                <span
                  className="text-sm flex items-center gap-1.5"
                  style={{ color: '#6b6b82' }}
                >
                  <FaMapMarkerAlt
                    size={11}
                    style={{ color: 'var(--primary)' }}
                  />{' '}
                  {education.location}
                </span>
              </div>

              <div
                className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full text-sm font-semibold border"
                style={{
                  background: 'rgba(0,212,170,0.1)',
                  borderColor: 'rgba(0,212,170,0.2)',
                  color: 'var(--secondary)',
                }}
              >
                <FaStar size={13} /> CGPA: {education.cgpa}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Coursework tags */}
        <Reveal delay={0.25}>
          <div className="flex flex-wrap gap-3 justify-center max-w-[800px] mx-auto mt-12">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="px-5 py-2 rounded-full text-sm border transition-all duration-300 cursor-default hover:border-[#6C63FF] hover:text-[#6C63FF] hover:bg-[rgba(108,99,255,0.1)]"
                style={{
                  background: 'var(--dark-card)',
                  borderColor: 'var(--dark-border)',
                  color: '#6b6b82',
                }}
              >
                {course}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
