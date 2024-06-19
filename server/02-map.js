const letters = [ "a", "b", "c"];

// Esta es una forma de iterar sobre el arreglo. Pero es una versión larga.
const newArray1 = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray1.push(element + "++");
}
console.log("Original", newArray1);

//Esta sería la manera más óptima de iterar sobre el elemento. Utilizamos el método Map

const newArray = letters.map(item => item + "++")
console.log("NewArray", newArray);