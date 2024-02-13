import styles from "./start.module.css";

export default function Start({
  start,
  setStart,
  questions,
  setQuestions,
  setChange,
}) {
  function shuffle(data) {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    console.log(data);
    return data;
  }
  return (
    <div className={styles.container}>
      <div className={styles.startBox}>
        <h2>Start?</h2>
        <button
          className={styles.startButton}
          onClick={() => {
            const newQuestions = shuffle(questions);
            setQuestions(newQuestions);
            setStart(!start);
            setChange(true);
          }}
        >
          Go!
        </button>
      </div>
    </div>
  );
}
