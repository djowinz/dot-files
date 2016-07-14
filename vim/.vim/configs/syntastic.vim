" Syntastic Support (Questioning using this)
Plugin 'https://github.com/scrooloose/syntastic'

set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatusLineFlag()}
set statusline+=%*

let g:syntastic_mode_map = { 'mode': 'active', 'active_filetypes': ['java','javascript','html','sass','scss','ruby','haml'], 'passive_filetypes': ['php'] }

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntasstic_check_on_open = 1
let g:syntastic_check_on_wq = 0

let g:syntastic_javajavac_executable = 'usr/bin/javac'
let g:syntastic_html_tidy_exec = 'usr/local/bin/tidy'

let g:syntastic_javascript_checkers = ['eslint']
let g:syntastic_javascript_eslint_exec = 'eslint_d'

let g:syntastic_php_checkers = ['php', 'phplint', 'phpcs', 'phpmd']

nmap <silent>  ;t :call SyntasticToggleMode()<CR>
