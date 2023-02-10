import { useState } from 'react';

function Time() {
  const date = new Date();
  const [hour, setHour] = useState(date.getHours());
  const [minute, setMinute] = useState(date.getMinutes());
  const [second, setSecond] = useState(date.getSeconds());

  const getTime = () => {
    setHour(date.getHours());
    setMinute(date.getMinutes());
    setSecond(date.getSeconds());
  };

  setTimeout(getTime, 1000);

  return (
    <div className="time">
      <h1>The time is</h1>
      <span>
        {hour}:{minute}:{second} {hour >= 0 && hour < 12 ? 'AM' : 'PM'}
      </span>
    </div>
  );
}

export default Time;
