
//1. Duomenų Objektas: Sukurkite objektą, kuris saugotų jūsų mėgstamiausios knygos pavadinimą, autorių ir leidimo metus. 
    //Išveskite kiekvieną objekto savybę naudojant for in ciklą.
console.log('------------------------------1>');

const bookObj = {
    Pavadinimas: 'The Secret',
    Autorius: 'Rhonda Byrne',
    Metai: '2020',

};

for (const item in bookObj) {
    console.log(bookObj[item]);
};

//2. Vartotojų Masyvas: Sukurkite masyvą, kuriame būtų kelios objektų reikšmės, kiekviena reikšmė turėtų vartotojo vardą ir amžių. Naudodami for of ciklą,
    // išveskite kiekvieno vartotojo vardą ir amžių.

console.log('------------------------------2>');

const userObj = [
    {
        name: 'Antanas',
        age: 22,
    },
    {
        name: 'Petras',
        age: 30,
    },
    {
        name: 'Ona',
        age: 42,
    },
];


for (const user of userObj) {
    console.log(`${user.name}: ${user.age}m`)
};

//3. Sąrašo Filtravimas: Turite objektų masyvą, kuriame saugoma informacija apie įvairius produktus (pavadinimas, kaina, kategorija). Parašykite funkciją,
    // kuri naudojant for of ciklą grąžintų tik tuos produktus, kurie priklauso tam tikrai kategorijai.

console.log('------------------------------3>');

const productsObj = [
    {
        category: 'Drinks',
        name: 'Fanta',
        price: 2,
    },
    {
        category: 'Drinks',
        name: 'Coca cola',
        price: 3,
    },
    {
        category: 'Chocolates',
        name: 'Tupla',
        price: 2,
    },
    {
        category: 'Chocolates',
        name: 'Snickers',
        price: 1,
    },
];


for (const product of productsObj) {
    if (product.category === 'Drinks') {
        console.log(`${product.category}: ${product.name} ${product.price}$`);
    }
};


//4. Objekto Kopijavimas: Parašykite funkciją, kuri naudojant for in ciklą sukurtų objekto kopiją.

console.log('------------------------------4>');

const carsObj = {
    Volvo: 'S60',
    Audi: 'A7',
    BMW: 'E90',
};

const carsObjCopy = {};

for (const key in carsObj) {
    carsObjCopy[key] = carsObj[key];
};

console.log(carsObjCopy);


//5. Raktų ir Reikšmių Atrinkimas: Turite vartotojo objektą su įvairiomis savybėmis. 
    //Naudodami for in ciklą, sukurti du masyvus: viename saugokite objekto raktus, o kitame - reikšmes.

console.log('------------------------------5>');
  
const carsObj2 = {
    Volvo: 'S90',
    Audi: 'S7',
    BMW: 'E91',
};

const keyArr = [];

const valueArr = [];

for (const key in carsObj2) {
    keyArr.push(key) && valueArr.push(carsObj2[key])
};

console.log(keyArr, valueArr);


//6. Masyvo Suma: Turite masyvą, kuriame yra skaičiai. Naudodami for ciklą, apskaičiuokite masyvo skaičių sumą.

console.log('------------------------------6>');

const numsArr = [1, 2, 3, 4, 5, 6];

let result = 0;

for (let i = 0; i < numsArr.length; i++) {
    result += numsArr[i];
}

console.log(result);


//7. Didžiausias Skaičius: Turite skaičių masyvą. Naudodami for ciklą, raskite didžiausią skaičių masyve.

console.log('------------------------------7>');

const numsArr2 = [2, 10, 55, 12, 88, 16, 28];

let max = numsArr2[0];

for (let i = 0; i < numsArr2.length; i++) {
    if (numsArr2[i] > max) {
        max = numsArr2[i];
    }
};

console.log(max);

//8. Objekto Savybių Skaičius: Sukurkite funkciją, kuri naudojant for in ciklą, grąžina objekto savybių skaičių.

console.log('------------------------------8>');

function numberOfObjectProperties (obj) {

    let count = 0;

    for (const key in obj) {
        count++
    }

    return count;
};

console.log(numberOfObjectProperties({
                                    Pavadinimas: 'The Secret',
                                    Autorius: 'Rhonda Byrne',
                                    Metai: '2020',
                                    }));

//9. Sąlyginis Objektų Atrinkimas: Turite vartotojų masyvą su objektais, kuriuose yra vardas ir amžius. Naudodami for of ciklą, 
    //išveskite tik tuos vartotojus, kurių amžius yra didesnis nei 18.

console.log('------------------------------9>');

    const userObj2 = [
        {
            name: 'Antanas',
            age: 18,
        },
        {
            name: 'Petras',
            age: 30,
        },
        {
            name: 'Ona',
            age: 42,
        },
    ];

for (const user of userObj2) {
    if (user.age > 18) {
        console.log(`${user.name}: ${user.age}m`)
    }
}


// 10.  Objekto Savybių Keitimas: Turite objektą, kuriame saugomi įvairių žmonių amžiai. Naudodami for in ciklą, padidinkite kiekvieno asmens amžių 1 metais.

console.log('------------------------------10>');

const userObj3 = {
    Petras: 20,
    Antanas: 30,
    ona: 40,
};

for (const key in userObj3) {
    userObj3[key] += 1;
    userObj3[key] += 'm';
}

console.log(userObj3);

