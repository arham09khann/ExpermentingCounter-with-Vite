import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  const handleCounter = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(() => counter - 1);
    if (counter <= 0) {
      setCounter(0);
    }
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <>
      <div>
        <h1 className="text-center mt-6 font-bold">Counter appliction</h1>
      </div>

      <div className="ml-10 mt-10">
        <p>
          Counter is ={" "}
          <input
            className="bg-green-400 p-1 rounded-md"
            type="text"
            value={input}
            onChange={handleCounter}
            placeholder="Enter Intial Value"
          />
        </p>
      </div>

      <div className=" ml-5">
        <p>Play with counter : {counter}</p>
      </div>
      <div className="m-5 p-3 space-x-5">
        <button
          className="bg-red-500 rounded-md p-3 "
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="bg-red-500 rounded-md p-3 "
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button className="bg-red-500 rounded-md p-3 " onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
