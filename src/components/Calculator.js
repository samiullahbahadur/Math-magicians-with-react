

const Calculator = () => {
  

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">
          {input !== '' || input === '0' ? (
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
        <button type="button" className="btn light-gray" onClick={percent}>
          %
        </button>
        <button type="button" className="btn orange" onClick={operatorType}>
          ÷
        </button>
        <button type="button" className="btn" onClick={inputNum}>
          7
        </button>
        <button type="button" className="btn" onClick={inputNum}>
          8
        </button>
        <button type="button" className="btn " onClick={inputNum}>
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
        <button type="button" className="btn " onClick={inputNum}>
          6
        </button>
        <button type="button" className="btn orange" onClick={operatorType}>
          -
        </button>
        <button type="button" className="btn" onClick={inputNum}>
          1
        </button>
        <button type="button" className="btn" onClick={inputNum}>
          2
        </button>
        <button type="button" className="btn " onClick={inputNum}>
          3
        </button>
        <button type="button" className="btn orange" onClick={operatorType}>
          +
        </button>
        <button type="button" className="btn zero" onClick={inputNum}>
          0
        </button>
        <button type="button" className="btn " onClick={inputNum}>
          .
        </button>
        <button type="button" className="btn orange" onClick={equals}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
