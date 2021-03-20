import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jesus Gollonet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Hey! I'm Jesus Gollonet</h1>
                <p>I'm currently building this website.</p>
            </main>
            <ul>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>

            <footer className={styles.footer}></footer>
        </div>
    );
}
