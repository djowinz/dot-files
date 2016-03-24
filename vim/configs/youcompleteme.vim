" Auto Completion support
Plugin 'Valloric/YouCompleteMe'

let g:ycm_python_binary_path = '/usr/local/bin/python3'
autocmd CursorMovedI * if pumvisible() == 0|pclose|endif
autocmd InsertLeave * if pumvisible() == 0|pclose|endif
