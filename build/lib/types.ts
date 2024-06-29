export enum PageType {
  Home = "home",
  Diary = "diary",
  Other = "other",
}

export interface PostFile {
  fileName: string;
  title: string;
  slug: string;
  date: string;
  draft: boolean;
  contentHtml: string;
  summary: string;
}
