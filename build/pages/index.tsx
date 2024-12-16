import JGHead from "@/components/jg-head";
import Layout from "@/components/layout";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import { PageType } from "@/lib/types";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <Layout pageType={PageType.Home}>
      <JGHead />
      <Header />
      <Intro />
      <Work />
      <section className={styles.cta}>
        <Link href="/contact">Get in touch</Link>
      </section>
    </Layout>
  );
}
