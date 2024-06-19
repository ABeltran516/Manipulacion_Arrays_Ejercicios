const numbers = [1, 30, 41, 4, 62, 3, 7, 14, 17, 24, 34, 15, 16];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const item = numbers[index];
    if (item === 30){
        rta = item;
        break;
    }
}

console.log("for", rta)

const find = numbers.find(item => item === 30);
console.log("find", find)

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const rta2 = products.find(item => item.id === "🌭");
console.log("find", rta2)

const rta3 = products.findIndex(item => item.id === "🌭");
console.log("findIndex", rta3)