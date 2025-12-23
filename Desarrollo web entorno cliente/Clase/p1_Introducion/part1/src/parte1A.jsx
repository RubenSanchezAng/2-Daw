const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hola {props.nombre}, tienes {props.edad} años
      </p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

export{Hello, Footer};