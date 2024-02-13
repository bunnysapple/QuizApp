import { useState } from "react";
import styles from "./answer.module.css";

export default function Answer({
  questions,
  num,
  answers,
  setAnswered,
  clicked,
  setClicked,
}) {
  const answer = questions[num]["answer"];
  const color = [
    check(answers[0]),
    check(answers[1]),
    check(answers[2]),
    check(answers[3]),
  ];
  console.log(color);
  function check(guess) {
    return clicked
      ? answer === guess
        ? styles.correct
        : styles.incorrect
      : "";
  }
  return (
    <div className={styles.answerBox}>
      <button
        onClick={() => {
          setClicked(true);
          setAnswered(true);
        }}
        className={`${styles.button} ${color[0]}`}
      >
        {answers[0]}
      </button>
      <button
        onClick={() => {
          setClicked(true);
          setAnswered(true);
        }}
        className={`${styles.button} ${color[1]}`}
      >
        {answers[1]}
      </button>
      <button
        onClick={() => {
          setClicked(true);
          setAnswered(true);
        }}
        className={`${styles.button} ${color[2]}`}
      >
        {answers[2]}
      </button>
      <button
        onClick={() => {
          setClicked(true);
          setAnswered(true);
        }}
        className={`${styles.button} ${color[3]}`}
      >
        {answers[3]}
      </button>
    </div>
  );
}
