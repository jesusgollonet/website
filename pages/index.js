import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Jesus Gollonet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Hey! I'm Jesus Gollonet</h1>
                <p>I'm currently building this website.</p>
            </main>
            <section>
                <div className={styles.post}>
                    <h3>Post latest</h3>
                </div>
                <div className={styles.post}>
                    <h3>Post latest</h3>
                </div>
                <div className={styles.post}>
                    <h3>Post latest</h3>
                </div>
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
