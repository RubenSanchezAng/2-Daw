//useState sirve para guardar y actualizar estado dentro de un componente y inicializa en 0
import { useState } from 'react'
import { Contador } from './parte1C';

const App = () => {
  const[left, setLeft] = useState(0);
  const[right, setRight] = useState(0);

  return(
    <div>
      {left}
      <button onClick={()=> setLeft(left + 1)}>left</button>
      <button onClick={()=> setRight(right+1)}>right</button>
      {right}
    </div>
  )
  /*
    *****************PARTE1C*******************

    const [ counter, setCounter ] = useState(0)

    const incrementar = () => setCounter(counter + 1);
    const decrecer = () => setCounter(counter - 1);
    const poneraO = () => setCounter(0);

    return (
      <div>
        <Display counter={counter}/>
        <Contador counter={counter}/>
        <button onClick={incrementar}>+</button>
        <button onClick={poneraO}>0</button>
        <button onClick={decrecer}>-</button>

      </div>
      )
  */
}

export default App