import react from 'react';
import '../App.css';

class Calculator extends react.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="screen">0</div>

          <button type="button" className="btn light-gray">
            AC
          </button>
          <button type="button" className="btn light-gray">
            +/-
          </button>
          <button type="button" className="btn light-gray row">
            %
          </button>
          <button type="button" className="btn orange">
            ÷
          </button>
          <button type="button" className="btn">
            7
          </button>
          <button type="button" className="btn">
            8
          </button>
          <button type="button" className="btn row">
            9
          </button>
          <button type="button" className="btn orange">
            X
          </button>
          <button type="button" className="btn">
            4
          </button>
          <button type="button" className="btn">
            5
          </button>
          <button type="button" className="btn row">
            6
          </button>
          <button type="button" className="btn orange">
            -
          </button>
          <button type="button" className="btn">
            1
          </button>
          <button type="button" className="btn">
            2
          </button>
          <button type="button" className="btn row">
            3
          </button>
          <button type="button" className="btn orange">
            +
          </button>
          <button type="button" className="btn zero">
            0
          </button>
          <button type="button" className="btn row1">
            .
          </button>
          <button type="button" className="btn orange">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
