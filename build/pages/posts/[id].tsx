import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import Layout from "../../components/layout";

// meta title
// date string
export default function Post({ postData }: { postData: PostData }) {
    return (
        <Layout>
            <h1>{postData.title}</h1>
            <p>{postData.niceDate}</p>
            <div
                dangerouslySetInnerHTML={{
                    __html: postData.contentHtml,
                }}
            />
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
    return {
        props: {
            postData,
        },
    };
}
