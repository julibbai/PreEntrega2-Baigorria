
//funcion para comprar boleto en vuelta al mundo, va a depender del día que elija el usuario

function comprarBoletoVuelta () {
  const Vuelta     =[

  {nombre: "Miercoles", precio: 100},
  {nombre: "Jueves", precio: 200},
  {nombre: "Viernes", precio: 300},
  {nombre: "Sabado", precio: 400},
  {nombre: "Domingo", precio: 500},

];

const diaIngresado = prompt("Ingrese el día que quiera ir");

//se puede reducir el error pasando todo a minúscula

const diaEncontrado = Vuelta.find((dia) => dia.nombre.toLowerCase() === diaIngresado.toLowerCase());

if(diaEncontrado){ 
  console.log(`El precio para el día ${diaEncontrado.nombre} es de ${diaEncontrado.precio}`);
} else {
  console.log(`El día ${diaIngresado} no está disponible`);
}

}




//funcion para comprar boleto en la montaña rusa, va a depender de la altura y edad de la persona

function comprarBoletoMontaña(){

  //se obtiene la edad y altura de la persona

  let edad = parseInt(prompt("Ingrese su edad"));
  let altura = parseInt(prompt("Ingrese su altura en centímetros"));

  if (isNaN(edad) || isNaN(altura)){
      console.log("Los datos ingresados no son válidos");
      return;
  }


  //le pregunto al usuario la cantidad de boletos que quiere

  let cantidadBoletos = parseInt (prompt("Ingrese la cantidad de boletos que necesita, el valor de un boleto individual es de $500"));

  if(isNaN(cantidadBoletos)) {
      console.log("Por favor, ingresa un número válido");
      return;
  }

  //se ve si la edad y altura cumplen con los requisitos

  if(edad >=7 && altura >= 120){

    console.log(`¡Perfecto! El total a pagar sería de ${cantidadBoletos*500},`);
  }
  else{ 
      console.log("Lo sentimos, no cumples con los requisitos para subir a la montaña rusa.");
  }
}




//SECCIÓN DE MENÚS


//menu para comprar un boleto en la montaña rusa

const menuComprarBoletoMontaña = () => {
  let estado = true;

  while(estado) {
    let opcion = parseInt(
      prompt (
        `
        Menú para comprar boletos a la montaña rusa
        1 - Comprar boletos
        2 - Volver al menu principal
        3 - Salir
        `
      )
    );

    switch (opcion) {
      case 1:
        comprarBoletoMontaña();
        break;
      case 2:
          menuPrincipal();
      break;
      case 3:
        estado = false;
        break;

      default: alert("Ingrese una opción válida")
          break;

    }
  }
}


//menu para consultar precio del boleto a montaña rusa 

const menuComprarBoletoVuelta = () => {
  let estadoV = true;

  while(estadoV) {
    let opcion = parseInt(
      prompt (
        `
        Menú para la vuelta al mundo
        1 - Consultar precios de un día de la semana
        2 - Volver al menu principal
        3 - Salir
        `
      )
    );

    switch (opcion) {
      case 1:
        comprarBoletoVuelta();
        break;
      case 2:
          menuPrincipal();
      break;
      case 3:
        estadoV = false;
        break;

      default: alert("Ingrese una opción válida")
          break;

    }
  }
}



//menú principal
const menuPrincipal = () => {
  let encendido = true;

  while (encendido) {
    let opcion = parseInt(
      prompt(
          `
          ¡Bienvenidos al parque de diversiones! Elije una opción:
          1 - Comprar boletos para la montaña rusa
          2 - Consultar precio de boletos para la vuelta al mundo 
          3 - Salir
          
          `

      )
    );
    switch (opcion) {
      case 1:
        // menu para comprar Boleto montaña rusa

        menuComprarBoletoMontaña();

        break;
      case 2:
        // funcion para comprar Boleto vuelta al mundo
        menuComprarBoletoVuelta();
        break;
      case 3:
        encendido = false;
        break;
      default: alert("Ingrese una opción válida")
      break;
    }
  }


}

menuPrincipal();