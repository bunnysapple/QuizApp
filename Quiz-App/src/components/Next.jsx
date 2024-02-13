import styles from "./next.module.css";

export default function Next({
  questions,
  num,
  setNum,
  setStart,
  setFinish,
  setAnswered,
  setClicked,
}) {
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
    <div className={styles.next} onClick={() => check()}>
      next -{">"}
    </div>
  );
}
