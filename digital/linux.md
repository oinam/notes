# Linux

> [Linux](https://en.wikipedia.org/wiki/Linux) is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds).

## Common Operations

LOTR Calendar
`calendar -f /usr/share/calendar/calendar.lotr -A 365`

Current OS Release version\
`cat /etc/*release`

Change Hostname\
https://phoenixnap.com/kb/ubuntu-20-04-change-hostname

Ubuntu apt-get complains about unverifiable public key signature\
`sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys <KEY>`

Change SSH Key Password\
`ssh-keygen -p -f <keyfile>`
e.g. `ssh-keygen -p -f ~/.ssh/id_rsa`

Change file extension (from .old to .new) recursively inside a folder
`find ./ -depth -name "*.old" -exec sh -c 'mv "$1" "${1%.t1}.new"' _ {} \;`

### References

- A thorough, inspiring, simple, and clean [Linux Desktop Setup](https://hookrace.net/blog/linux-desktop-setup/)
- [5 Best Practices for Securing SSH](https://goteleport.com/blog/5-ssh-best-practices/)
- [Bash One-Liners and terminal tricks](https://github.com/onceupon/Bash-Oneliner)

