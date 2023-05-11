import React, { useState } from "react";
// import "./calculator.scss";

const Calculator = () => {
  const [result, setResult] = useState("");

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const handleInputClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator__container">
      <div className="calculator__block">
        <div className="row">
          <input className="input__displayValue" type="text" value={result} />
        </div>

        <div className="row">
          <button className="input__value" name="AC" onClick={clear}>
            AC
          </button>
          <button className="input__value" name="C" onClick={backspace}>
            C
          </button>
          <button className="input__value" name="%" onClick={handleInputClick}>
            %
          </button>
          <button className="input__value" name="/" onClick={handleInputClick}>
            &divide;
          </button>
        </div>

        <div className="row">
          <button className="input__value" name="7" onClick={handleInputClick}>
            7
          </button>
          <button className="input__value" name="8" onClick={handleInputClick}>
            8
          </button>
          <button className="input__value" name="9" onClick={handleInputClick}>
            9
          </button>
          <button className="input__value" name="*" onClick={handleInputClick}>
            &times;
          </button>
        </div>

        <div className="row">
          <button className="input__value" name="4" onClick={handleInputClick}>
            4
          </button>
          <button className="input__value" name="5" onClick={handleInputClick}>
            5
          </button>
          <button className="input__value" name="6" onClick={handleInputClick}>
            6
          </button>
          <button className="input__value" name="-" onClick={handleInputClick}>
            -
          </button>
        </div>

        <div className="row">
          <button className="input__value" name="1" onClick={handleInputClick}>
            1
          </button>
          <button className="input__value" name="2" onClick={handleInputClick}>
            2
          </button>
          <button className="input__value" name="3" onClick={handleInputClick}>
            3
          </button>
          <button className="input__value" name="+" onClick={handleInputClick}>
            +
          </button>
        </div>

        <div className="row1">
          <button className="input__value" name="0" onClick={handleInputClick}>
            0
          </button>
          <button className="input__value" name="." onClick={handleInputClick}>
            .
          </button>
          <button className="input__value" name="=" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
