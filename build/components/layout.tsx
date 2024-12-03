import styles from "./layout.module.css";
import Link from "next/link";
import { PageType } from "@/lib/types";

export default function Layout({
  children,
  pageType = PageType.Other,
}: {
  children: React.ReactNode;
  pageType?: PageType;
}) {
  return (
    <div className={styles.container}>
      <div>{children}</div>

      {pageType === PageType.Diary && (
        <div className={styles.backToHome}>
          <Link href="/diary">← Diary</Link>
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
