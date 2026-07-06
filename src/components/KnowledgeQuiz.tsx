import { useState } from 'react';
import { Trophy, CheckCircle2, XCircle, RotateCcw, Zap } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    question: "Which encryption algorithm is the gold standard for symmetric encryption, adopted by the U.S. government in 2001?",
    options: ["Blowfish", "AES (Rijndael)", "Twofish", "3DES"],
    correct: 1,
    explanation: "AES (Advanced Encryption Standard), originally called Rijndael, was selected as the U.S. government encryption standard in 2001 and is now the most widely used symmetric encryption algorithm worldwide."
  },
  {
    question: "What does TDE stand for in database encryption?",
    options: ["Total Data Encoding", "Transparent Data Encryption", "Triple DES Encryption", "Tactical Data Enclosure"],
    correct: 1,
    explanation: "Transparent Data Encryption (TDE) encrypts database files at rest without requiring application changes. It's supported by SQL Server, Oracle, MySQL, and other major databases."
  },
  {
    question: "Which of the following is NOT a full disk encryption tool?",
    options: ["BitLocker", "FileVault", "VeraCrypt", "ProtonMail"],
    correct: 3,
    explanation: "ProtonMail is an end-to-end encrypted email service. BitLocker (Windows), FileVault (macOS), and VeraCrypt (cross-platform) are all full disk encryption tools."
  },
  {
    question: "In email encryption, what is the main difference between TLS and PGP?",
    options: [
      "TLS encrypts message content, PGP encrypts the transport layer",
      "TLS encrypts the transport channel, PGP provides end-to-end message encryption",
      "TLS requires manual key exchange, PGP is automatic",
      "There is no difference — they are the same protocol"
    ],
    correct: 1,
    explanation: "TLS encrypts the communication channel between mail servers (transport-level), while PGP encrypts the actual message content end-to-end, ensuring only the intended recipient can read it."
  },
  {
    question: "What encryption mode is specifically designed for storage/disk encryption and is an IEEE 1619 standard?",
    options: ["CBC (Cipher Block Chaining)", "ECB (Electronic Codebook)", "XTS (XEX-based Tweaked-codebook)", "GCM (Galois/Counter Mode)"],
    correct: 2,
    explanation: "XTS (XEX-based Tweaked-codebook mode with ciphertext Stealing) is the IEEE 1619 standard specifically designed for storage encryption. It's used by BitLocker, FileVault, and LUKS."
  },
  {
    question: "What does BYOK mean in cloud encryption?",
    options: ["Build Your Own Keys", "Bring Your Own Key", "Backup Your Origin Keys", "Binary Yield Optimization Kit"],
    correct: 1,
    explanation: "BYOK (Bring Your Own Key) allows customers to manage their own encryption keys in a cloud environment, giving them control over key generation, rotation, and revocation rather than relying on the cloud provider."
  },
  {
    question: "Which compliance framework requires encryption for storing cardholder data (Requirement 3.4)?",
    options: ["HIPAA", "GDPR", "PCI DSS", "SOX"],
    correct: 2,
    explanation: "PCI DSS (Payment Card Industry Data Security Standard) Requirement 3.4 specifically mandates that stored cardholder data must be rendered unreadable through encryption, hashing, or tokenization."
  },
  {
    question: "What is 'Always Encrypted' in SQL Server designed to protect against?",
    options: [
      "SQL injection attacks",
      "Network eavesdropping only",
      "Unauthorized access by database administrators",
      "Hardware failure"
    ],
    correct: 2,
    explanation: "Always Encrypted in SQL Server performs client-side encryption, keeping data encrypted even in the database engine's memory. This protects sensitive data from database administrators who manage the system but shouldn't see the data."
  },
  {
    question: "Which modern VPN protocol uses only ~4,000 lines of code and ChaCha20-Poly1305 encryption?",
    options: ["OpenVPN", "IPsec", "WireGuard", "PPTP"],
    correct: 2,
    explanation: "WireGuard is a modern VPN protocol with approximately 4,000 lines of code (compared to OpenVPN's 100,000+). It uses ChaCha20-Poly1305 for encryption and Curve25519 for key exchange."
  },
  {
    question: "What type of encryption allows computation on encrypted data without ever decrypting it?",
    options: ["Symmetric encryption", "Asymmetric encryption", "Homomorphic encryption", "Quantum encryption"],
    correct: 2,
    explanation: "Homomorphic encryption allows performing mathematical operations on encrypted data, producing encrypted results that, when decrypted, match what would have been obtained by performing the operations on the plaintext. It's still mostly experimental due to performance overhead."
  }
];

export default function KnowledgeQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === questions[currentQ].correct) {
      setScore(score + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setAnswered(false);
    setShowResults(false);
    setStreak(0);
    setMaxStreak(0);
  };

  const getRank = () => {
    const pct = (score / questions.length) * 100;
    if (pct === 100) return { title: '🏆 ENCRYPTION MASTER', color: 'text-neon-yellow', desc: 'Perfect score! You are a true encryption expert.' };
    if (pct >= 80) return { title: '🛡️ CIPHER KNIGHT', color: 'text-neon-blue', desc: 'Excellent knowledge! You understand encryption deeply.' };
    if (pct >= 60) return { title: '⚔️ CRYPTO WARRIOR', color: 'text-neon-green', desc: 'Good foundation! Keep learning to master all levels.' };
    if (pct >= 40) return { title: '🔰 APPRENTICE', color: 'text-neon-orange', desc: 'Decent start! Review the encryption levels above for more insights.' };
    return { title: '📚 NOVICE', color: 'text-neon-red', desc: 'Time to study up! Explore the encryption guide above.' };
  };

  return (
    <section className="scroll-mt-20">
      <div className="text-center mb-10">
        <div className="font-mono text-neon-green text-sm mb-3 tracking-wider">
          {'>'} KNOWLEDGE_CHECK.begin()
        </div>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-3">
          🎮 Encryption <span className="text-neon-pink">Knowledge Quest</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Test your encryption knowledge! Answer 10 questions to earn your rank.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {showResults ? (
          /* Results */
          <div className="bg-cyber-card rounded-2xl border border-cyber-border p-8 text-center">
            <div className="mb-6">
              <Trophy className="w-16 h-16 text-neon-yellow mx-auto mb-4" />
              <h3 className={`font-orbitron text-2xl font-bold ${getRank().color} mb-2`}>
                {getRank().title}
              </h3>
              <p className="text-text-secondary">{getRank().desc}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-cyber-bg rounded-xl p-4 border border-cyber-border">
                <div className="font-orbitron text-3xl text-neon-green font-bold">{score}</div>
                <div className="text-xs text-text-muted mt-1">Correct</div>
              </div>
              <div className="bg-cyber-bg rounded-xl p-4 border border-cyber-border">
                <div className="font-orbitron text-3xl text-neon-blue font-bold">{questions.length}</div>
                <div className="text-xs text-text-muted mt-1">Total</div>
              </div>
              <div className="bg-cyber-bg rounded-xl p-4 border border-cyber-border">
                <div className="font-orbitron text-3xl text-neon-purple font-bold">{maxStreak}</div>
                <div className="text-xs text-text-muted mt-1">Best Streak</div>
              </div>
            </div>

            {/* XP earned */}
            <div className="bg-cyber-bg rounded-xl p-4 border border-neon-green/30 mb-6">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-neon-green" />
                <span className="font-orbitron text-neon-green font-bold">
                  +{score * 50} XP EARNED
                </span>
              </div>
            </div>

            <button
              onClick={restart}
              className="inline-flex items-center gap-2 px-6 py-3 bg-neon-purple/20 border border-neon-purple/50 rounded-xl font-orbitron text-neon-purple hover:bg-neon-purple/30 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              PLAY AGAIN
            </button>
          </div>
        ) : (
          /* Question */
          <div className="bg-cyber-card rounded-2xl border border-cyber-border overflow-hidden">
            {/* Progress */}
            <div className="px-6 py-3 bg-cyber-bg/80 border-b border-cyber-border flex items-center justify-between">
              <span className="font-mono text-xs text-text-muted">
                Question {currentQ + 1} / {questions.length}
              </span>
              <div className="flex items-center gap-4">
                {streak > 1 && (
                  <span className="font-mono text-xs text-neon-orange animate-pulse-neon">
                    🔥 {streak} streak!
                  </span>
                )}
                <span className="font-mono text-xs text-neon-green">
                  Score: {score}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-gray-800">
              <div
                className="h-full xp-bar transition-all duration-300"
                style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
              />
            </div>

            <div className="p-6 md:p-8">
              <h3 className="font-rajdhani text-xl text-white font-bold mb-6">
                {questions[currentQ].question}
              </h3>

              <div className="space-y-3 mb-6">
                {questions[currentQ].options.map((opt, i) => {
                  let classes = 'bg-cyber-bg/60 border-cyber-border text-text-secondary hover:border-neon-blue/50 hover:text-white cursor-pointer';
                  if (answered) {
                    if (i === questions[currentQ].correct) {
                      classes = 'bg-neon-green/10 border-neon-green/50 text-neon-green';
                    } else if (i === selected && i !== questions[currentQ].correct) {
                      classes = 'bg-neon-red/10 border-neon-red/50 text-neon-red';
                    } else {
                      classes = 'bg-cyber-bg/30 border-cyber-border/30 text-text-muted opacity-50';
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      disabled={answered}
                      className={`w-full text-left px-5 py-3 rounded-xl border transition-all flex items-center gap-3 ${classes}`}
                    >
                      <span className="font-mono text-xs w-6 h-6 rounded-lg bg-black/30 flex items-center justify-center shrink-0">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-sm flex-1">{opt}</span>
                      {answered && i === questions[currentQ].correct && (
                        <CheckCircle2 className="w-5 h-5 text-neon-green shrink-0" />
                      )}
                      {answered && i === selected && i !== questions[currentQ].correct && (
                        <XCircle className="w-5 h-5 text-neon-red shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {answered && (
                <div className={`rounded-xl p-4 border mb-6 ${
                  selected === questions[currentQ].correct
                    ? 'bg-neon-green/5 border-neon-green/20'
                    : 'bg-neon-red/5 border-neon-red/20'
                }`}>
                  <div className="flex items-start gap-2">
                    {selected === questions[currentQ].correct ? (
                      <CheckCircle2 className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-neon-red shrink-0 mt-0.5" />
                    )}
                    <div>
                      <span className={`text-sm font-bold ${
                        selected === questions[currentQ].correct ? 'text-neon-green' : 'text-neon-red'
                      }`}>
                        {selected === questions[currentQ].correct ? 'Correct!' : 'Incorrect'}
                      </span>
                      <p className="text-text-secondary text-sm mt-1">
                        {questions[currentQ].explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {answered && (
                <button
                  onClick={nextQuestion}
                  className="w-full py-3 bg-neon-blue/20 border border-neon-blue/50 rounded-xl font-orbitron text-neon-blue hover:bg-neon-blue/30 transition-all text-sm"
                >
                  {currentQ < questions.length - 1 ? 'NEXT QUESTION →' : 'VIEW RESULTS →'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
