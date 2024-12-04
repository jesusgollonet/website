import Layout from "@/components/layout";
import { listProjects, ProjectFile } from "@/lib/projects";
import Link from "next/link";

export async function getStaticProps() {
  const projects = await listProjects();
  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }: { projects: ProjectFile[] }) {
  return (
    <Layout>
      <section>
        <h2> Projects</h2>
        <p>This is the list of projects</p>
        <ul>
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
