/*
IF - palyginimas

LOGIKOS SABLONAI:
-if () {}
-if () {} else {}
-if () {} else if () {} else {}
-if () {} else if () {} else if () {} else {}


PALYGINIMO OPERATORIAI;
-visi: <, >=, <=, ==, !=, ===, !==
-naudotini: >, <, >=, <=
-nenaudotini: ==, !=
*/


if (true){
    console.log('Tik kai True')
}



const cartValue = 1000;
const discountTreshhold = 500;
const discountPercentage = 10;

if (cartValue > discountPercentage) {
    const coof = 1 - (discountPercentage / 100);
    console.log('Total to pay:', cartValue * coof);
}else {
    console.log('Total to pay', cartValue);
}

const color = ['red', 'green', 'blue'];
const selectedColor = 'green';

if (selectedColor == color[0]){
    console.log('Paririnkta: raudona.');
}else if (selectedColor == color[1]){
    console.log('Paririnkta: zalia.');
}else if (selectedColor == color[2]){
    console.log('Paririnkta: melyna.');
}else {
    console.log('Tavo spalvos nera tarp galimu pasirinkimu')
}

// console.log('start')

// if (10 >= 5) {
//     console.log('TAIP');
// }else {
//     console.log('NE');
// }

// console.log('end')


// const prekesKrepselioVerte = 1000;
// const nuolaidosRiba = 5000;
// const nuolaidosDydisProcentai = 10;


// console.log('skaiciai pries skaiciavima: ...')

// if (prekesKrepselioVerte > nuolaidosRiba){
//     console.log('bandom pritaikyti nuolaida...')
// }


// console.log('tai kokia ta galutine kaina?..')


const a = '10';
const b = 10;

if (a == b) {
    console.log('Taip');
}else {
    console.log('NE');
}


console.log('end...');


const day = 2;

if (day === 1){
    console.log('Maziau');
} else {
    console.log('Daugiau');
    console.log('Ne maziau ir ne lygu');
}
