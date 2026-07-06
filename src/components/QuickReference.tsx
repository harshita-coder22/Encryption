import { encryptionLevels } from '../data/encryptionData';

export default function QuickReference() {
  return (
    <section className="scroll-mt-20">
      <div className="text-center mb-10">
        <div className="font-mono text-neon-green text-sm mb-3 tracking-wider">
          {'>'} CHEAT_SHEET.load()
        </div>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-3">
          📋 Quick Reference <span className="text-neon-cyan">Cheat Sheet</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          A bird's-eye view of all encryption levels — what to use, when, and the best tools for each scenario.
        </p>
      </div>

      {/* Responsive table */}
      <div className="overflow-x-auto rounded-2xl border border-cyber-border">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="bg-cyber-bg/80">
              <th className="px-4 py-3 text-left font-orbitron text-xs text-text-muted uppercase tracking-wider">Level</th>
              <th className="px-4 py-3 text-left font-orbitron text-xs text-text-muted uppercase tracking-wider">What It Protects</th>
              <th className="px-4 py-3 text-left font-orbitron text-xs text-text-muted uppercase tracking-wider">Best Algorithm</th>
              <th className="px-4 py-3 text-left font-orbitron text-xs text-text-muted uppercase tracking-wider">Top Tool</th>
              <th className="px-4 py-3 text-center font-orbitron text-xs text-text-muted uppercase tracking-wider">Difficulty</th>
              <th className="px-4 py-3 text-left font-orbitron text-xs text-text-muted uppercase tracking-wider">Key Compliance</th>
            </tr>
          </thead>
          <tbody>
            {encryptionLevels.map((level, i) => (
              <tr
                key={level.id}
                className={`border-t border-cyber-border/50 hover:bg-white/3 transition-colors ${
                  i % 2 === 0 ? 'bg-cyber-card/30' : 'bg-cyber-card/10'
                }`}
              >
                <td className="px-4 py-3">
                  <a href={`#${level.id}`} className="flex items-center gap-2 hover:text-neon-blue transition-colors">
                    <span className="text-xl">{level.icon}</span>
                    <span className="font-orbitron text-sm text-white font-bold">{level.title}</span>
                  </a>
                </td>
                <td className="px-4 py-3 text-text-secondary text-sm">
                  {level.id === 'file' && 'Individual sensitive documents'}
                  {level.id === 'folder' && 'Groups of related files & directories'}
                  {level.id === 'drive' && 'Entire disk including OS & temp files'}
                  {level.id === 'pc' && 'Complete endpoint with multi-layer defense'}
                  {level.id === 'database' && 'Structured data in RDBMS & NoSQL'}
                  {level.id === 'email' && 'Email messages and attachments'}
                  {level.id === 'network' && 'Data traveling across networks'}
                  {level.id === 'cloud' && 'Cloud storage, SaaS apps & APIs'}
                </td>
                <td className="px-4 py-3">
                  <span className="font-mono text-xs text-neon-green bg-neon-green/5 px-2 py-1 rounded-lg border border-neon-green/20">
                    {level.algorithms[0]?.name || 'AES-256'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm text-white">{level.tools[0]?.name || '—'}</span>
                  <div className="text-xs text-text-muted">{level.tools[0]?.pricing || ''}</div>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`font-orbitron text-sm font-bold ${
                    level.difficultyLevel <= 2 ? 'text-neon-green' :
                    level.difficultyLevel <= 3 ? 'text-neon-yellow' : 'text-neon-red'
                  }`}>
                    {'★'.repeat(level.difficultyLevel)}{'☆'.repeat(5 - level.difficultyLevel)}
                  </span>
                </td>
                <td className="px-4 py-3 text-text-secondary text-xs">
                  {level.complianceRelevance[0]?.split('—')[0]?.trim() || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
