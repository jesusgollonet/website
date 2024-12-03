import JGHead from "@/components/jg-head";
import Layout from "@/components/layout";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import Social from "@/components/Social";
import Contact from "@/components/Contact";
import { PageType } from "@/lib/types";
export default function Home() {
  return (
    <Layout pageType={PageType.Home}>
      <JGHead />
      <Header />
      <Intro />
      <Work />
      <Social />
      <Contact />
    </Layout>
  );
}
