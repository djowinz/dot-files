let mapleader = ","
let g:mapleader = ","

nmap <leader>w :w!<cr>
nmap <space> zz

nnoremap j gj
nnoremap k gk

noremap <Up> <Nop>
noremap <Down> <Nop>
noremap <Left> <Nop>
noremap <Right> <Nop>

imap jj <ESC>

nnoremap ,cd :cd %:p:h<CR>:pwd<CR>

nnoremap <esc> :noh<return><esc>
nnoremap <esc>^[ <esc>^[

nmap <C-h> <C-w>h
nmap <C-j> <C-w>j
nmap <C-k> <C-w>k
nmap <C-l> <C-w>l

nmap <C-v> :vertical resize +5<cr>
nmap 25 :vertical resize 40<cr>
nmap 50 <c-w>=
nmap 75 :vertical resize 120<cr>

nmap <C-t> :tabe<cr>
nmap <leader>] :tabn<cr>
nmap <leader>[ :tabp<cr>

nnoremap <leader>me :split $MYVIMRC<cr>

nmap ,c :!open -a Google\ Chrome<cr>
nmap :sp :rightbelow sp<cr>
nmap :bp :BufSurfBack<cr>
nmap :bn :BufSurfForward<cr>

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
