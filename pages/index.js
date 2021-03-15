import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Jesus Gollonet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Jesus Gollonet</h1>
                <h2>Middle-of-the-stack web engineer*</h2>

                <div className={styles.grid}></div>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}
