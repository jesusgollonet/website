import RSS from "rss";
import { writeFile } from "node:fs/promises";
import { PostFile } from "./types";

export default async function generateRssFeed(posts: PostFile[]) {
  const site_url = "https://jesusgollonet.com";
  const feed = new RSS({
    title: "Jesus Gollonet Diary | Feed",
    site_url,
    feed_url: `${site_url}/diary/feed.xml`,
    pubDate: new Date().toISOString(),
  });
  posts.map((post) => {
    feed.item({
      title: post.title,
      url: `${site_url}${post.slug}`,
      date: post.date,
      description: post.contentHtml,
    });
  });
  await writeFile("./public/diary/feed.xml", feed.xml());
}
