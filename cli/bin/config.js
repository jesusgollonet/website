"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = void 0;
const os_1 = require("os");
const promises_1 = __importDefault(require("node:fs/promises"));
async function loadConfig() {
    const jgbPath = JSON.parse(await promises_1.default.readFile((0, os_1.homedir)() + "/.jgbrc.json", "utf8"));
    return {
        path: jgbPath.path,
    };
}
exports.loadConfig = loadConfig;
