import React from "react";

function ButtonContainer({
  inputValue,
  setInputvalue,
  valueInMemory,
  setValueInMemomry,
  operator,
  setOperator,
}) {
  const inputHandler = (e) => {
    setInputvalue((prevValue) => {
      if (prevValue == 0) {
        prevValue = e.target.textContent;
        console.log(prevValue);
      } else prevValue = prevValue + e.target.textContent;
    });
  };

  const cleanAll = () => {
    setInputvalue("0");
  };

  const getOperator = (e) => {
    setOperator(e.target.textContent);
    let newValue;
    let valueInMemoryToInt = parseInt(valueInMemory);
    let inputValueToInt = parseInt(inputValue);
    if (valueInMemory == null) setValueInMemomry(inputValueToInt);
    // if vale in mem and input != 0 then operate
    else {
      switch (operator) {
        case "+":
          newValue = valueInMemoryToInt + inputValueToInt;
          setValueInMemomry(newValue);
          setInputvalue("0");
          break;
        case "-":
          newValue = valueInMemoryToInt - inputValueToInt;
          setValueInMemomry(newValue);
          setInputvalue(newValue);
          break;
        case "×":
          newValue = valueInMemoryToInt * inputValueToInt;
          setValueInMemomry(newValue);
          setInputvalue(newValue);
          break;
        case "÷":
          newValue = valueInMemoryToInt / inputValueToInt;
          setValueInMemomry(newValue);
          setInputvalue(newValue);
          break;
      }
    }
  };

  const getRestulOfOperation = () => {
    if (valueInMemory == null) setValueInMemomry(inputValue);
  };

  const valinmem = () => console.log(valueInMemory == null); //get value in memory

  return (
    <div className="buttons-container">
      <button onClick={cleanAll} className="button function ac">
        AC
      </button>
      <button className="button function pm">±</button>
      <button onClick={getOperator} className="button function percent">
        %
      </button>
      <button onClick={getOperator} className="button operator buttonision">
        ÷
      </button>
      <button onClick={inputHandler} className="button number-7">
        7
      </button>
      <button onClick={inputHandler} className="button number-8">
        8
      </button>
      <button onClick={inputHandler} className="button number-9">
        9
      </button>
      <button onClick={inputHandler} className="button operator multiplication">
        ×
      </button>
      <button onClick={inputHandler} className="button number-4">
        4
      </button>
      <button onClick={inputHandler} className="button number-5">
        5
      </button>
      <button onClick={inputHandler} className="button number-6">
        6
      </button>
      <button onClick={getOperator} className="button operator subtraction">
        −
      </button>
      <button onClick={inputHandler} className="button number-1">
        1
      </button>
      <button onClick={inputHandler} className="button number-2">
        2
      </button>
      <button onClick={inputHandler} className="button number-3">
        3
      </button>
      <button onClick={getOperator} className="button operator addition">
        +
      </button>
      <button onClick={inputHandler} className="button number-0">
        0
      </button>
      <button className="button decimal">.</button>
      <button className="button operator equal">=</button>
    </div>
  );
}
export default ButtonContainer;
