let edad = Number(prompt ("Ingresá tu edad"));

const seleccioneBebida = (bebida, cantidad) => {
    switch (bebida) {
        case "1":
            return alert("Elegiste "+ cantidad + " de Cervezas");
        
        case "2":
            return alert("Elegiste "+ cantidad + " de Fernet");    
        
        case "3":
            return alert("Elegiste "+ cantidad + " de Aperol");
        
        case "2":
            return alert("Elegiste "+ cantidad + " de Gin");      
    
        default:
            alert("Opción incorrecta")
            break;
    }

}


let ingreseBebida = Number(prompt("Selecciona el número de la bebida deseada: \n1 Cerveza \n2 Fernet \n3 Aperol \n4 Gin"))
let cantidad = Number(prompt("Ingresá la cantidad de bebidad deseada"))


if (edad <=18){
    alert("Sos menor de edad no podés ingresar")
}else{
    do {
        ingreseBebida
        seleccioneBebida
        
    } while (condition);


}