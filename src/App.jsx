/* eslint-disable no-unused-vars */
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="app">
        <div className="screen">{counter}</div>
        <div className="box-btn">
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <button onClick={() => setCounter(0)}>Reset</button>
          <button onClick={() => counter > 0 && setCounter(counter - 1)}>
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
