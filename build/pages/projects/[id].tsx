import Layout from "@/components/layout";
import { PageType } from "@/lib/types";
import { getProjects, getProjectData, type Project } from "@/lib/projects";

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
  const projectData = await getProjectData(params.id);
  return {
    props: {
      ...projectData,
    },
  };
}

export default function Project(project: Project) {
  console.log(project);
  return (
    <Layout pageType={PageType.Projects}>
      <section>
        <h2> {project.name}</h2>
        <h3>Overview</h3>
        <p>{project.overview}</p>
        {project.sections.map((section) => (
          <div key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.details}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
