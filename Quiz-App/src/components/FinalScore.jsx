import "font-awesome/css/font-awesome.min.css";
import styles from "./finalscore.module.css";

export default function FinalScore({
  score,
  setFinish,
  setStart,
  setNum,
  setScore,
}) {
  function comment(score) {
    if (score === 13) {
      return "Perfect Score!!!🥳🥇";
    } else if (score >= 10) {
      return "Great Work!🎊🥈";
    } else if (score >= 6) {
      return "Good Job!👍🥉";
    } else if (score >= 4) {
      return "Better Luck Next Time!🤗";
    } else {
      return "You Can Try Again!🏅";
    }
  }
  return (
    <div className={styles.box}>
      <h2>{comment(score)}</h2>
      <h3>{score}/13</h3>
      <div className={styles.buttonDiv}>
        <button
          className={styles.button}
          onClick={() => {
            setStart(false);
            setFinish(false);
            setNum(0);
            setScore(0);
          }}
        >
          <i className="fa-solid fa-house"></i>
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setStart(true);
            setFinish(false);
            setNum(0);
            setScore(0);
          }}
        >
          <i className="fa-solid fa-rotate-right"></i>
        </button>
      </div>
    </div>
  );
}
