import { useEffect, useState } from "react";
import Header from "./components/Header";
import Start from "./components/Start";
import "./App.css";
import Game from "./components/Game";
import Data from "./json/data.json";
import FinalScore from "./components/FinalScore";

function App() {
  const [questions, setQuestions] = useState(Data.questions);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [num, setNum] = useState(0);
  function shuffle(data) {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  }
  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <div>
      <Header start={start} />
      {start ? (
        <Game
          questions={questions}
          options={shuffle(questions[num]["options"])}
          num={num}
          setNum={setNum}
          setStart={setStart}
          setFinish={setFinish}
        />
      ) : finish ? (
        <FinalScore />
      ) : (
        <Start
          start={start}
          setStart={setStart}
          questions={questions}
          setQuestions={setQuestions}
        />
      )}
    </div>
  );
}

export default App;
