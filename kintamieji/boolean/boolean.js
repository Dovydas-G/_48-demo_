
// Logines operacijos:
// (and)
// (or)



const arRytas = true;
const arVakaras = false;
console.log('Ar rytas:', arRytas);
console.log('Ar vakaras:', arVakaras);

const isNumber = true;
const isText = false;


const isRaining = true;
const isNotRaining = false;
const isMorning = true;
const isWarm = false;



const shouldIGoRollerBlading1 = isWarm && isNotRaining;
const shouldIGoRollerBlading2 = isWarm && !isRaining;
console.log('Rieduciai', shouldIGoRollerBlading1);
console.log('Rieduciai', shouldIGoRollerBlading2);

console.log(true, !true);
console.log(false, !false);


const arGrazus = true;
const arAukstas = false;
const arTurtingas = true;


const arEisIPasimatyma = arGrazus && arAukstas && arTurtingas;
console.log('Pasimatymas;', arEisIPasimatyma);


const arEisIPasimatyma1 = arGrazus || arAukstas || arTurtingas;
console.log('Pasimatymas;', arEisIPasimatyma1);


const arEisIPasimatyma2 = (arGrazus || arAukstas) && arTurtingas;
console.log('Pasimatymas;', arEisIPasimatyma2);