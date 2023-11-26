#!/usr/bin/env node

import yargs, { Argv } from "yargs";
import { openEditor } from "./commands/new-post";

yargs
  .scriptName("jgw")
  .usage("$0 <cms> [args]")
  .command(
    "post [name]",
    "create new post",
    (yargs: Argv) => {
      yargs.positional("name", {
        type: "string",
        default: "test",
        describe: "something something",
      });
    },
    openEditor,
  )
  .help().argv;
