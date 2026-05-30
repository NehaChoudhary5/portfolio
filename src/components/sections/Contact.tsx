'use client';
import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
} from 'react-icons/fa';
import { portfolioData } from '@/lib/data';

const { personal } = portfolioData;

interface Props {
  onSuccess: () => void;
}

export default function Contact({ onSuccess }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const socials = [
    { href: personal.linkedin, icon: <FaLinkedinIn />, label: 'LinkedIn' },
    { href: personal.github, icon: <FaGithub />, label: 'GitHub' },
    { href: `mailto:${personal.email}`, icon: <FaEnvelope />, label: 'Email' },
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: personal.email },
    { icon: <FaPhone />, label: 'Phone', value: personal.phone },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: personal.location },
  ];

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ background: 'var(--dark-card)' }}
    >
      {/* Background glows */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full -top-24 -left-24 pointer-events-none"
        style={{
          background: 'var(--primary)',
          filter: 'blur(120px)',
          opacity: 0.08,
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full -bottom-24 -right-24 pointer-events-none"
        style={{
          background: 'var(--secondary)',
          filter: 'blur(120px)',
          opacity: 0.08,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <Reveal>
              <div className="section-label inline-flex">
                <FaEnvelope size={10} /> Contact
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-[clamp(28px,4vw,40px)] gradient-text mb-4 leading-tight">
                Let&apos;s Work
                <br />
                <span className="gradient-text">Together</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                className="text-base mb-10 leading-relaxed"
                style={{ color: '#6b6b82' }}
              >
                I&apos;m currently open to new opportunities. Whether you have a
                project in mind, a job opportunity, or just want to connect —
                feel free to reach out!
              </p>
            </Reveal>

            {/* Contact info */}
            <div className="space-y-5 mb-10">
              {contactInfo.map((item) => (
                <Reveal key={item.label} delay={0.2}>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg border flex-shrink-0"
                      style={{
                        background: 'var(--primary-glow)',
                        borderColor: 'var(--dark-border)',
                        color: 'var(--primary)',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                        {item.label}
                      </h4>
                      <p className="text-sm" style={{ color: '#6b6b82' }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Socials */}
            <Reveal delay={0.3}>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg border transition-all duration-300 hover:-translate-y-1 hover:bg-[#6C63FF] hover:border-[#6C63FF] hover:text-gray-900"
                    style={{
                      background: '#ffffff',
                      borderColor: '#d1d5db',
                      color: '#374151',
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal delay={0.2}>
            <div
              className="rounded-2xl p-10 border"
              style={{
                background: 'var(--dark-bg)',
                borderColor: 'var(--dark-border)',
              }}
            >
              <h3 className="font-display font-bold text-2xl text-gray-700 mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: '#a0a0b8' }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-gray-900 border outline-none transition-all duration-300 focus:border-[#6C63FF]"
                      style={{
                        background: 'var(--dark-card)',
                        borderColor: 'var(--dark-border)',
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: '#a0a0b8' }}
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder={personal.email}
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-gray-900 border outline-none transition-all duration-300 focus:border-[#6C63FF]"
                      style={{
                        background: 'var(--dark-card)',
                        borderColor: 'var(--dark-border)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: '#a0a0b8' }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Job Opportunity / Project Collaboration"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-gray-900 border outline-none transition-all duration-300 focus:border-[#6C63FF]"
                    style={{
                      background: 'var(--dark-card)',
                      borderColor: 'var(--dark-border)',
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: '#a0a0b8' }}
                  >
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Hello, I'd like to discuss..."
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl text-sm text-gray-900 border outline-none transition-all duration-300 focus:border-[#6C63FF] resize-none"
                    style={{
                      background: 'var(--dark-card)',
                      borderColor: 'var(--dark-border)',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-gray-900 font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background:
                      'linear-gradient(135deg, #6C63FF 0%, #00D4AA 100%)',
                    boxShadow: '0 4px 20px rgba(108, 99, 255, 0.3)',
                  }}
                >
                  <FaPaperPlane size={13} /> Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
