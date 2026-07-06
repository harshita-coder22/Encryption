import { encryptionLevels } from '../data/encryptionData';

const colorStyles: Record<string, string> = {
  'neon-blue': 'border-neon-blue/40 text-neon-blue',
  'neon-green': 'border-neon-green/40 text-neon-green',
  'neon-purple': 'border-neon-purple/40 text-neon-purple',
  'neon-pink': 'border-neon-pink/40 text-neon-pink',
  'neon-orange': 'border-neon-orange/40 text-neon-orange',
  'neon-cyan': 'border-neon-cyan/40 text-neon-cyan',
  'neon-yellow': 'border-neon-yellow/40 text-neon-yellow',
  'neon-red': 'border-neon-red/40 text-neon-red',
};

export default function EncryptionRoadmap() {
  const totalXP = encryptionLevels.reduce((sum, l) => sum + l.xpReward, 0);

  return (
    <section className="relative">
      <div className="text-center mb-10">
        <div className="font-mono text-neon-green text-sm mb-3 tracking-wider">
          {'>'} ENCRYPTION_ROADMAP.display()
        </div>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-3">
          🗺️ Encryption <span className="text-neon-blue">Roadmap</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Navigate through all 8 levels of encryption. Each level builds upon the previous,
          creating a comprehensive defense-in-depth strategy for your business.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 bg-cyber-card rounded-xl px-5 py-2 border border-cyber-border">
          <span className="text-text-muted text-sm">Total XP Available:</span>
          <span className="font-orbitron text-neon-green font-bold">{totalXP} XP</span>
        </div>
      </div>

      {/* Roadmap grid */}
      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/30 via-neon-purple/30 to-neon-pink/30 hidden lg:block" />

        <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
          {encryptionLevels.map((level, i) => (
            <a
              key={level.id}
              href={`#${level.id}`}
              className={`block lg:grid lg:grid-cols-2 lg:gap-8 items-center group ${
                i % 2 === 0 ? '' : 'lg:direction-rtl'
              }`}
            >
              <div className={`${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left lg:order-2'}`}>
                <div
                  className={`cyber-card bg-cyber-card/80 rounded-xl p-4 border ${colorStyles[level.color]} inline-block w-full max-w-md ${
                    i % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{level.icon}</span>
                    <div className="flex-1 text-left">
                      <div className={`font-orbitron text-sm font-bold ${colorStyles[level.color].split(' ')[1]}`}>
                        {level.title}
                      </div>
                      <div className="text-xs text-text-muted">{level.subtitle}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xs text-neon-green">+{level.xpReward} XP</div>
                      <div className="text-xs text-text-muted">{level.algorithms.length} algos · {level.tools.length} tools</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center dot */}
              <div className={`hidden lg:flex items-center justify-center ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className={`w-4 h-4 rounded-full border-2 ${colorStyles[level.color]} bg-cyber-bg group-hover:scale-150 transition-transform absolute left-1/2 -translate-x-1/2`} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
