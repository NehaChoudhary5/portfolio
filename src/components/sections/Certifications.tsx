'use client';
import Reveal from '@/components/ui/Reveal';
import {
  FaCertificate,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAws,
  FaDocker,
  FaAngular,
  FaCog,
  FaPlug,
} from 'react-icons/fa';
import { SiKubernetes, SiOpenai } from 'react-icons/si';
import { MdBusinessCenter, MdAssignment } from 'react-icons/md';
import { portfolioData } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  FaJava: <FaJava />,
  FaReact: <FaReact />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaJs: <FaJs />,
  FaAws: <FaAws />,
  SiOpenai: <SiOpenai />,
  FaDocker: <FaDocker />,
  SiKubernetes: <SiKubernetes />,
  MdBusinessCenter: <MdBusinessCenter />,
  MdAssignment: <MdAssignment />,
  FaCog: <FaCog />,
  FaPlug: <FaPlug />,
  FaAngular: <FaAngular />,
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-28"
      style={{ background: 'var(--dark-bg)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <div className="section-label inline-flex">
              <FaCertificate size={10} /> Certifications
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] gradient-text mb-4">
              Professional <span className="gradient-text">Certifications</span>
            </h2>
          </Reveal>
        </div>

        {/* Badges */}
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-3 justify-center max-w-[900px] mx-auto">
            {portfolioData.certifications.map((cert) => (
              <div
                key={cert.name}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-semibold transition-all duration-300 cursor-default hover:-translate-y-0.5"
                style={{
                  background: 'rgba(108, 99, 255, 0.08)',
                  borderColor: 'rgba(108, 99, 255, 0.35)',
                  color: '#5A52D5',
                }}
              >
                <span style={{ color: 'var(--primary)', fontSize: '16px' }}>
                  {iconMap[cert.icon] || <FaCertificate />}
                </span>
                {cert.name}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
