import "./App.css";
import React, { useState, useEffect } from "react";

//Import components
import ValueView from "./components/ValueView";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  const [inputValue, setInputvalue] = useState("");
  const [valueInMemory, setValueInMemomry] = useState("");
  const [operator, setOperator] = useState("");

  useEffect(() => {
    setInputvalue("0");
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="calculator">
        <div className="top-container"></div>
        <ValueView inputValue={inputValue} setInputvalue={setInputvalue} />
        <ButtonContainer
          inputValue={inputValue}
          setInputvalue={setInputvalue}
          valueInMemory={valueInMemory}
          setValueInMemomry={setValueInMemomry}
          operator={operator}
          setOperator={setOperator}
        />
      </div>
      <script src="app.js"></script>
    </div>
  );
}

export default App;
