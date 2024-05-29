import Head from "next/head";

export default function JGHead() {
  return (
    <Head>
      <title>
        Jesus Gollonet | Freelance Creative Technologist & Technical Director{" "}
      </title>
      <meta
        name="description"
        content="I’m Jesus Gollonet, a Freelance Creative Technologist and Technical Director focused on backend development and DevOps. I’ve worked on digital campaigns and interactive installations for brands like Adidas, Google, HBO, and Coca-Cola. I specialize in backend solutions, leading development projects, and deploying cloud infrastructure. Connect with me @jesusgollonet on most social platforms. Reach out to discuss a project or just to say hi."
        key="desc"
      />
      <meta
        property="og:title"
        content="Jesus Gollonet | Freelance Creative Technologist & Technical Director"
      />
      <meta
        property="og:description"
        content="I’m Jesus Gollonet, a Freelance Creative Technologist and Technical Director focused on backend development and DevOps. I’ve worked on digital campaigns and interactive installations for brands like Adidas, Google, HBO, and Coca-Cola. I specialize in backend solutions, leading development projects, and deploying cloud infrastructure. Connect with me @jesusgollonet on most social platforms. Reach out to discuss a project or just to say hi."
      />
      <meta
        property="og:image"
        content="https://jesusgollonet.com/images/profile.jpg"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
