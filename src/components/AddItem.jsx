import { useState } from 'react';

function AddItem() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState();

  const item = {
    id: count,
    text: `Item ${count}`,
  };

  const addItem = () => {
    setCount(count + 1);
    setClicked('nothing');
    setItems([...items, item]);
  };

  const handleClick = (e) => {
    setClicked(e.target.getAttribute('data-item'));
  };

  return (
    <div className="add-item">
      <h3>Clicked on {clicked}</h3>
      <ul className="list">
        {items.map((item) => {
          return (
            <li
              className="list-item"
              data-item={item.id}
              onClick={handleClick}
              key={item.id}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
      <button className="add-item__btn" onClick={addItem}>
        Add
      </button>
    </div>
  );
}

export default AddItem;
