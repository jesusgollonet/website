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
          I&apos;m Jesus Gollonet a Freelance Creative Technologist and
          Technical Director with a focus on backend and devops{" "}
        </p>
        <h2>Work</h2>
        <p>
          I have built, managed and delivered major digital campaigns and
          innovative interactive installations for household brands like Adidas,
          Google, HBO, Coca-Cola and many others, working with some of the best
          creative agencies in the world (Resn, North Kingdom, Wieden + Kennedy,
          Dogstudio),
        </p>
        <p>I specialise in</p>
        <ul>
          <li>Developing creative back-end solutions on a tight schedule</li>
          <li>Leading development projects</li>
          <li>Architecting scalable solutions for high end campaigns</li>
          <li>Deploying reliable cloud infrastructure</li>
        </ul>
        <p>
          If you find any of this interesting, you can read more{" "}
          <Link href="/about">about me</Link>, maybe check out my{" "}
          <Link href="/diary">diary</Link>, where I share thoughts and ongoing
          projects. I&apos;m also around pretty much anywhere with the
          @jesusgollonet handle. ({" "}
          <Link href="https://github.com/jesusgollonet">Github</Link>,{" "}
          <Link href="https://twitter.com/jesusgollonet">Twitter</Link>,{" "}
          <Link href="https://linkedin.com/in/jesusgollonet">LinkedIn</Link>,{" "}
          <Link href="https://instagram.com/jesusgollonet">Instagram</Link>,{" "}
          <Link href="https://www.youtube.com/@jesusgollonet">Youtube</Link>,{" "}
          <Link href="https://mastodon.social/@jesusgollonet">Mastodon</Link>)
        </p>
      </section>
      <section className={styles.homeBody}>
        <h2>Contact</h2>
        <p>
          If you want to talk about a project, ask for advice, or just say hi,
          you can get in touch 👇
        </p>
        <ul>
          <li>
            <Link href="https://calendly.com/jesusgollonet/hola">
              Book a 30 minute meeting
            </Link>{" "}
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
    </Layout>
  );
}
