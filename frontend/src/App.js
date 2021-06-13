import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  const [word, setWord] = useState("");

  const handler = (e) => {
    e.preventDefault();
    console.log(word);
  };

  return (
    <div>
      <Header title="Images Gallery v2" />
      <Search word={word} setWord={setWord} handleSubmit={handler} />
    </div>
  );
};

export default App;
