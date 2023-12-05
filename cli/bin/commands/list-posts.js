"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPosts = void 0;
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const config_1 = require("../config");
const gray_matter_1 = __importDefault(require("gray-matter"));
const time_ago_1 = require("../lib/time-ago");
const parsePostsDirectory = async (postsDirectory) => {
    const fileList = await (0, promises_1.readdir)(postsDirectory);
    const postsData = [];
    for await (let fileName of fileList) {
        const filePath = path_1.default.join(postsDirectory, fileName);
        const fileContents = await (0, promises_1.readFile)(filePath);
        const postData = await parsePostFile(fileName, fileContents);
        postsData.push(postData);
    }
    return postsData;
};
async function parsePostFile(fileName, fileContents) {
    const parsedMatter = (0, gray_matter_1.default)(fileContents);
    return {
        fileName,
        title: parsedMatter.data.title,
        date: parsedMatter.data.date,
        draft: parsedMatter.data.draft,
    };
}
async function listPosts(includeDrafts = false) {
    const config = await (0, config_1.loadConfig)();
    const postsDirectory = `${config.path}/build/posts/`;
    let files = await parsePostsDirectory(postsDirectory);
    if (!includeDrafts) {
        console.log("no drafts");
        files = files.filter((f) => f.draft == false);
    }
    files = files.sort((a, b) => {
        return new Date(a.date) >= new Date(b.date) ? -1 : 1;
    });
    const now = new Date();
    files.forEach(async (file) => {
        const { title, date } = file;
        const columnSize = 60;
        const relativeTimeFormat = new Intl.RelativeTimeFormat("en", {
            style: "long",
            numeric: "auto",
        });
        const ellapsedTime = now.getTime() - new Date(date).getTime();
        const [value, unit] = (0, time_ago_1.getUnitAndValueFormat)(ellapsedTime);
        console.log(title.padEnd(columnSize, " "), relativeTimeFormat.format(Math.floor((new Date(date).getTime() - now.getTime()) / value), unit));
    });
}
exports.listPosts = listPosts;
