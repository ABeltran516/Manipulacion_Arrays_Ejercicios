const numbers = [1, 2, 3, 4];

//Este sería un método tradicional. 
let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}
console.log("Trad", rta)

//El siguiente código es la expresión simplificada, utilizando Some.

const rta2 = numbers.some(item => item % 2 === 0);
console.log("Some", rta2)

const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Nicoletta",
        total: 360,
        delivered: false,
    }
];

const rta3 = orders.some(item => item.delivered);
console.log("Orders", rta3)

const dates = [
    { 
        startDate: new Date(2021, 1, 1, 10), 
        endDate: new Date(2021, 1, 1, 11), 
        title: "Cita de trabajo", 
    }, 
    { 
        startDate: new Date(2021, 1, 1, 15), 
        endDate: new Date(2021, 1, 1, 15, 30), 
        title: "Cita con mi jefe", 
    }, 
    { 
        startDate: new Date(2021, 1, 1, 20), 
        endDate: new Date(2021, 1, 1, 21), 
        title: "Cena", 
    },
]; 


const newAppointment = { 
    startDate: new Date(2021, 1, 1, 8), 
    endDate: new Date(2021, 1, 1, 9, 30), 
}; 

const { areIntervalsOverlapping } = require("date-fns");

const isOverlap = (newDate) => { 
    return dates.some(date => { 
        return areIntervalsOverlapping(
            { 
                start: date.startDate,
                end: date.endDate 
            }, 
            { 
                start: newDate.startDate, 
                end: newDate.endDate 
            },
        ) 
    }) 
}

console.log('isOverlap', isOverlap(newAppointment));

//Te recomiendo leer con detenimiento la documentación de la librería. 
//En este caso hemos usado una llamada "date-fns"
//Tiene cómo función el comparar fechas y determinar sí existen eventos pendientes ese día.
//Es utilizado para apps de agendas.