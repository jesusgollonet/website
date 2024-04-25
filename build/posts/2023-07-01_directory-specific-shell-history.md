---
title: 'Directory specific shell history'
date: '2023-07-01T12:44:02Z'
draft: false
---

I have started a project in Python, which I'm not particularly familiar with. I
thought it would be useful to include in the git repo relevant shell commands to
remember what I've done, and then wondered if it was possible to have shell history
but limited to a specific directory.

Turns out this is trivial with [atuin](https://github.com/ellie/atuin), which
records your shell history to a sqlite database and provides additional context.

Assuming you're in the directory you want to check your history for:

```bash
$ atuin search --cwd $(pwd) term
```

