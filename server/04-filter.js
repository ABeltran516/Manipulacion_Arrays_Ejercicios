//Esta es una lista sobre la que queremos iterar para encontrar algún producto.
const words = ["Calabaza", "Zanahoria", "Jitomate", "Cebolla", "Brocoli", "Elote"];

//Este array corresponde a la primer iteración usando el método For. 
const newArray = [];

for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 8) {
        newArray.push(item);    
    }
}
/* console.log("newArray", newArray); */

//Este array fue hecho con el método Filter, es la manera más eficiente de trabajar con arreglos
//Ya que obtuvimos el mismo resultado que al utilizar el método For con solo una linea de código. 
rta = words.filter(item => item.length >= 8);
/* console.log("rta corta", rta);
console.log("words", words); */

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

//Este array se utiliza para buscar las órdenes de ventas que fueron entregadas, y ademas
//aquellas cuyo precio supere los $100. Mira que usa "&&" como buscador booleano.

const rtaVentas = orders.filter(item => item.delivered && item.total >= 100);
console.log("rtaVentas", rtaVentas);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    });
}
console.log("search", search("sasfd"));