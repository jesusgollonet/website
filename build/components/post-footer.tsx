import Link from "next/link";
import styles from "./post-footer.module.css";
export default function PostFooter(): JSX.Element {
  return (
    <div className={styles.postFooter}>
      <p>
        This was written by <Link href="/">Jesus Gollonet</Link>, a Creative
        Technologist and Technical Director based in Malaga.
      </p>
      <p>
        You can read more in the <Link href="/diary">Diary</Link> or{" "}
        <Link href="/">Get in Touch</Link>
      </p>
    </div>
  );
}
