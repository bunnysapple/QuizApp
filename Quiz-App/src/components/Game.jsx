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
  setNum,
  setStart,
  setFinish,
  setScore,
  setClicked,
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
      />
      {answered ? (
        <Next
          questions={questions}
          num={num}
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
