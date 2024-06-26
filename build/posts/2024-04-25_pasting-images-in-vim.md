---
title: 'Pasting images in Markdown using Vim'
date: '2024-04-25T10:37:11.344Z'
draft: false
---

This blog is handcrafted with markdown files in vim. Up until now, posting
images was a prohibitive dance of putting the image on a certain folder and
figuring out the relative path, posting it into markdown and then adjusting a
few times until I got it right. 

Which is the reason why I never posted any.

Yesterday I implemented [https://github.com/img-paste-devs/img-paste.vim](img-paste.vim) [^1]
and now I can paste images directly. 

If you see the below image, it works!

![image_2024-04-25-13-52-54](../public/images/image_2024-04-25-13-52-54.png)


## Demo

Now the steps to add an image to a post are:

- Copy the image to the clipboard: I usually use `Cmd+Ctrl+Shift+4` on a mac
- Go to the markdown file in vim
- Press `<Leader>p` to paste the image (my leader key is comma, so in my case, `,p`)

This will create a png file in the directory you specify, and add the right
markdown syntax to the file.

Here is a quick video explaining how it works:

[![A video of how i paste and preview images in markdown using vim](http://img.youtube.com/vi/QAdq7jXObEo/0.jpg)](http://www.youtube.com/watch?v=QAdq7jXObEo)


## Some Notes

Instructions on the plugin page are clear. Here are a couple of adjustments I
had to make to match to my workflow

### Correct the image path

By default, the plugin stores the image in an `img` subdirectory inside the same folder 
as the markdown file. In my case I wanted to move it to my /public/images folder at the root of my
site. 

```vim
let g:mdip_imgdir = '../public/images'
```

I have added that to [a `.vimrc.local` file In the root of the project](https://github.com/jesusgollonet/website/blob/develop/.vimrc.local), since this
configuration is specific to this project.


### Rewrite URLs

The above variable creates a url that is relative to the markdown file, which is
perfect for when you're previewing the markdown file with an external tool or
withing github.

But in Next.js (which is what I use for this website), the /public folder is served as
the root of the website (so /public/images is just /images).

To solve this, I added [a simple regex that rewrites the links when rendering](https://github.com/jesusgollonet/website/blob/7f6047d94e824fc9c3087b986c830a11de339c01/build/lib/posts.ts#L25C1-L31C5
)


### Further 

Here's a few improvements I'm thinking of:

- The obvious next step is to add the ability to make it work with image paths to
avoid having to only do it through the clipboard.
- More in general, I would love to be able to paste a url and get the markdown
tags automatically, ideally being smart enough to know if it's a url, a local
file or even a youtube embed (TIL [ there's no good way to embed youtube videos ](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#videos)) 


And that's it. If you have comments questions or suggestions please let me know!
[@jesusollonet](https://twitter.com/jesusgollonet) on twitter (or pretty much
anywhere)  or email me at here. 






[^1]: Oh god I had to add the markup to this link manually!! Next one.

