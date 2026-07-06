export interface Algorithm {
  name: string;
  type: string;
  keySize: string;
  blockSize: string;
  speed: string;
  security: string;
  description: string;
}

export interface Tool {
  name: string;
  platform: string;
  pricing: string;
  description: string;
}

export interface EncryptionLevel {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  glowClass: string;
  description: string;
  howItWorks: string;
  pros: string[];
  cons: string[];
  useCases: string[];
  algorithms: Algorithm[];
  tools: Tool[];
  complianceRelevance: string[];
  difficultyLevel: number; // 1-5
  businessImpact: number; // 1-5
  xpReward: number;
}

export const encryptionLevels: EncryptionLevel[] = [
  {
    id: "file",
    title: "File Encryption",
    subtitle: "Level 1 — Protect Individual Files",
    icon: "📄",
    color: "neon-blue",
    glowClass: "box-glow-blue",
    description:
      "File encryption transforms individual files into unreadable ciphertext. Only users with the correct decryption key or password can access the original content. This is the most granular level of encryption, perfect for protecting specific sensitive documents like contracts, financial records, or intellectual property.",
    howItWorks:
      "A file encryption tool takes the plaintext file, applies an encryption algorithm (typically AES-256) using a symmetric key, and produces an encrypted output file. The key is usually derived from a user-provided password through a key derivation function (KDF) like PBKDF2 or Argon2. To decrypt, the same key must be provided. Some tools use asymmetric encryption (RSA/ECC) for key exchange, allowing secure sharing without transmitting the actual encryption key.",
    pros: [
      "Granular control — encrypt only what you need",
      "Portable — encrypted files can be moved across devices",
      "Low resource overhead — doesn't slow system performance",
      "Selective sharing — share specific encrypted files with authorized users",
      "Works across all operating systems",
      "No system-wide changes required",
      "Easy to implement for non-technical users",
    ],
    cons: [
      "Manual process — each file must be encrypted individually",
      "Key management burden — losing keys means permanent data loss",
      "Temporary files may remain unencrypted on disk",
      "Doesn't protect OS or system files",
      "No protection against memory-based attacks",
      "File metadata (name, size, date) may still be visible",
    ],
    useCases: [
      "Encrypting financial records, tax documents, and invoices before cloud storage",
      "Protecting intellectual property documents and trade secrets",
      "Securing medical records for HIPAA compliance",
      "Encrypting legal contracts and NDAs for confidential sharing",
      "Password-protecting sensitive PDFs and Office documents",
      "Archiving encrypted backups of critical business files",
    ],
    algorithms: [
      {
        name: "AES-256",
        type: "Symmetric",
        keySize: "256 bits",
        blockSize: "128 bits",
        speed: "Very Fast",
        security: "Military Grade",
        description:
          "The gold standard for symmetric encryption. Used by governments and enterprises worldwide. Hardware-accelerated on modern CPUs via AES-NI instructions.",
      },
      {
        name: "RSA-2048/4096",
        type: "Asymmetric",
        keySize: "2048–4096 bits",
        blockSize: "N/A",
        speed: "Slow",
        security: "Very High",
        description:
          "Used for key exchange and digital signatures. Not suitable for encrypting large files directly, but excellent for securely transmitting symmetric keys.",
      },
      {
        name: "ChaCha20-Poly1305",
        type: "Symmetric (Stream)",
        keySize: "256 bits",
        blockSize: "Stream cipher",
        speed: "Very Fast",
        security: "Very High",
        description:
          "Modern stream cipher designed by Daniel Bernstein. Faster than AES on devices without hardware AES support. Used by Google, Cloudflare, and WireGuard.",
      },
      {
        name: "Twofish",
        type: "Symmetric",
        keySize: "128/192/256 bits",
        blockSize: "128 bits",
        speed: "Fast",
        security: "Very High",
        description:
          "AES finalist by Bruce Schneier. Offers key-dependent S-boxes for additional security. Popular in open-source encryption tools like VeraCrypt.",
      },
    ],
    tools: [
      {
        name: "VeraCrypt",
        platform: "Windows, macOS, Linux",
        pricing: "Free, Open Source",
        description:
          "Create encrypted file containers with AES, Twofish, Serpent, or cascaded ciphers. Supports hidden volumes for plausible deniability.",
      },
      {
        name: "AxCrypt",
        platform: "Windows, macOS, iOS, Android",
        pricing: "Free / Premium $3.75/mo",
        description:
          "Simple right-click encryption with AES-256. Includes secure sharing, password manager, and team collaboration features.",
      },
      {
        name: "GnuPG (GPG)",
        platform: "Cross-platform",
        pricing: "Free, Open Source",
        description:
          "Command-line tool supporting OpenPGP standard. Excellent for encrypting individual files with symmetric or asymmetric keys.",
      },
      {
        name: "7-Zip",
        platform: "Windows (main), Cross-platform",
        pricing: "Free, Open Source",
        description:
          "Archive utility with AES-256 encryption. Encrypt filenames and content within compressed archives.",
      },
      {
        name: "Cryptomator",
        platform: "Windows, macOS, Linux, iOS, Android",
        pricing: "Free (Desktop) / $12 (Mobile)",
        description:
          "Transparent client-side encryption for cloud storage. Creates encrypted vaults that sync seamlessly with Dropbox, Google Drive, OneDrive.",
      },
    ],
    complianceRelevance: [
      "GDPR — Article 32 recommends encryption for personal data protection",
      "HIPAA — Required for electronic Protected Health Information (ePHI)",
      "PCI DSS — Requirement 3: Protect stored cardholder data",
      "SOX — Sarbanes-Oxley requires financial data protection",
    ],
    difficultyLevel: 1,
    businessImpact: 3,
    xpReward: 100,
  },
  {
    id: "folder",
    title: "Folder Encryption",
    subtitle: "Level 2 — Secure Directories & Vaults",
    icon: "📁",
    color: "neon-green",
    glowClass: "box-glow-green",
    description:
      "Folder encryption protects entire directories and their contents as a unit. Unlike file-level encryption, it ensures all files within a folder are automatically encrypted and decrypted transparently when accessed by authorized users. This is ideal for organizing and protecting groups of related sensitive documents.",
    howItWorks:
      "Folder encryption typically works by creating an encrypted container or vault that appears as a regular folder when unlocked. The system encrypts each file individually within the folder structure using per-file encryption keys, all protected under a master key. Some solutions use filesystem-level encryption (like EFS on Windows) that ties encryption to user accounts, while others create virtual encrypted drives mounted on-demand. When the vault is locked, all files become inaccessible ciphertext.",
    pros: [
      "Batch protection — automatically encrypts all contents within a folder",
      "Transparent access — files work normally when the vault is unlocked",
      "Better organization — group related sensitive files together",
      "Individual file encryption within the container for cloud sync efficiency",
      "Some tools support folder-level access controls and permissions",
      "Easier key management than file-by-file encryption",
    ],
    cons: [
      "Vault file can be very large, complicating backups",
      "Performance overhead when accessing many small files simultaneously",
      "If vault password is compromised, all contents are exposed",
      "Some tools don't encrypt filenames or directory structure",
      "May not integrate seamlessly with all backup solutions",
      "EFS (Windows) ties encryption to user account — account loss = data loss",
    ],
    useCases: [
      "Creating secure project vaults for confidential business projects",
      "Protecting HR folders containing employee records and payroll data",
      "Securing client data directories in consulting and legal firms",
      "Encrypting shared network folders with role-based access",
      "Creating portable encrypted vaults on USB drives for field workers",
      "Protecting research and development folders with trade secrets",
    ],
    algorithms: [
      {
        name: "AES-256 (XTS Mode)",
        type: "Symmetric",
        keySize: "256 bits",
        blockSize: "128 bits",
        speed: "Very Fast",
        security: "Military Grade",
        description:
          "XTS mode is specifically designed for disk/storage encryption. It prevents copy-and-paste attacks and provides better security for random-access storage than CBC mode.",
      },
      {
        name: "Serpent",
        type: "Symmetric",
        keySize: "128/192/256 bits",
        blockSize: "128 bits",
        speed: "Moderate",
        security: "Highest",
        description:
          "AES contest finalist with the highest security margin. Uses 32 rounds (vs AES's 14). Slower but considered theoretically more secure. Available in VeraCrypt.",
      },
      {
        name: "Camellia",
        type: "Symmetric",
        keySize: "128/192/256 bits",
        blockSize: "128 bits",
        speed: "Fast",
        security: "Very High",
        description:
          "Developed by Mitsubishi & NTT. ISO/IEC 18033-3 standard. Comparable to AES in security and performance. Popular in Japanese government and financial systems.",
      },
    ],
    tools: [
      {
        name: "Folder Lock",
        platform: "Windows, macOS, iOS, Android",
        pricing: "$39.95 (one-time)",
        description:
          "Comprehensive folder encryption with file locking, shredding, stealth mode, and portable USB drive encryption. Supports AES-256.",
      },
      {
        name: "VeraCrypt",
        platform: "Windows, macOS, Linux",
        pricing: "Free, Open Source",
        description:
          "Create encrypted containers that mount as virtual drives. Supports cascaded encryption (AES-Twofish-Serpent) for maximum security.",
      },
      {
        name: "Cryptomator",
        platform: "All platforms",
        pricing: "Free (Desktop)",
        description:
          "Cloud-optimized vault encryption. Encrypts each file individually within the vault structure, making cloud sync efficient.",
      },
      {
        name: "Windows EFS",
        platform: "Windows Pro/Enterprise",
        pricing: "Built-in",
        description:
          "Encrypting File System — transparent folder encryption tied to Windows user accounts. Integrates with Active Directory for enterprise key recovery.",
      },
    ],
    complianceRelevance: [
      "GDPR — Encryption as a technical safeguard for data protection",
      "HIPAA — Addressable specification for ePHI at rest",
      "ISO 27001 — Annex A.10 Cryptographic Controls",
      "NIST SP 800-171 — Protecting Controlled Unclassified Information",
    ],
    difficultyLevel: 2,
    businessImpact: 4,
    xpReward: 200,
  },
  {
    id: "drive",
    title: "Drive / Disk Encryption",
    subtitle: "Level 3 — Full Disk Encryption (FDE)",
    icon: "💿",
    color: "neon-purple",
    glowClass: "box-glow-purple",
    description:
      "Full Disk Encryption (FDE) encrypts the entire contents of a storage drive — including the operating system, applications, temporary files, swap space, and user data. The encryption is completely transparent: data is automatically encrypted when written and decrypted when read by an authenticated user. This is the most critical protection against physical theft of devices.",
    howItWorks:
      "FDE works at the block level below the filesystem. During boot, a pre-boot authentication screen (PBA) prompts for a password, PIN, smart card, or TPM authentication. Once authenticated, the encryption driver intercepts all disk I/O operations, decrypting data as it's read from disk into memory and encrypting data as it's written back. The encryption key is stored in memory during operation and cleared on shutdown. Hardware-based FDE (self-encrypting drives/SEDs) handles encryption in the drive controller itself, with zero CPU overhead.",
    pros: [
      "Comprehensive protection — everything on disk is encrypted, including OS and temp files",
      "Completely transparent — no user workflow changes needed",
      "Protects against physical theft of laptops, hard drives, and USB drives",
      "No unencrypted temp files, swap space, or hibernation files left behind",
      "Required for many compliance frameworks (HIPAA, PCI DSS, GDPR)",
      "Modern CPUs with AES-NI have minimal performance impact (~1-3%)",
      "Automatic — no need to remember to encrypt individual files",
    ],
    cons: [
      "Once logged in, all data is accessible — no per-file protection",
      "Cannot protect data from privileged insiders while system is running",
      "If recovery key is lost and password forgotten, all data is permanently lost",
      "Performance impact on older hardware without AES-NI support",
      "Does not protect data in transit over networks",
      "Software FDE can be vulnerable to cold boot attacks (extracting keys from RAM)",
      "Pre-boot authentication adds a few seconds to startup time",
    ],
    useCases: [
      "Protecting all laptops issued to employees — mandatory for remote workers",
      "Securing USB drives and external storage media with BitLocker To Go",
      "Compliance with data protection regulations for stored data at rest",
      "Protecting against data exposure when decommissioning or recycling hardware",
      "Securing server hard drives in data centers against physical breaches",
      "Military and government secure computing environments",
    ],
    algorithms: [
      {
        name: "AES-128/256 (XTS Mode)",
        type: "Symmetric",
        keySize: "128 or 256 bits",
        blockSize: "128 bits",
        speed: "Hardware Accelerated",
        security: "Military Grade",
        description:
          "XTS-AES is the IEEE 1619 standard for storage encryption. It is used by BitLocker, FileVault, and LUKS. Modern CPUs process AES at wire speed via AES-NI.",
      },
      {
        name: "XChaCha20",
        type: "Symmetric (Stream)",
        keySize: "256 bits",
        blockSize: "Stream cipher",
        speed: "Very Fast (software)",
        security: "Very High",
        description:
          "Extended-nonce variant of ChaCha20. Excellent for software-only implementations without AES hardware acceleration. Used in some Linux encryption setups.",
      },
      {
        name: "AES-Twofish-Serpent (Cascade)",
        type: "Symmetric (Cascaded)",
        keySize: "256 bits each",
        blockSize: "128 bits",
        speed: "Slower",
        security: "Maximum",
        description:
          "VeraCrypt's cascaded encryption applies three different algorithms in sequence. Even if one algorithm is broken, the other two maintain protection.",
      },
    ],
    tools: [
      {
        name: "BitLocker",
        platform: "Windows Pro/Enterprise",
        pricing: "Built-in",
        description:
          "Microsoft's FDE solution with TPM integration, pre-boot PIN, smart card support, and centralized management via Intune/SCCM. Supports AES-128 and AES-256 in XTS mode.",
      },
      {
        name: "FileVault 2",
        platform: "macOS",
        pricing: "Built-in",
        description:
          "Apple's FDE using XTS-AES-128. Seamless integration with macOS, Apple Silicon secure enclave, and iCloud recovery key escrow.",
      },
      {
        name: "LUKS / dm-crypt",
        platform: "Linux",
        pricing: "Free, Open Source",
        description:
          "Linux Unified Key Setup — the standard for Linux full disk encryption. Supports multiple key slots, header backups, and various ciphers.",
      },
      {
        name: "VeraCrypt",
        platform: "Windows, macOS, Linux",
        pricing: "Free, Open Source",
        description:
          "Full disk encryption with pre-boot authentication, hidden operating systems, and cascaded encryption. Cross-platform and independently audited.",
      },
      {
        name: "DiskCryptor",
        platform: "Windows",
        pricing: "Free, Open Source",
        description:
          "Lightweight FDE for Windows supporting AES, Twofish, Serpent, and their combinations. Supports encryption of system and non-system partitions.",
      },
    ],
    complianceRelevance: [
      "HIPAA — Safe harbor provision if encrypted device is lost/stolen",
      "PCI DSS — Requirement 3.4: Render PAN unreadable anywhere it is stored",
      "GDPR — Article 34: No breach notification required if data was encrypted",
      "NIST 800-88 — FDE simplifies secure media sanitization",
      "CMMC — Level 2 requires FDE for CUI on mobile devices",
    ],
    difficultyLevel: 2,
    businessImpact: 5,
    xpReward: 350,
  },
  {
    id: "pc",
    title: "PC / Endpoint Encryption",
    subtitle: "Level 4 — Comprehensive Endpoint Security",
    icon: "🖥️",
    color: "neon-pink",
    glowClass: "box-glow-pink",
    description:
      "Endpoint encryption goes beyond simple disk encryption to provide a holistic security layer for the entire computing device. It combines full disk encryption, application-level encryption, secure boot chains, hardware security modules (TPM/Secure Enclave), and endpoint management to create a comprehensive defense-in-depth strategy for every PC, laptop, and workstation in the organization.",
    howItWorks:
      "Endpoint encryption operates at multiple layers: (1) UEFI Secure Boot ensures only trusted OS code runs, (2) TPM stores encryption keys in tamper-resistant hardware, (3) FDE encrypts the entire disk, (4) OS-level encryption protects user profiles and credentials, (5) Application-level encryption secures sensitive data within apps, (6) Memory encryption (AMD SME/Intel TME) protects data in RAM, (7) Network encryption (VPN/TLS) secures data leaving the endpoint. Enterprise MDM/UEM solutions manage and enforce all these layers centrally.",
    pros: [
      "Defense-in-depth — multiple encryption layers protect against varied threats",
      "Hardware-backed security via TPM 2.0 and Secure Enclaves",
      "Centralized management and policy enforcement via MDM/UEM",
      "Protects against both physical theft and sophisticated software attacks",
      "Remote wipe capability if device is lost or stolen",
      "Compliance reporting and audit trail capabilities",
      "Protects data even from rogue administrators",
    ],
    cons: [
      "Complex to deploy and manage across large fleets",
      "Higher cost — requires enterprise licensing and management infrastructure",
      "Potential performance impact from multiple encryption layers",
      "Employee resistance to security restrictions and monitoring",
      "Recovery can be complex if multiple layers fail simultaneously",
      "Requires specialized IT staff to manage and troubleshoot",
      "Hardware requirements (TPM 2.0) may require device refresh",
    ],
    useCases: [
      "Enterprise laptop fleet management for distributed workforce",
      "Government and defense contractor secure computing environments",
      "Healthcare organizations protecting patient data on clinical workstations",
      "Financial institutions securing trading desks and analyst workstations",
      "Remote worker endpoints accessing sensitive corporate resources",
      "Kiosk and shared-use computers in retail and hospitality",
    ],
    algorithms: [
      {
        name: "AES-256 (Multiple Modes)",
        type: "Symmetric",
        keySize: "256 bits",
        blockSize: "128 bits",
        speed: "Hardware Accelerated",
        security: "Military Grade",
        description:
          "Used in XTS mode for disk, GCM mode for network, and various modes for application-level encryption. TPM-sealed keys add hardware protection.",
      },
      {
        name: "RSA-2048 + ECC P-256",
        type: "Asymmetric (Hybrid)",
        keySize: "2048/256 bits",
        blockSize: "N/A",
        speed: "Moderate",
        security: "Very High",
        description:
          "Used for secure boot signature verification, code signing, VPN authentication, and certificate-based network access. ECC provides equivalent security with smaller keys.",
      },
      {
        name: "Intel TME / AMD SME",
        type: "Hardware Memory Encryption",
        keySize: "128 bits (AES-XTS)",
        blockSize: "128 bits",
        speed: "Hardware (Zero overhead)",
        security: "High",
        description:
          "Total Memory Encryption encrypts all DRAM contents in hardware. Protects against physical memory attacks, cold boot attacks, and bus snooping.",
      },
    ],
    tools: [
      {
        name: "Microsoft Intune + BitLocker",
        platform: "Windows",
        pricing: "Microsoft 365 E3/E5",
        description:
          "Enterprise endpoint management with centralized BitLocker deployment, key escrow, compliance policies, conditional access, and remote wipe.",
      },
      {
        name: "Jamf Pro + FileVault",
        platform: "macOS",
        pricing: "$3.33/device/mo",
        description:
          "Apple device management with automated FileVault deployment, personal recovery key escrow, and compliance reporting for Mac fleets.",
      },
      {
        name: "Sophos Central",
        platform: "Windows, macOS, Linux",
        pricing: "Per-device licensing",
        description:
          "Unified endpoint protection with device encryption management, web control, application control, and threat detection.",
      },
      {
        name: "CrowdStrike Falcon",
        platform: "Windows, macOS, Linux",
        pricing: "Enterprise pricing",
        description:
          "Cloud-native endpoint protection with device control, encryption status monitoring, and zero-trust security posture assessment.",
      },
    ],
    complianceRelevance: [
      "CMMC — Comprehensive endpoint encryption for defense contractors",
      "FedRAMP — Endpoint security controls for cloud service providers",
      "SOC 2 Type II — Endpoint encryption as part of trust service criteria",
      "ISO 27001 — A.8.1 Asset management and endpoint protection",
      "NIST CSF — Protect function, data security category",
    ],
    difficultyLevel: 4,
    businessImpact: 5,
    xpReward: 500,
  },
  {
    id: "database",
    title: "Database Encryption",
    subtitle: "Level 5 — Protect Your Crown Jewels",
    icon: "🗄️",
    color: "neon-orange",
    glowClass: "box-glow-orange",
    description:
      "Database encryption protects structured data stored in relational and NoSQL databases. It operates at multiple levels: Transparent Data Encryption (TDE) encrypts data files at rest, Column-Level Encryption protects specific sensitive fields, and Always Encrypted keeps data encrypted even in memory. This is critical for protecting the most valuable business asset — the data itself.",
    howItWorks:
      "Database encryption uses a tiered key hierarchy. At the top is a Master Encryption Key (MEK), stored in an external key store (HSM, Azure Key Vault, AWS KMS). The MEK protects Database Encryption Keys (DEK) or Column Encryption Keys (CEK). TDE encrypts at the I/O level — data pages are encrypted before writing to disk and decrypted when read into the buffer pool. Column-level encryption uses functions like EncryptByKey() to encrypt specific column values. Always Encrypted performs encryption/decryption in the client driver, so the database engine never sees plaintext.",
    pros: [
      "Protects the most sensitive and valuable business data",
      "TDE is transparent — no application changes required",
      "Column-level encryption provides granular control over sensitive fields",
      "Always Encrypted protects data even from database administrators",
      "Meets compliance requirements for data-at-rest encryption",
      "Key rotation capabilities for long-term security",
      "Works with existing database backup and recovery procedures",
    ],
    cons: [
      "TDE does not protect data in memory or from privileged users",
      "Column-level encryption prevents range queries (BETWEEN, >, <)",
      "Performance overhead, especially for column-level encryption (10-25%)",
      "Complex key management requiring HSMs or cloud key vaults",
      "Always Encrypted limits query functionality (no LIKE, JOINs on encrypted columns)",
      "Backup files are encrypted — recovery requires key availability",
      "License costs for enterprise database encryption features",
    ],
    useCases: [
      "Encrypting credit card numbers and SSNs in payment processing databases",
      "Protecting patient health records in healthcare database systems",
      "Securing financial transaction data in banking applications",
      "Encrypting PII in customer relationship management (CRM) databases",
      "Protecting classified data in government database systems",
      "Multi-tenant SaaS applications needing per-tenant encryption",
    ],
    algorithms: [
      {
        name: "AES-256 (TDE)",
        type: "Symmetric",
        keySize: "128/192/256 bits",
        blockSize: "128 bits",
        speed: "Hardware Accelerated",
        security: "Military Grade",
        description:
          "Standard for TDE in SQL Server, Oracle, MySQL, and PostgreSQL. Encrypts data pages at the I/O layer with minimal performance impact (~1-5%).",
      },
      {
        name: "3DES-168 (Legacy)",
        type: "Symmetric",
        keySize: "168 bits (112 effective)",
        blockSize: "64 bits",
        speed: "Slow",
        security: "Moderate (Deprecated)",
        description:
          "Triple DES — legacy algorithm still supported in Oracle TDE. Being phased out in favor of AES. Not recommended for new deployments.",
      },
      {
        name: "RSA-2048 (Key Wrapping)",
        type: "Asymmetric",
        keySize: "2048 bits",
        blockSize: "N/A",
        speed: "Slow",
        security: "High",
        description:
          "Used to protect Database Encryption Keys in the key hierarchy. The TDE protector certificate or asymmetric key wraps the DEK using RSA.",
      },
    ],
    tools: [
      {
        name: "SQL Server TDE + Always Encrypted",
        platform: "SQL Server / Azure SQL",
        pricing: "Enterprise Edition ($15k+)",
        description:
          "TDE encrypts database files at rest. Always Encrypted provides client-side encryption with column encryption keys managed outside the database.",
      },
      {
        name: "Oracle TDE",
        platform: "Oracle Database",
        pricing: "Advanced Security Option",
        description:
          "Column-level and tablespace-level TDE with Oracle Key Vault integration. Supports AES-128/192/256 and 3DES168.",
      },
      {
        name: "MySQL InnoDB Encryption",
        platform: "MySQL / MariaDB",
        pricing: "Community (Free) / Enterprise",
        description:
          "Per-tablespace encryption with keyring plugin support. Encrypts redo/undo logs, binary logs, and general tablespaces.",
      },
      {
        name: "MongoDB Client-Side Encryption",
        platform: "MongoDB",
        pricing: "Enterprise / Atlas",
        description:
          "Client-Side Field Level Encryption (CSFLE) and Queryable Encryption. Data is encrypted before reaching the server.",
      },
      {
        name: "AWS RDS Encryption / Azure SQL TDE",
        platform: "Cloud (AWS/Azure)",
        pricing: "Included with service",
        description:
          "Cloud-managed TDE with AWS KMS or Azure Key Vault. Automatic encryption of storage, snapshots, replicas, and backups.",
      },
    ],
    complianceRelevance: [
      "PCI DSS — Requirement 3.4: Encrypt cardholder data in databases",
      "HIPAA — ePHI must be encrypted at rest in database systems",
      "GDPR — Article 25: Data protection by design and default",
      "SOX — Financial data integrity and protection requirements",
      "GLBA — Gramm-Leach-Bliley Act for financial institution data",
      "FERPA — Protection of student education records",
    ],
    difficultyLevel: 4,
    businessImpact: 5,
    xpReward: 600,
  },
  {
    id: "email",
    title: "Email Encryption",
    subtitle: "Level 6 — Secure Communications",
    icon: "📧",
    color: "neon-cyan",
    glowClass: "box-glow-cyan",
    description:
      "Email encryption protects the confidentiality and integrity of email messages and attachments. It operates at two levels: transport-level encryption (TLS) secures the connection between mail servers, while end-to-end encryption (S/MIME, PGP) ensures only the intended recipient can read the message content — not even the email provider can access it.",
    howItWorks:
      "Transport encryption (TLS/STARTTLS) creates an encrypted tunnel between mail servers using X.509 certificates. The email content is encrypted in transit but stored in plaintext on the servers. End-to-end encryption works differently: S/MIME uses X.509 certificates from Certificate Authorities — the sender encrypts with the recipient's public key, and only the recipient's private key can decrypt. PGP uses a Web of Trust model where users generate and exchange key pairs independently. Both methods also support digital signatures to verify sender identity and message integrity.",
    pros: [
      "Protects sensitive business communications from interception",
      "Digital signatures verify sender identity and prevent tampering",
      "End-to-end encryption prevents even email providers from reading messages",
      "TLS is automatic and transparent — requires no user action",
      "S/MIME integrates natively with Outlook, Apple Mail, and Thunderbird",
      "Meets regulatory requirements for encrypted communications",
      "Protects against man-in-the-middle attacks on email transport",
    ],
    cons: [
      "End-to-end encryption requires both parties to have certificates/keys",
      "Certificate management is complex at enterprise scale",
      "PGP has a steep learning curve for non-technical users",
      "Encrypted emails can't be scanned for malware by email gateways",
      "Subject lines and metadata are typically NOT encrypted",
      "Key loss means permanent loss of access to encrypted email archives",
      "Limited compatibility between S/MIME and PGP ecosystems",
    ],
    useCases: [
      "Law firms exchanging confidential legal documents with clients",
      "Healthcare providers sending patient information to specialists",
      "Financial advisors communicating investment strategies to clients",
      "HR departments sending salary information and employee records",
      "Government agencies exchanging classified or sensitive communications",
      "Businesses sharing trade secrets and intellectual property with partners",
    ],
    algorithms: [
      {
        name: "TLS 1.3",
        type: "Transport Encryption",
        keySize: "Variable (ECDHE + AES-256-GCM)",
        blockSize: "128 bits",
        speed: "Fast (1-RTT handshake)",
        security: "Very High",
        description:
          "Latest TLS version with mandatory forward secrecy, no legacy cipher suites, and faster handshakes. Used for SMTP transport encryption between mail servers.",
      },
      {
        name: "RSA-2048/4096 (S/MIME)",
        type: "Asymmetric",
        keySize: "2048–4096 bits",
        blockSize: "N/A",
        speed: "Moderate",
        security: "Very High",
        description:
          "Used in S/MIME certificates for email encryption and digital signatures. Certificate-based trust model with centralized Certificate Authorities.",
      },
      {
        name: "ECC (Curve25519) + AES (PGP)",
        type: "Hybrid",
        keySize: "256 bits (ECC) + 256 bits (AES)",
        blockSize: "128 bits",
        speed: "Fast",
        security: "Very High",
        description:
          "Modern PGP implementations use Elliptic Curve Cryptography for key exchange and AES for message encryption. Smaller keys with equivalent security to RSA-3072.",
      },
    ],
    tools: [
      {
        name: "Microsoft 365 OME",
        platform: "Microsoft 365",
        pricing: "E3/E5 or add-on",
        description:
          "Office Message Encryption allows sending encrypted emails to any recipient. Recipients access messages through a secure web portal without needing their own certificates.",
      },
      {
        name: "ProtonMail",
        platform: "Web, iOS, Android",
        pricing: "Free / Business $7.99/user/mo",
        description:
          "End-to-end encrypted email with zero-access architecture. Even ProtonMail cannot read your emails. PGP-compatible with automatic key management.",
      },
      {
        name: "Gpg4win / GPGSuite",
        platform: "Windows / macOS",
        pricing: "Free, Open Source",
        description:
          "OpenPGP implementation with Outlook plugin (GpgOL). Full PGP key management, file encryption, and email signing/encryption.",
      },
      {
        name: "Virtru",
        platform: "Gmail, Outlook, Web",
        pricing: "From $5/user/mo",
        description:
          "One-click email encryption for Gmail and Outlook. Recipient doesn't need Virtru installed. Supports DLP policies and access revocation.",
      },
      {
        name: "Mimecast",
        platform: "Gateway-based",
        pricing: "Enterprise pricing",
        description:
          "Email security gateway with policy-based encryption, TLS enforcement, content control, and data loss prevention at the organizational level.",
      },
    ],
    complianceRelevance: [
      "HIPAA — Requires encryption for ePHI transmitted via email",
      "GDPR — Article 32: Encryption for personal data in transit",
      "PCI DSS — Requirement 4: Encrypt transmission of cardholder data",
      "SOX — Secure communication of financial reporting data",
      "ITAR — International Traffic in Arms Regulations for defense communications",
      "CJIS — Criminal Justice Information Services encryption requirements",
    ],
    difficultyLevel: 3,
    businessImpact: 4,
    xpReward: 400,
  },
  {
    id: "network",
    title: "Network Encryption",
    subtitle: "Level 7 — Protect Data in Transit",
    icon: "🌐",
    color: "neon-yellow",
    glowClass: "box-glow-yellow",
    description:
      "Network encryption protects data as it travels across networks — from the local LAN to the global internet. It includes VPN tunnels, TLS/SSL for web traffic, IPsec for site-to-site connections, and SSH for secure remote access. This is essential for protecting against eavesdropping, man-in-the-middle attacks, and data interception on untrusted networks.",
    howItWorks:
      "Network encryption encapsulates data packets in encrypted wrappers before transmission. VPNs create encrypted tunnels between endpoints using protocols like WireGuard, OpenVPN, or IPsec. TLS performs a handshake (certificate verification + key exchange) then encrypts all application data with a symmetric session key. SSH provides encrypted terminal sessions and file transfer. Modern implementations use perfect forward secrecy — each session generates unique ephemeral keys, so compromising one session's key doesn't expose past or future sessions.",
    pros: [
      "Protects all data in transit from eavesdropping and interception",
      "VPNs enable secure remote access to corporate resources",
      "TLS is ubiquitous — used by every modern web browser",
      "Perfect forward secrecy ensures past sessions remain secure",
      "Protects against man-in-the-middle and DNS spoofing attacks",
      "Enables secure communication over untrusted networks (public WiFi)",
      "Site-to-site VPNs securely connect branch offices",
    ],
    cons: [
      "VPNs can reduce network throughput and add latency",
      "Certificate management for TLS can be complex",
      "Misconfigured TLS (weak ciphers, expired certs) creates false sense of security",
      "VPN concentrators can become single points of failure",
      "Split tunneling decisions create security vs. performance trade-offs",
      "TLS inspection by firewalls breaks end-to-end encryption",
      "Legacy protocols (FTP, Telnet, HTTP) may still be in use",
    ],
    useCases: [
      "Securing remote worker connections to corporate networks via VPN",
      "Encrypting all web application traffic with TLS certificates",
      "Connecting branch offices securely with site-to-site IPsec tunnels",
      "Protecting API communications between microservices",
      "Securing SSH access to servers and network infrastructure",
      "Encrypting DNS queries with DNS-over-HTTPS (DoH) or DNS-over-TLS",
    ],
    algorithms: [
      {
        name: "AES-256-GCM",
        type: "Symmetric (AEAD)",
        keySize: "256 bits",
        blockSize: "128 bits",
        speed: "Hardware Accelerated",
        security: "Very High",
        description:
          "Authenticated Encryption with Associated Data. Provides both confidentiality and integrity in a single operation. Standard for TLS 1.3 and modern VPNs.",
      },
      {
        name: "ChaCha20-Poly1305",
        type: "Symmetric (AEAD)",
        keySize: "256 bits",
        blockSize: "Stream cipher",
        speed: "Very Fast (software)",
        security: "Very High",
        description:
          "Google's preferred cipher for mobile devices. Default in WireGuard VPN. Faster than AES on ARM devices without AES hardware acceleration.",
      },
      {
        name: "ECDHE (X25519)",
        type: "Key Exchange",
        keySize: "256 bits",
        blockSize: "N/A",
        speed: "Fast",
        security: "Very High",
        description:
          "Elliptic Curve Diffie-Hellman Ephemeral key exchange. Provides perfect forward secrecy. Standard in TLS 1.3 for establishing session keys.",
      },
    ],
    tools: [
      {
        name: "WireGuard",
        platform: "Cross-platform",
        pricing: "Free, Open Source",
        description:
          "Modern VPN protocol with ~4,000 lines of code (vs OpenVPN's 100,000+). Uses ChaCha20-Poly1305, Curve25519, and BLAKE2s. Extremely fast and easy to configure.",
      },
      {
        name: "OpenVPN",
        platform: "Cross-platform",
        pricing: "Free (Community) / $18/user (Access Server)",
        description:
          "Battle-tested VPN solution supporting AES-256-GCM, certificate authentication, and flexible deployment options. Widely supported by enterprise firewalls.",
      },
      {
        name: "Let's Encrypt",
        platform: "Any web server",
        pricing: "Free",
        description:
          "Free, automated TLS certificate authority. Issues domain-validated certificates via ACME protocol. Powers 300+ million websites with free HTTPS.",
      },
      {
        name: "Cloudflare SSL/TLS",
        platform: "Cloud/CDN",
        pricing: "Free / Enterprise",
        description:
          "CDN-level TLS termination with automatic certificate management, TLS 1.3 support, and HTTP/2 and HTTP/3 (QUIC) encryption.",
      },
    ],
    complianceRelevance: [
      "PCI DSS — Requirement 4: Encrypt transmission of cardholder data across open networks",
      "HIPAA — Requires encryption for ePHI transmitted over networks",
      "GDPR — Article 32: Encryption of personal data in transit",
      "NIST 800-52 — TLS Implementation Guidelines",
      "FedRAMP — Required encryption for data in transit in cloud environments",
    ],
    difficultyLevel: 3,
    businessImpact: 5,
    xpReward: 450,
  },
  {
    id: "cloud",
    title: "Cloud & Application Encryption",
    subtitle: "Level 8 — Boss Level: Encrypt Everything",
    icon: "☁️",
    color: "neon-red",
    glowClass: "box-glow-pink",
    description:
      "Cloud and application-level encryption represents the highest level of encryption maturity. It encompasses client-side encryption before cloud upload, server-side encryption managed by cloud providers, envelope encryption with customer-managed keys (BYOK/HYOK), end-to-end encrypted SaaS applications, and homomorphic encryption for computing on encrypted data. This is where businesses achieve true zero-trust data security.",
    howItWorks:
      "Cloud encryption operates at multiple layers: (1) Server-Side Encryption (SSE) — the cloud provider encrypts data after receiving it, using provider-managed or customer-managed keys. (2) Client-Side Encryption (CSE) — data is encrypted before upload, so the provider never sees plaintext. (3) Envelope Encryption — data is encrypted with a Data Encryption Key (DEK), which is itself encrypted with a Key Encryption Key (KEK) stored in a cloud KMS. (4) BYOK (Bring Your Own Key) — customers manage their own KEKs in an HSM. (5) Confidential Computing uses hardware enclaves (Intel SGX, AMD SEV) to protect data during processing.",
    pros: [
      "Zero-trust approach — data is protected even from the cloud provider",
      "Scalable encryption infrastructure managed by cloud platform",
      "Envelope encryption enables efficient key rotation without re-encrypting data",
      "BYOK/HYOK gives customers control over their encryption keys",
      "Integration with Identity and Access Management (IAM) for fine-grained access",
      "Automated key lifecycle management, rotation, and auditing",
      "Confidential computing protects data even during processing",
    ],
    cons: [
      "Vendor lock-in with cloud-specific encryption services",
      "Client-side encryption complicates search and server-side processing",
      "Key management complexity increases with multi-cloud environments",
      "Cost of cloud KMS services and HSM-backed key stores",
      "Performance overhead for client-side encryption at scale",
      "Shared responsibility model confusion — what does the provider encrypt vs. you?",
      "Homomorphic encryption is still too slow for most practical applications",
    ],
    useCases: [
      "Encrypting S3 buckets and Azure Blob storage with customer-managed keys",
      "Zero-knowledge cloud storage for highly sensitive industries",
      "Multi-tenant SaaS applications needing per-customer encryption",
      "Cross-cloud data protection with portable encryption keys",
      "Encrypted data analytics using secure enclaves",
      "End-to-end encrypted collaboration platforms (messaging, file sharing)",
    ],
    algorithms: [
      {
        name: "AES-256-GCM (Envelope)",
        type: "Symmetric (AEAD)",
        keySize: "256 bits",
        blockSize: "128 bits",
        speed: "Hardware Accelerated",
        security: "Military Grade",
        description:
          "Standard for cloud encryption. Used in AWS KMS, Azure Key Vault, and GCP Cloud KMS for envelope encryption with authenticated data integrity.",
      },
      {
        name: "RSA-OAEP (Key Wrapping)",
        type: "Asymmetric",
        keySize: "2048–4096 bits",
        blockSize: "N/A",
        speed: "Slow",
        security: "Very High",
        description:
          "Optimal Asymmetric Encryption Padding used for wrapping symmetric keys. Provides semantic security against chosen-ciphertext attacks.",
      },
      {
        name: "BFV / CKKS (Homomorphic)",
        type: "Homomorphic Encryption",
        keySize: "Large (>10,000 bits)",
        blockSize: "N/A",
        speed: "Very Slow (10-1000x overhead)",
        security: "Theoretical Maximum",
        description:
          "Allows computation on encrypted data without decryption. Still mostly experimental but advancing rapidly. Used in privacy-preserving analytics and ML.",
      },
    ],
    tools: [
      {
        name: "AWS KMS + S3 SSE",
        platform: "AWS",
        pricing: "$1/key/mo + API calls",
        description:
          "AWS Key Management Service with S3 server-side encryption. Supports SSE-S3, SSE-KMS (customer-managed), and SSE-C (customer-provided keys).",
      },
      {
        name: "Azure Key Vault + Storage Encryption",
        platform: "Microsoft Azure",
        pricing: "From $0.03/10k operations",
        description:
          "Centralized key management with HSM backing. Integrates with Azure Storage, SQL Database, and Disk Encryption for comprehensive cloud encryption.",
      },
      {
        name: "Google Cloud KMS",
        platform: "Google Cloud",
        pricing: "$0.06/key version/mo",
        description:
          "Cloud-hosted key management with external key manager support. Integrates with BigQuery, GCS, and Compute Engine for automatic encryption.",
      },
      {
        name: "HashiCorp Vault",
        platform: "Cross-platform / Multi-cloud",
        pricing: "Free (OSS) / Enterprise",
        description:
          "Secrets management and encryption-as-a-service. Transit engine provides encryption without storing data. Supports auto-unseal with cloud KMS.",
      },
    ],
    complianceRelevance: [
      "GDPR — Data portability and right to erasure with customer-managed keys",
      "FedRAMP High — Requires FIPS 140-2 Level 3 HSM-backed key management",
      "SOC 2 — Trust Service Criteria for confidentiality and privacy",
      "CSA STAR — Cloud Security Alliance certification for cloud encryption",
      "NIST 800-144 — Guidelines on Security and Privacy in Public Cloud Computing",
    ],
    difficultyLevel: 5,
    businessImpact: 5,
    xpReward: 800,
  },
];

export const algorithmComparison = [
  { name: "AES-256", type: "Symmetric", speed: 95, security: 95, adoption: 98, year: 2001 },
  { name: "RSA-2048", type: "Asymmetric", speed: 20, security: 85, adoption: 90, year: 1977 },
  { name: "ChaCha20", type: "Symmetric", speed: 90, security: 92, adoption: 70, year: 2008 },
  { name: "Twofish", type: "Symmetric", speed: 80, security: 90, adoption: 40, year: 1998 },
  { name: "Blowfish", type: "Symmetric", speed: 85, security: 60, adoption: 30, year: 1993 },
  { name: "Serpent", type: "Symmetric", speed: 55, security: 98, adoption: 25, year: 1998 },
  { name: "3DES", type: "Symmetric", speed: 30, security: 40, adoption: 20, year: 1978 },
  { name: "ECC P-256", type: "Asymmetric", speed: 60, security: 90, adoption: 75, year: 1985 },
];
