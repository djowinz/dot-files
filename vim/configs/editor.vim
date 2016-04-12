syntax on
set number
set noswapfile
set nobackup
set nowritebackup
set modifiable
set laststatus=2
set hlsearch
set incsearch
set relativenumber
set showmode
set tabstop=2
set shiftwidth=2
set smarttab
set tags=tags
set softtabstop=2
set expandtab
set shiftround
set autoindent
set copyindent
set ignorecase
set smartcase
set backspace=indent,eol,start
set timeout timeoutlen=100 ttimeoutlen=0
set visualbell
set noerrorbells
set autowrite
set mouse=a
set showcmd

filetype plugin indent on

" Color Scheme
set background=dark
colorscheme onedark

nnoremap <C-v> "+P=']
inoremap <C-v> <C-o>'+P<C-o>=']

set backspace=2 " make backspace work like most other apps

" Yank to global register
set clipboard=unnamed

set backupdir=~/.tmp/backup//
set directory=~/.tmp/swap//
set undodir=~/.tmp/undo//

autocmd cursorhold * set nohlsearch
autocmd cursormoved * set hlsearch

abbrev gm !php artisan generate:model
abbrev gc !php artisan generate:controller
abbrev gmig !php artisan generate:migration

autocmd BufWritePre *.php :%s/\s\+$//e
nmap ,todo :e todo.txt<cr>
