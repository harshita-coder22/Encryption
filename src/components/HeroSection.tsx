import { useState, useEffect } from 'react';
import { Shield, Lock, ChevronDown } from 'lucide-react';

const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*(){}[]|;:,.<>?/~`";

function MatrixColumn({ delay, speed, left }: { delay: number; speed: number; left: string }) {
  const [chars, setChars] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setChars(prev => {
          const newChar = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          const next = prev + newChar;
          return next.length > 30 ? next.slice(1) : next;
        });
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay, speed]);

  return (
    <div
      className="absolute top-0 font-mono text-[10px] text-neon-green/30 whitespace-pre leading-3 pointer-events-none"
      style={{ left, animationDelay: `${delay}ms` }}
    >
      {chars.split('').map((c, i) => (
        <div key={i} style={{ opacity: i === chars.length - 1 ? 1 : 0.3 + (i / chars.length) * 0.5 }}>
          {c}
        </div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = '> ENCRYPTION_GUIDE.init()';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const matrixColumns = Array.from({ length: 25 }, (_, i) => ({
    delay: Math.random() * 3000,
    speed: 80 + Math.random() * 120,
    left: `${(i / 25) * 100}%`,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg via-cyber-bg to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Matrix rain */}
      <div className="absolute inset-0 overflow-hidden">
        {matrixColumns.map((col, i) => (
          <MatrixColumn key={i} {...col} />
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[80px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Shield icon with glow */}
        <div className="mb-8 animate-float">
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-2xl bg-cyber-card border border-cyber-border box-glow-blue">
            <Shield className="w-14 h-14 text-neon-blue" />
          </div>
        </div>

        {/* Terminal line */}
        <div className="font-mono text-neon-green text-sm md:text-base mb-6 h-6">
          <span>{typedText}</span>
          <span className="inline-block w-2 h-4 bg-neon-green ml-1 animate-pulse-neon" />
        </div>

        {/* Main title */}
        <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-wider">
          <span className="text-white">CRYPT</span>
          <span className="text-neon-blue glow-blue">ARENA</span>
        </h1>

        <p className="font-orbitron text-lg md:text-xl text-neon-purple glow-purple mb-8 tracking-widest uppercase">
          The Ultimate Encryption Guide for Business
        </p>

        <p className="font-rajdhani text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
          Master every level of encryption — from individual files to entire cloud infrastructures. 
          Understand the algorithms, tools, use cases, and compliance requirements to 
          <span className="text-neon-green"> fortify your business</span> in the digital battleground.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {[
            { label: 'Encryption Levels', value: '8', icon: '🛡️' },
            { label: 'Algorithms', value: '20+', icon: '🔑' },
            { label: 'Tools Reviewed', value: '35+', icon: '🔧' },
            { label: 'Use Cases', value: '48+', icon: '💼' },
          ].map((stat) => (
            <div key={stat.label} className="cyber-card bg-cyber-card/80 backdrop-blur-sm rounded-xl px-5 py-3 border border-cyber-border">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="font-orbitron text-2xl text-neon-blue font-bold">{stat.value}</div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#levels"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/50 rounded-xl font-orbitron text-neon-blue hover:border-neon-blue hover:box-glow-blue transition-all duration-300 group"
        >
          <Lock className="w-5 h-5" />
          <span>BEGIN YOUR QUEST</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-bg to-transparent" />
    </section>
  );
}
