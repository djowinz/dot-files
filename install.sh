#!/bin/bash
isInstalled() {
  command -v "$1" >/dev/null 2>&1 
}

sp="/-\|"
sc=0
spin() {
  printf "\b${sp:sc++:1}"
  ((sc==${#sp})) && sc=0
}
endspin() {
  printf "\r%s\n" "$@"
}

spin
# Reset
Color_Off='\033[0m'       # Text Reset

# Bold High Intensity
BIGreen='\033[1;92m'
BIRed='\033[1;91m'        # Red
BIYellow='\033[1;93m'     # Yellow
BIPurple='\033[1;95m'     # Purple
BICyan='\033[1;96m'       # Cyan

# High Intensity backgrounds
On_IRed='\033[0;101m'     # Red

array=('curl' 'brew' 'git' 'hub' 'zsh' 'vim' 'gpg' 'vagrant' 'ansiweather' 'virtualbox' 'rbenv' 'stoken')
install_packages=y

read -t 300 -n 1 -p $'\033[0;95m Do you want to install packages? (Y/n)\033[0m \n\n' install_packages

if [[ "$install_packages" == "y" || "$install_packages" == "Y" ]] ;
then
  for i in "${array[@]}"
  do
    if isInstalled $i; then
      printf "${BIGreen} $i already installed... ${Color_Off} \n\n"
    else
      case $i in
        'brew')
          printf "${BIPurple} Installing Brew... ${Color_Off} \n\n"
          $(/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)")
          ;;
        'curl')
          printf "${On_IRed} This script requires curl to be installed, exiting... ${Color_Off} \n\n"
          exit 1;
          ;;
        'git')
          printf "${BIPurple} Installing Git... ${Color_Off} \n\n"
          $(brew install git >/dev/null)
          ;;
        'hub')
          printf "${BIPurple} Installing Hub... ${Color_Off} \n\n"
          $(brew install hub >/dev/null)
          ;;
        'zsh')
          printf "${BIPurple} Installing Zsh... ${Color_Off} \n\n"
          $(brew install hub >/dev/null)
          printf "${BIYellow} Copy shell to etc directory... ${Color_Off} \n\n"
          $(cp /usr/local/bin/zsh /etc/shells)
          printf "${BIYellow} Changing shell to zsh for ${whoami}... ${Color_Off} \n\n" 
          $(chsh -s zsh $whoami >/dev/null)
          ;;
        'vim')
          printf "${BIPurple} Installing vim... ${Color_Off} \n\n"
          $(brew install vim >/dev/null)
          ;;
        'vagrant')
          printf "${BIPurple} Installing Vagrant ... ${Color_Off} \n\n"
          $(brew cask install vagrant >/dev/null)
          $(brew cask install vagrant-manager >/dev/null)
          ;;
        'virtaulbox')
          printf "${BIPurple} Installing virtaulbox ... ${Color_Off} \n\n"
          $(brew cask install virtualbox >/dev/null)
          ;;
        'ansiweather')
          printf "${BIPurple} Installing ansiweather... ${Color_Off} \n\n"
          $(brew install ansiweather >/dev/null)
          ;;
        'gpg')
          printf "${BIPurple} Installing GPG... ${Color_Off} \n\n"
          $(brew install gpg >/dev/null)
          $(brew install gpg-agent >/dev/null)
          ;;
        'rbenv')
          printf "${BIPurple} Installing rbenv... ${Color_Off} \n\n"
          $(brew install rbenv >/dev/null)
          $(rbenv init)
          ;;
        'stoken')
          printf "${BIPurple} Installing stoken... ${Color_Off} \n\n"
          $(brew install stoken >/dev/null)
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
  printf "${BIPurple} Moving items into place \n\n"
  if [ -d ~/.vim ]; then
    printf "Moved vim directory into place \n\n"
    $(yes | rm -rf ~/.vim)
    $(yes | cp -iRv vim ~/.vim)
  else
    printf "Moved vim directory into place \n\n"
    $(yes | cp -iRv vim ~/.vim)
  fi
  
  printf "Grabbing Vundle... \n\n"
  $(git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim)

  $(cp vimrc ~/.vimrc)
  printf "Moved vimrc into place \n\n"
  if [ -d ~/.atom ]; then
    printf "Moved atom into place \n\n"
    $(yes | rm -rf ~/.atom)
    $(yes | cp -iRv atom ~/.atom)
  else
    printf "Moved atom into place \n\n"
    $(yes | cp -iRv atom ~/.atom)
  fi
  
  $(cp pryrc ~/.pryrc)
  printf "Moved .pryrc into place... \n\n"
  movedIntoPlace=1

  printf "Installing Plugins \n\n ${Color_Off}"
  $(vim -c 'PluginInstall' -c 'qa!' >/dev/null)
}

for z in "${usualPlaces[@]}" 
do
  if ((${movedIntoPlace} < 1)); then
    if [ -d ~/$z/dot-files ]; then
      printf "${BIPurple} Found in $z folder ${Color_Off}\n\n"
      copy_files=y
      read -t 300 -n 1 -p $'\033[0;95m Do you want to copy these files over? (Y/n)\033[0m \n\n' copy_files
      if [[ "$copy_files" == "y" || "$copy_files" == "Y" ]]; then
        $(cd ~/$z/dot-files)
        copyDotFiles
      else
        printf "${BIRed} Alrighty than!! Exiting... \n\n ${Color_Off}"
        exit 1;
      fi
    else
      printf "\033[0;101m Not Found in $z folder \n\n continuing.. \e[m \n\n"
    fi
  fi
done

if ((${movedIntoPlace} < 1)); then
  printf "${BIPurple} Can't find in normal places cloning into Sites ${Color_Off} \n\n"
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
      printf "${BIRed} Alrighty than!! Exiting... \n\n ${Color_Off}"
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
      printf "${BIRed} Alrighty than!! Exiting... \n\n ${Color_Off}"
      exit 1;
    fi
  fi
fi

printf "${BIPurple}Decrypting ZSHRC file, do you have privileges, we shall see! ${Color_Off} \n\n"
passphrase=""
read -s -p $'\033[0;95m We need your gpg password to decrypt the file! (GPG Passphrase)\033[0m \n\n' passphrase
if gpg --batch --passphrase "${passphrase}" -d "zshrc.gpg" &>/dev/null ; then
  printf "${BIPurple}Looks like you have access, decrypting file.${Color_Off} \n\n"
  $(gpg --passphrase ${passphrase} zshrc.gpg >/dev/null)
  printf "\n\n ${BIPurple}Moving ZSH into it's correct place... ${Color_Off} \n\n"
  $(cp zshrc ~/.zshrc)
else
  printf "${BRed}Looks like you don't have access, we will need to use the default ZSHRC template... ${Color_Off} \n\n"
  $(cp zshrc-default ~/.zshrc)
fi

printf "${BIPurple}Copying tokengen to correct place... ${Color_Off} \n\n"
$(cp -R tokengen.sh /usr/local/bin)
$(chmod 777 /usr/local/bin/tokengen.sh)
endspin
printf "${BICyan}Everything's all finished, items copied, ready to dev! ${Color_Off} \n\n"
printf "${BIYellow}Don't forget to run \$(source ~/.zshrc) for ZSH changes to take effect! ${Color_Off} \n\n"

