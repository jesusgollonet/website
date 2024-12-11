import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import { PostFile } from "./types";

const postsDirectory = path.join(process.cwd(), "posts");
// given a post file, it returns a {id, frontMatter, contentHtml} object
async function parsePostFile(
  fileName: string,
  fileContents: Buffer,
): Promise<PostFile> {
  const parsedMatter = matter(fileContents);
  // modify markdown image paths so we get rid of the ../public prefix in the url
  // only do it inside of markdown image tags

  const contentWithImagePathsRewritten = parsedMatter.content.replace(
    /!\[.*\]\(.*\)/g,
    (match) => {
      const imagePath = match.match(/\((.*)\)/)![1];
      return match.replace(imagePath, imagePath.replace("../public", ""));
    },
  );
  const processedContent = micromark(contentWithImagePathsRewritten, {
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()],
  });
  // convert html to plain text removing all tags, grab first 200 characters and replace newlines with spaces
  const summary = processedContent
    .toString()
    .replace(/<[^>]*>/g, "")
    .slice(0, 200)
    .replace(/\n/g, "")
    .concat("...");
  const slug = `/posts/${fileName.split("_")[1].replace(/\.md$/, "")}`;
  return {
    fileName,
    title: parsedMatter.data.title,
    slug,
    date: parsedMatter.data.date,
    draft: parsedMatter.data.draft,
    summary,
    contentHtml: processedContent.toString(),
  };
}

export const parsePostsDirectory = async (
  postsDirectory: string,
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

// TODO: should we throw an error?
export async function getPostData(postTitleId: string): Promise<PostFile> {
  const fileList = await readdir(postsDirectory);
  // TODO: since we're including datetime in filename but only matching on title
  // this is brittle, as there could be 2 different files with the same title. Fix
  const postFile = fileList.find((f) => f.includes(postTitleId));

  if (postFile === undefined) {
    throw new Error(`No post found with id ${postTitleId}`);
  } else {
    const filePath = path.join(postsDirectory, postFile!); // that bang is a non-null assertion operator
    const fileContents = await readFile(filePath);
    const postData = await parsePostFile(postFile, fileContents);

    return postData;
  }
}

export async function getSortedPostsData(
  excludeDrafts: boolean = true,
): Promise<PostFile[]> {
  let postsData = await parsePostsDirectory(postsDirectory);
  if (excludeDrafts) {
    postsData = postsData.filter((p) => p.draft !== true);
  }
  return postsData.sort((a, b) => {
    return new Date(a.date) >= new Date(b.date) ? -1 : 1;
  });
}
