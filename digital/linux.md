# Linux

> [Linux](https://en.wikipedia.org/wiki/Linux) is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds).

## Common Operations

Current OS Release version\
`cat /etc/*release`

Change Hostname\
https://phoenixnap.com/kb/ubuntu-20-04-change-hostname

Ubuntu apt-get complains about unverifiable public key signature\
`sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys <KEY>`

Change SSH Key Password\
`ssh-keygen -p -f <keyfile>`
e.g. `ssh-keygen -p -f ~/.ssh/id_rsa`

### References

- A thorough, inspiring, simple, and clean [Linux Desktop Setup](https://hookrace.net/blog/linux-desktop-setup/)
- [5 Best Practices for Securing SSH](https://goteleport.com/blog/5-ssh-best-practices/)