if !exists('g:polyglot_disabled') || index(g:polyglot_disabled, 'haml') == -1
  
" Vim filetype plugin
" Language:	SCSS
" Maintainer:	Tim Pope <vimNOSPAM@tpope.org>
" Last Change:	2010 Jul 26

if exists("b:did_ftplugin")
  finish
endif

runtime! ftplugin/sass.vim
setlocal comments=s1:/*,mb:*,ex:*/,://
setlocal sw=4 sts=4 et

" vim:set sw=2:

endif
