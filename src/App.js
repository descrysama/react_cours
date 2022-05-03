import { useState } from "react";


function App() {

  const [resultat, setResultat] = useState(0);
  const [operator, setOperator] = useState('');

  const [input1, setInput1] = useState([]);
  const [input2, setInput2] = useState([]);

  
  const Calculator = (a, b, operator) => {
    switch(operator) {
      case '*':
        setResultat((a*b));
        break;
      case '-':
        setResultat((a-b));
        break;
      case '+':
        setResultat((parseInt(a)+parseInt(b)));
        break;
      case '/':
        setResultat((a/b));
        break;
      default:
        setResultat(0);  
    }
    setInput1([]);
    setInput2([]);
  }



  return (
    <>
      <button onClick={() => {operator == '' ? setInput1([...input1, 1]) : setInput2([...input2, 1])}}>1</button>
      <button onClick={() => {operator == '' ? setInput1([...input1, 2]) : setInput2([...input2, 2])}}>2</button>
      <button onClick={() => {operator == '' ? setInput1([...input1, 3]) : setInput2([...input2, 3])}}>3</button>
      <button onClick={() => {operator == '' ? setInput1([...input1, 4]) : setInput2([...input2, 4])}}>4</button>
      <button onClick={() => {operator == '' ? setInput1([...input1, 5]) : setInput2([...input2, 5])}}>5</button>
      <button onClick={() => {operator == '' ? setInput1([...input1, 6]) : setInput2([...input2, 6])}}>6</button>
      <button onClick={() => {operator == '' ? setInput1([...input1, 7]) : setInput2([...input2, 7])}}>7</button>
      <button onClick={() => {operator == '' ? setInput1([...input1, 8]) : setInput2([...input2, 8])}}>8</button>
      <button onClick={() => {operator == '' ? setInput1([...input1, 9]) : setInput2([...input2, 9])}}>9</button>
      <button onClick={() => {operator == '' ? setInput1([...input1, 0]) : setInput2([...input2, 0])}}>0</button>
      <button onClick={() => {setOperator('-')} }>-</button>
      <button onClick={() => {setOperator('+')} }>+</button>
      <button onClick={() => {setOperator('/')} }>/</button>
      <button onClick={() => {setOperator('*')} }>*</button>
      <button onClick={() => Calculator(input1.join(''), input2.join(''), operator)}>Calculer</button>
      <h3>{input1}</h3>
      <h3>{input2}</h3>
      <h1>{resultat}</h1>
    </>
  );
}

export default App;
