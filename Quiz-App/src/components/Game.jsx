import { useState } from "react";
import Question from "./Question";
import styles from "./game.module.css";
import Answer from "./Answer";
import Next from "./Next";

export default function Game({
  questions,
  options,
  num,
  score,
  clicked,
  correct,
  setNum,
  setStart,
  setFinish,
  setScore,
  setClicked,
  setCorrect,
}) {
  const [answered, setAnswered] = useState(false);
  return (
    <div className={styles.box}>
      <Question questions={questions} num={num} />
      <Answer
        questions={questions}
        num={num}
        score={score}
        answers={options}
        setAnswered={setAnswered}
        clicked={clicked}
        setClicked={setClicked}
        setScore={setScore}
        setCorrect={setCorrect}
      />
      {answered ? (
        <Next
          questions={questions}
          num={num}
          correct={correct}
          setNum={setNum}
          setStart={setStart}
          setFinish={setFinish}
          setAnswered={setAnswered}
          setClicked={setClicked}
        />
      ) : (
        ""
      )}
    </div>
  );
}
