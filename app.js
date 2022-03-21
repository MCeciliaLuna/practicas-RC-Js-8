console.log('Javascript 8')


function hola () {
  //acción
  console.log('Función HOLA')

  const resultado = 123 + 456
  console.log(resultado)
}


const chau = () => {
  //acción
  console.log('Función Chau')

  const resultado = 654 + 321
  console.log(resultado)
}


const suma = (num1, num2) => {
  //acción
  const resultado = num1 + num2

  if (resultado === 0) {
    return alert('La suma es igual a 0, ingresa otros números')
  }
  return resultado
}
const resultadoSuma = suma(20,30)
console.log(resultadoSuma)


// const saludo = (nombre,edad) => {
//   const saludoComision = `Hola ${nombre} de ${edad} años de edad`
//   return saludoComision
// }
// const resultadoSaludo = saludo()
// console.log(resultadoSaludo)


//EVENTOS
// const saludo = (nombre,edad) => {
//   const saludoComisión = `Hola ${nombre} de ${edad} años de edad`
//   console.log(saludoComisión)
// }

// const getSaludo = (nombre,edad) => {
//   const saludoComisión = `Hola ${nombre} de ${edad} años de edad`
//   console.log(saludoComisión)
// }

// const handleChange = (event) => {
//   // console.log(event.target.value)
//   // console.log(event.target.name)
//   const valor = event.target.value
//   const nombre = event.target.name
//   const persona = {
//     [nombre]: valor
//   }
//   console.log(persona)
//   //return persona //no ejecuta
// }

// const getSaludo = (nombre) => {
//   console.log(nombre)
// } //sale vacío en la consola

const getSaludo = (nombre,edad) => {
  const saludoComision = `Hola ${nombre} de ${edad} años de edad`
  console.log(saludoComision)

  //const saludoComision = `Hola ${nombre.value} de ${edad.value} años de edad`
  //console.log(saludoComision) // NO EJECUTA
}

const handleSubmit = (event) => {
  event.preventDefault()
  console.log(event.target)
//   console.log(event.target[1].value)
//   console.log(event.target[0].value)
}

const handleChange = (event) => {
  const valor = event.target.value
  const nombre = event.target.name

  const persona = {
   [nombre]: valor
  }
  console.log(persona)
}

const handleClick = () => {
  const result = window.navigator.onLine
  if (result === true) {
    console.log('la conexión es positiva') 
  } else {
    console.log('No hay conexión')
  }

  // window.location.href = "https://google.com"
  //console.log(window)
}
// window.setTimeout(handleClick, 10000)
// window.setInterval(handleClick,1000)

