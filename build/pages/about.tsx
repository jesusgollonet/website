import Layout from "../components/layout";
import styles from "../components/layout.module.css";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        Hey! I&apos;m Jesús Gollonet. I am a Tech Director at{" "}
        <a href="https://northkingdom.com">North Kingdom</a>. My work involves
        architecting our experiences, implementing and managing backend systems,
        being the main point of contact for technical communication with clients
        and vendors, and improving and, um, operating operations.
      </p>

      <p>
        I&apos;m interested in many things. Today I&apos;m mostly wondering
        about what serverless / infrastructure as code can offer a creative
        production agency, how event sourcing and functional techniques can help
        us architect more solid experiences, and if / how decentralized tech
        will change the web.
      </p>

      <p>
        In a previous life I was a creative coder building web experiences,
        interactive audio toys, mobile apps, interactive installations.
      </p>
      <p>
        I work remotely from Málaga in the south of Spain. I write less code
        than I&apos;d like to, mostly typescript / node.js these days. I live in
        iterm, zsh, tmux, vim.
      </p>
        <div className={styles.backToHome}>
            <Link href="/">← Home</Link>
        </div>
    </Layout>
  );
}
