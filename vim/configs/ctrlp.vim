" Search Support
Plugin 'ctrlpvim/ctrlp.vim'

let g:ctrlp_cache_dir = $HOME . '/.cache/ctrlp'
if executable('ag')
	let g:ctrlp_user_command = 'ag %s -l --nocolor -g ""'
endif

set wildignore+=*/vendor/**
set wildignore+=*/public/forum/**
set wildignore+=*/vendor/**

let g:ctrlp_custom_ignore = 'node_modules\|DS_Store\|git'
