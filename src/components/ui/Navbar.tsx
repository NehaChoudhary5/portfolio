'use client';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.pageYOffset + 200 >= el.offsetTop) {
          currentSection = el.getAttribute('id') || 'home';
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400
        ${scrolled ? 'py-3 border-b' : 'py-5'}
      `}
      style={{
        background: scrolled ? 'rgba(245, 245, 250, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderColor: 'var(--dark-border)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-2xl font-bold text-white flex items-center gap-1"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#home');
          }}
        >
          N<span style={{ color: 'var(--primary)' }}>C</span>
          <span
            className="inline-block w-2 h-2 rounded-full ml-1 pulse-dot"
            style={{ background: 'var(--secondary)' }}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#6C63FF] bg-[rgba(108,99,255,0.15)]'
                    : 'text-[#a0a0b8] hover:text-white hover:bg-[rgba(108,99,255,0.1)]'
                }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="px-6 py-2 text-sm font-semibold text-white rounded-full transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #6C63FF 0%, #00D4AA 100%)',
              boxShadow: '0 4px 20px rgba(108, 99, 255, 0.3)',
            }}
          >
            Hire Me
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 z-[1001]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-7 h-0.5 bg-white rounded transition-all duration-300
              ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-7 h-0.5 bg-white rounded transition-all duration-300
              ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-7 h-0.5 bg-white rounded transition-all duration-300
              ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-72 z-[1000] flex flex-col gap-2 pt-24 px-8
            border-l transition-all duration-400
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{
            background: 'var(--dark-card)',
            borderColor: 'var(--dark-border)',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-5 py-3 text-sm font-medium rounded-full text-center transition-all duration-300 text-[#a0a0b8] hover:text-white hover:bg-[rgba(108,99,255,0.1)]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="mt-4 px-5 py-3 text-sm font-semibold text-white rounded-full"
            style={{
              background: 'linear-gradient(135deg, #6C63FF 0%, #00D4AA 100%)',
            }}
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
