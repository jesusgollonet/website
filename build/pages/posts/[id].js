import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout.js';

export default function Post({ postData }) {
    console.log(postData);
    return (
        <Layout>
            <h1>{postData.title}</h1>
            <p>{postData.date}</p>
        </Layout>
    );
}

export async function getStaticPaths() {
    return {
        paths: await getAllPostIds(),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    console.log(params);
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}
