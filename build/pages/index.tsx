import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
export default function Home() {
  return (
    <Layout home>
      <Head>
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
        </header>
      </main>
      <section className={styles.homeBody}>
        <p>Welcome!</p>
        <p>
          I&apos;m Jesus Gollonet a Technical Director and Software Engineer
          based in Malaga, Spain.
        </p>
        <h2>Work</h2>
        <p>I specialise in</p>
        <ul>
          <li>Leading development projects</li>
          <li>Architecting scalable solutions</li>
          <li>Deploying reliable cloud infrastructure</li>
        </ul>
        <p>
          I have built, managed and delivered major digital campaigns and
          innovative interactive installations for household brands like{" "}
          <span className={styles.brandDrop}>Adidas</span>,
          <span className={styles.brandDrop}>Google</span>,
          <span className={styles.brandDrop}>HBO</span>,
          <span className={styles.brandDrop}>Coca-Cola</span> and many others,
          working with some of the best agencies in the world (
          <span className={styles.agencyDrop}>Resn</span>,
          <span className={styles.agencyDrop}>North Kingdom</span>,
          <span className={styles.agencyDrop}>Wieden + Kennedy</span>,
          <span className={styles.agencyDrop}>Dogstudio</span>),
        </p>
      </section>
      <section className={styles.homeBody}>
        <h2>Contact</h2>
        <p>Sounds Interesting? Let&apos;s chat!</p>
        <ul>
          <li>
            <Link href="https://calendly.com/jesusgollonet/hola">
              Book a free 30 minute meeting
            </Link>{" "}
            (no strings attached!)
          </li>
          <li>
            <Link href="mailto:me@jesusgollonet.com">Email me</Link>{" "}
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/jesusgollonet/">
              LinkedIn
            </Link>
          </li>
        </ul>
      </section>
      <section className={styles.contact}>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/diary">Diary</Link>
          </li>
          <li>
            <a href="https://github.com/jesusgollonet">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/jesusgollonet">Twitter</a>
          </li>
          <li>
            <a href="https://instagram.com/jesusgollonet">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jesusgollonet/">LinkedIn</a>
          </li>
        </ul>
      </section>
      <footer className={styles.footer}></footer>
    </Layout>
  );
}
