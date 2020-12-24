#!/bin/bash
# Will's Savethevowels.org Pandoc Generation Script
# Will Styler, 2013

# echo "Removing old Files"
# cd ~/dev/oinam.fyi
# rm *.html
# rm */*.html


echo "Rendering Site"
find . -name \index.md -type f -exec pandoc -B includes/spcvhead -A includes/spcvfoot -o {}.html {} \;

cd ~/Sites/savethevowels/will
find . -name \*.md -type f -exec pandoc -B ~/Sites/savethevowels/includes/willhead -A ~/Sites/savethevowels/includes/willfoot -o {}.html {} \;

cd ~/Sites/savethevowels
find . -depth -name '*.md.html' -execdir bash -c 'mv -i "$1" "${1//md.html/html}"' bash {} \;

rsync -azvhCL --exclude=.DS_Store --exclude=*.md --exclude=*/.DS_Store --exclude=*/_archived/* --delete ~/Sites/savethevowels/ user@server.com:/users/home/user/domains/savethevowels.org/web/public/

echo "w00t!  Upload finished!  Cleaning up."

cd ~/Sites/savethevowels
rm *.html
rm */*.html
