import { useState } from "react";

import TextField from "./components/TextField";

function App() {
  const [char, setChar] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const charsCountHandler = (event) => {
    setChar(event.target.value);
    let data = event.target.value;
    setCharCount(data.length);
    data = data.replace(/(^\s*)|(\s*$)/gi, "");
    data = data.replace(/[ ]{2,}/gi, " ");
    data = data.replace(/\n /, "\n");
    if (data.length === 0) {
      setWordCount(0);
    } else {
      setWordCount(data.split(" ").length);
    }
  };

  return (
    <div className="App">
      <h1>Welcome to Word Counter</h1>
      <TextField char={char} charCount={charsCountHandler} />
      <h3>No. of Words are: {wordCount}</h3>
      <h3>No. of Characters are: {charCount}</h3>
    </div>
  );
}

export default App;
