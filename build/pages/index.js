import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = await getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>Jesus Gollonet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Hey! I'm Jesus Gollonet</h1>
                <p>I'm currently building this website.</p>
            </main>
            <section>
                <h2>Blog</h2>
                <ul>
                    {allPostsData.map((p) => (
                        <li className={styles.post} key={p.id}>
                            <Link
                                href={`/posts/${p.id
                                    .split('_')[1]
                                    .replace(/\.md$/, '')}`}
                            >
                                <a>{p.title}</a>
                            </Link>{' '}
                            <time dateTime={p.date}>{p.niceDate}</time>{' '}
                        </li>
                    ))}
                </ul>
            </section>
            <ul>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>

            <footer className={styles.footer}></footer>
        </Layout>
    );
}
