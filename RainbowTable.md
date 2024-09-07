# Rainbow Table 🌈

A rainbow table is simply a table which maps common inputs to their hash output. For instance, we could map common passwords to their SHA256 hashes:

| Common Passwords | SHA256 Hash |
|------------------|-------------|
| password | 0x5e8848...1542d8 |
| qwerty | 0x65e84b...2337c5 |
| 111111 | 0xbcb15f...09802a |
| 12345678 | 0xef797c...98a64f |
| abc123 | 0x6ca13d...118090 |

Even though the password should be unguessable, given a hash output, these common passwords make it easy to create a rainbow table to find what the plaintext input would be.

> ⚠️ If a company were to lose their database of passwords (which happens way too often) and they do not protect their password hashes with a salt, it may be relatively easy for a hacker to use a rainbow table to find which passwords you use. From there, they can try those passwords on other services.
