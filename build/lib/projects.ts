import { readdir } from "fs/promises";
import path from "path";
const projectsDirectory = path.join(process.cwd(), "projects");

export interface ProjectFile {
  fileName: string;
  title: string;
  slug: string;
  content: string;
}

export async function listProjects(): Promise<ProjectFile[]> {
  const fileList = await readdir(projectsDirectory);
  const projects: ProjectFile[] = fileList
    .filter((f) => f.includes(".yml"))
    .map((f) => {
      return {
        fileName: f,
        title: f.replace(/\.yml/, ""),
        slug: f.replace(/\.yml/, ""),
        content: "content",
      };
    });

  console.log(fileList);
  return projects;
}
