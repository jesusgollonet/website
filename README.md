## Directory structure

- `build`: root of the blog project 
- `bin` simple utility scripts 

The directory layout follows an old convention of mine to keep a folder of
scripts separate from the actual build separate from utilities [Here's an old
post explaining some similar reasoning](https://github.com/jesusgollonet/software-over-the-rainbow/blob/master/build/source/_posts/2015-01-18-project-specific-dotfiles.markdown)
to ease friction when switching projects with different stacks. 

## how to 

### create a new post

```
./bin/new-post name of post
```

### run the dev server 

```
./bin/run
```

### build for deployment

```
./bin/build
```

### POC CLI

I'm trying to make the above a simple cli so i can call it from anywhere on my
computer. Issue #27 

Install it by running `npm i -g .` in the `build` folder and run it like `_w`
