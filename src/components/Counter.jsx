import { useState } from 'react';

function Counter() {
  const lsCount = localStorage.getItem('count');

  if (!localStorage.getItem('count')) {
    localStorage.setItem('count', 0);
  }

  const [count, setCount] = useState(+lsCount);

  const increment = () => {
    setCount(count + 1);
    localStorage.setItem('count', count + 1);
  };

  const decrement = () => {
    count > 0 && setCount(count - 1);
    count > 0 && localStorage.setItem('count', count - 1);
  };

  const reset = () => {
    setCount(0);
    localStorage.setItem('count', 0);
  };

  return (
    <div className="counter__wrapper">
      <h1>{count}</h1>
      <div className="counter__btns">
        <button className="counter__btn" onClick={decrement}>
          -1
        </button>
        <button className="counter__btn" onClick={increment}>
          +1
        </button>
        <button className="counter__reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
      <p>Count находится в localStorage</p>
    </div>
  );
}

export default Counter;
