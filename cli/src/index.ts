#!/usr/bin/env node

import yargs from "yargs";
yargs
  .scriptName("jgw")
  .usage("$0 <cms> [args]")
  .command(
    "post [name]",
    "create new post",
    (yargs) => {
      yargs.positional("name", {
        type: "string",
        default: "test",
        describe: "something something",
      });
    },
    function (argv) {
      console.log("name", argv.name, "welcome to yargs");
    },
  )
  .help().argv;
