import styles from "./question.module.css";

export default function Question({ questions, num }) {
  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionBox}>
        <h3 className={styles.question}>{questions[num]["question"]}</h3>
      </div>
      <div className={styles.imageBox}>
        <img className={styles.image} src={questions[num]["image"]} alt="" />
      </div>
    </div>
  );
}
