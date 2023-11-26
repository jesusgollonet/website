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
    .command("post [name]", "create new post", (yargs) => {
    yargs.positional("name", {
        type: "string",
        default: "test",
        describe: "something something",
    });
}, new_post_1.openEditor)
    .help().argv;
