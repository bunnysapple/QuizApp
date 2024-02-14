import { useEffect, useState } from "react";
import Header from "./components/Header";
import Start from "./components/Start";
import "./App.css";
import Game from "./components/Game";
import Data from "./json/data.json";
import FinalScore from "./components/FinalScore";
import Floaters from "./components/Floaters";

function App() {
  const [questions, setQuestions] = useState(Data.questions);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [options, setOptions] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [change, setChange] = useState(true);
  function shuffle(data) {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  }
  if (!clicked && change) {
    setOptions(shuffle(questions[num]["options"]));
    setChange(false);
  }
  function colorSetter() {
    return clicked ? (correct ? "correct" : "incorrect") : "default";
  }
  useEffect(() => {
    setChange(true);
  }, [num]);
  useEffect(() => {
    console.log(start);
    console.log(finish);
  }, [start, finish]);

  return (
    <div className={`everything ${colorSetter()}`}>
      <Header start={start} finish={finish} />
      {start ? (
        <Game
          questions={questions}
          options={options}
          num={num}
          score={score}
          clicked={clicked}
          correct={correct}
          setNum={setNum}
          setStart={setStart}
          setFinish={setFinish}
          setScore={setScore}
          setClicked={setClicked}
          setCorrect={setCorrect}
        />
      ) : finish ? (
        <FinalScore
          score={score}
          setFinish={setFinish}
          setStart={setStart}
          setNum={setNum}
          setScore={setScore}
        />
      ) : (
        <Start
          start={start}
          setStart={setStart}
          questions={questions}
          setQuestions={setQuestions}
          setChange={setChange}
        />
      )}
      <Floaters />
    </div>
  );
}

export default App;
