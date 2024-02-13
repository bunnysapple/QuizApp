import { useState } from "react";
import Question from "./Question";
import styles from "./game.module.css";
import Answer from "./Answer";
import Next from "./Next";

export default function Game({
  questions,
  options,
  num,
  setNum,
  setStart,
  setFinish,
}) {
  const [answered, setAnswered] = useState(false);
  const [clicked, setClicked] = useState(false);
  return (
    <div className={styles.box}>
      <Question questions={questions} num={num} />
      <Answer
        questions={questions}
        num={num}
        answers={options}
        setAnswered={setAnswered}
        clicked={clicked}
        setClicked={setClicked}
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
