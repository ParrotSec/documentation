---
title: 'Hash and Key Verification'
taxonomy:
    category:
        - docs
visible: true
---
# Key verification

## Why should anyone verify keys and signatures?

Most people — even programmers — are confused about the basic concepts underlying digital signatures. Therefore, most people should read this section, even if it looks trivial at first sight.

Digital signatures can prove both authenticity and integrity to a reasonable degree of certainty. Authenticity ensures that a given file was indeed created by the person who signed it (i.e., that it was not forged by a third party). Integrity ensures that the contents of the file have not been tampered with (i.e., that a third party has not undetectably altered its contents en route).

Digital signatures cannot prove any other property, e.g., that the signed file is not malicious. In fact, there is nothing that could stop someone from signing a malicious program (and it happens from time to time in reality).

The point is that we must decide who we will trust (e.g., Linus Torvalds, Microsoft, or the Parrot Project) and assume that if a given file was signed by a trusted party, then it should not be malicious or negligently buggy. The decision of whether to trust any given party is beyond the scope of digital signatures. It’s more of a sociological and political decision.

Once we make the decision to trust certain parties, digital signatures are useful, because they make it possible for us to limit our trust only to those few parties we choose and not to worry about all the bad things that can happen between us and them, e.g., server compromises (parrotsec.org will surely be compromised one day, so don’t blindly trust the live version of this site), dishonest IT staff at the hosting company, dishonest staff at the ISPs, Wi-Fi attacks, etc.

By verifying all the files we download that purport to be authored by a party we’ve chosen to trust, we eliminate concerns about the bad things discussed above, since we can easily detect whether any files have been tampered with (and subsequently choose to refrain from executing, installing, or opening them).

However, for digital signatures to make any sense, we must ensure that the public keys we use for signature verification are indeed the original ones. Anybody can generate a GPG key pair that purports to belong to the “Parrot OS” but of course only the key pair that we (i.e., the Parrot Team) generated is the legitimate one. The next section explains how to verify the validity of the ParrotOS signing keys in the process of verifying a ParrotOS ISO. (However, the same general principles apply to all cases in which you may wish to verify a PGP signature, such as verifying repositories, not just ISOs.)




## Fetch the key - Verify the repositories

Optional: Complete the steps below if unfamiliar with GnuPG or if they haven't already been performed. This will fix eventual GPG: WARNING: unsafe ownership warnings. 
1 .First have GnuPG initialize your user data folder.
```bash
    [user@parrot ~]$ gpg --fingerprint
```

2. Set warning free permissions.
```bash
    [user@parrot ~]$ chmod --recursive og-rwx ~/.gnupg
```

3. Get the ParrotOS key.
```bash
    wget -q -O - https://deb.parrotsec.org/parrot/misc/parrotsec.gpg | gpg --import
```
or
```bash 
    [user@parrot ~]$ gpg --keyserver hkp://keys.gnupg.net --recv-key 3B3EAB807D70721BA9C03E55C7B39D0362972489
    [user@parrot ~]$ gpg --list-keys --with-fingerprint 3B3EAB807D70721BA9C03E55C7B39D0362972489 
    [user@parrot ~]$ gpg --export --armor 3B3EAB807D70721BA9C03E55C7B39D0362972489 > parrot-key.asc
```

4. Check fingerprints/owners without actually importing anything.
```bash
    [user@parrot ~]$ gpg --keyid-format long --with-fingerprint parrot-key.asc
```
5. Verify the output.
The output should be identical to the following.
```bash
    pub   rsa4096/C7B39D0362972489 2017-02-13 [SC]
    Key fingerprint = 3B3E AB80 7D70 721B A9C0  3E55 C7B3 9D03 6297 2489
    uid                           Parrot Project <team@parrotsec.org>
    sub   rsa4096/ED05F7B2EC3C9224 2017-07-03 [S]
```

6. Import the key.
```bash 
    [user@parrot ~]$ gpg --import parrot-key.asc
```
You should see something similar to this in the output:
```bash
    gpg: Total number processed: 1
    gpg: imported: 1  (RSA: 1)
```
If the key was already imported,the output should be similar to this:
```bash 
gpg: Total number processed: 1
gpg: unchanged: 1
```
If this appears at the end of the output:
```bash 
    gpg: no ultimately trusted keys found
```
Analyze the other messages as usual. This extra message does not relate to the ParrotOS signing key itself, but instead usually means the user has not created an OpenPGP key yet, which is of no importance.

### Warning
	
Checking the GPG signature timestamp makes sense. For example, if you previously saw a signature from 2018 and now see a signature from 2017, then this might be a targeted rollback (downgrade) or indefinite [freeze attack](https://github.com/theupdateframework/tuf/blob/develop/SECURITY.md). 

The first line includes the signature creation timestamp. Example. 
##ISO verification 

### MD5Sum hash verification

#### GNU/Linux

1. After you obtained the ISO of your choice go here https://cdimage.parrotsec.org/parrot/iso/4.6/signed-hashes.txt to see the signed hashes.
2. On the first section where it says "MD5" find the hash that matches your downloaded IASO.For the purpose of this tutorial we will use "Parrot-home-4.5.1_amd64.iso".
3. Now run the following command.
```bash 
md5sum Parrot-home-4.6_amd64.iso
```
4. The above command should generate an outut like this
```bash
e5390f46ce916d7a027e6e4a25035698 
```
5. Compare the hash (the alphanumeric string on left) that your machine calculated with the corresponding hash on the page from Step 1.

An easy way to do this is to open the page from Step 1 in your browser, then copy the hash your machine calculated from the terminal into the "Find" box in your browser (in Firefox you can open the "Find" box by pressing <Ctrl> <F>).

When both hashes match exactly then the downloaded file is almost certainly intact. If the hashes do not match, then there was a problem with either the download or a problem with the server. You should download the file again from either the same mirror, or from a different mirror if you suspect a server error. If you continuously receive an erroneous file from a server, please be kind and notify the webmaster of that mirror so they can investigate the issue. 

### Other hashes

The method for other hashes such as SHA256 or SHA512 is exactly the same with the above guides only instead of md5 you must use the proper hash you want.For example.
```bash
sha512sum Parrot-home-4.6_amd64.iso
```
which will generate this
```bash
ef4042653ae599001b59ab8efc12648d7c63de64397b2c6848881adc52594b8e92bab0f9b22d81d81650bf1299faabf4d279b14fdfc8bb993335236adf571b27
```
&nbsp;

[Using Parrot](https://www.parrotsec.org/docs/info/start/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-basics/) | [Home](https://www.parrotsec.org/docs/)