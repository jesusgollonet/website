import styles from "./layout.module.css";
import Link from "next/link";

export default function Layout({
    children,
    home,
}: {
    children: React.ReactNode;
    home?: boolean;
}) {
    return (
        <div className={styles.container}>
            <div>{children}</div>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Home</Link>
                </div>
            )}
        </div>
    );
}
