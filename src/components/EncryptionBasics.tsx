import { ArrowRightLeft, Users, Zap, Shield, Lock, Unlock } from 'lucide-react';

export default function EncryptionBasics() {
  return (
    <section className="scroll-mt-20">
      <div className="text-center mb-10">
        <div className="font-mono text-neon-green text-sm mb-3 tracking-wider">
          {'>'} ENCRYPTION_101.tutorial()
        </div>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-3">
          🔐 Encryption <span className="text-neon-yellow">Fundamentals</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Before diving into the levels, understand the two fundamental approaches to encryption
          that power every tool and protocol discussed in this guide.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Symmetric */}
        <div className="bg-cyber-card rounded-2xl border border-neon-blue/30 p-6 box-glow-blue relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/5 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center">
                <Lock className="w-6 h-6 text-neon-blue" />
              </div>
              <div>
                <h3 className="font-orbitron text-lg text-white font-bold">Symmetric Encryption</h3>
                <p className="text-neon-blue text-xs font-mono">ONE KEY TO RULE THEM ALL</p>
              </div>
            </div>

            {/* Visualization */}
            <div className="bg-cyber-bg/60 rounded-xl p-4 mb-4 border border-cyber-border">
              <div className="flex items-center justify-center gap-2 text-sm">
                <div className="bg-neon-green/10 border border-neon-green/30 rounded-lg px-3 py-2 text-neon-green font-mono text-xs">
                  📄 Plaintext
                </div>
                <div className="text-text-muted">+</div>
                <div className="bg-neon-yellow/10 border border-neon-yellow/30 rounded-lg px-3 py-2 text-neon-yellow font-mono text-xs">
                  🔑 Key
                </div>
                <div className="text-text-muted">→</div>
                <div className="bg-neon-red/10 border border-neon-red/30 rounded-lg px-3 py-2 text-neon-red font-mono text-xs">
                  🔒 Ciphertext
                </div>
              </div>
              <div className="text-center mt-2 text-xs text-text-muted">Same key encrypts & decrypts</div>
            </div>

            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              Uses the <strong className="text-white">same key</strong> for both encryption and decryption. 
              Like a physical padlock — whoever has the key can lock and unlock. Extremely fast, 
              making it ideal for encrypting large volumes of data (files, disks, databases).
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-neon-green" />
                <span className="text-text-secondary"><strong className="text-white">Speed:</strong> Very fast — hardware accelerated</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-neon-blue" />
                <span className="text-text-secondary"><strong className="text-white">Algorithms:</strong> AES, ChaCha20, Twofish, Blowfish</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Lock className="w-4 h-4 text-neon-yellow" />
                <span className="text-text-secondary"><strong className="text-white">Use cases:</strong> File/disk encryption, database encryption, VPNs</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <ArrowRightLeft className="w-4 h-4 text-neon-orange" />
                <span className="text-text-secondary"><strong className="text-white">Challenge:</strong> How to securely share the key?</span>
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetric */}
        <div className="bg-cyber-card rounded-2xl border border-neon-purple/30 p-6 box-glow-purple relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/5 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center">
                <Unlock className="w-6 h-6 text-neon-purple" />
              </div>
              <div>
                <h3 className="font-orbitron text-lg text-white font-bold">Asymmetric Encryption</h3>
                <p className="text-neon-purple text-xs font-mono">PUBLIC + PRIVATE KEY PAIR</p>
              </div>
            </div>

            {/* Visualization */}
            <div className="bg-cyber-bg/60 rounded-xl p-4 mb-4 border border-cyber-border">
              <div className="flex items-center justify-center gap-2 text-sm">
                <div className="bg-neon-green/10 border border-neon-green/30 rounded-lg px-3 py-2 text-neon-green font-mono text-xs">
                  📄 Plaintext
                </div>
                <div className="text-text-muted">+</div>
                <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg px-3 py-2 text-neon-cyan font-mono text-xs">
                  🔓 Public
                </div>
                <div className="text-text-muted">→</div>
                <div className="bg-neon-red/10 border border-neon-red/30 rounded-lg px-3 py-2 text-neon-red font-mono text-xs">
                  🔒 Cipher
                </div>
                <div className="text-text-muted">+</div>
                <div className="bg-neon-yellow/10 border border-neon-yellow/30 rounded-lg px-3 py-2 text-neon-yellow font-mono text-xs">
                  🔑 Private
                </div>
              </div>
              <div className="text-center mt-2 text-xs text-text-muted">Public key encrypts, private key decrypts</div>
            </div>

            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              Uses a <strong className="text-white">key pair</strong> — a public key (shared openly) and a private key 
              (kept secret). Like a mailbox — anyone can drop in a letter (public key), but only you 
              have the key to open it (private key). Slower but solves the key distribution problem.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4 text-neon-orange" />
                <span className="text-text-secondary"><strong className="text-white">Speed:</strong> Slower — computationally intensive</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-neon-purple" />
                <span className="text-text-secondary"><strong className="text-white">Algorithms:</strong> RSA, ECC (Curve25519), DSA, EdDSA</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-neon-cyan" />
                <span className="text-text-secondary"><strong className="text-white">Use cases:</strong> TLS/SSL, email (PGP/S/MIME), digital signatures</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <ArrowRightLeft className="w-4 h-4 text-neon-green" />
                <span className="text-text-secondary"><strong className="text-white">Advantage:</strong> No need to pre-share secret keys</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hybrid approach callout */}
      <div className="bg-cyber-card rounded-2xl border border-neon-green/30 p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-green/5" />
        <div className="relative flex flex-col md:flex-row items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-white/10 flex items-center justify-center shrink-0">
            <span className="text-2xl">⚡</span>
          </div>
          <div>
            <h3 className="font-orbitron text-lg text-white font-bold mb-1">
              The Real World: <span className="text-neon-green">Hybrid Encryption</span>
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              In practice, most systems use <strong className="text-white">both</strong> types together. 
              Asymmetric encryption (RSA/ECC) is used to securely exchange a symmetric key, then 
              symmetric encryption (AES) handles the actual data encryption at high speed. This is 
              how TLS/HTTPS, PGP email, VPNs, and most modern encryption systems work — combining 
              the best of both worlds: secure key exchange AND fast data encryption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
