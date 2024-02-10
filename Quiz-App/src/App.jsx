import { useEffect, useState } from "react";
import Header from "./components/Header";
import Start from "./components/Start";
import "./App.css";
import Game from "./components/Game";
import Data from "./json/data.json";

function App() {
  const [questions, setQuestions] = useState(Data.questions);
  const [start, setStart] = useState(false);
  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <div>
      <Header />
      {start ? (
        <Game />
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
