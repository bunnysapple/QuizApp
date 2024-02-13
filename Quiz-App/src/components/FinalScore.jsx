import "font-awesome/css/font-awesome.min.css";
import styles from "./finalscore.module.css";

export default function FinalScore({ score, setFinish, setStart }) {
  return (
    <div className={styles.box}>
      <h2>Final Score!</h2>
      <h3>{score}/13</h3>
      <button
        className={styles.button}
        onClick={() => {
          setStart(false);
          setFinish(false);
        }}
      >
        <i className="fa-solid fa-house"></i>
      </button>
      <button
        className={styles.button}
        onClick={() => {
          setStart(true);
          setFinish(false);
        }}
      >
        <i className="fa-solid fa-rotate-right"></i>
      </button>
    </div>
  );
}
