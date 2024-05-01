import { getAllPostIds, getPostData, PostFile } from "../../lib/posts";
import Layout from "../../components/layout";
import { useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import { niceDate } from "../../lib/helpers";
import { PageType } from "../../lib/types";

export default function Post({
  postData,
}: {
  postData: PostFile;
}): JSX.Element {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Layout pageType={PageType.Diary}>
      <h1>{postData.title}</h1>
      <p>
        <time>{niceDate(postData.date)}</time>
      </p>
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

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
