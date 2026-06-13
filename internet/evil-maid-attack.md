# Evil Maid Attack

The [Evil Maid Attack](https://en.wikipedia.org/wiki/Evil_maid_attack) is a class of security attack that exploits one uncomfortable truth: if an attacker gets physical access to your device, many of your digital protections can be bypassed, weakened, or rendered useless.

The term was popularized by security researcher [Joanna Rutkowska](https://en.wikipedia.org/wiki/Joanna_Rutkowska) in 2009, using a deliberately mundane scenario—an unattended laptop in a hotel room—to illustrate how devastating short, unsupervised physical access can be.

This is not a theoretical curiosity. It is a practical, repeatable attack model that targets laptops, encrypted disks, and even modern secure boot chains.

## What Is an Evil Maid Attack?

An Evil Maid Attack occurs when an attacker gains temporary physical access to a powered-off (or sleeping) computer and tampers with it in a way that compromises security without the owner noticing.

The “evil maid” is shorthand for *anyone* with brief access:
- Hotel staff  
- Border agents  
- Office cleaners  
- Malicious insiders  
- Opportunistic attackers  

The attacker installs malicious software or hardware that activates later—typically the next time the user boots the system.

## Why Full-Disk Encryption Alone Is Not Enough

Most Evil Maid Attacks specifically target systems protected by **full-disk encryption (FDE)** such as:
- BitLocker  
- FileVault  
- LUKS  
- VeraCrypt  

Here’s the uncomfortable reality:

> **Encryption protects data at rest, not the boot process itself.**

If an attacker can modify:
- The bootloader  
- The firmware  
- The pre-boot authentication environment  

They can capture the disk encryption passphrase the next time you unlock your system—quietly and permanently.

## How the Attack Works (Step by Step)

A typical Evil Maid Attack unfolds like this:

1. **Physical Access.** The attacker accesses the powered-off device for a few minutes.
2. **Bootloader or Firmware Modification.** A malicious bootloader or firmware implant is installed. This code looks identical to the original boot screen.
3. **Credential Capture.** When the owner boots the laptop and enters the disk password, it is captured.
4. **Persistence.** The malware stores the password or exfiltrates it later. The attacker now has full access to the encrypted data.

No phishing.  
No malware downloads.  
No network access required.

## Hardware-Based Variants

Some Evil Maid Attacks go beyond software:

- Hardware keyloggers  
- Modified USB devices  
- Firmware implants in BIOS/UEFI  
- Malicious Thunderbolt / DMA attacks  

These methods are harder to detect and often survive OS reinstalls.

## Who Is at Risk?

This attack is not aimed at casual users. It is most relevant for:

- Journalists  
- Activists  
- Executives  
- Diplomats  
- Developers handling sensitive IP  
- Anyone crossing hostile borders with a laptop  

In short: people whose devices are *valuable enough to justify physical targeting*.

## Defenses Against Evil Maid Attacks

There is no silver bullet, but layered defenses help.

### 1. Secure Boot with Verified Integrity
- Use UEFI Secure Boot with signed bootloaders.
- Lock firmware updates behind authentication.

### 2. TPM-Based Measurements
- TPMs can detect changes in boot components.
- Measured boot helps identify tampering.

### 3. Pre-Boot Authentication Hardening
- Use strong passphrases.
- Avoid predictable boot screens.
- Custom bootloader visuals can help detect changes.

### 4. Physical Tamper Awareness
- Power off devices completely.
- Use tamper-evident seals.
- Never leave devices unattended in untrusted environments.

### 5. Suspend Is Not Safe
- Sleep mode preserves RAM.
- Cold boot and DMA attacks remain possible.
- Full shutdown is safer.

## Modern Reality: Still Relevant, Still Dangerous

Despite advances in Secure Boot, TPMs, and firmware protections, Evil Maid Attacks remain viable—especially against poorly configured systems or older hardware.

The lesson is blunt:

> **If someone touches your machine, trust is already broken.**

Security begins at the hardware level, and physical access is the ultimate privilege.

The Evil Maid Attack reminds us that cybersecurity is not purely digital. Locks, rooms, borders, and human behavior matter just as much as cryptography.

Encryption is necessary.  
Physical control is non-negotiable.  
Unattended devices are liabilities.

If your laptop sleeps where strangers walk, assume it can be taught to lie.

### References

- [Tripwire](https://github.com/fr33-sh/Tripwire) is a robust monitoring system that defends against sophisticated adversaries. In comparison, traditional home monitoring products can only defend against burglars, who are not technically-sophisticated and only want to steal money.