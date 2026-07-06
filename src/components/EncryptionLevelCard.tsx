import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  Target,
  Cpu,
  Wrench,
  ShieldCheck,
  Zap,
  Lock,
  Star,
} from 'lucide-react';
import type { EncryptionLevel } from '../data/encryptionData';

type Tab = 'overview' | 'algorithms' | 'tools' | 'proscons' | 'usecases' | 'compliance';

const tabConfig: { key: Tab; label: string; icon: React.ReactNode }[] = [
  { key: 'overview', label: 'Overview', icon: <ShieldCheck className="w-4 h-4" /> },
  { key: 'algorithms', label: 'Algorithms', icon: <Cpu className="w-4 h-4" /> },
  { key: 'tools', label: 'Tools', icon: <Wrench className="w-4 h-4" /> },
  { key: 'proscons', label: 'Pros & Cons', icon: <Zap className="w-4 h-4" /> },
  { key: 'usecases', label: 'Use Cases', icon: <Target className="w-4 h-4" /> },
  { key: 'compliance', label: 'Compliance', icon: <Lock className="w-4 h-4" /> },
];

const colorMap: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  'neon-blue': { border: 'border-neon-blue/40', text: 'text-neon-blue', bg: 'bg-neon-blue', glow: 'box-glow-blue' },
  'neon-green': { border: 'border-neon-green/40', text: 'text-neon-green', bg: 'bg-neon-green', glow: 'box-glow-green' },
  'neon-purple': { border: 'border-neon-purple/40', text: 'text-neon-purple', bg: 'bg-neon-purple', glow: 'box-glow-purple' },
  'neon-pink': { border: 'border-neon-pink/40', text: 'text-neon-pink', bg: 'bg-neon-pink', glow: 'box-glow-pink' },
  'neon-orange': { border: 'border-neon-orange/40', text: 'text-neon-orange', bg: 'bg-neon-orange', glow: 'box-glow-orange' },
  'neon-cyan': { border: 'border-neon-cyan/40', text: 'text-neon-cyan', bg: 'bg-neon-cyan', glow: 'box-glow-cyan' },
  'neon-yellow': { border: 'border-neon-yellow/40', text: 'text-neon-yellow', bg: 'bg-neon-yellow', glow: 'box-glow-yellow' },
  'neon-red': { border: 'border-neon-red/40', text: 'text-neon-red', bg: 'bg-neon-red', glow: 'box-glow-pink' },
};

function DifficultyStars({ level, color }: { level: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < level ? colorMap[color]?.text || 'text-neon-blue' : 'text-gray-700'}`}
          fill={i < level ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

function XPBar({ xp, color }: { xp: number; color: string }) {
  const maxXP = 800;
  const pct = (xp / maxXP) * 100;
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full xp-bar rounded-full transition-all duration-1000"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className={`font-mono text-xs ${colorMap[color]?.text || 'text-neon-blue'}`}>
        +{xp} XP
      </span>
    </div>
  );
}

function SecurityMeter({ value, label }: { value: string; label: string }) {
  const levels: Record<string, { pct: number; color: string }> = {
    'Very Fast': { pct: 95, color: '#39ff14' },
    'Fast': { pct: 80, color: '#00d4ff' },
    'Hardware Accelerated': { pct: 98, color: '#39ff14' },
    'Hardware (Zero overhead)': { pct: 100, color: '#39ff14' },
    'Moderate': { pct: 60, color: '#ffd700' },
    'Slow': { pct: 30, color: '#ff6b35' },
    'Slower': { pct: 40, color: '#ff6b35' },
    'Very Slow (software)': { pct: 15, color: '#ff3333' },
    'Very Slow (10-1000x overhead)': { pct: 5, color: '#ff3333' },
    'Military Grade': { pct: 98, color: '#39ff14' },
    'Very High': { pct: 90, color: '#00d4ff' },
    'High': { pct: 75, color: '#00d4ff' },
    'Highest': { pct: 100, color: '#39ff14' },
    'Maximum': { pct: 100, color: '#39ff14' },
    'Theoretical Maximum': { pct: 100, color: '#a855f7' },
    'Moderate (Deprecated)': { pct: 35, color: '#ff3333' },
  };
  const cfg = levels[value] || { pct: 50, color: '#94a3b8' };

  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-text-muted">{label}</span>
        <span className="text-text-secondary">{value}</span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${cfg.pct}%`, backgroundColor: cfg.color }}
        />
      </div>
    </div>
  );
}

export default function EncryptionLevelCard({ level }: { level: EncryptionLevel; index: number }) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [expanded, setExpanded] = useState(false);
  const colors = colorMap[level.color] || colorMap['neon-blue'];

  return (
    <section
      id={level.id}
      className="scroll-mt-20"
    >
      <div
        className={`relative bg-cyber-card/80 backdrop-blur-sm rounded-2xl border ${colors.border} overflow-hidden transition-all duration-500 ${
          expanded ? colors.glow : ''
        }`}
      >
        {/* Scanline effect */}
        <div className="absolute inset-0 scanline pointer-events-none" />

        {/* Header */}
        <div
          className="relative p-6 md:p-8 cursor-pointer select-none"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Level badge + icon */}
            <div className="flex items-center gap-4 flex-1">
              <div
                className={`w-16 h-16 rounded-xl bg-cyber-bg border ${colors.border} flex items-center justify-center text-3xl shrink-0`}
              >
                {level.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-mono text-xs ${colors.text} uppercase tracking-widest`}>
                    {level.subtitle}
                  </span>
                </div>
                <h2 className="font-orbitron text-xl md:text-2xl font-bold text-white truncate">
                  {level.title}
                </h2>
                <div className="mt-2">
                  <XPBar xp={level.xpReward} color={level.color} />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-xs text-text-muted mb-1">Difficulty</div>
                <DifficultyStars level={level.difficultyLevel} color={level.color} />
              </div>
              <div className="text-center">
                <div className="text-xs text-text-muted mb-1">Impact</div>
                <DifficultyStars level={level.businessImpact} color={level.color} />
              </div>
              <button className={`w-8 h-8 rounded-lg flex items-center justify-center border ${colors.border} ${colors.text}`}>
                {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Short description always visible */}
          <p className="mt-4 text-text-secondary text-sm md:text-base leading-relaxed line-clamp-2">
            {level.description}
          </p>
        </div>

        {/* Expanded content */}
        {expanded && (
          <div className="px-6 md:px-8 pb-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-1 mb-6 bg-cyber-bg/50 rounded-xl p-1.5">
              {tabConfig.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.key
                      ? `${colors.text} bg-white/5 border border-white/10`
                      : 'text-text-muted hover:text-text-secondary hover:bg-white/3'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[300px]">
              {/* OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className={`font-orbitron text-lg ${colors.text} mb-3`}>📖 Description</h3>
                    <p className="text-text-secondary leading-relaxed">{level.description}</p>
                  </div>
                  <div>
                    <h3 className={`font-orbitron text-lg ${colors.text} mb-3`}>⚙️ How It Works</h3>
                    <div className="bg-cyber-bg/60 rounded-xl p-5 border border-cyber-border">
                      <p className="text-text-secondary leading-relaxed font-mono text-sm">{level.howItWorks}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ALGORITHMS */}
              {activeTab === 'algorithms' && (
                <div className="grid gap-4">
                  {level.algorithms.map((algo) => (
                    <div
                      key={algo.name}
                      className="bg-cyber-bg/60 rounded-xl p-5 border border-cyber-border hover:border-white/20 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-orbitron text-white font-bold">{algo.name}</h4>
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${colors.border} ${colors.text}`}>
                              {algo.type}
                            </span>
                          </div>
                          <p className="text-text-secondary text-sm mb-3">{algo.description}</p>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex justify-between bg-black/30 rounded-lg px-3 py-1.5">
                              <span className="text-text-muted">Key Size</span>
                              <span className="text-white font-mono">{algo.keySize}</span>
                            </div>
                            <div className="flex justify-between bg-black/30 rounded-lg px-3 py-1.5">
                              <span className="text-text-muted">Block Size</span>
                              <span className="text-white font-mono">{algo.blockSize}</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-48 space-y-2">
                          <SecurityMeter value={algo.speed} label="Speed" />
                          <SecurityMeter value={algo.security} label="Security" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TOOLS */}
              {activeTab === 'tools' && (
                <div className="grid md:grid-cols-2 gap-4">
                  {level.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="bg-cyber-bg/60 rounded-xl p-5 border border-cyber-border hover:border-white/20 transition-colors group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-orbitron text-white font-bold text-sm">{tool.name}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          tool.pricing.toLowerCase().includes('free')
                            ? 'bg-neon-green/10 text-neon-green border border-neon-green/30'
                            : tool.pricing.toLowerCase().includes('built-in')
                            ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/30'
                            : 'bg-neon-orange/10 text-neon-orange border border-neon-orange/30'
                        }`}>
                          {tool.pricing}
                        </span>
                      </div>
                      <div className="text-xs text-text-muted mb-2 font-mono">{tool.platform}</div>
                      <p className="text-text-secondary text-sm leading-relaxed">{tool.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* PROS & CONS */}
              {activeTab === 'proscons' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-orbitron text-neon-green text-lg mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> Advantages
                    </h3>
                    <div className="space-y-2">
                      {level.pros.map((pro, i) => (
                        <div key={i} className="flex items-start gap-2 bg-neon-green/5 rounded-lg p-3 border border-neon-green/10">
                          <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-sm">{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-orbitron text-neon-red text-lg mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5" /> Disadvantages
                    </h3>
                    <div className="space-y-2">
                      {level.cons.map((con, i) => (
                        <div key={i} className="flex items-start gap-2 bg-neon-red/5 rounded-lg p-3 border border-neon-red/10">
                          <XCircle className="w-4 h-4 text-neon-red shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-sm">{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* USE CASES */}
              {activeTab === 'usecases' && (
                <div className="grid md:grid-cols-2 gap-3">
                  {level.useCases.map((uc, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-cyber-bg/60 rounded-xl p-4 border border-cyber-border hover:border-white/20 transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colors.text} bg-white/5 border ${colors.border} shrink-0 font-orbitron text-xs font-bold`}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">{uc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* COMPLIANCE */}
              {activeTab === 'compliance' && (
                <div className="space-y-3">
                  <div className="bg-cyber-bg/60 rounded-xl p-5 border border-neon-yellow/20 mb-4">
                    <p className="text-neon-yellow text-sm font-medium mb-1">⚠️ Compliance Notice</p>
                    <p className="text-text-secondary text-sm">
                      Encryption is often a mandatory requirement — not just a best practice. Failing to encrypt
                      regulated data can result in severe fines, legal liability, and reputational damage. Always
                      consult with legal and compliance teams for your specific requirements.
                    </p>
                  </div>
                  {level.complianceRelevance.map((comp, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-cyber-bg/60 rounded-xl p-4 border border-cyber-border"
                    >
                      <ShieldCheck className={`w-5 h-5 ${colors.text} shrink-0 mt-0.5`} />
                      <span className="text-text-secondary text-sm">{comp}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
