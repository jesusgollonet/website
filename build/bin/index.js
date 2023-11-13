#!/usr/bin/env node
// loads path from .jgbrc.json
const homedir = require("os").homedir();
const jgbPath = require(homedir + "/.jgbrc.json");

// executes script in build folder
const { exec } = require("child_process");
const path = require("path");

const child = exec("yarn run dev", {
  cwd: path.join(jgbPath.path, "build"),
});

child.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

child.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
