import './App.css';
import AddItem from './components/AddItem';
import ChangeColor from './components/ChangeColor';
import ChangeName from './components/ChangeName';
import ChangePosition from './components/ChangePosition';
import Counter from './components/Counter';
import Time from './components/Time';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      <ChangeName />
      <ChangePosition />
      <ChangeColor />
      <Counter />
      <AddItem />
      <Time />
      <Toggle />
    </div>
  );
}

export default App;
