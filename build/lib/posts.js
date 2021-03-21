import { readdir, readFile } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

function parsePostFile(p) {
    const postData = matter(p).data;
    return {
        title: postData.title,
        niceDate: new Date(postData.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }),
        date: postData.date,
    };
}

export async function getSortedPostsData() {
    const fileList = await readdir(postsDirectory);

    const postsData = [];
    for await (let fileName of fileList) {
        const filePath = path.join(postsDirectory, fileName);
        const fileContents = await readFile(filePath);
        postsData.push(parsePostFile(fileContents));
    }
    return postsData;
}
