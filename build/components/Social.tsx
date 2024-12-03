import Link from "next/link";

export default function Social() {
  return (
    <>
      <section>
        <p>
          If you find any of this interesting, you can read more{" "}
          <Link href="/about">about me</Link>, maybe check out my{" "}
          <Link href="/diary">diary</Link>, where I share thoughts and ongoing
          projects. I&apos;m also around pretty much anywhere with the
          @jesusgollonet handle. ({" "}
          <Link href="https://github.com/jesusgollonet">Github</Link>,{" "}
          <Link href="https://twitter.com/jesusgollonet">Twitter</Link>,{" "}
          <Link href="https://linkedin.com/in/jesusgollonet">LinkedIn</Link>,{" "}
          <Link href="https://instagram.com/jesusgollonet">Instagram</Link>,{" "}
          <Link href="https://www.youtube.com/@jesusgollonet">Youtube</Link>,{" "}
          <Link href="https://mastodon.social/@jesusgollonet">Mastodon</Link>)
        </p>
      </section>
    </>
  );
}
