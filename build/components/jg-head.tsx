import Head from "next/head";

export default function JGHead({
  title = "Jesus Gollonet | Freelance Creative Technologist & Technical Director",
  description = "I’m Jesus Gollonet, a Freelance Creative Technologist and Technical Director focused on backend development and DevOps. I’ve worked on digital campaigns and interactive installations for brands like Adidas, Google, HBO, and Coca-Cola. I specialize in backend solutions, leading development projects, and deploying cloud infrastructure. Connect with me @jesusgollonet on most social platforms. Reach out to discuss a project or just to say hi.",
  image = "https://jesusgollonet.com/images/card.jpg",
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image" content={image} />
      {/* twitter card*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jesusgollonet" />
      <meta name="twitter:creator" content="@jesusgollonet" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
