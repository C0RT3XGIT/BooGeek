import React from "../../node_modules/react";

function ButtonContainer({
  inputValue,
  setInputValue,
  valueInMemory,
  setValueInMemomry,
  operator,
  setOperator,
  isPressed,
  setIsPressed,
}) {
  const inputHandler = (e) => {
    const buttonValue = e.target.textContent;
    setIsPressed("value");
    if (
      inputValue == "0" ||
      isPressed == "operator" ||
      isPressed == "calculate"
    ) {
      setInputValue(buttonValue);
    } else {
      setInputValue((prevValue) => prevValue + buttonValue);
    }
    document.querySelector(".ac").innerHTML = "C";
  };

  const cleanAll = (e) => {
    setIsPressed("clear");
    if (e.target.textContent == "AC") {
      setInputValue("0");
      setValueInMemomry("");
      setOperator("");
    } else {
      e.target.textContent = "AC";
      setInputValue("0");
    }
  };

  const getOperator = (e) => {
    setIsPressed("operator");
    setOperator(e.target.textContent);
    if (inputValue && operator && isPressed !== "operator") {
      setInputValue(calculate());
      setValueInMemomry(calculate());
    } else setValueInMemomry(inputValue);

    // calculateOnOpClick();
  };

  // const calculateOnOpClick = () => {
  //   if (valueInMemory && isPressed == "operator")
  //     setInputValue(calculate(valueInMemory, operator, inputValue));

  //   if (valueInMemory && operator && isPressed !== "operator") {
  //     setInputValue(calculate(valueInMemory, operator, inputValue));
  //   }
  // };

  const getResult = () => {
    if (
      valueInMemory &&
      isPressed !== "calculate" &&
      isPressed !== "operator"
    ) {
      setIsPressed("calculate");
      setInputValue(calculate());
      setValueInMemomry("0");
      setOperator("");
    }
  };

  const decimalKey = () => {
    setIsPressed("decimal");
    if (!inputValue.includes("."))
      setInputValue((prevValue) => prevValue + ".");
  };

  const calculate = () => {
    let result = "";
    if (operator == "+") {
      result = parseFloat(valueInMemory) + parseFloat(inputValue);
    } else if (operator == "−") {
      result = parseFloat(valueInMemory) - parseFloat(inputValue);
    } else if (operator === "×") {
      result = parseFloat(valueInMemory) * parseFloat(inputValue);
    } else if (operator === "÷") {
      result = parseFloat(valueInMemory) / parseFloat(inputValue);
    }
    return result;
  };

  const plusMinusKey = () => {
    if (!inputValue.includes("-"))
      setInputValue((prevValue) => "-" + prevValue);
    else setInputValue(inputValue.substring(1));
  };
  return (
    <div className="buttons-container">
      <button onClick={cleanAll} className="button function ac">
        AC
      </button>
      <button onClick={plusMinusKey} className="button function pm">
        ±
      </button>
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
      <button onClick={getOperator} className="button operator multiplication">
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
      <button onClick={decimalKey} className="button decimal">
        .
      </button>
      <button onClick={getResult} className="button operator equal">
        =
      </button>
    </div>
  );
}
export default ButtonContainer;
