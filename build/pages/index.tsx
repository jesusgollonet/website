import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import {
    getSortedPostsData,
    parsePostsDirectory,
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

export default function Home({ allPostsData }: { allPostsData: PostFile[] }) {
    return (
        <Layout home>
            <Head>
                <title>Jesus Gollonet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <header className={styles.header}>
                    <img
                        src="/images/profile.jpg"
                        height={100}
                        width={100}
                        alt="Jesus Gollonet"
                        className={styles.profile}
                    />
                    <h1>Jesus Gollonet</h1>
                    <p>
                        Hey there! You might have landed here because I have
                        recently started looking for new job opportunities.
                        Check the <Link href="/about">about</Link> page until I
                        get this site in shape.
                    </p>
                    <p>
                       I also keep a very informal diary about whatever I
                        happen to be thinking about 👇
                    </p>
                </header>
            </main>
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
            <section className={styles.contact}>
                <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <a href="https://github.com/jesusgollonet">Github</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/jesusgollonet">Twitter</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/jesusgollonet">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jesusgollonet/">
                            Linkedin
                        </a>
                    </li>
                </ul>
                <p>
                    <a href="mailto:me@jesusgollonet.com">Get in touch</a>
                </p>
            </section>
            <footer className={styles.footer}></footer>
        </Layout>
    );
}
