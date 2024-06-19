const users = [
    { userId: 1, username: "evelyn", attributes: ["georgeus", "beautiful"] },
    { userId: 1, username: "john", attributes: ["loyal", "fast"] },
    { userId: 1, username: "arthur", attributes: ["brave", "dead"] }
];

const rta = users.map(user => user.attributes).flat();
console.log("map", rta)

//El método flatMap hace ambas funciones, itera sobre un array y después lo aplana.
//Recuerda que el método flatMap solo itera sobre el primer nivel, no más allá.
const rta1 = users.flatMap(user => user.attributes); //Solo recibe el arrow function y los parámetros que queramos evaluar.
console.log("flatMap", rta1)

//Reto, conseguir las startDate utilizand el método flatMap.

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };


const dates = Object.keys(calendars); //Este método nos ayuda a ver los atributos de un objeto.
const dates1 = Object.values(calendars); //Y este a conocer los valores de un objeto.

//Solución al problema. Usar values para determinar los valores, y después aplanarlos con flatMap.
//Después de la primer arrow function, abrimos llaves para agregar un método interno
//Volvemos a iterar utilizando otra arrow function y utilizamos return para devolver el valor.

const dateSolve = Object.values(calendars).flatMap( item => {
    return item.map( date => date.startDate);
});
console.log("Keys", dates);
console.log("Values", dates1);
console.log("Solution", dateSolve)