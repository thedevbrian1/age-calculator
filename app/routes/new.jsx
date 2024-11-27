import { useState } from "react";

export default function New() {
  let [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
    console.log("Clicked");
  }

  function handleDecrement() {
    console.log("Decrementing...");
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <main className="grid place-items-center h-screen">
      <div>
        <p className="text-3xl text-center">{count}</p>
        <div className="flex gap-4">
          <button
            type="button"
            disabled={count <= 0}
            onClick={handleDecrement}
            className="mt-4 bg-white px-4 py-2 rounded-md text-black disabled:bg-gray-500"
          >
            Decrement
          </button>
          <button
            type="button"
            onClick={handleIncrement}
            className="mt-4 bg-white px-4 py-2 rounded-md text-black"
          >
            Increment
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="mt-4 bg-red-500 px-4 py-2 rounded-md text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
