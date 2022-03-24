import React, { Component } from "react";
import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";

function Calculator() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }
    if (curState) {
      setCurState((pre) => pre + e.target.innerText);
    } else {
      setCurState(e.target.innerText);
      setTotal(false);
    }
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

  // equals

  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "÷":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };

  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState(`-${curState}`);
    }
  };

  const percent = () => {
    if (preState) {
      setCurState(String((parseFloat(curState) / 100) * preState));
    } else {
      setCurState(String(parseFloat(curState) / 100));
    }
  };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">
          {input !== "" || input === "0" ? (
            <NumberFormat value={input} displayType="text" thousandSeparator />
          ) : (
            <NumberFormat
              value={preState}
              displayType="text"
              thousandSeparator
            />
          )}
        </div>

        <button type="button" className="btn light-gray" onClick={reset}>
          AC
        </button>
        <button type="button" className="btn light-gray" onClick={minusPlus}>
          +/-
        </button>
        <button type="button" className="btn light-gray row" onClick={percent}>
          %
        </button>
        <button type="button" className="btn orange" onClick={operatorType}>
          ÷
        </button>
        <button type="button" lassName="btn" onClick={inputNum}>
          7
        </button>
        <button type="button" className="btn" onClick={inputNum}>
          8
        </button>
        <button type="button" className="btn row" onClick={inputNum}>
          9
        </button>
        <button type="button" className="btn orange" onClick={operatorType}>
          X
        </button>
        <button type="button" className="btn" onClick={inputNum}>
          4
        </button>
        <button type="button" className="btn" onClick={inputNum}>
          5
        </button>
        <button type="button" lassName="btn row" onClick={inputNum}>
          6
        </button>
        <button type="button" lassName="btn orange" onClick={operatorType}>
          -
        </button>
        <button type="button" className="btn" onClick={inputNum}>
          1
        </button>
        <button type="button" className="btn" onClick={inputNum}>
          2
        </button>
        <button type="button" className="btn row" onClick={inputNum}>
          3
        </button>
        <button type="button" className="btn orange" onClick={operatorType}>
          +
        </button>
        <button type="button" className="btn zero" onClick={inputNum}>
          0
        </button>
        <button type="button" className="btn row1" onClick={inputNum}>
          .
        </button>
        <button type="button" className="btn orange" onClick={equals}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
