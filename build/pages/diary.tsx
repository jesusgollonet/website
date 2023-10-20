import Layout from "../components/layout";
import styles from "../components/bloglist.module.css";
import Link from "next/link";
import {
    getSortedPostsData,
    PostFile,
} from "../lib/posts";


export async function getStaticProps() {
    const allPostsData = await getSortedPostsData();
    return {
        props: {
            allPostsData: allPostsData.filter((p) => p.draft !== true),
        },
    };
}

export default function Diary({ allPostsData }: { allPostsData: PostFile[] }) {
    return (
        <Layout>
            <h1>Diary</h1>
            {
                <section>
                    <ul className={styles.blogList}>
                        {allPostsData.map((p) => (
                            <li className={styles.post} key={p.fileName}>
                                <Link
                                    href={`/posts/${p.fileName
                                        .split("_")[1]
                                        .replace(/\.md$/, "")}`}
                                >
                                    {p.title}
                                </Link>{" "}
                                <time dateTime={p.date}>{p.niceDate}</time>{" "}
                            </li>
                        ))}
                    </ul>
                </section>
            }
        </Layout>
    );
}
