import { useState } from 'react';
import { algorithmComparison } from '../data/encryptionData';

type SortKey = 'name' | 'speed' | 'security' | 'adoption';

function BarChart({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = (value / max) * 100;
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-3 bg-gray-800/80 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-xs font-mono text-text-secondary w-8 text-right">{value}</span>
    </div>
  );
}

export default function AlgorithmComparison() {
  const [sortKey, setSortKey] = useState<SortKey>('security');
  const [filterType, setFilterType] = useState<string>('all');

  const filtered = algorithmComparison.filter(
    (a) => filterType === 'all' || a.type === filterType
  );
  const sorted = [...filtered].sort((a, b) => {
    if (sortKey === 'name') return a.name.localeCompare(b.name);
    return b[sortKey] - a[sortKey];
  });

  return (
    <section id="algorithms" className="scroll-mt-20">
      <div className="text-center mb-10">
        <div className="font-mono text-neon-green text-sm mb-3 tracking-wider">
          {'>'} ALGORITHM_COMPARISON.render()
        </div>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-3">
          🧬 Algorithm <span className="text-neon-purple">Showdown</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Compare the speed, security, and adoption of the most important encryption algorithms
          used across all levels of business encryption.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-2 bg-cyber-card rounded-xl p-1 border border-cyber-border">
          <span className="text-text-muted text-xs px-2">Sort:</span>
          {(['security', 'speed', 'adoption', 'name'] as SortKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setSortKey(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                sortKey === key
                  ? 'bg-neon-purple/15 text-neon-purple border border-neon-purple/30'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-cyber-card rounded-xl p-1 border border-cyber-border">
          <span className="text-text-muted text-xs px-2">Type:</span>
          {['all', 'Symmetric', 'Asymmetric'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                filterType === type
                  ? 'bg-neon-blue/15 text-neon-blue border border-neon-blue/30'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-cyber-card rounded-2xl border border-cyber-border overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-12 gap-2 px-4 md:px-6 py-3 bg-cyber-bg/80 border-b border-cyber-border text-xs font-orbitron text-text-muted uppercase tracking-wider">
          <div className="col-span-3">Algorithm</div>
          <div className="col-span-1 hidden md:block">Type</div>
          <div className="col-span-1 hidden md:block text-center">Year</div>
          <div className="col-span-3 md:col-span-2">Speed</div>
          <div className="col-span-3 md:col-span-2">Security</div>
          <div className="col-span-3 md:col-span-2">Adoption</div>
          <div className="col-span-3 md:col-span-1 text-center">Score</div>
        </div>

        {/* Rows */}
        {sorted.map((algo, i) => {
          const avgScore = Math.round((algo.speed + algo.security + algo.adoption) / 3);
          const scoreColor =
            avgScore >= 80 ? '#39ff14' : avgScore >= 60 ? '#00d4ff' : avgScore >= 40 ? '#ffd700' : '#ff3333';

          return (
            <div
              key={algo.name}
              className={`grid grid-cols-12 gap-2 px-4 md:px-6 py-4 items-center transition-colors hover:bg-white/3 ${
                i !== sorted.length - 1 ? 'border-b border-cyber-border/50' : ''
              }`}
            >
              <div className="col-span-3">
                <div className="font-orbitron text-white text-sm font-bold">{algo.name}</div>
                <div className="text-xs text-text-muted md:hidden">{algo.type} · {algo.year}</div>
              </div>
              <div className="col-span-1 hidden md:block">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border ${
                    algo.type === 'Symmetric'
                      ? 'border-neon-blue/30 text-neon-blue bg-neon-blue/5'
                      : 'border-neon-purple/30 text-neon-purple bg-neon-purple/5'
                  }`}
                >
                  {algo.type}
                </span>
              </div>
              <div className="col-span-1 hidden md:block text-center text-xs text-text-muted font-mono">
                {algo.year}
              </div>
              <div className="col-span-3 md:col-span-2">
                <BarChart value={algo.speed} max={100} color="#39ff14" />
              </div>
              <div className="col-span-3 md:col-span-2">
                <BarChart value={algo.security} max={100} color="#00d4ff" />
              </div>
              <div className="col-span-3 md:col-span-2">
                <BarChart value={algo.adoption} max={100} color="#a855f7" />
              </div>
              <div className="col-span-3 md:col-span-1 text-center">
                <span
                  className="font-orbitron text-sm font-bold"
                  style={{ color: scoreColor }}
                >
                  {avgScore}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 mt-4 justify-center">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <div className="w-3 h-3 rounded-full bg-neon-green" />
          Speed (higher = faster)
        </div>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <div className="w-3 h-3 rounded-full bg-neon-blue" />
          Security (higher = more secure)
        </div>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <div className="w-3 h-3 rounded-full bg-neon-purple" />
          Industry Adoption (higher = more widely used)
        </div>
      </div>
    </section>
  );
}
