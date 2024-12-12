import Head from "next/head";

export default function JGHead({
  title = "Jesus Gollonet | Creative Technologist & Technical Director",
  description = "I’m Jesus Gollonet, a Creative Technology Architect and Technical Director focused on architecting complex technical solutions and high-performance infrastructure.",
  image = "/images/card.jpg",
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
      <meta property="og:image" content={image} />
      {/* twitter card*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jesusgollonet" />
      <meta name="twitter:creator" content="@jesusgollonet" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
      <script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="fd52c127-5d3a-4aeb-a7c6-14fa463c3ced"
      ></script>
    </Head>
  );
}
