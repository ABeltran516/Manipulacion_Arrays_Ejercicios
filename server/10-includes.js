//Recuerda que includes funciona para arrays y para strings.
const pets = ["cat", "dog", "bat", "horse"];

//Aquí generamos una variable que arranca en false.
//Sí abajo, una vez iterado el array, encontramos el valor deseado
//El false pasa a ser true.
let includePet = false;
for (let index = 0; index < pets.length; index++) {
    const item = pets[index];
    if (item === "dog"){
        includePet = true;
        break;
    }
}
console.log("pet", includePet)


//A diferencia de otros métodos de Array, Includes no recibe una arrow function.
//Por eso, podemos pasarle directamente el elemento a buscar.
//Cómo en este caso, únicamente le estamos pasando "bat".  
const pet = pets.includes("bat");
console.log("includes", pet)