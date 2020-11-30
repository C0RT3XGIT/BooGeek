import React from "react";
import ButtonContainer from "./ButtonContainer";

function ValueView({
  inputValue,
  setInputvalue,
  valueInMemory,
  setValueInMemomry,
}) {
  return <div className="value"> {inputValue} </div>;
}
export default ValueView;
