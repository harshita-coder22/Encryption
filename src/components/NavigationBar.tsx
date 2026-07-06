import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { encryptionLevels } from '../data/encryptionData';

export default function NavigationBar({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-bg/95 backdrop-blur-lg border-b border-cyber-border shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Shield className="w-6 h-6 text-neon-blue group-hover:text-neon-purple transition-colors" />
          <span className="font-orbitron text-lg font-bold">
            <span className="text-white">CRYPT</span>
            <span className="text-neon-blue">ARENA</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {encryptionLevels.map((level) => (
            <a
              key={level.id}
              href={`#${level.id}`}
              className={`px-3 py-1.5 rounded-lg text-sm font-rajdhani font-medium transition-all duration-200 ${
                activeSection === level.id
                  ? 'bg-neon-blue/15 text-neon-blue border border-neon-blue/30'
                  : 'text-text-secondary hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="mr-1">{level.icon}</span>
              {level.title.split(' ')[0]}
            </a>
          ))}
          <a
            href="#algorithms"
            className={`px-3 py-1.5 rounded-lg text-sm font-rajdhani font-medium transition-all duration-200 ${
              activeSection === 'algorithms'
                ? 'bg-neon-blue/15 text-neon-blue border border-neon-blue/30'
                : 'text-text-secondary hover:text-white hover:bg-white/5'
            }`}
          >
            🧬 Algorithms
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-text-secondary hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-cyber-dark/98 backdrop-blur-lg border-b border-cyber-border">
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 gap-2">
            {encryptionLevels.map((level) => (
              <a
                key={level.id}
                href={`#${level.id}`}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-rajdhani font-medium transition-all ${
                  activeSection === level.id
                    ? 'bg-neon-blue/15 text-neon-blue border border-neon-blue/30'
                    : 'text-text-secondary hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span className="mr-1">{level.icon}</span>
                {level.title}
              </a>
            ))}
            <a
              href="#algorithms"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-rajdhani font-medium text-text-secondary hover:text-white hover:bg-white/5"
            >
              🧬 Algorithm Comparison
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
