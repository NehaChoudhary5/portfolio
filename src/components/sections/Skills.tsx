'use client';
import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { portfolioData } from '@/lib/data';
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaBootstrap,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaCode,
  FaTools,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiSpring,
  SiMysql,
  SiFlutter,
  SiKubernetes,
  SiPostman,
} from 'react-icons/si';
import { MdSecurity, MdBusinessCenter } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import { RiKey2Line } from 'react-icons/ri';

const iconMap: Record<string, React.ReactNode> = {
  FaJava: <FaJava />,
  SiSpringboot: <SiSpringboot />,
  SiSpring: <SiSpring />,
  MdSecurity: <MdSecurity />,
  TbApi: <TbApi />,
  RiKey2Line: <RiKey2Line />,
  SiMysql: <SiMysql />,
  MdBusinessCenter: <MdBusinessCenter />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaJs: <FaJs />,
  FaReact: <FaReact />,
  FaAngular: <FaAngular />,
  FaBootstrap: <FaBootstrap />,
  SiFlutter: <SiFlutter />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiKubernetes: <SiKubernetes />,
  FaGitAlt: <FaGitAlt />,
  SiPostman: <SiPostman />,
  FaLinux: <FaLinux />,
  FaTools: <FaTools />,
};

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'tools', label: 'Tools & Cloud' },
];

export default function Skills() {
  const [active, setActive] = useState('all');

  const filtered = portfolioData.skills.filter(
    (s) => active === 'all' || s.category === active
  );

  return (
    <section
      id="skills"
      className="py-28"
      style={{ background: 'var(--dark-card)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <div className="section-label inline-flex">
              <FaCode size={10} /> Tech Stack
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] text-gray-900 mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </Reveal>
        </div>

        {/* Tabs */}
        <Reveal delay={0.2}>
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-300"
                style={{
                  background:
                    active === tab.id
                      ? 'var(--primary-glow)'
                      : 'var(--dark-bg)',
                  borderColor:
                    active === tab.id ? 'var(--primary)' : 'var(--dark-border)',
                  color: active === tab.id ? 'var(--primary)' : '#a0a0b8',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
          {filtered.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.04}>
              <div
                className="skill-top-border relative rounded-2xl p-6 text-center border cursor-pointer
                  transition-all duration-400 hover:-translate-y-2 hover:border-[#6C63FF] group overflow-hidden"
                style={{
                  background: 'var(--dark-bg)',
                  borderColor: 'var(--dark-border)',
                }}
              >
                <div className="text-[34px] mb-3 flex justify-center gradient-text">
                  {iconMap[skill.icon] || <FaCode />}
                </div>
                <h4 className="text-[13px] font-semibold text-gray-800 leading-tight mb-1">
                  {' '}
                  {skill.name}
                </h4>
                <p
                  className="text-[11px] font-medium"
                  style={{ color: 'var(--secondary)' }}
                >
                  {skill.level}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
