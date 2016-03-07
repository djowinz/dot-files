set statusline+=%#warningmsg#
"set statusline+=%{SyntasticStatusLineFlag()}
set statusline+=%*

let g:syntastic_mode_map = { 'mode': 'passive', 'active_filetypes': [], 'passive_filetypes': [] }

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntasstic_check_on_open = 1
let g:syntastic_check_on_wq = 0

let g:syntastic_javajavac_executable = 'usr/bin/javac'
let g:syntastic_html_tidy_exec = 'usr/local/bin/tidy'
