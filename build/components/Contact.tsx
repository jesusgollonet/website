import Link from "next/link";
import Social from "@/components/Social";
export default function Contact() {
  return (
    <>
      <section>
        <h2> Contact</h2>
        <p>
          If you want to talk about a project, ask for advice, or just say hi,
          you can get in touch 👇
        </p>
        <ul>
          <li>
            <Link href="https://cal.com/jesusgollonet/hola">
              Book a meeting
            </Link>{" "}
          </li>
          <li>
            <Link href="mailto:me@jesusgollonet.com">Email me</Link>{" "}
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/jesusgollonet/">
              LinkedIn
            </Link>
          </li>
        </ul>
      </section>

      <Social />
    </>
  );
}
