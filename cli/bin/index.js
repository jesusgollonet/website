#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const new_post_1 = require("./commands/new-post");
const list_posts_1 = require("./commands/list-posts");
yargs_1.default
    .scriptName("jgw")
    .command("post", "jgw post <subcommand>", (yargs) => {
    yargs
        .command("new", "create new post", (yargs) => {
        yargs
            .option("title", {
            type: "string",
            default: "new post",
            describe: "Optional title of your new post",
        })
            .alias("t", "title");
    }, async function (argv) {
        await (0, new_post_1.openEditor)(argv.title);
    })
        .command("list", "list all posts", (yargs) => {
        yargs
            .option("draft", {
            type: "boolean",
            default: false,
            describe: "include drafts",
        })
            .alias("d", "draft");
    }, async function (argv) {
        await (0, list_posts_1.listPosts)(argv.draft);
    })
        .demandCommand(1)
        .strictCommands();
})
    .demandCommand(1)
    .strictCommands()
    .help()
    .alias("h", "help").argv;
