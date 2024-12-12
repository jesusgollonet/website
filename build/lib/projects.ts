import { readdir, readFile } from "fs/promises";
import path from "path";
import yaml from "js-yaml";
const projectsDirectory = path.join(process.cwd(), "projects");

export interface Project {
  name: string;
  cover: string;
  overview: string;
  sections: Section[];
  roles?: string[];
  technologies?: string[];
  year: string;
  slug: string;
  publish?: boolean;
}

export interface ProjectFile {
  fileName: string;
  cover: string;
  name: string;
  client: string;
  overview: string;
  sections: Section[];
  awards?: string;
  year: string;
  roles?: string[];
  technologies?: string[];
  publish?: boolean;
}

export interface Section {
  title: string;
  details: string;
}

export async function getProjects(): Promise<Project[]> {
  const fileList = await readdir(projectsDirectory);
  const filtered = fileList.filter((f) => f.includes(".yml"));

  const projects: Project[] = await Promise.all(
    filtered.map(async (f) => {
      const projectData = await loadProjectFile(f);

      const project: Project = {
        name: projectData.name,
        year: projectData.year,
        cover: projectData.cover,
        slug: f.replace(/\.yml/, ""),
        overview: projectData.overview,
        sections: projectData.sections,
      };
      if (projectData.roles) {
        project.roles = projectData.roles;
      }
      if (projectData.technologies) {
        project.technologies = projectData.technologies;
      }
      if (projectData.publish) {
        project.publish = projectData.publish;
      }
      return project;
    }),
  );
  return projects
    .filter((p) => p.publish && p.publish === true)
    .sort((a, b) => {
      return a.year > b.year ? -1 : 1;
    });
}

async function loadProjectFile(fileName: string): Promise<ProjectFile> {
  const fullPath = path.join(projectsDirectory, fileName);
  const fileContents = await readFile(fullPath, "utf8");
  const projectData = yaml.load(fileContents) as ProjectFile;
  return projectData;
}

export async function getProjectData(id: string): Promise<ProjectFile> {
  const filePath = path.join(projectsDirectory, `${id}.yml`);
  const fileContents = await readFile(filePath, "utf8");
  const projectData = yaml.load(fileContents) as ProjectFile;
  return projectData;
}
