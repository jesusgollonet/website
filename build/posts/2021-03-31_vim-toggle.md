---
title: 'a vim toggle'
date: '2021-03-31T07:57:50Z'
draft: false
---

I open and close vim many times in my daily work. As a spoiled vim user, I try
to do anything I do often with as few keystrokes as possible, ideally one.  So
I've mapped a key (F12) to "toggle" vim. In this post I share the ~~few pieces
put together with duct-tape~~ configuration I use along with some notes about
zsh and unix job control


___video embed___

I've included a [gist with the configuration]() if you just want to set it up,
otherwise here's a bit of explanation which touches on some learnings about zsh
and unix jobs:

1. [opening vim with a single key (zsh)](#bind-a-key-in-zsh-to-open-vim):
2. [bind the same key within vim to suspend](#closing-vim-with-a-key-shortcut)
3. [foreground a suspended process](#closing-vim-with-a-key-shortcut)
4. [check if vim is running in the current terminal](#is-vim-already-running)

## The elements

### 1. Bind a key in zsh to open vim

To bind a key to a command in zsh, use `bindkey`. Here's what mapping F12 to
open vim looks like:

```zsh 

bindkey -s '^[[24~’ ‘vi .\n’ 

```

The `-s` switch maps "each _in-string_ to each _out-string_" ([`man
zshzle`]()).In our case, the _in-string_ is the key we press (F12) and the
_out-string_ is the command we want to execute. 

But, but...


#### What is `^[[24~`? 

The way your terminal understands the key you are pressing is by receiving an
*escape code*. Different keys will send different escape codes and it can vary
across terminals.  In my case,  `^[[24~` stands for `F12`, `^[[23~` is `F11`...
Check the note at the end to find out the escape code for a given key on your
keyboard.

#### Why is there an `\n` after `vi .`?

It's a newline. `bindkey` is only substituing the escape code it receives with
the string that you pass in, and newline is the way the terminal understands
that it needs to execute what you just typed. So you can understand `vi .\n` as
telling zsh "Type 'vi .' and execute it". Try leaving it out  you'll see that
your command is written but never executed.

We can now open vim with a shortcut. In the next step we'll see how to "close"
it.

### 2. Minimize vim with a key shortcut

When I'm editing text I often want to return to a terminal, run something and
quickly get back to where I was. If I ran `:q` to actually close vim , reopening
would have to reinitialize it, and I would lose my state. What I want is to just
hide or minimize temporarily.

Any Unix program running on a terminal can be suspended by pressing `ctrl Z` ,
which more or less means temporarily close and hide. The system that controls
that is called Job Control (TODO: add reference). If you try that in vim sure
enough, you'll go back to the terminal in which you launched it.

The mechanism to map a command to a key in vim is conceptually the same as in
zsh, just with different syntax. Here's what we'll use: 

```vimscript

map <F12> <C-z>

```

So for now we can open vim and hide it. But we have a problem. If we press
F12 again from the terminal we're going to run `vi .`, but that launches a completely
new instance. We want to reopen the one we minimized. That's the next step
below:

### 3. Unsuspend the process, or how to reopen the vim we just closed.

The way to foreground a suspended process is to run `fg`.  If we want to reuse
the F12 shortcut we need a way to know if vim is already running in the current
terminal and conditionally execute open or foreground based on that.  

#### Is vim already running? 

There are multiple way to go about this. Since we've talked about `Ctrl Z` and
`fg` we can stay within the Jobs Control API and take a look at the  `jobs`
command. Running it in a terminal will give us a list of the suspended jobs. 

Here's the output I get If I suspend my current vim session 

```bash

% jobs
[1]  + suspended  /usr/local/bin/vim first.md

```

In order to find out if vim is suspended in the current terminal what we'll do
is to grep the string "vim" out of the jobs output.

```bash

jobs | grep "vim"

```

That command will exit with a 0 (success!) if vim is found and otherwise return a non-zero
exit code. We just then need to conditionally open vim or foreground it based on
that.


#### open or foreground vim

Now we can wrap this check inside a function and conditionally open vi or or
foreground it depending on the result of the command.

```bash

open_or_foreground_vim(){
    if jobs | grep -q "vim"; then
        fg %?vim
    else
        vi .
    fi
}

```

A couple of notes about this function:
- In the conditional we're only interested in whether grep found a match or not,
  and not where. I added the `-q` switch to grep so that it doesn't show any
  output
- `fg %?vim` is a neat trick I just learned from [this article on Job Control
  from Cindy Sridharan](https://medium.com/@copyconstruct/bash-job-control-4a36da3e4aa7):`%?vim` — Invokes
  a job that contains the string vim. 

Add that function to your `.zshrc` file. Aaand... 

### Rebind your original key to execute this function

Last piece of the puzzle is to change your bindkey to execute our new function
instead of the original `vi .`

```bash

bindkey -s '^[[24~' 'open_or_foreground_vim\n'

```

## How to find out the escape code for a given key 

press `ctrl v` on your terminal and then the letter you want the escape code for. 

## References

(from the typically inscrutable [`man
zshzle`](http://zsh.sourceforge.net/Doc/Release/Zsh-Line-Editor.html#index-zle_002c-builtin-commands)).

