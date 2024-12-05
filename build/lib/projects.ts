import { readdir, readFile } from "fs/promises";
import path from "path";
import yaml from "js-yaml";
const projectsDirectory = path.join(process.cwd(), "projects");

export interface ProjectFile {
  fileName: string;
  title: string;
  overview: string;
  sections: Section[];
  slug: string;
}

export interface Section {
  title: string;
  details: string;
}

export async function getProjects(): Promise<ProjectFile[]> {
  const fileList = await readdir(projectsDirectory);
  const filtered = fileList.filter((f) => f.includes(".yml"));

  const projects: ProjectFile[] = await Promise.all(
    filtered.map(async (f) => {
      const filePath = path.join(projectsDirectory, f);
      const fileContents = await readFile(filePath, "utf8");
      const projectData = yaml.load(fileContents) as ProjectFile;
      return {
        fileName: f,
        title: f.replace(/\.yml/, ""),
        slug: f.replace(/\.yml/, ""),
        overview: projectData.overview,
        sections: projectData.sections,
      };
    }),
  );
  return projects;
}

export async function getProjectData(id: string): Promise<ProjectFile> {
  const filePath = path.join(projectsDirectory, `${id}.yml`);
  const fileContents = await readFile(filePath, "utf8");
  const projectData = yaml.load(fileContents) as ProjectFile;
  return projectData;
}
