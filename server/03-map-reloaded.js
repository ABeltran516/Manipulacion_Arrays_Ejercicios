//Este método nos ayuda a iterar sobre un array y extraer los datos que deseemos.

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
    }
];
console.log("Original", orders);

const rta = orders.map(item => item.total)
console.log("rta", rta)

const rta1 = orders.map((item) => {
    item.tax = 0.19;
    return item;
});
console.log("rta1", rta1);
console.log("Original", orders);

//Esta es una forma de solicitar un objeto sin pasar por su referencia en memoria. Y asi no modificar el array original. 

const rta2 = orders.map((item) => {
    return {
        ...item,
        tax: 0.19
    };
});
console.log("rta2", rta2);
console.log("Original", orders);