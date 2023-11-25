# macOS

## User Interface

**Dark Theme fro Menubar and Dock but overall Light Theme.**

1. System Preferences, then set the theme to **LIGHT**, then run
2. `defaults write -g NSRequiresAquaSystemAppearance -bool Yes`
3. Logout, then System Preferences, then set the theme to **DARK**.

Reset back to the default theme.\
`defaults write -g NSRequiresAquaSystemAppearance -bool No`

Expand Print Panel by Default
```
defaults write -g PMPrintingExpandedStateForPrint -bool true && \
defaults write -g PMPrintingExpandedStateForPrint2 -bool true
```

Screenshots Location\
`defaults write com.apple.screencapture location <custom-folder-location>`

Quit Printer App After Print Jobs Complete\
`defaults write com.apple.print.PrintingPrefs "Quit When Finished" -bool true`

## Dock

Disable Dock Auto Hide Animation\
`defaults write com.apple.dock autohide-time-modifier -int 0;killall Dock`

Reset Back to Default\
`defaults delete com.apple.dock autohide-time-modifier;killall Dock`

## Menu

Clean up the "Open With" Menu
```
/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user
```

## Misc

Flush DNS Cache
```
sudo killall -HUP mDNSResponder; sudo killall mDNSResponderHelper; sudo dscacheutil -flushcache
```

## Turn off ‘Microsoft AutoUpdate’

check status\
`launchctl print-disabled gui/$(id -u) | grep microsoft`

disable the service\
`launchctl disable gui/$(id -u)/com.microsoft.update.agent`


## Block Websites

1. `sudo nano /etc/hosts`
2. Add `0.0.0.0 siteToBlock.com`
3. Save > Exit (CTRL + x > y)

## References

- [Mac keyboard shortcuts](https://support.apple.com/en-au/HT201236)
- [Awesome macOS Command Line](https://git.herrbischoff.com/awesome-macos-command-line/about/) ([archive](https://archive.ph/PXzE7))