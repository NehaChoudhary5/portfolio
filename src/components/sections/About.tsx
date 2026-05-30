'use client';
import Reveal from '@/components/ui/Reveal';
import {
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaDownload,
} from 'react-icons/fa';
import { portfolioData } from '@/lib/data';

const { personal } = portfolioData;

const infoItems = [
  { icon: <FaMapMarkerAlt />, label: 'Location', value: personal.location },
  { icon: <FaEnvelope />, label: 'Email', value: personal.email },
  { icon: <FaPhone />, label: 'Phone', value: personal.phone },
  { icon: <FaGraduationCap />, label: 'Degree', value: personal.degree },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28"
      style={{ background: 'var(--dark-bg)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Code window */}
          <Reveal>
            <div className="relative">
              <div
                className="w-full h-[480px] rounded-3xl border flex items-center justify-center relative overflow-hidden"
                style={{
                  background: 'var(--dark-card)',
                  borderColor: 'var(--dark-border)',
                }}
              >
                <div
                  className="w-[90%] rounded-xl overflow-hidden"
                  style={{
                    background: '#f8f8ff',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  {/* Window bar */}
                  <div
                    className="flex items-center gap-2 px-4 py-3"
                    style={{ background: 'rgba(0,0,0,0.04)' }}
                  >
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  {/* Code */}
                  <div className="p-5 font-mono text-[13px] leading-8">
                    <span className="code-comment">
                      // About Neha Choudhary
                    </span>
                    <br />
                    <span className="code-keyword">const</span>{' '}
                    <span className="code-class">developer</span> = {'{'}
                    <br />
                    &nbsp;&nbsp;<span className="code-method">name</span>:{' '}
                    <span className="code-string">
                      &quot;Neha Choudhary&quot;
                    </span>
                    ,<br />
                    &nbsp;&nbsp;<span className="code-method">role</span>:{' '}
                    <span className="code-string">
                      &quot;Senior Software Developer&quot;
                    </span>
                    ,<br />
                    &nbsp;&nbsp;<span className="code-method">
                      experience
                    </span>: <span className="code-number">7</span>+,
                    <br />
                    &nbsp;&nbsp;<span className="code-method">
                      location
                    </span>:{' '}
                    <span className="code-string">&quot;India&quot;</span>,
                    <br />
                    &nbsp;&nbsp;<span className="code-method">skills</span>: [
                    <span className="code-string">&quot;Java&quot;</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-string">&quot;SpringBoot&quot;</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-string">&quot;Gradle&quot;</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-string">&quot;AWS&quot;</span>],
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-string">
                      &quot;Microservices&quot;
                    </span>
                    ],
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="code-string">&quot;GitLab&quot;</span>],
                    <br />
                    {'}'};
                  </div>
                </div>
              </div>
              {/* Exp badge */}
              <div
                className="absolute -bottom-5 -right-5 w-[110px] h-[110px] rounded-full flex flex-col items-center justify-center text-white"
                style={{
                  background:
                    'linear-gradient(135deg, #6C63FF 0%, #00D4AA 100%)',
                  boxShadow: 'var(--shadow-glow)',
                }}
              >
                <span className="text-3xl font-extrabold font-display leading-none">
                  7+
                </span>
                <span className="text-[10px] text-white/80 uppercase tracking-wide text-center leading-tight mt-1">
                  Years
                  <br />
                  Exp.
                </span>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <div className="section-label">
                <FaUser size={10} /> About Me
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-[clamp(28px,4vw,40px)] gradient-text mb-4 leading-tight">
                {' '}
                Software Developer &<br />
                <span className="gradient-text">Backend Developer</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                className="text-[17px] mb-4 leading-relaxed"
                style={{ color: '#6b6b82' }}
              >
                {personal.about1}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p
                className="text-[17px] mb-8 leading-relaxed"
                style={{ color: '#6b6b82' }}
              >
                {personal.about2}
              </p>
            </Reveal>

            {/* Buttons */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <a
                  href={personal.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      'linear-gradient(135deg, #00B894 0%, #00D4AA 100%)', // subtle green gradient
                    boxShadow: '0 8px 30px rgba(0, 212, 170, 0.3)', // soft green glow
                  }}
                >
                  <FaDownload /> Download Resume
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      'linear-gradient(135deg, #00B894 0%, #00D4AA 100%)', // subtle green gradient
                    boxShadow: '0 8px 30px rgba(0, 212, 170, 0.3)', // soft green glow
                  }}
                >
                  <FaEnvelope /> Contact Me
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
