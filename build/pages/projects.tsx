import Layout from "@/components/layout";
import { getProjects, Project } from "@/lib/projects";
import Link from "next/link";
import styles from "@/styles/projects.module.css";

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
        <ul className={styles.projects}>
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}`}>{p.name}</Link>
              <time dateTime={p.year}>
                <span>{p.year}</span>
              </time>{" "}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
