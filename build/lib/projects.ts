import { readdir, readFile } from "fs/promises";
import path from "path";
import yaml from "js-yaml";
const projectsDirectory = path.join(process.cwd(), "projects");

export interface Project {
  name: string;
  overview: string;
  sections: Section[];
  slug: string;
}

export interface ProjectFile {
  fileName: string;
  name: string;
  year: string;
  client: string;
  awards?: string;
  overview: string;
  sections: Section[];
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
      return {
        title: f.replace(/\.yml/, ""),
        name: projectData.name,
        slug: f.replace(/\.yml/, ""),
        overview: projectData.overview,
        sections: projectData.sections,
      };
    }),
  );
  return projects;
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
