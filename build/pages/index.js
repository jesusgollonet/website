import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
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
                <header className={styles.header}>
                    <Image
                        src="/images/profile.jpg"
                        height={150}
                        width={150}
                        alt="Jesus Gollonet"
                        className={styles.profile}
                    />
                    <h1>Jesus Gollonet</h1>
                    <p>
                        I do back-end architecture, infrastructure and
                        development for creative digital experiences.{' '}
                    </p>
                    <p>
                        I have worked on global campaigns for Adidas, Google,
                        Spotify, Nordstrom and many other brands.{' '}
                    </p>
                    <p>
                        {' '}
                        Contact me via{' '}
                        <a href="mailto:me@jesusgollonet.com">email</a>,{' '}
                        <a href="https://twitter.com/jesusgollonet">twitter</a>{' '}
                        or <a href="linkedin">linkedin</a>{' '}
                    </p>
                </header>
            </main>

            {/*
            <section>
                <h2>Blog</h2>
                <ul className={styles.blogList}>
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
*/}
            <footer className={styles.footer}></footer>
        </Layout>
    );
}
