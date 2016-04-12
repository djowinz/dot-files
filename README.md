# Dot Files yeeeeee
I basically had a setup that I loved, got a new computer than realized all setup stuff was on my other machine. I didn't want to port everything over so I built this little repo, it's not the greatest, but I'm happy with it and it does what it needs to. A lot of my inspiration for this came from [mathiasbynens/dotfiles] as well as [holman/dotfiles]. If you have time check those guys out, they both have amazing dot file configurations and hopefully mine will be as good as theirs! ♥

##### Use at your own risk!
To install everything:
```sh
git clone git@github.com:djowinz/dot-files.get && cd dot-files
chmod a+x scripts/install.sh && scripts/install.sh
```

The installation will walk you through a serious of questions and will even backup your old settings. Even so, please still make a manual backup of your files before attempting this as it will overwrite specific files that may not be accounted for in the script.

I will eventually create a global installation for linux as well. This is only meant for max os x as it uses brew, but since I've found Linuxbrew to be almost exactly like Mac OS X's brew It should expidite this tremendously.

## Lastly...
I really encourage feedback pull request, I want to make this better and I know it takes a village to raise a baby. Seeing how this baby is in it's infancy I look largely to people to give me constructive criticism and feedback. I haven't done everything perfect here, but it's my valiant attempt to simplify and streamline my setup.

#### Todos
##### Installation script(s)
 - Implement system detection to determine which install script to use.
 - Implement linux / BSD install script file.
 - Seperate install functions commands into functions to simplify the script
 - Improve back up detection so when running the script files aren't removed unintentionally unbeknownst to the user.
 - Improve prompt sectinos, so that certian pieces can be either installed / not installed.
##### Organization
 - Make the directory structure more topical, so that each directory servers a single purpose. For one ensure that the zsh directory is solely responsible for zsh methods.
 - Generate a .functions script on install that concatenates all function/*.bash files into one.
 - Improve symlink system so that symlinks can be autocompiled at initialization.

##### All Tech / Tools Installed Listed:
 - [Brew]
 - [Stoken]
 - [GPG Encryption]
 - [cURL]
 - [Git]
 - [hub]
 - [zsh]
   - [oh My ZSH]
   - [antigen]
   - [blackbox]
 - [vagrant]
 - [virtualbox]
 - [rbenv]
 - [vim]
   - [Vundle]
   - [Airline]
   - [ctrlP]
   - [fugitive]
   - [gitgutter]
   - [emmet]
   - [pug-jade]
   - [javascript-support]
   - [json-support]
   - [multiplecursors]
   - [rails-vim]
   - [ruby-vim]
   - [scss/sass support]
   - [syntastic]
   - [taghighlighter]
   - [YouCompleteMe]

##### Version
1.0.5b

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [mathiasbynens/dotfiles]: <https://github.com/mathiasbynens/dotfiles>
   [holman/dotfiles]: <https://github.com/holman/dotfiles>
   [Brew]: <http://brew.sh/>
   [Stoken]: <https://sourceforge.net/p/stoken/wiki/Home/>
   [GPG Encryption]: <https://www.gnupg.org/>
   [cURL]: <https://curl.haxx.se/>
   [Git]: <https://github.com/>
   [hub]: <https://hub.github.com/>
   [zsh]: <http://www.zsh.org/>
   [oh My ZSH]: <https://github.com/robbyrussell/oh-my-zsh>
   [antigen]: <https://github.com/zsh-users/antigen>
   [blackbox]: <https://github.com/StackExchange/blackbox>
   [vagrant]: <https://www.vagrantup.com/>
   [virtualbox]: <https://www.virtualbox.org/wiki/Downloads>
   [rbenv]: <https://github.com/rbenv/rbenv>
   [vim]: <http://www.vim.org/>
   [Vundle]: <https://github.com/VundleVim/Vundle.vim>
   [Airline]: <https://github.com/vim-airline/vim-airline>
   [ctrlP]: <https://github.com/kien/ctrlp.vim>
   [fugitive]: <https://github.com/tpope/vim-fugitive>
   [gitgutter]: <https://github.com/airblade/vim-gitgutter>
   [emmet]: <https://github.com/mattn/emmet-vim>
   [pug-jade]: <https://github.com/digitaltoad/vim-pug>
   [javascript-support]: <https://github.com/pangloss/vim-javascript>
   [json-support]: <https://github.com/elzr/vim-json>
   [multiplecursors]: <https://github.com/terryma/vim-multiple-cursors>
   [rails-vim]: <https://github.com/tpope/vim-rails>
   [ruby-vim]: <https://github.com/vim-ruby/vim-ruby>
   [scss/sass support]: <https://github.com/cakebaker/scss-syntax.vim>
   [syntastic]: <https://github.com/scrooloose/syntastic>
   [taghighlighter]: <https://github.com/vim-scripts/TagHighlight>
   [YouCompleteMe]: <https://github.com/Valloric/YouCompleteMe>
