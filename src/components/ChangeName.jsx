import { useState } from 'react';

function ChangeName() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Guy');
  const [num, setNum] = useState(7);

  const changeName = () => {
    setName(name + 'y');
    counter();
  };

  const counter = () => {
    setCount(count + 1);
  };

  const luckyNum = () => {
    setNum(Math.floor(Math.random() * 100));
  };
  return (
    <div className="ChangeName">
      <p>Welcome Cool {name}!</p>
      <p>Your lucky number is {num}</p>
      <p>Name has changed {count} times</p>

      <button className="changeName__btn" onClick={changeName}>
        Change Name
      </button>
      <button className="changeName__btn" onClick={luckyNum}>
        Get New Lucky Number
      </button>
    </div>
  );
}

export default ChangeName;
