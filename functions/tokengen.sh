#!/bin/bash

stoken="$(stoken)"
tokenVal="0826${stoken}"
passphrase=""

function_exists() {
  declare -f -F $1 > /dev/null
  return $?
}

case "$OSTYPE" in
  solaris*)
    printf "Can't copy directly to keyboard... \n\n"
    echo $tokenVal
    ;;
  darwin*)
    echo $tokenVal
    $(echo $tokenVal | pbcopy)
    ;;
  linux*)
    if [ function_exists xclip ]; then
      read -s -p $'\033[0;95m We need your gpg password to decrypt the file! (GPG Passphrase)\033[0m \n\n' passphrase
      printf "Installing xclip for easy RSA token copying \n\n"
      if [ function_exists apt-get ]; then
        $(echo $password | sudo -S apt-get install xclip)
      elif [ function_exists yum ]; then
        $(echo $password | sudo -S yum install xclip)
      else
        printf "I have no clue what system you've got but it's a strang one..... \n\n\n"
        exit 1;
      fi
    fi
    echo $tokenVal
    $(echo $tokenVal | xclip)
    ;;
  bsd*)
    printf "Can't copy directly to keyboard... \n\n"
    echo $tokenVal
    ;;
esac
