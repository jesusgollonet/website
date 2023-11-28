#!/usr/bin/env node

import yargs, { Argv } from "yargs";
import { openEditor } from "./commands/new-post";

yargs
  .scriptName("jgw")
  .usage("$0 <cms> [args]")
  .command(
    "post",
    "create new post",
    (yargs: Argv) => {
      yargs
        .option("title", {
          type: "string",
          default: "new post",
          describe: "Optional title of your new post",
        })
        .alias("t", "title");
    },
    async function (argv) {
      await openEditor(argv.title as string);
    },
  )
  .help().argv;
