import styles from "./layout.module.css";

// I don't really understand the type signature here
//https://stackoverflow.com/questions/64722861/what-typescript-type-should-react-children-be-set-to
export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className={styles.container}>
      <div>{children}</div>
    </div>
  );
}
