import styles from "./header.module.css";

export default function Header({ start, finish }) {
  console.log(start);
  const className = start ? styles.header2 : styles.header;
  const title = finish ? "Final Score" : "Quiz Time";
  console.log(className);
  return (
    <header className={className}>
      <h1 className={styles.h1}>{title}!</h1>
    </header>
  );
}
