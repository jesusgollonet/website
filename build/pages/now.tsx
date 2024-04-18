import Layout from "../components/layout";
import styles from "../components/layout.module.css";
import Link from "next/link";
// content in markdown

export default function Now() {
  return (
    <Layout>
      <h1>Now</h1>
      <p>
        <time>Last updated 12/03/2024</time>
      </p>

      <p>
        I&apos;m focusing back on interactive installations, kiosks, hardware
        devices with the lovely folks at Bora Bora. That has meant working a
        significant amount on windows and vs-code, which is ok, but I'm still
        painfully slow.
      </p>
      <p>
        The beginning of the year saw me with amazing energy, which has waned a
        bit due to some stress at work. I&apos;m journaling like a maniac in
        roam, so at least I'm fully aware of what&apos; going on.
      </p>
      <p>
        I&apos;m back to the gym for 2 or 3 days a week, refocusing on strength
        and cardio. I stopped strength due to a weird shoulder issue but in the
        last couple of days it has felt ok, so fingers crossed. Cardio is
      </p>
      <p>
        Hedging my bets. interactive audio toys, mobile apps, interactive
        installations.
      </p>
      <p>
        I work remotely from Málaga in the south of Spain. I write less code
        than I&apos;d like to, mostly typescript / node.js these days. I live in
        iterm, zsh, tmux, vim.
      </p>
    </Layout>
  );
}
