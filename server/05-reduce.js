const totals = [1, 2, 3, 4];

//Primer método, sumar utilizando for.
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const item = totals[index];
    sum = sum + item;
}
console.log(sum);


//Segundo método, utilizar reduce para obtener el mismo resultado en menos líneas.
//El primer valor es el acumulador "sum", donde iremos guardando las sumas (puede tener cualquier nombre)
//En el segundo valor va el item donde estamos iterando "item". Representa qué sumaremos. 
//Y luego ejecutamos la función: "=> sum + item". (Esto conforma el primer parámetro).
//El segundo parámetro se da en el estado inicial del sum "0".
const rta = totals.reduce((sum, item) => sum + item, 0)
console.log("rta", rta);