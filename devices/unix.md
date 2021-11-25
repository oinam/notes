# Unix

## Ubuntu (should likely work for other flavors)

// Current OS Release version
`cat /etc/*release`

### Laptop Clampshell mode
https://askubuntu.com/questions/15520/how-can-i-tell-ubuntu-to-do-nothing-when-i-close-my-laptop-lid

`sudo -H gedit /etc/systemd/logind.conf`
If HandleLidSwitch is not set to ignore then change it:
`HandleLidSwitch=ignore`
Restart (will log you off)
`sudo service systemd-logind restart`

OR install gconf2 and run
`gconftool-2 --type string --set /apps/gnome-power-manager/buttons/lid_ac "nothing"`