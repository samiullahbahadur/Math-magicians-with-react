import { string } from "prop-types";
import { useState, useEffect } from "react";

function Calculator() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operation, setOperation] = useState("null");
  const [total, setTotal] = useState("false");

  // input numbers
  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;
    if (total) {
      setPreState("");
    }
    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };
  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

  // select operand
  const operationType = (e) => {
    setTotal(false);
    setOperation(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    }
    setPreState(curState);
    setCurState("");
  };

  // Equals operation
  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }

    let cal;
    switch (operation) {
      case "÷":
        cal = string(parseFloat(preState) / parseFloat(curState));
        break;
      case "x":
        cal = string(parseFloat(preState) * parseFloat(curState));
        break;
      case "+":
        cal = string(parseFloat(preState) + parseFloat(curState));
        break;
      case "-":
        cal = string(parseFloat(preState) - parseFloat(curState));
        break;

      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };
  const minusPlas = () => {};
  const percent = () => {};

  // reset operation
  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">{input}</div>

        <div className="btn light-gray" onClick={reset}>
          AC
        </div>
        <div className="btn light-gray" onClick={minusPlas}>
          +/-
        </div>
        <div className="btn light-gray row" onClick={percent}>
          %
        </div>
        <div className="btn orange" onClick={operationType}>
          ÷
        </div>
        <div className="btn " onClick={inputNum}>
          7
        </div>
        <div className="btn " onClick={inputNum}>
          8
        </div>
        <div className="btn row" onClick={inputNum}>
          9
        </div>
        <div className="btn orange" onClick={operationType}>
          x
        </div>
        <div className="btn " onClick={inputNum}>
          4
        </div>
        <div className="btn " onClick={inputNum}>
          5
        </div>
        <div className="btn row " onClick={inputNum}>
          6
        </div>
        <div className="btn orange" onClick={operationType}>
          -
        </div>
        <div className="btn " onClick={inputNum}>
          1
        </div>
        <div className="btn " onClick={inputNum}>
          2
        </div>
        <div className="btn row" onClick={inputNum}>
          3
        </div>
        <div className="btn orange" onClick={operationType}>
          +
        </div>
        <div className="btn zero " onClick={inputNum}>
          0
        </div>
        <div className="btn row1 " onClick={inputNum}>
          .
        </div>

        <div className="btn orange" onClick={equals}>
          =
        </div>
      </div>
    </div>
  );
}

export default Calculator;
