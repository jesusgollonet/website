#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hiyaa");
const yargs_1 = __importDefault(require("yargs"));
yargs_1.default
    .scriptName("jgb")
    .usage("$0 <cms> [args]")
    .command("post [name]", "create new post", (yargs) => {
    yargs.positional("name", {
        type: "string",
        default: "test",
        describe: "something something",
    });
}, function (argv) {
    console.log("name", argv.name, "welcome to yargs");
})
    .help().argv;
