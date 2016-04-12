set nocompatible
filetype off

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

let excludes = ["powerline.vim", "youcompleteme.vim", "syntastic.vim"]

for f in split(glob('~/.vim/configs/*.vim'), '\n')
	let path = split(f, "/")
	let filename = path[len(path)-1]
	let inExclude = index(excludes, filename)
	if inExclude < 0
		exe 'source' f
	else
		echo "Skipping... " . filename
	endif
endfor

call vundle#end()
filetype plugin indent on
