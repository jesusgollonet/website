import Layout from "@/components/layout";
import { getProjects } from "@/lib/projects";

export async function getStaticPaths() {
  const projects = await getProjects();

  return {
    paths: projects.map((p) => {
      return {
        params: {
          id: p.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  return {
    props: {
      title: `${params.id}`,
    },
  };
}

export default function Project({ title }: { title: string }) {
  return (
    <Layout>
      <section>
        <h2> {title}</h2>
        <p>This is a project page</p>
      </section>
      <section>
        <h3>Overview</h3>
      </section>
    </Layout>
  );
}
