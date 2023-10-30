import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
export default function Home() {
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
                        Hey there! I’m Jesus Gollonet a Technical Director that helps creative agencies develop and deliver global digital campaigns for some of the most well known brands in the world.
                    </p>

                </header>
            </main>
            <section>
                Over the last 15 years I have contributed to digital projects in a wide variety of domains. A few recent / favorite examples include
                    <ul>
                        <li>Leading the team and developing the backend of <Link href="https://www.northkingdom.com/case/masterclash">Masterclash</Link>, an educational video platform for Supercell&apos;s Clash of Clans.</li>
                    <li>Architecting and operating infrastructure for a series of online live events (remember those?) for <Link href="https://toast.resn.co.nz/#house-of-maserati">Maserati</Link>, <Link href="https://resn.co.nz/#!/work/vanmoof/">Vanmoof</Link> and others.</li>
                    <li>Directing the technology for a <Link href="https://resn.co.nz/#!/work/brandcast-delivered/">personalized video platform for Google&apos;s Brandcast</Link> event</li>
                    <li>Developing the backend for interactive installations with <Link href="https://resn.co.nz/#!/work/speedfactory-activation/">Adidas SpeedFactory</Link></li>
                    <li>Developing an on-the-fly UGC video generation solution that leverages Front End techonologies to create high quality shareable videos, used in <Link href="https://resn.co.nz/#!/work/ripready/">Adidas Rip Ready</Link> and <Link href="https://resn.co.nz/#!/work/hpsoundincolor/">HP Sound in Color</Link></li>
                    <li>Building a <Link href="https://www.lbbonline.com/news/coca-cola-music-visual-identity-from-wk-amsterdam">generative visual identity for Coca Cola</Link> at Wieden + Kennedy Amsterdam.</li>
                </ul>
            </section>
            <section className={styles.contact}>
                <p> Curious to know more? </p>
                <p><Link href="mailto:me@jesusgollonet.com">Email</Link> or <Link href="https://www.linkedin.com/in/jesusgollonet/">LinkedIn</Link> me. Let&apos;s meet</p>
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
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </section>
            <footer className={styles.footer}></footer>
        </Layout>
    );
}
