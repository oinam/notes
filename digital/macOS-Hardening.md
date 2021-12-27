# Hardening macOS

## Why?

1. There are bad guys out there, who want to steal your data, your money, your identity, your time… Those bad guys come from very different backgrounds, some are known as criminals, others as governments or ad companies.
2. Your device is not secure, and never will be. I’m not going to lie to you, this guide ain’t no silver bullet, there’s no such thing as a completely secure system. That said, you can make it a lot harder for the bad guys to steal what’s yours, that’s what this guide is made for.

## Install a fresh copy of macOS

The best way we have to ensure we are free of unsolicited software is by starting off clean:
1. Boot into Recovery Mode (hold command + R during boot)
2. Format the boot drive and install macOS from scratch (Warning: this step will permanently delete all files in the boot drive)

### First boot

1. Clear the NVRAM (hold command + P + R during boot)
2. Create an administrator user account with a strong password and no hint
3. Go to System Preferences > Sharing and anonymize the computer’s name, this name can be see by those connected to the same network
4. Go to System Preferences > Users & Groups and create an unprivileged user account for day-to-day use
5. Go to System Preferences > Security & Privacy > General and set Require password after sleep to 5 seconds
6. Go to System Preferences > Security & Privacy > General and set Allow apps downloaded from to App Store and identified developers
7. Go to System Preferences > Security & Privacy > Firewall and turn on the firewall
8. Go to System Preferences > Security & Privacy > Firewall > Firewall Options… and check Block all incoming connections
9. Go to System Preferences > Security & Privacy > Privacy > Location and uncheck Enable Location Services
10. Go to System Preferences > Security & Privacy > Privacy > Analytics and uncheck Share Mac Analytics
11. Go to System Preferences > Network > Advanced > DNS, set DNS Servers to 1.1.1.1 and 8.8.8.8 and remove all other servers
12. Go to System Preferences > Spotlight > Search Results and uncheck Spotlight Suggestions and Allow Spotlight Suggestions in Look up
13. Go to System Preferences > Spotlight > Privacy and blacklist sensitive directories in the Privacy tab (or blacklist the whole drive if you don’t use Spotlight)
14. Go to System Preferences > General and uncheck Allow Handoff between this Mac and your iCloud devices
15. Go to System Preferences > Bluetooth and turn off Bluetooth
16. Go to Finder > Preferences > Advanced and check Show all filename extensions
17. Go to Keychain Access > System Roots and set Trust to Never Trust in untrusted root Certificate Authorities
18. Disable Captive Portal (use your browser instead): $ sudo defaults write /Library/Preferences/SystemConfiguration/com.apple.captive.control Active -bool false
19. Disable Crash Reporter: $ sudo defaults write com.apple.CrashReporter DialogType none
20. Block malicious domain names using the /etc/hosts file (see StevenBlack/hosts)
21. Consider running an outbound firewall such as Little Snitch (proprietary, full-featured) or LuLu (open-source, very basic)
22. Consider doing binary whitelisting with google/santa
23. Go to System Preferences > Security & Privacy > FileVault and turn on FileVault
24. Secure FileVault when on sleep: $ sudo sh -c ‘pmset -a destroyfvkeyonstandby 1; pmset -a hibernatemode 25; pmset -a powernap 0; pmset -a standby 0; pmset -a standbydelay 0; pmset -a autopoweroff 0’
25. Reboot and log back in as the unprivileged user

### Second boot (user)

1. Go to System Preferences > Security & Privacy > Privacy > Camera and remove any app you don’t want to have access to the camera
2. Go to System Preferences > Security & Privacy > Privacy > Microphone and remove any app you don’t want to have access to the microphone
3. Go to System Preferences > Security & Privacy > Privacy > Full Disk Access and remove any app you don’t want to have full-disk access
4. Carefully choose and install a web browser (I recommend Firefox or Safari). Regardless of your browser…
    * …block third-party cookies
    * …disable DNS preloading
    * …disable/uninstall Flash
    * …install an ad blocker (I recommend uBlock Origin)
    * …prevent WebRTC IP leaks (if using uBlock Origin, go to uBlock Origin > Settings and check Prevent WebRTC from leaking local IP addresses)
    * …enable Do Not Track requests
    * …opt-out of telemetry
    * …consider using a privacy-respecting search engine in lieu of Google (I recommend DuckDuckGo)
    * …consider a whitelist approach to JavaScript execution
Note: if using Firefox, check this site on setting up Firefox for privacy and security
Note: if using Safari, go to Safari > Preferences > Search and uncheck “Include Safari Suggestions”
Note: if what you want is anonymity, use The Tor Browser
5. Consider tunneling your traffic through a VPN when connected to untrusted networks (I recommend rolling your own VPN server, or else I really like [Mullvad](https://mullvad.net/en/), see ThatOnePrivacyGuy’s VPN comparison)
6. Consider using a privacy-respecting email service provider (I recommend rolling your own email server, or else FastMail or ProtonMail look promising)
7. Consider setting up PGP/GPG encryption for email regardless of your email service provider

### That’s it?

No.

Again, you don’t have an 100% secure system, you are just a lot harder to screw with than everyone else in the city.
Also, hardening a system is not a one-time job, you must actively backup your data, patch your system, look out for new vulnerabilities… Some general best practices are:
1. Keep your system up-to-date
2. Prohibit physical access to the device from anyone but yourself
3. Encrypt sensitive data on rest and on transit
4. Backup your data, multiple, encrypted (of course) copies of your data in different physical locations
5. Keep your guard up, you are your system’s (and your data’s) last line of defense

### References

- [Guide to securing and improving privacy on macOS](https://github.com/drduh/macOS-Security-and-Privacy-Guide)
