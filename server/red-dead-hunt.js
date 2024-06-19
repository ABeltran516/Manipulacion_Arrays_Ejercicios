const skins = [
    "oso Legendario",
    "bisonte",
    "toro",
    "jabali",
    "conejo",
    "mapache",
    "castor",
    "pluma de Halcon",
    "venado",
    "carnero",
    "wapiti",
    "zorro",
    "pluma de cardenal",
    "bisonte legendario tatanka",
    "jabali legendario",
    "castor legendario",
    "puma legendario",
    "pluma de pavo",
    "puma legendario",
    "lobo legendario",
    "cabra",
    "puma",
    "coyote legendario",
    "pluma de aguila",
    "berrendo legendario",
    "alce",
    "vaca",
    "rata almizclera",
    "caiman legendario",
    "vibora",
    "pantera legendaria",
    "monstruo de gila",
    "carnero legendario",
    "alce legendario",
    "lobo",
    "bisonte blanco legendario",
    "wapiti legendario",
    "oveja",
    "berrendo",
    "pecari",
    "iguana",
    "buey",
    "coyote",
    "ciervo",
    "cerdo",
    "armadillo",
    "oso negro",
    "tejon",
    "zorrillo",
    "ardilla",
    "rata",
    "zarigueya", 
    "pluma de petirojo",
    "pluma de oriol",
    "pluma de somormujo",
    "pluma de condor",
    "pluma de cuervo grande",
    "buitre",
    "pluma de gaviota",
    "pluma de faisan",
    "pluma de gorrion",
    "pluma de pavo",
    "pluma de ampelis",
    "pluma de urraca azul",
    "pluma de halcon",
    "pluma de codorniz",
    "pluma de pavo",
    "pluma de pato",
    "pluma de pollo",
    "pluma de cuervo",
    "pluma de cardenal",
    "pluma de pajaro carpintero",
    "pluma de aguila",
    "pluma de paloma",
    "pluma de gallo",
    "pluma de ave cantora",
    "pluma de ganso",
    "pluma de faisan",
    "pluma de buho",
];

const newSkin = [];

function verificarAnimal(nombreAnimal) {
    if (skins.includes(nombreAnimal)) {
        alert(`${nombreAnimal} ya está en la lista.`);
    } else {
        newSkin.push(nombreAnimal);
        skins.push(nombreAnimal);
        console.log(`${nombreAnimal} fue agregado a la lista.`);
    }
}

// Ejemplo de uso
verificarAnimal("Do not trust ChatGPT t.t");
console.log(skins);
console.log(newSkin);
