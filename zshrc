# Path to your oh-my-zsh installation.
export ZSH="$PATH/djowinz/.oh-my-zsh"
source ~/.antigen.zsh
source ~/.rvm/scripts/rvm

# Load the oh-my-zsh's library.
antigen use oh-my-zsh

# Bundles from the default repo (robbyrussell's oh-my-zsh).
antigen bundle git
antigen bundle gitfast
antigen bundle heroku
antigen bundle pip
antigen bundle lein
antigen bundle command-not-found

# Syntax highlighting bundle.
antigen bundle zsh-users/zsh-syntax-highlighting ##Syntax Highlighting
antigen bundle StackExchange/blackbox ##GPG BlackBox Encryption Tool
antigen bundle b4b4r07/emoji-cli ##Fun CLI emojis
antigen bundle horosgrisa/mysql-colorize ##Mysql Table colorization
antigen-bundle sharat87/pip-app ##PIP virtualenvs manager
antigen bundle djui/alias-tips ##Alias Tips incase I forget

# Load the theme.
antigen theme bira ##Da best theme ever... period.

# Vim Alias Support
alias v='vim'
alias vi='vim'
alias vim='vim'

# RSA Token Output
alias token='/usr/local/bin/tokengen.sh'
alias lpsql='/Applications/Postgres.app/Contents/Versions/9.4/bin/psql -p5432'

# Alias Support
alias git='hub '
alias glab='gitlab '
alias sudo='sudo '
alias refresh='source ~/.zshrc'
alias activex_zeus='ssh root@10.119.42.225'
alias activex_apollo='sshpass -p "" ssh verys@10.119.159.166'
alias activex_hera='sshpass -p "" ssh verys@10.119.159.167'
alias r='rails'

# Composer Aliases
alias cp_d='composer dumpautoload'
alias cp_u='composer update'
alias cp_i='composer install'
alias cp_r='composer require'
alias cp_su='composer self-update'

# Artisan Alias
alias art='php artisan '

export GOPATH="$HOME/go" #Go Support
export PATH="$PATH/Applications/DevDesktop/drush" #Drush Support
export PATH="$PATH:$HOME/.composer/vendor/bin" #Composer Commands Support
export PATH="$PATH:$GOROOT/bin:$GOPATH/bin" #Go Support
export PATH="$PATH:/bin" #Global Bin Support
export PATH="$PATH:/Applications/Postgres.app/Contents/Versions/9.4/bin" #PostgreSQL Support
export PATH="$PATH:/usr/local/share/npm/bin" #Npm support
export PATH="$PATH:/usr/local/sbin" #Local sBin support
export PATH="$PATH:/usr/local/bin" #Local Bin Support
export PATH="$PATH:/usr/bin" #Global Bin Support
export PATH="$PATH:/usr/sbin" #Global sBin Support
export PATH="$PATH:/Applications/Server.app/Contents/ServerRoot/usr/bin" #OSX Server Bin Support
export PATH="$PATH:/Applications/Server.app/Contents/ServerRoot/usr/sbin" #OSX Server sBin Support
export PATH="$PATH:/usr/local/git/bin" #Git Support
export PATH="$PATH:/Users/djowinz/bin" #User Bin support
export PATH="$PATH:/Library/Python/2.5/site-packages/django/bin" #Django Support
export PATH="$PATH:/opt/local/bin" #Opt Local Bin Support
export PATH="$PATH:/Users/djowinz/bin/Mac" #Bin Mac Support
export PATH="$PATH:/Users/djowinz/jars" #Jars Support
export PATH="$PATH:/Users/djowinz/bin" #User created Bin Support
export PATH="$PATH:$HOME/.rvm/bin" # Add RVM to PATH for scripting
export PATH="$PATH:$HOME/.rvm/scripts/rvm" # Add RVM to PATH for scripting

# Tell antigen that you're done.
antigen apply
