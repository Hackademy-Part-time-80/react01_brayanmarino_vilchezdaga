import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return (
    <>
      <h2>Counter</h2>
      <div className="d-flex w-10 gap-10px">
        <button className="btn-sub" onClick={decrement}>-</button>
        <p>{counter}</p>
        <button className="btn-add" onClick={increment}>+</button>
      </div >
    </>
  );
}