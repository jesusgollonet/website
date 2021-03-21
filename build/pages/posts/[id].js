import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout.js';

export default function Post({ postData }) {
    console.log(postData.contentHtml);
    return (
        <Layout>
            <h1>{postData.title}</h1>
            <p>{postData.niceDate}</p>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
    const postData = await getPostData(params.id);
    console.log(postData);
    return {
        props: {
            postData,
        },
    };
}
