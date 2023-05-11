import React, { useState } from "react";
// import "./calculator.scss";

const Claculator1 = () => {
  const [calculations, setCalculations] = useState(""); // 1st value is the state and 2nd value is the function to update the state
  const [result, setResult] = useState("");

  const operators = ["+", "-", "*", "/", "%", "."]; // array of operators

  const updateCalculations = (value) => {
    // function to update the calculations
    if (
      (operators.includes(value) && calculations === "") ||
      (operators.includes(value) && operators.includes(calculations.slice(-1)))
    ) {
      return;
    }
    setCalculations(calculations + value);

    if (!operators.includes(value)) {
      setResult(eval(calculations + value).toString());
    }
  };

  const clear = () => {
    // function to clear the calculations
    setCalculations("");
    setResult("");
  };

  const removeLastDigit = () => {
    // function to remove the last digit
    if (calculations === "") {
      return;
    }
    const value = calculations.slice(0, -1);
    setCalculations(value);
  };

  //   const createDigits = () => {
  //     const digits = [];

  //     for (let i = 1; i < 10; i++) {
  //       digits.push(
  //         <button
  //           className="input__value"
  //           key={i}
  //           onClick={() => updateCalculations(i.toString())}
  //         >
  //           {i}
  //         </button>
  //       );
  //     }
  //     return digits;
  //   };

  const calculate = () => {
    // function to calculate the result
    if (calculations === "") {
      // if calculations is empty then return
      return;
    }
    setCalculations(eval(calculations).toString()); // eval function evaluates the string and executes it
  };

  return (
    <div className="calculator">
      <div className="calculator__container">
        <div className="displayResult">
          <span>
            {result ? <span>({result})</span> : ""} {calculations || "0"}
          </span>
        </div>

        <div className="row__container">
          <button className="input__value" onClick={() => clear()}>
            AC
          </button>
          <button className="input__value" onClick={() => removeLastDigit()}>
            C
          </button>
          <button
            className="input__value"
            onClick={() => updateCalculations("%")}
          >
            %
          </button>
          <button
            className="input__value"
            onClick={() => updateCalculations("/")}
          >
            &divide;
          </button>
        </div>

        <div className="row__container">
          <button
            className="input__value"
            onClick={() => updateCalculations("7")}
          >
            7
          </button>
          <button
            className="input__value"
            onClick={() => updateCalculations("8")}
          >
            8
          </button>
          <button
            className="input__value"
            onClick={() => updateCalculations("9")}
          >
            9
          </button>
          <button
            className="input__value"
            onClick={() => updateCalculations("*")}
          >
            &times;
          </button>
        </div>

        <div className="row__container">
          <button
            className="input__value"
            onClick={() => updateCalculations("4")}
          >
            4
          </button>
          <button
            className="input__value"
            onClick={() => updateCalculations("5")}
          >
            5
          </button>
          <button
            className="input__value"
            onClick={() => updateCalculations("6")}
          >
            6
          </button>
          <button
            className="input__value"
            onClick={() => updateCalculations("-")}
          >
            &ndash;
          </button>
        </div>

        <div className="row__container">
          <button
            className="input__value"
            onClick={() => updateCalculations("1")}
          >
            1
          </button>
          <button
            className="input__value"
            onClick={() => updateCalculations("2")}
          >
            2
          </button>
          <button
            className="input__value"
            onClick={() => updateCalculations("3")}
          >
            3
          </button>
          <button
            className="input__value"
            onClick={() => updateCalculations("+")}
          >
            +
          </button>
        </div>

        <div className="row__container1">
          <button
            className="input__value"
            onClick={() => updateCalculations("0")}
          >
            0
          </button>
          <button
            className="input__value"
            onClick={() => updateCalculations(".")}
          >
            .
          </button>
          <button className="input__value" onClick={() => calculate()}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Claculator1;
