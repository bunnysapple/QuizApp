import styles from "./header.module.css";

export default function Header({ start }) {
  console.log(start);
  let className = start ? styles.header2 : styles.header;
  console.log(className);
  return (
    <header className={className}>
      <h1 className={styles.h1}>Quiz Time!</h1>
    </header>
  );
}
