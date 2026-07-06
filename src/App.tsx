import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import NavigationBar from './components/NavigationBar';
import EncryptionBasics from './components/EncryptionBasics';
import EncryptionRoadmap from './components/EncryptionRoadmap';
import EncryptionLevelCard from './components/EncryptionLevelCard';
import AlgorithmComparison from './components/AlgorithmComparison';
import QuickReference from './components/QuickReference';
import KnowledgeQuiz from './components/KnowledgeQuiz';
import Footer from './components/Footer';
import { encryptionLevels } from './data/encryptionData';

function ParticleField() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-neon-blue/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `particle-float ${10 + Math.random() * 20}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        ...encryptionLevels.map((l) => l.id),
        'algorithms',
      ];

      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-bg text-text-primary relative">
      <ParticleField />
      <NavigationBar activeSection={activeSection} />

      {/* Hero */}
      <HeroSection />

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Encryption Fundamentals */}
        <div className="py-16">
          <EncryptionBasics />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 py-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
          <span className="font-orbitron text-xs text-text-muted tracking-widest">LEVELS</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
        </div>

        {/* Roadmap */}
        <div className="py-12">
          <EncryptionRoadmap />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 py-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
          <span className="font-orbitron text-xs text-text-muted tracking-widest">DEEP DIVE</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
        </div>

        {/* Encryption Level Cards */}
        <div id="levels" className="py-12 space-y-6 scroll-mt-20">
          {encryptionLevels.map((level, index) => (
            <EncryptionLevelCard key={level.id} level={level} index={index} />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 py-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />
          <span className="font-orbitron text-xs text-text-muted tracking-widest">COMPARE</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />
        </div>

        {/* Algorithm Comparison */}
        <div className="py-12">
          <AlgorithmComparison />
        </div>

        {/* Quick Reference */}
        <div className="py-12">
          <QuickReference />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 py-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
          <span className="font-orbitron text-xs text-text-muted tracking-widest">CHALLENGE</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
        </div>

        {/* Knowledge Quiz */}
        <div className="py-12">
          <KnowledgeQuiz />
        </div>

        {/* Final CTA */}
        <div className="py-16">
          <div className="bg-gradient-to-r from-cyber-card to-cyber-dark rounded-2xl border border-cyber-border p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-neon-blue/5 rounded-full blur-[80px]" />
            <div className="relative">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to <span className="text-neon-green glow-green">Encrypt Everything</span>?
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
                Encryption is no longer optional — it's a business imperative. Start with full disk 
                encryption on all devices, then progressively add database, email, and cloud encryption 
                layers. Remember: the cost of encryption is always less than the cost of a data breach.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="bg-cyber-bg/60 rounded-xl p-4 border border-neon-green/20">
                  <div className="text-2xl mb-2">🛡️</div>
                  <h3 className="font-orbitron text-sm text-neon-green mb-1">Step 1</h3>
                  <p className="text-text-secondary text-xs">Enable FDE on all laptops and devices (BitLocker / FileVault)</p>
                </div>
                <div className="bg-cyber-bg/60 rounded-xl p-4 border border-neon-blue/20">
                  <div className="text-2xl mb-2">🗄️</div>
                  <h3 className="font-orbitron text-sm text-neon-blue mb-1">Step 2</h3>
                  <p className="text-text-secondary text-xs">Enable TDE on all databases & enforce TLS on all network connections</p>
                </div>
                <div className="bg-cyber-bg/60 rounded-xl p-4 border border-neon-purple/20">
                  <div className="text-2xl mb-2">☁️</div>
                  <h3 className="font-orbitron text-sm text-neon-purple mb-1">Step 3</h3>
                  <p className="text-text-secondary text-xs">Implement cloud KMS with BYOK and deploy email encryption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
