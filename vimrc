set nocompatible			" be iMproved, required
filetype off				" required

" set the runtime path to include Vundle and initalize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" Vim status line - Air Line
Plugin 'bling/vim-airline'
Plugin 'vim-airline/vim-airline-themes'

" Git Gutter
Plugin 'airblade/vim-gitgutter'

" PHP Vim Support
"Plugin 'shawncplus/phpcomplete.vim'
"Plugin 'ervandew/supertab'
"Plugin 'arnaud-lb/vim-php-namespace'

" Blade Vim Support
"Plugin 'xsbeats/vim-blade'

" TMUX Vim support
"Plugin 'christoomey/vim-tmux-navigator'

" Nerd Tree support
" Plugin 'scrooloose/nerdtree'
" Plugin 'Xuyuanp/nerdtree-git-plugin'

" Search Support
Plugin 'ctrlpvim/ctrlp.vim'

" NERD Commenter Support
Plugin 'The-NERD-Commenter'

" Javascript Support
Plugin 'pangloss/vim-javascript'

" JSON Support
Plugin 'elzr/vim-json'

" Jade Support
Plugin 'digitaltoad/vim-jade'

" Multi Line Editing
Plugin 'terryma/vim-multiple-cursors'

" SASS Syntax Highlighting
Plugin 'cakebaker/scss-syntax.vim'

" Fugitive Git Support
Plugin 'tpope/vim-fugitive.git'

" Editor Config
"Plugin 'editorconfig/editorconfig-vim'

" Auto Completion support
"Plugin 'Valloric/YouCompleteMe'

" Syntastic Support
"Plugin 'https://github.com/scrooloose/syntastic'

" Syntastic Feature Support
" Vim theme Solarized
"Bundle 'Shougo/vimproc'
"Bundle 'Shougo/unite.vim'
" Bundle 'm2mdas/phpcomplete-extended'
"Bundle 'altercation/vim-colors-solarized'
"Bundle 'vim-ruby/vim-ruby'

call vundle#end()
filetype plugin indent on
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line


" Incase we want to exclude files specifically.
let excludes = ["powerline.vim"]

" Lets map all of our configs to separate files to keep things clear.
for f in split(glob('~/.vim/configs/*.vim'), '\n')
	let path = split(f, "/")
	let filename = path[4]
	let inExclude = index(excludes, filename)
	if inExclude < 0
		exe 'source' f
	else
		echo "Skipping... " . filename
	endif
endfor

" Just a quick toggle for syntax highlighting.... because HOLLAA!!!
function! ToggleSyntax()
   if exists("g:syntax_on")
      syntax off
	echo "AW ;_;"
   else
      syntax enable
	echo "HOLLA <3"
   endif
endfunction

" Silent mapp yooo.
nmap <silent>  ;s  :call ToggleSyntax()<CR>


