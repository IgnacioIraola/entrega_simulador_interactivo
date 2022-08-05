// Funciones
const seleccioneBebida = (bebida, cantidad) => {
    console.log("switch");
    switch (bebida) {
      case 1:
        cantCerveza += cantidad;
        total += cantidad * 250;
        return alert("Elegiste " + cantidad + " de Cervezas");
      case 2:
        cantFernet += cantidad;
        total += cantidad * 100;
        return alert("Elegiste " + cantidad + " de Fernet");
      case 3:
        cantAperol += cantidad;
        total += cantidad * 50;
        return alert("Elegiste " + cantidad + " de Aperol");
      case 4:
        cantGin += cantidad;
        total += cantidad * 10;
        return alert("Elegiste " + cantidad + " de Gin");
      default:
        alert("Opción incorrecta");
    }
  }
  
  const funcionLoop = () => {
    let cantidad;
    let ingreseBebida;
  
    // ingreseBebida
    ingreseBebida = Number(prompt("Selecciona el número de la bebida deseada: \n1 Cerveza \n2 Fernet \n3 Aperol \n4 Gin \n0 FINALIZAR"));
  
    while (ingreseBebida !== 0) {
      // seleccioneBebida
      cantidad = Number(prompt("Ingresá la cantidad de bebidad deseada"));
      // Llamo a la función
      seleccioneBebida(ingreseBebida, cantidad);
  
      // ingreseBebida
      ingreseBebida = Number(prompt("Selecciona el número de la bebida deseada: \n1 Cerveza \n2 Fernet \n3 Aperol \n4 Gin \n0 FINALIZAR"));
    }
  }
  
  // Variables
  let edad = Number(prompt("Ingresá tu edad"));
  let total = 0;
  let cantCerveza = 0;
  let cantFernet = 0;
  let cantAperol = 0;
  let cantGin = 0;
  
  // Programa
  if (edad < 18) { // Es MENOR
    alert("Sos menor de edad no podés ingresar")
  } else { // Es MAYOR
    funcionLoop();
  }
  
  if (total > 0) {
    // le digo cuanto gastó
    alert("Usted eligió " + cantCerveza + " cervezas, " + "\nTotal: " + total);
  } else {
    // Gracias por venir
    alert("No realizó ninguna compra.")
  }
  