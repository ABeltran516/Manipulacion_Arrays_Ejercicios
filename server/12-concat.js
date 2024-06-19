const elements = [1, 1, 2, 1, 3, 1, 4, 5, 6];
const otherElements = [4, 4, 5, 1, 8, 4,];

const newArray = [...elements]; //Esto es un spread operations, sirve para trabajar con un array sin su referencia en memoria interviniendo.
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}
console.log("for", newArray)

const rta = elements.concat(otherElements);
console.log("concat", rta);