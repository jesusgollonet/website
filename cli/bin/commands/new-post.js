#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openEditor = void 0;
const editor_1 = __importDefault(require("@inquirer/editor"));
const fs_1 = __importDefault(require("fs"));
const gray_matter_1 = __importDefault(require("gray-matter"));
const config_1 = require("../config");
const postMetadata = (postName, postDate) => {
    return `---
title: '${postName}'
date: '${postDate}'
draft: true
---`;
};
const openEditor = async (postTitle) => {
    const config = await (0, config_1.loadConfig)();
    const postsDirectory = `${config.path}/build/posts/`;
    const postContent = await (0, editor_1.default)({
        message: "Create a new post",
        default: postMetadata(postTitle || "untitled", new Date().toISOString()),
    });
    const parsedPost = (0, gray_matter_1.default)(postContent);
    // TODO: validate post
    const { title, date } = parsedPost.data;
    const fileTitle = title.toLowerCase().replace(/\s/g, "-");
    const fileDate = date.split("T")[0];
    const postFilename = `${fileDate}_${fileTitle}.md`;
    // check for defaults
    // save post now
    //
    const filePath = `${postsDirectory}${postFilename}`;
    //TODO: check for name collision
    fs_1.default.writeFile(filePath, postContent, (err) => {
        if (err)
            throw err;
        console.log("The post has been saved! as ", filePath);
    });
};
exports.openEditor = openEditor;
