import Layout from "../components/layout";
import styles from "../components/layout.module.css";
import Link from "next/link";

export default function About() {
    return (
        <Layout>
            <h1>About</h1>
            <p>
                Hey! I&apos;m Jesús Gollonet. I have been a{" "}
                <strong>Technical Director </strong> for the last 10 years (
                <a href="https://www.northkingdom.com/">North Kingdom</a>,{" "}
                <a href="https://dogstudio.co/">Dogstudio</a>,{" "}
                <a href="https://resn.co.nz/">Resn</a>), developing and managing
                campaigns for global brands (Adidas, HBO, Netflix, Google,
                Apple, Amazon, Maserati...). My role has often been closer to the{" "}
                <strong>back-end, architecture and operations</strong>. 
            </p>
            <p>My work usually involves, but is not limited to:</p>
            <ul>
                <li>Software architecture for complex interactive experiences</li>
                <li>Capacity planning for global campaings</li>
                <li>Implementing and managing backend systems</li>
                <li>Managing teams and vendors</li>
                <li>Technical commmunication with clients</li>
                <li>Operations: Planning, implementation, monitoring, maintenance</li>
            </ul>

            <p>
                In a previous life I was a creative coder building web
                experiences, interactive audio toys, mobile apps, interactive
                installations.
            </p>
            <p>
                I work remotely from Málaga in the south of Spain. I write less
                code than I&apos;d like to, mostly typescript / node.js these
                days. I live in iterm, zsh, tmux, vim.
            </p>
        </Layout>
    );
}
