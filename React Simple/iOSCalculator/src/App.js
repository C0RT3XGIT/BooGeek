import "./App.css";
import React, { useState, useEffect } from "../node_modules/react";

//Import components
import ValueView from "./components/ValueView";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [valueInMemory, setValueInMemomry] = useState("");
  const [operator, setOperator] = useState("");
  const [isPressed, setIsPressed] = useState("");

  useEffect(() => {
    setInputValue("0");
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="calculator">
        <div className="top-container"></div>
        <ValueView inputValue={inputValue} setInputValue={setInputValue} />
        <ButtonContainer
          inputValue={inputValue}
          setInputValue={setInputValue}
          valueInMemory={valueInMemory}
          setValueInMemomry={setValueInMemomry}
          operator={operator}
          setOperator={setOperator}
          isPressed={isPressed}
          setIsPressed={setIsPressed}
        />
      </div>
      <h3 className="lowerText">It's not the best solution, but it works =)</h3>
      <script src="app.js"></script>
    </div>
  );
}

export default App;
