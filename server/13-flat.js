//Flat nos ayuda a manipular arrays que se encuentren dentro de otro Array.

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log("for", newArray)

const rta = matriz.flat(); //Aquí flat puede recibir un parámetro númerico. Define cuantos niveles de profundidad tendrá el método. ".flat(3)".
console.log("flat", rta)