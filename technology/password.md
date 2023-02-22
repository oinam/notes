# Password

In an ideal world, hopefully sommetime in the near future, we will never need to create or remember passwords.

Until then, we need to be aware of the fact that weak passwords can be easier to hack.

## Paste Password, Let them

When you stumble on websites, especially those "security-conscious" ones, that stops you from pasting passwords, you know they are irritating, and idiotic.

Making password entry difficult is like attempting weight loss by eating bland food. It's not the flavour that makes you fat. There is this perception that something delicious can't be good for a diet. People have this notion that to lose weight, there must be penance. An element of punishing oneself for past transgressions seems essential.

Security people have the same mindset. Security must be a hassle. It must be in your face. It has to be onerous. A challenge. A hurdle to get past.

Often the slickest, most hassle-free approach is the most secure.

> Allow your website to accept pasted passwords - it makes your site more secure, not less.

Here is an article from the [National Cyber Security Center](https://www.ncsc.gov.uk/) on why allowing password pasting is a much safer way -- [Let them paste passwords](https://www.ncsc.gov.uk/blog-post/let-them-paste-passwords).

The main reason why password pasting improves security is because it helps to reduce password overload. Allowing the pasting of passwords makes web forms work well with password managers. [Password managers](https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/password-managers) are software (or services) that choose, store and enter passwords into online forms for you.

The idea of a website that does not allow you to paste passwords feels largely unmotivated, and dangerous. Somebody thinks that disallowing paste is a good idea so people actually need to write a password twice and they can't make typos. But this prevents using password managers, which are a good idea. This is a very old thing that some people thought being a good idea in the past, but I think it's not considered ideal since.... 2005?

_Password managers are very useful because they:_

- make it much easier to have different passwords for each website site you use
- improve your productivity and reduce frustration by preventing typing errors during logins
- make it simple to use long, complex passwords

Here is a very nice article from the Security Expert, Troy Hunt, [The “Cobra Effect” that is disabling paste on password fields](https://www.troyhunt.com/the-cobra-effect-that-is-disabling/) that details on why not to stop using the idea of not allowing password-pasting on websites.

## Password Expiry

This is a very old idea which was once recommended, because a leak of password hashes was considered possible, and the password was in plaintext or was using weak hashes, and reuse was frequent.

Nowadays, it's not recommended any more: unless there has been a known leak, if the password is properly salted and hashed, has a reasonable complexity, and hasn't been reused, there's no need for rotation.

## Passkeys

Let’s hope that the new world of passwordless login will make some steps forward in the next years. The Fido alliance, [Passkeys](https://www.passkeys.io), backed by the likes of Google, Microsoft, and Apple is the way forward.

### References

- [Practical Recommendations for Stronger, More Usable Passwords Combining Minimum-strength, Minimum-length, and Blocklist Requirements](http://www.andrew.cmu.edu/user/nicolasc/publications/Tan-CCS20.pdf) (pdf)
- [NIST Password Guidelines](https://www.auditboard.com/blog/nist-password-guidelines/) is a password that meets the regulations set out by the National Institution for Standards in Technology’s Digital Identity Guidelines.
- [Dumb Password Rules](https://dumbpasswordrules.com) has a list of websites with, well, dumb password rules.