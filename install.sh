#!/bin/bash
isInstalled() {
  command -v "$1" >/dev/null 2>&1 
}

# Reset
Color_Off='\033[0m'       # Text Reset

# Regular Colors
Black='\033[0;30m'        # Black
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green
Yellow='\033[0;33m'       # Yellow
Blue='\033[0;34m'         # Blue
Purple='\033[0;35m'       # Purple
Cyan='\033[0;36m'         # Cyan
White='\033[0;37m'        # White

# Bold
BBlack='\033[1;30m'       # Black
BRed='\033[1;31m'         # Red
BGreen='\033[1;32m'       # Green
BYellow='\033[1;33m'      # Yellow
BBlue='\033[1;34m'        # Blue
BPurple='\033[1;35m'      # Purple
BCyan='\033[1;36m'        # Cyan
BWhite='\033[1;37m'       # White

# Underline
UBlack='\033[4;30m'       # Black
URed='\033[4;31m'         # Red
UGreen='\033[4;32m'       # Green
UYellow='\033[4;33m'      # Yellow
UBlue='\033[4;34m'        # Blue
UPurple='\033[4;35m'      # Purple
UCyan='\033[4;36m'        # Cyan
UWhite='\033[4;37m'       # White

# Background
On_Black='\033[40m'       # Black
On_Red='\033[41m'         # Red
On_Green='\033[42m'       # Green
On_Yellow='\033[43m'      # Yellow
On_Blue='\033[44m'        # Blue
On_Purple='\033[45m'      # Purple
On_Cyan='\033[46m'        # Cyan
On_White='\033[47m'       # White

# High Intensity
IBlack='\033[0;90m'       # Black
IRed='\033[0;91m'         # Red
IGreen='\033[0;92m'       # Green
IYellow='\033[0;93m'      # Yellow
IBlue='\033[0;94m'        # Blue
IPurple='\033[0;95m'      # Purple
ICyan='\033[0;96m'        # Cyan
IWhite='\033[0;97m'       # White

# Bold High Intensity
BIBlack='\033[1;90m'      # Black
BIRed='\033[1;91m'        # Red
BIGreen='\033[1;92m'      # Green
BIYellow='\033[1;93m'     # Yellow
BIBlue='\033[1;94m'       # Blue
BIPurple='\033[1;95m'     # Purple
BICyan='\033[1;96m'       # Cyan
BIWhite='\033[1;97m'      # White

# High Intensity backgrounds
On_IBlack='\033[0;100m'   # Black
On_IRed='\033[0;101m'     # Red
On_IGreen='\033[0;102m'   # Green
On_IYellow='\033[0;103m'  # Yellow
On_IBlue='\033[0;104m'    # Blue
On_IPurple='\033[0;105m'  # Purple
On_ICyan='\033[0;106m'    # Cyan
On_IWhite='\033[0;107m'   # White

array=('curl' 'brew' 'git' 'hub' 'zsh' 'vim' 'vagrant' 'ansiweather' 'virtualbox')
install_packages=y

read -t 300 -n 1 -p $'\033[0;95m Do you want to install packages? (Y/n)\033[0m ' install_packages

if [[ "$install_packages" == "y" || "$install_packages" == "Y" ]] ;
then
  for i in "${array[@]}"
  do
    if isInstalled $i; then
      printf "\033[4;32m $i already installed... \e[m \n\n"
    else
      case $i in
        'brew')
          printf "${BPurple} Installing Brew... ${Color_Off} \n\n"
          $(/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)")
          ;;
        'curl')
          printf "${On_IRed} This script requires curl be installed exiting... ${Color_Off} \n\n"
          exit
          ;;
        'git')
          printf "${BPurple} Installing Git... ${Color_Off} \n\n"
          $(brew install git >/dev/null)
          ;;
        'hub')
          printf "${BPurple} Installing Hub... ${Color_Off} \n\n"
          $(brew install hub >/dev/null)
          ;;
        'zsh')
          printf "${BPurple} Installing Zsh... ${Color_Off} \n\n"
          $(brew install hub >/dev/null)
          printf "${BYellow} Copy shell to etc directory... ${Color_Off} \n\n"
          $(cp /usr/local/bin/zsh /etc/shells)
          printf "${BYellow} Changing shell to zsh for ${whoami}... ${Color_Off} \n\n" 
          $(chsh -s zsh $whoami >/dev/null)
          ;;
        'vim')
          printf "${BPurple} Installing vim... ${Color_Off} \n\n"
          $(brew install vim >/dev/null)
          ;;
        'vagrant')
          printf "${BPurple} Installing Vagrant ... ${Color_Off} \n\n"
          $(brew cask install vagrant >/dev/null)
          $(brew cask install vagrant-manager >/dev/null)
          ;;
        'virtaulbox')
          printf "${BPurple} Installing virtaulbox ... ${Color_Off} \n\n"
          $(brew cask install virtualbox >/dev/null)
          ;;
        'ansiweather')
          printf "${BPurple} Installing ansiweather... ${Color_Off} \n\n"
          $(brew install ansiweather >/dev/null)
          ;;
      esac
    fi
  done
else
  printf "\n\n \033[0;101m Exiting script \e[m"
  exit 1;
fi

printf "\033[0;93m All packages Installed moving items into place \n\n \e[m"
printf "\033[0;93m Checking if dot-files have been cloned \n\n \e[m"

usualPlaces=('Sites' 'work' 'projects' 'work/verys', 'Google\ Code', 'Google\ Code/verys' 'Sites/work' 'Sites/verys/' '~' 'code' 'proj')

printf "\033[0;93m Checking In usual places \n\n ${usualPlaces} \e[m \n\n"

movedIntoPlace=0
copyDotFiles() {
  printf "${BPurple} Moving items into place \n\n"
  $(cp -R vim ~/.vim)
  printf "Moved vim directory into place \n\n"
  $(cp vimrc ~/.vimrc)
  printf "Moved vimrc into place \n\n"
  $(cp -R atom ~/.atom)
  printf "Moved atom into place \n\n"
  $(cp pryrc ~/.pryrc)
  printf "Moved atom into place \n\n ${Color_Off}"
  movedIntoPlace=1
}

for z in "${usualPlaces[@]}" 
do
  if ((${movedIntoPlace} < 1)); then
    if [ -d ~/$z/dot-files ]; then
      printf "${BPurple} Found in $z folder ${Color_Off}\n\n"
      copy_files=y
      read -t 300 -n 1 -p $'\033[0;95m Do you want to copy these files over? (Y/n)\033[0m ' copy_files
      if [[ "$copy_files" == "y" || "$copy_files" == "Y" ]]; then
        $(cd ~/$z/dot-files)
        copyDotFiles
      else
        printf "${BRed} Alrighty than!! Exiting... \n\n ${Color_Off}"
        exit 1;
      fi
    else
      printf "\033[0;101m Not Found in $z folder \n\n continuing.. \e[m \n\n"
    fi
  fi
done

if ((${movedIntoPlace} < 1)); then
  printf "${BPurple} Can't find in normal places cloning into Sites ${Color_Off} \n\n"
  if [ -d ~/Sites ]; then
    printf "Sites exists, changing into that directory \n\n"
    $(cd ~/Sites)

    printf "Cloning repo \n\n"
    $(git clone git@github.com:djowinz/dot-files.git)
    read -t 300 -n 1 -p $'\033[0;95m Do you want to copy these files over? (Y/n)\033[0m ' copy_files
    if [[ "$copy_files" == "y" || "$copy_files" == "Y" ]]; then
      $(cd ~/Sites/dot-files)
      copyDotFiles
    else
      printf "${BRed} Alrighty than!! Exiting... \n\n ${Color_Off}"
      exit 1;
    fi
  else
    printf "Sites doesn't exists, creating directory \n\n"
    $(cd ~)
    $(mkdir -p Sites)
    $(chmod -R 777 Sites)
    printf "Sites directory created \n\n"
    $(cd ~/Sites)

    printf "Cloning repo \n\n"
    $(git clone git@github.com:djowinz/dot-files.git)
    read -t 300 -n 1 -p $'\033[0;95m Do you want to copy these files over? (Y/n)\033[0m ' copy_files
    if [[ "$copy_files" == "y" || "$copy_files" == "Y" ]]; then
      $(cd ~/Sites/dot-files)
      copyDotFiles
    else
      printf "${BRed} Alrighty than!! Exiting... \n\n ${Color_Off}"
      exit 1;
    fi
  fi
fi

printf "${BCyan}Everything is all finished, items copied, ready to dev! ${Color_Off} \n\n"
