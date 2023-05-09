# macOS

#### Dark Menubar and Dock but overall Light Theme.

1. System Preferences, then set the theme to `LIGHT`, then run
2. `defaults write -g NSRequiresAquaSystemAppearance -bool Yes`
3. Logout, then System Preferences, then set the theme to `DARK`.

Reset back to the default theme.\
`defaults write -g NSRequiresAquaSystemAppearance -bool No`

---
#### Disable Dock Auto Hide Animation

`defaults write com.apple.dock autohide-time-modifier -int 0;killall Dock`

Reset Back to Default\
`defaults delete com.apple.dock autohide-time-modifier;killall Dock`

#### Clean up the "Open With" Menu
`/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user`

#### Flush DNS Cache

`sudo dscacheutil -flushcache`

#### Backup Mail Autocomplete Database

Copy Mail's autocomplete database to a new Mac. Via [MacWorld](http://www.macworld.com/article/162910/2011/10/copy_mails_autocomplete_database_to_a_new_mac.html)

1. Go to the folder "~/Library/Application Support/AddressBook/"
2. Get the file "MailRecents-v4.abcdmr"

#### List All Apps Downloaded from App Store

Via find
`find /Applications -path '*Contents/_MASReceipt/receipt' -maxdepth 4 -print |\sed 's#.app/Contents/_MASReceipt/receipt#.app#g; s#/Applications/##'`

Via Spotlight
`mdfind kMDItemAppStoreHasReceipt=1`

Show External IP Address
Works if your ISP doesn't replace DNS requests (which it shouldn't).
`dig +short myip.opendns.com @resolver1.opendns.com`

Alternative that works on all networks.
`curl -s https://api.ipify.org && echo`

Show Network Interface Information
`scutil --nwi`

Expand Print Panel by Default
```
defaults write -g PMPrintingExpandedStateForPrint -bool true && \
defaults write -g PMPrintingExpandedStateForPrint2 -bool true
```

Quit Printer App After Print Jobs Complete
`defaults write com.apple.print.PrintingPrefs "Quit When Finished" -bool true`

#### Screenshots

`defaults write com.apple.screencapture location <custom-folder-location>`

---
#### Block Sites

`sudo nano /etc/hosts`

Add `0.0.0.0 siteToBlock.com`\
Save > Exit (CTRL + x > y)

---
#### References

- [Mac keyboard shortcuts](https://support.apple.com/en-au/HT201236)
- [Awesome macOS Command Line](https://git.herrbischoff.com/awesome-macos-command-line/about/) ([archive](https://archive.ph/PXzE7))