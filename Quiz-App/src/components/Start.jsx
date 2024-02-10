import styles from "./start.module.css";

export default function Start({ start, setStart }) {
  return (
    <div className={styles.container}>
      <div className={styles.startContainer}>
        <h2>Start?</h2>
        <button onClick={() => setStart(!start)}>Go!</button>
      </div>
    </div>
  );
}
