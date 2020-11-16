# macOS

## Setup a new Mac

Transfer From old MacOS
- Root: Invisible Files/Folders
- Applications (Better to install the apps afresh)
- Library (both user and root)

## OS Defaults

Dark Menubar and Dock in Light Theme
1. Set theme to Light, then run
2. `defaults write -g NSRequiresAquaSystemAppearance -bool Yes`
3. Logout and Choose “Dark Mode".

Revert to Default Dark Theme
$ defaults write -g NSRequiresAquaSystemAppearance -bool No

Disable Dock Auto Hide Animation
$ defaults write com.apple.dock autohide-time-modifier -int 0;killall Dock
Reset to Default
$ defaults delete com.apple.dock autohide-time-modifier;killall Dock

Clean up the "Open With" Menu (Relaunch Finder afterwards)
$ /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user

Flush DNS Cache
$ sudo dscacheutil -flushcache
$ sudo dscacheutil -statistics (for some stats)

Disable/Enable Local TimeMachine Backup
$ sudo tmutil disablelocal
$ sudo tmutil enablelocal

Copy Mail's autocomplete database to a new Mac
http://www.macworld.com/article/162910/2011/10/copy_mails_autocomplete_database_to_a_new_mac.html
1. Go to the folder "~/Library/Application Support/AddressBook/"
2. Get the file "MailRecents-v4.abcdmr"

Prevent .DS_Store file creation on network volumes
http://hints.macworld.com/article.php?story=2005070300463515
$ defaults write com.apple.desktopservices DSDontWriteNetworkStores true

Check your current setting
$ pmset -g

Disable Dashboard
$ defaults write com.apple.dashboard mcx-disabled -boolean true
$ killall Dock

Enable Dashboard
$ defaults write com.apple.dashboard mcx-disabled -boolean false
$ killall Dock

Stop Quicktime and Preview from Auto-Restoring What You Left Open
// preview
$ defaults write com.apple.Preview NSQuitAlwaysKeepsWindows -bool false
// quicktime
$ defaults write com.apple.QuickTimePlayerX NSQuitAlwaysKeepsWindows -bool false

// autoplay quicktime
$ defaults write com.apple.QuickTimePlayerX MGPlayMovieOnOpen 1
// reset to default
$ defaults write com.apple.QuickTimePlayerX MGPlayMovieOnOpen 0

To disable listing recent items for VLC in the future, run the following commands in Terminal:
$ defaults write org.videolan.vlc NSRecentDocumentsLimit 0
$ defaults write org.videolan.vlc.LSSharedFileList RecentDocuments -dict-add MaxAmount 0

Disable Graphic Window Animations/Effects
$ defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool false

Expanded Save Dialog as Default in Mac OS X
$ defaults write -g NSNavPanelExpandedStateForSaveMode -bool TRUE

Change default appointment duration in iCal (Calendar)
$ defaults write com.apple.iCal 'Default duration in minutes for new event' 15
Revert to default
$ defaults delete com.apple.iCal "Default duration in minutes for new event"

Screenshot location
$ defaults write com.apple.screencapture location ~/Dropbox/Screenshots
$ killall SystemUIServer

Dock Appear Instantly
$ defaults write com.apple.Dock autohide-delay -float 0 && killall Dock
Default
$ defaults delete com.apple.Dock autohide-delay && killall Dock

Disable Crash reporting
$ defaults write com.apple.CrashReporter DialogType none
Enable it again
$ defaults write com.apple.CrashReporter DialogType crashreport

Default "Plain text" in TextEdit
$ defaults write com.apple.TextEdit RichText -int 0
Revert to default
$ defaults delete com.apple.TextEdit RichText

Disable animations when opening and closing windows
$ defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool false

Disable animations when opening a Quick Look window
$ defaults write -g QLPanelAnimationDuration -float 0

Disable animation when opening the Info window in OS X Finder (cmd⌘ + i)
$ defaults write com.apple.finder DisableAllAnimations -bool true

Disable animations when you open an application from the Dock.
$ defaults write com.apple.dock launchanim -bool false

Make all animations faster that are used by Mission Control.
$ defaults write com.apple.dock expose-animation-duration -float 0.1

## Block sites at /etc/hosts (replace nano with any editor you want)
Replace `nano` with editor of your choice
$ sudo nano /etc/hosts
Add `0.0.0.0 site.xyz`, save and exit.
