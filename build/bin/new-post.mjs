#!/usr/bin/env node

import editor from "@inquirer/editor";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = "./posts/";

const postMetadata = (postName, postDate) => {
  return `---
title: '${postName}'
date: '${postDate}'
draft: true
---`;
};

const postContent = await editor({
  message: "Create a new post",
  default: postMetadata("Enter post title", new Date().toISOString()),
});

// TODO: validate post
const parsedPost = matter(postContent);
const { title, date } = parsedPost.data;
const fileTitle = title.toLowerCase().replace(/\s/g, "-");
const fileDate = date.split("T")[0];
const postFilename = `${fileDate}_${fileTitle}.md`;
// check for defaults
// save post now
//
const filePath = `${postsDirectory}${postFilename}`;
//TODO: check for name collision
fs.writeFile(filePath, postContent, (err) => {
  if (err) throw err;
  console.log("The post has been saved! as ", filePath);
});
