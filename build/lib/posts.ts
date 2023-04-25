import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export interface PostFile {
  fileName: string;
  title: string;
  date: string;
  niceDate: string;
  draft: boolean;
  contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), "posts");
// given a post file, it returns a {id, frontMatter, contentHtml} object
async function parsePostFile(
  fileName: string,
  fileContents: Buffer
): Promise<PostFile> {
  const parsedMatter = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(parsedMatter.content);
  console.log(parsedMatter.data);
  return {
    fileName,
    title: parsedMatter.data.title,
    date: parsedMatter.data.date,
    niceDate: niceDate(parsedMatter.data.date),
    draft: parsedMatter.data.draft,
    contentHtml: processedContent.toString(),
  };
}

export const parsePostsDirectory = async (
  postsDirectory: string
): Promise<PostFile[]> => {
  const fileList = await readdir(postsDirectory);
  const postsData = [];
  for await (let fileName of fileList) {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = await readFile(filePath);
    const postData = await parsePostFile(fileName, fileContents);
    postsData.push(postData);
  }
  return postsData;
};

export function niceDate(d: Date): string {
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

export async function getPostData(fileName: string): Promise<PostFile> {
  const fileList = await readdir(postsDirectory);
  // TODO: since we're including datetime in filename but only matching on title
  // this is brittle, as there could be 2 different files with the same title. Fix
  const postFile = fileList.find((f) => f.includes(fileName));

  const filePath = path.join(postsDirectory, postFile!); // that bang is a non-null assertion operator
  const fileContents = await readFile(filePath);
  const postData = await parsePostFile(fileName, fileContents);

  return postData;
}

export async function getSortedPostsData(): Promise<PostFile[]> {
  const postsData = await parsePostsDirectory(postsDirectory);
  return postsData.sort((a, b) => {
    return new Date(a.date) >= new Date(b.date) ? -1 : 1;
  });
}
