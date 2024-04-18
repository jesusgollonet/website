---
title: 'gh cli zen workflow'
date: '2023-12-06T22:26:52.871Z'
draft: false
---


As I have started getting back into the rhythm of coding more or less daily, I have been paying
attention to my workflow. My favorite piece on the topic is Simon Willison's masterful
[ How I build a feature ](https://simonwillison.net/2022/Jan/12/how-i-build-a-feature/), which provides a detailed guide on building software including everything from tests to documentation and publishing.
While I'm very far from such heights, I have been almost invariably applying his first point:

> Everything starts with an issue

I'm mostly applying this to personal projects, but even then using github issues
has proven extremely helpful:

- They serve as TODO list for me. Especially handy when applied on projects that
I pick up every few weeks/months.
e.g: 
```bash
gh issue list

ID   TITLE                                                               LABELS  UPDATED
#50  content: add /now page                                                      about 26 days ago
#49  cli: prompt save or discard post after editing                              about 2 months ago
#48  cli: check if server is running and optionally start                        about 3 months ago
#47  investigate how to share lib/posts between cli and website                  about 3 months ago
#46  fe: add syntax highlighting to inline code blocks                           about 3 months ago
#45  fe: break down diary page into components                                   about 3 months ago
#39  cli: load configuration from entrypoint instead of inside new-post          about 4 months ago
#33  cli: list out features + mvp                                                about 4 months ago
#21  Simple web editor                                                           about 10 months ago
```
- I can add extra context in the form of comments (e.g: when finding relevant
links for a given topic).
- They add a fun touch of gamification to my work.

In parallel, I have been using the [ gh cli ](https://cli.github.com) more and
more, and have stumbled upon a workflow that I find almost soothing in its
assemply line quality. The steps are pretty obvious. For every feature (or problem, bug, investigation...), I:  

- create a new issue
- work on issue, and eventually fix it.
- create pr
- merge pr 

Each of the steps maps perfectly to a gh command:

1. Create an issue in github:

    ```bash
    gh issue create -t 'Fix scroll in the homepage'
    ```

2. Start working on it

    ```bash
    gh issue develop <issue number> -c
    ```

    This is my favorite one. The `develop` command creates a branch named like the issue id and title. E.g: (e.g: `12-fix-scroll-in-the-homepage`). You can get the issue number using `gh issue list`. The `-c` flag means checkout the branch.  

    Commit, push, commit, push... done?

3. When the issue is ready, I'll create a PR. I will confess this part is superfluous when working on my own. I don't add any extra details to the PR, and seldomly review the changes, but I still do it in order to instill good practices for team settings.

    ```bash
    gh pr create -t "my pr title"
    ```

4.  Then merge I the branch and delete de PR and branch. 

    ```bash
    gh pr merge <pr number> -r -d
    ```

    `-r` is for rebase and `-d` deletes the branch (local and remote) after merging.



