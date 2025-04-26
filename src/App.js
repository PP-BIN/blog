import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App(props) {

  const [counter, setCounter] = useState(0);

  const doClick = () => {
    setCounter(counter+1);
  };

  const msg ="이것은 샘플 페이지 입니다.";

  return (
    <div className="App">
      <h1 className={props.color}>{props.title}</h1>
      <p>{props.message}</p>
      {/* <p className={props.color, "clickable"} onClick={doClick}>counter:{counter}</p> */}
      <p className={props.color + " clickable"} onClick={doClick}>counter: {counter}.</p>
      <div>{msg}</div>
    </div>
  );
}

export default App;
