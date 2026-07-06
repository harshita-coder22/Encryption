import { Shield, Lock, Key, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-cyber-border bg-cyber-dark/80">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-neon-blue" />
              <span className="font-orbitron text-xl font-bold">
                <span className="text-white">CRYPT</span>
                <span className="text-neon-blue">ARENA</span>
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Your comprehensive gaming-style guide to understanding encryption
              at every level. From individual files to entire cloud infrastructures,
              master the art of data protection for your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-orbitron text-sm text-white mb-4 uppercase tracking-wider">Encryption Levels</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: '📄', label: 'File Encryption', id: 'file' },
                { icon: '📁', label: 'Folder Encryption', id: 'folder' },
                { icon: '💿', label: 'Drive Encryption', id: 'drive' },
                { icon: '🖥️', label: 'PC Encryption', id: 'pc' },
                { icon: '🗄️', label: 'Database Encryption', id: 'database' },
                { icon: '📧', label: 'Email Encryption', id: 'email' },
                { icon: '🌐', label: 'Network Encryption', id: 'network' },
                { icon: '☁️', label: 'Cloud Encryption', id: 'cloud' },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-text-muted hover:text-neon-blue text-sm transition-colors flex items-center gap-1.5"
                >
                  <span>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Key Principles */}
          <div>
            <h3 className="font-orbitron text-sm text-white mb-4 uppercase tracking-wider">Key Principles</h3>
            <div className="space-y-3">
              {[
                { icon: <Lock className="w-4 h-4" />, text: 'Encrypt data at rest AND in transit' },
                { icon: <Key className="w-4 h-4" />, text: 'Never store encryption keys with encrypted data' },
                { icon: <Shield className="w-4 h-4" />, text: 'Use AES-256 as your baseline standard' },
                { icon: <Globe className="w-4 h-4" />, text: 'Comply with GDPR, HIPAA, PCI DSS requirements' },
              ].map((principle, i) => (
                <div key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-neon-green mt-0.5">{principle.icon}</span>
                  {principle.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cyber-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            CryptArena — An educational resource about encryption for businesses. Content is for informational purposes only.
          </p>
          <div className="flex items-center gap-1 text-text-muted text-xs">
            <span className="font-mono text-neon-green">{'>'}</span>
            <span>Built with</span>
            <span className="text-neon-red">♥</span>
            <span>for security-minded businesses</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
