---
sidebar_position: 3
---

# Download Parrot OS

Parrot OS is available for download [here](https://parrotsec.org/download/).

The OS also runs on older machines, but it is recommended to consult the system requirements.

## Which version should I choose?

Parrot comes in a lot of shapes and sizes in order to fit all possible hardware and users' needs.

Depending on what hardware configuration and scope you have, consider these options:

### Parrot 5.0 LTS Security Edition

As the name suggests, this is the full edition.
After the installation you have a complete out of the box pentesting workstation loaded with a large variety of tools ready to use.
Highly recommended for PC Desktops and Laptops with at least 4GB of RAM, for a smooth experience whilst multitasking.

[Download](https://parrotsec.org/download/?version=security)

### Parrot 5.0 LTS Home Edition

This version of Parrot is a lightweight installation which provides the essential tools needed to start working.
It relies on the same repositories as the Full Edition, letting you choose most of the programs you want to install later on.
Recommended for those who are familiar with Pentesting Distros but require a minimal installation.

[Download](https://parrotsec.org/download/?version=home)

### Parrot 5.0 LTS Cloud Edition

Cloud images are special editions of Parrot Security made for embedded devices, cloud environments, virtual machines and other special deployments.

[Download](https://parrotsec.org/download/?version=security)

### Parrot 5.0 LTS Architect Edition

This edition of Parrot does not contain any software you do not choose, weighs about 337 mb and is available for any architecture (amd64, i386, arm64). 

[Download](https://parrotsec.org/download/?version=architect)

### Security, Home and Architect Edition, which one should I choose?

*Parrot Home Edition and Parrot Security Edition are identical, and the only difference between them is the set of software that comes pre-installed*.

Parrot OS Home Edition comes with no security tools, while Parrot OS Security Edition comes with all the hacking and pentest tools pre-installed.

You can use the Home Edition and install only the hacking tools you actually need, or you can install all of them at once with `sudo apt install parrot-tools-full`

The Architect Edition does not contain any software pre-installed. You can decide and customize your edition of ParrotOS just before the installation.

### Parrot 5.0 LTS on Docker

Forget all you know about pentesting circumstances. Carrying a laptop everywhere you go to accomplish your job is not mandatory anymore.
You can now have a remote VPS loaded with Parrot OS ready to perform all sort of tasks from an embedded terminal, with discretion. 
This edition does not provide a GUI out of the box, but it's available in the repositories if needed.

[Check it out now](<../cloud/parrot-on-docker>)
---

## 🔒 Cryptographic Verification (Integrity & Authenticity)

Before flashing or installing Parrot OS, it is strongly recommended to **verify the authenticity and integrity** of your downloaded ISO image. Verifying your download protects your system against corrupted downloads, man-in-the-middle (MITM) tampering, mirror compromises, and watering-hole attacks.

Every official Parrot release is cryptographically signed with the official **Parrot OS Release Signing Key**.

### 1. Download Verification Files
Along with your ISO file, download the corresponding signed hashes file from the [Parrot Download Archive](https://download.parrot.sh/parrot/iso/):
* `signed-hashes.txt` (Contains SHA-256 / SHA-512 hashes and the maintainer's detached GPG signature)

Place `signed-hashes.txt` in the same directory as your downloaded `.iso` image.

---

### 2. Verify with GPG and SHA-256 on Linux / macOS

#### Step A: Import the Parrot OS Release Signing Key
Import the official signing key from the OpenPGP keyserver:
```bash
gpg --keyserver hkps://keys.openpgp.org --recv-keys "ED543B718B67BCB5"
```
*(Alternative keyservers: `keyserver.ubuntu.com` or `pgp.mit.edu`)*

#### Step B: Verify the Signature of the Hashes File
Verify that `signed-hashes.txt` was genuinely signed by the Parrot core team:
```bash
gpg --verify signed-hashes.txt
```
Look for **`Good signature from "Parrot Build System <team@parrotsec.org>"`** in the terminal output.

#### Step C: Validate the ISO SHA-256 Checksum
Once the signature is verified, confirm that the ISO file has not been altered:
```bash
# Check the SHA-256 hash against the file
sha256sum --ignore-missing -c signed-hashes.txt
```
If the check succeeds, you will see:
```text
Parrot-security-*.iso: OK
```

---

### 3. Verify on Windows (PowerShell)

If downloading from a Windows host:

#### Step A: Calculate the SHA-256 Hash
Open PowerShell in the folder where the ISO was downloaded and run:
```powershell
Get-FileHash -Path .\Parrot-security-*.iso -Algorithm SHA256
```

#### Step B: Compare the Hash
Compare the output string with the corresponding SHA-256 hash listed in `signed-hashes.txt`. If the hashes match exactly, your ISO is intact and safe to flash.
