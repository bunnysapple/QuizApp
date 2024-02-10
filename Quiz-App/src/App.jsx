import { useState } from "react";
import Header from "./components/Header";
import Start from "./components/Start";
import "./App.css";

function App() {
  const [start, setStart] = useState(false);
  return (
    <div>
      <Header />
      <Start start={start} setStart={setStart} />
    </div>
  );
}

export default App;
