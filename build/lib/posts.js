import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
// given a post file, it returns a {id, frontMatter, contentHtml} object
async function parsePostFile(id, p) {
  const parsedMatter = matter(p);
  const postData = parsedMatter.data;
  const processedContent = await remark()
    .use(html)
    .process(parsedMatter.content);
  return {
    id,
    meta: parsedMatter.data,
    contentHtml: processedContent.toString(),
  };
}

export function niceDate(d) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function getAllPostIds() {
  const fileList = await readdir(postsDirectory);

  return fileList.map((fileName) => {
    return {
      params: {
        id: fileName.split("_")[1].replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fileList = await readdir(postsDirectory);
  // TODO: since we're including datetime in filename but only matching on title
  // this is brittle, as there could be 2 different files with the same title. Fix
  const postFile = fileList.find((f) => f.includes(id));

  const filePath = path.join(postsDirectory, postFile);
  const fileContents = await readFile(filePath);
  const postData = await parsePostFile(id, fileContents);

  postData.niceDate = niceDate(postData.meta.date);
  return {
    id,
    ...postData,
  };
}

export async function getSortedPostsData() {
  const fileList = await readdir(postsDirectory);
  const postsData = [];
  for await (let fileName of fileList) {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = await readFile(filePath);
    const postData = await parsePostFile(fileName, fileContents);
    postData.niceDate = niceDate(postData.meta.date);
    postsData.push(postData);
  }

  return postsData.sort((a, b) => {
    return new Date(a.meta.date) >= new Date(b.meta.date) ? -1 : 1;
  });
}
