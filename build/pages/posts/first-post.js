import Link from "next/link";
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <Layout>
      <h1>First Post</h1>
      <Link href="/">
        <a>Back home</a>
      </Link>
    </Layout>
  );
}
