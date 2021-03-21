import { readdir, readFile } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

function parsePostFile(id, p) {
    const postData = matter(p).data;
    return {
        id,
        title: postData.title,
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
    const postData = matter(fileContents).data;

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
        postsData.push(parsePostFile(fileName, fileContents));
    }
    return postsData;
}
