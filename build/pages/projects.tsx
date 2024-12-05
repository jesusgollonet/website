import Layout from "@/components/layout";
import { getProjects, Project } from "@/lib/projects";
import Link from "next/link";

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <Layout>
      <section>
        <h2> Projects</h2>
        <ul>
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`}>{p.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
