import { useState } from 'react';

function ChangeColor() {
  const [color, setColor] = useState('#a2ccb2');

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="ChangeColor" style={{ backgroundColor: color }}>
      <select
        className="changeColor__select"
        onChange={changeColor}
        value={color}
      >
        <option value="#a2ccb2">Sea</option>
        <option value="#fceeb5">Sand</option>
        <option value="#ee786e">Peach</option>
      </select>
      <p className="changeColor__value">{color}</p>
    </div>
  );
}

export default ChangeColor;
