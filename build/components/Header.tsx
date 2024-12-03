import styles from "@/styles/Home.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src="/images/profile.jpg"
        height={100}
        width={100}
        alt="Jesus Gollonet"
        className={styles.profile}
      />
      <h1>Jesus Gollonet</h1>
    </header>
  );
}
