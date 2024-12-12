import styles from "./layout.module.css";
import Link from "next/link";
import { PageType } from "@/lib/types";
import Navigation from "@/components/Navigation";

export default function Layout({
  children,
  pageType = PageType.Other,
}: {
  children: React.ReactNode;
  pageType?: PageType;
}) {
  return (
    <div className={styles.container}>
      <Navigation />
      <div>{children}</div>

      {pageType === PageType.Diary && (
        <div className={styles.backToHome}>
          <Link href="/diary">← Diary</Link>
        </div>
      )}
      {pageType === PageType.Projects && (
        <div className={styles.backToHome}>
          <Link href="/projects">← Projects</Link>
        </div>
      )}
      {pageType === PageType.Other && (
        <div className={styles.backToHome}>
          <Link href="/">← Home</Link>
        </div>
      )}
    </div>
  );
}
