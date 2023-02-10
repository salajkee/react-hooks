import { useState } from 'react';

function Toggle() {
  const [show, setShow] = useState('none');

  const handleClick = () => {
    show === 'none' ? setShow('block') : setShow('none');
  };

  return (
    <div className="toggle">
      <button className="toggle__btn" onClick={handleClick}>
        Toggle Fetch Component
      </button>
      <div className="toggle__content" style={{ display: show }}>
        <h2>Fetch Component</h2>
        <p>Initial display message</p>
      </div>
    </div>
  );
}

export default Toggle;
