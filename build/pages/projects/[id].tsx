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
  return (
    <Layout pageType={PageType.Projects}>
      <section>
        <h2>{project.name}</h2>
        <p>{project.overview}</p>
        {project.sections.map((section) => (
          <div key={section.title}>
            <h4>{section.title}</h4>
            <p>{section.details}</p>
          </div>
        ))}
        {project.roles && project.roles.length > 0 && (
          <section>
            <h3>Roles</h3>
            <ul>
              {project.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </section>
        )}
        {project.technologies && project.technologies.length > 0 && (
          <section>
            <h3>Technologies</h3>
            <ul>
              {project.technologies.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </section>
        )}
      </section>
    </Layout>
  );
}
