import { useState } from 'react';

function ChangePosition() {
  const [count, setCount] = useState(0);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const counter = () => {
    setCount(count + 1);
  };

  const mouseMove = (e) => {
    setClientX(e.clientX);
    setClientY(e.clientY);
  };

  return (
    <div className="ChangePosition" onMouseMove={mouseMove}>
      <p>You clicked {count} times</p>
      <button onClick={counter}>Click Me</button>
      <p>X position: {clientX}</p>
      <p>Y position: {clientY}</p>
    </div>
  );
}

export default ChangePosition;
