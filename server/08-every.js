const numbers = [1, 30, 45, 14, 10, 25, 67, 14, 35 ];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const item = numbers[index];
    if (item >= 69) {
        rta = false
    }
}

console.log("for", rta);

const rta2 = numbers.every(item => item <= 69)

console.log("every", rta2)

const team = [
    {
      name: "Nicolas",
      age: 15,
    },
    {
      name: "Andrea",
      age: 18,
    },
    {
      name: "Zulema",
      age: 22,
    },
    {
      name: "Santiago",
      age: 18,
    },
];

const checkout = team.map(item => item.age);
const isAdmitted = checkout.every(age => age >= 60);
if(isAdmitted){
  console.log("Equipo admitido");
} else {
  console.log("Equipo no cumple con los requisitos");
};

