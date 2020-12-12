import React from "../../node_modules/react";
import ButtonContainer from "./ButtonContainer";

function ValueView({
  inputValue,
  setInputValue,
  valueInMemory,
  setValueInMemomry,
}) {
  return <div className="value"> {inputValue} </div>;
}
export default ValueView;
