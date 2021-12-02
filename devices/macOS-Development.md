# macOS Development

### References

- [macOS Setup Guide](http://sourabhbajaj.com/mac-setup/)
- [macOS Dev Setup](https://github.com/nicolashery/mac-dev-setup)
- [Set Mac for Web Development in 2020](https://medium.com/better-programming/setting-up-your-mac-for-web-development-in-2020-659f5588b883)

---
## Install Xcode
$ xcode-select --install

## Setup Dotfiles in the root folder
git clone git@github.com:brajeshwar/dotfiles.git dot

Dotfiles References
- https://github.com/webpro/awesome-dotfiles
- https://github.com/mathiasbynens/dotfiles

---
## Terminal

Setup to make the default Apple Terminal work with the basic theme, zsh, etc.
Then move up to [iTerm2](https://www.iterm2.com) for much heavier development setup.

One should be able to do quick stuffs with terminal and still continue to serve as the default Terminal.

Remove the "Last Login Message" in terminal
$ touch .hushlogin

[Terminals Are Sexy](https://terminalsare.sexy)

### [Brew](https://brew.sh/)

Installing from a text file list
```
$ brew install $(cat packages.txt)
or
$ brew install $(<packages.txt)
```

## IDE

- [Sublime Text](https://www.sublimetext.com)
  + Setup Sync
  + Setup Subl
    $ ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/sublime
- http://sourabhbajaj.com/mac-setup/SublimeText/
- [Recommended Plugins](http://sourabhbajaj.com/mac-setup/SublimeText/Plugins.html)
- Setup MarkDown
  + Install [MarkDownEditing](https://packagecontrol.io/packages/MarkdownEditing)

---
## Python

- https://github.com/nicolashery/mac-dev-setup#python
- http://sourabhbajaj.com/mac-setup/Python/

---
## Ruby

- https://github.com/nicolashery/mac-dev-setup#ruby
- http://sourabhbajaj.com/mac-setup/Ruby/

---

## Node

- https://github.com/nicolashery/mac-dev-setup#nodejs
