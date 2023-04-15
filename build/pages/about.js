import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        Hey! I'm Jesús Gollonet. I am a Tech Director at{" "}
        <a href="https://dogstudio.co">Dogstudio</a>. My work involves
        architecting our experiences, implementing and managing backend systems,
        being the main point of contact for technical communication with clients
        and vendors, and improving and, um, operating operations.
      </p>

      <p>
        I'm interested in many things. Today I'm mostly wondering about what
        serverless / infrastructure as code can offer a creative production
        agency, how event sourcing and functional techniques can help us
        architect more solid experiences, and if / how decentralized tech will
        change the web.
      </p>

      <p>
        In a previous life I was a creative coder building web experiences,
        interactive audio toys, mobile apps, interactive installations.
      </p>
      <p>
        I work remotely from Málaga in the south of Spain. I write less code
        than I'd like to, mostly javascript / node.js these days. I live in
        iterm, zsh, tmux, vim.
      </p>
    </Layout>
  );
}
