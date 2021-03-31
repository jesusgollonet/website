import { readdir, readFile } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

async function parsePostFile(id, p) {
    const parsedMatter = matter(p);
    const postData = parsedMatter.data;
    const processedContent = await remark()
        .use(html)
        .process(parsedMatter.content);
    return {
        id,
        title: postData.title,
        contentHtml: processedContent.toString(),
        // TODO this is a view concern
        niceDate: new Date(postData.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }),
        date: postData.date,
    };
}

export async function getAllPostIds() {
    const fileList = await readdir(postsDirectory);

    return fileList.map((fileName) => {
        return {
            params: {
                id: fileName.split('_')[1].replace(/\.md$/, ''),
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
        postsData.push(await parsePostFile(fileName, fileContents));
    }

    return postsData.sort((a, b) => {
        console.log(a.date, b.date);
        return new Date(a.date) >= new Date(b.date) ? -1 : 1;
    });
}
