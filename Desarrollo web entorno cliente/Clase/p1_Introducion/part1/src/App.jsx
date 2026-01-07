//useState sirve para guardar y actualizar estado dentro de un componente y inicializa en 0
import { useState } from 'react'


const History = (props) =>{
  if(props.allClicks.length === 0){
    return(
      <div>
      
        La aplicación se utiliza presionando los botones   
      </div>
    )
  }
  return(
    <div>
      Historial de pulsaciones de botones: {props.allClicks.join(' ')}
    </div>
  )
}


const App = () => {
  const[clicks, setClicks] = useState({left:0, right:0});
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);
  
  const handleLeftClicks = () =>{
    setAll(allClicks.concat("L"))
    setClicks({...clicks,left: clicks.left +1})
    setTotal(clicks.left + clicks.right);
  }
  const handleRightClicks = () =>{
    setAll(allClicks.concat("R"))
    setClicks({...clicks,right: clicks.right + 1})
    setTotal(clicks.left + clicks.right);

  }

  return(
    <div>
      {clicks.left}
      <button onClick={handleLeftClicks}>left</button>
      <button onClick={handleRightClicks}>right</button>
      {clicks.right}
      
      <History allClicks={allClicks} />
      <p>total {total}</p>
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