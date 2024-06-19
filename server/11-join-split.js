const elements = ["fire", "water", "air", "earth"];

let rtaFinal = "";
const separator = "--";

for (let index = 0; index < elements.length; index++) {
    const item = elements[index];
    rtaFinal = rtaFinal + item + separator; 
}
console.log("for", rtaFinal)

const rta = elements.join("--");
console.log("join", rta)



//El método split nos ayuda a modificar el comportamiento de array basándonos
//en una orden en específico. Por algún patrón, quiero volver una cadena a un array.
//En este caso, haremos un split sobre title y nuestra orden será
//solicitar que modifique cuando encuentre un espacio vacío. " ".
//Es decir, que cada vez que nuestro código encuentre aquello que solicitamos
//Entonces procederá a definir la función que solicitemos. 

const title = "Curso de manipulación de Arrays";
const urltitle = title.split(" ").join("_").toLowerCase();

//Aquí puse dos console.log juntos. Pero fue solo para ver cómo salían reflejados en consola.
console.log("split", urltitle)
console.log("noSplit", title.split(" "))