#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const new_post_1 = require("./commands/new-post");
yargs_1.default
    .scriptName("jgw")
    .usage("$0 <cms> [args]")
    .command("post", "create new post", (yargs) => {
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
    .help().argv;
