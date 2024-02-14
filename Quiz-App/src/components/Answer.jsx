import { useState } from "react";
import styles from "./answer.module.css";

export default function Answer({
  questions,
  num,
  score,
  answers,
  setAnswered,
  clicked,
  setClicked,
  setScore,
  setCorrect,
}) {
  const answer = questions[num]["answer"];
  const color = [
    colorSetter(answers[0]),
    colorSetter(answers[1]),
    colorSetter(answers[2]),
    colorSetter(answers[3]),
  ];
  console.log(color);
  function colorSetter(guess) {
    return clicked
      ? answer === guess
        ? styles.correct
        : styles.incorrect
      : "";
  }
  function check(guess) {
    if (answer === guess) {
      setScore((score += 1));
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }
  return (
    <div className={styles.answerBox}>
      <button
        onClick={() => {
          if (clicked) return;
          check(answers[0]);
          setClicked(true);
          setAnswered(true);
        }}
        className={`${styles.button} ${color[0]}`}
      >
        {answers[0]}
      </button>
      <button
        onClick={() => {
          if (clicked) return;
          check(answers[1]);
          setClicked(true);
          setAnswered(true);
        }}
        className={`${styles.button} ${color[1]}`}
      >
        {answers[1]}
      </button>
      <button
        onClick={() => {
          if (clicked) return;
          check(answers[2]);
          setClicked(true);
          setAnswered(true);
        }}
        className={`${styles.button} ${color[2]}`}
      >
        {answers[2]}
      </button>
      <button
        onClick={() => {
          if (clicked) return;
          check(answers[3]);
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
