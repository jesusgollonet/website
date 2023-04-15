import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";

export default function Post({ postData }) {
  return (
    <Layout>
      <h1>{postData.meta.title}</h1>
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
