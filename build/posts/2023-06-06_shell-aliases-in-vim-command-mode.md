---
title: 'Shell aliases in vim command mode'
date: '2023-06-06T11:50:48Z'
draft: false
---

I have a bunch of [ alliases in my shell
](https://github.com/jesusgollonet/dotfiles/blob/master/zsh/aliases). When
coding in vim, I frequently run whatever file I'm working on from vim's command
mode, 

```vim
:!node %
```

often by just mapping a key combo to run it.

```vim
:map ,r :w\|!node %<CR>
```

A problem I often run into is that vim's command mode
doesn't know about my shell aliases. So if I have an alias like this in .zshrc

```bash
alias python=python3
```

When running `:!python %` from vim, I get something like

```vim
zsh:1: command not found: python

shell returned 127
```

My aliases used to be defined in .zshrc, but this file is not sourced when
running a command from vim's command mode. The solution is to [move your
aliases to `~/.zshenv`
](https://github.com/jesusgollonet/dotfiles/blob/master/zsh/zshenv), which is
sourced.

Note there's no need to load ~/.zshenv from ~/.zshrc, as it's part of the [
default zsh startup sequence ](https://zsh.sourceforge.io/Intro/intro_3.html)
and therefore loaded by default. 

