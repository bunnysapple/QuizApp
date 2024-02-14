import styles from "./next.module.css";

export default function Next({
  questions,
  num,
  correct,
  setNum,
  setStart,
  setFinish,
  setAnswered,
  setClicked,
}) {
  const color = correct ? styles.correct : styles.incorrect;
  function check() {
    if (num === questions.length - 1) {
      setStart(false);
      setFinish(true);
    } else {
      setNum((num += 1)), 2000;
    }
    setAnswered(false);
    setClicked(false);
  }
  return (
    <div className={styles.next}>
      <button className={`${styles.button} ${color}`} onClick={() => check()}>
        Next
      </button>
    </div>
  );
}
