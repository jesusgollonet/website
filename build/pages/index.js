import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

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
          <img
            src="/images/profile.jpg"
            height={100}
            width={100}
            alt="Jesus Gollonet"
            className={styles.profile}
          />
          <h1>Jesus Gollonet</h1>
          <p>
            Back-end architecture, infrastructure and development for creative
            digital experiences.
          </p>
          <p>
            Currently rebuilding this site. In the meantime, learn more{" "}
            <Link href="/about">about me</Link>, or check my{" "}
            <a href="https://twitter.com/jesusgollonet">Twitter</a> or{" "}
            <a href="https://www.linkedin.com/in/jesusgollonet/">Linkedin</a>
          </p>
        </header>
      </main>
      {
        <section>
          <ul className={styles.blogList}>
            {allPostsData.map((p) => (
              <li className={styles.post} key={p.id}>
                <Link
                  href={`/posts/${p.id.split("_")[1].replace(/\.md$/, "")}`}
                >
                  <a>{p.meta.title}</a>
                </Link>{" "}
                <time dateTime={p.meta.date}>{p.niceDate}</time>{" "}
              </li>
            ))}
          </ul>
        </section>
      }
      <section className={styles.contact}>
        <p>
          <a href="mailto:me@jesusgollonet.com">Get in touch</a>
        </p>
      </section>
      <footer className={styles.footer}></footer>
    </Layout>
  );
}
