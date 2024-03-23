//1.  Masyvo Elementų Filtravimas: Sukurkite funkciją,
// kuri naudojant for ciklą iš masyvo išrenka ir grąžina
// naują masyvą su elementais, kurie tenkina tam tikrą sąlygą.

console.log('--------------------------1>');

function arrayFiltering (arr) {

    const filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;

}

console.log(arrayFiltering([2, 10, 8, 6, 12, 15, 33]));



//2. Unikalių Reikšmių Radimas: Turite masyvą su 
//pasikartojančiomis reikšmėmis. Naudodami for ciklą,
// sukurkite naują masyvą, kuriame būtų tik unikalios
// reikšmės.


console.log('--------------------------2>');

const numArr = [1, 2, 1, 1, 2, 5, 7, 5, 6, 7];

const nonRepeatedValues = [];

for (let i = 0; i < numArr.length; i++) {
    if (!nonRepeatedValues.includes(numArr[i])){
        nonRepeatedValues.push(numArr[i]);
    }
}

console.log(nonRepeatedValues);

//3. Objekto Gylis: Parašykite funkciją,
// kuri naudodama for in ciklą ir rekursiją,
// grąžintų objekto gylį
// (kiek giliausiai objektas turi įdėtinius objektus).

console.log('--------------------------3>');

function objDepth (obj) {

    const objDepthResult = [];
    
    for (const depth in obj) {
         const key = obj[depth];
         if (typeof key === 'object') {
            objDepthResult.push(objDepth(key) + 1);
         }else objDepthResult.push(objDepth(key) + 1);      
     }
    
     return + objDepthResult;
 }
 
 console.log(objDepth(
                         {
                             a: {
                                 b: {
                                     c: {
                                         d: {
                                             value: 99
                                         }
                                     }
                                 }
                             }
                         }
                     ));

//4. Masyvo Atvirkštinis: Turite skaičių masyvą. 
//Naudodami for ciklą, sukurkite naują masyvą,
// kurio elementai būtų pradinio masyvo,
// bet eilės atvirkščiai.

console.log('--------------------------4>');

const numArr2 = [1, 2, 3, 4, 5];

const reversedArr = [];

for (let i = 0; i < numArr2.length; i++) {
    const r = numArr2.length - 1 - i;
    reversedArr.push(numArr2[r]);
}

console.log(reversedArr);


//5. Raktų Filtravimas Objekte: Turite objektą
// su daugybe savybių. Sukurkite funkciją,
// kuri naudojant for in ciklą, grąžina naują objektą,
// kuriame yra tik tas savybės,
// kurios tenkina tam tikrą sąlygą.

console.log('--------------------------5>');

function objFiltering (obj) {

    const filteredObj = {};

    for (const key in obj) {
        if (key !== 'fiat') {
            filteredObj[key] =  obj[key];
        }
    }

    return filteredObj;

}


console.log(objFiltering({
                        volvo: 's60',
                        bmw: 'e39',
                        audi: 'a6',
                        opel: 'astra',
                        fiat: 'multipla',
                        }));


//6. Suminė Vertė Objekte:
// Turite objektą, kurio savybės yra skaičiai. 
//Naudodami for in ciklą, 
//apskaičiuokite visų objekto savybių sumą.

console.log('--------------------------6>');

const numObj = {
    one: 1,
    two: 2,
    three: 3,
    for: 4,
    five: 5,
}

let objSum = 0;

for (const key in numObj) {
    objSum += numObj[key];
}

console.log(objSum);

//7. Masyvo Elementų Kiekis: Turite masyvą su skirtingų
// tipų elementais. Naudodami for ciklą, suskaičiuokite, 
//kiek yra kiekvieno tipo elementų.

console.log('--------------------------7>');


const anyElementsArr = ['Labas', 5, true, 5, false, 'labas', 5, 1, 'Labas', true];

const calculatedValuesObj = {};

for (let i = 0; i < anyElementsArr.length; i++) {
    if (!(calculatedValuesObj[anyElementsArr[i]])) {
        calculatedValuesObj[anyElementsArr[i]] = 1;
    } else calculatedValuesObj[anyElementsArr[i]] += 1;
}

console.log(calculatedValuesObj);


//8. Objekto Konversija Į Masyvą: Sukurkite funkciją, 
//kuri objektą (raktai ir reikšmės) konvertuotų į masyvą, 
//kur kiekvienas elementas būtų [raktas, reikšmė] pora.

console.log('--------------------------8>');


function objectToArray (obj) {

    const carsArr = [];

    for (const key in obj) {
        carsArr.push([`${key}: ${obj[key]}`]);
    }

    return carsArr;
}

console.log(objectToArray({
                        volvo: 's60',
                        bmw: 'e39',
                        audi: 'a6',
                        opel: 'astra',
                        fiat: 'multipla',
                        }));


//9. Dinaminis Objekto Sudarymas: Naudodami for ciklą, 
//sukurti objektą, kurio raktai yra skaičiai nuo 1 iki n, 
//o reikšmės - tie skaičiai pakelti kvadratu.

console.log('--------------------------9>');


const until = 6;
const randomObj = {};


for (let i = 1; i <= until; i++) {
    randomObj[i] = i ** 2;
}

console.log(randomObj);


//10.  Sąlyginės Reikšmės Objekte: Turite objektą, 
//kuriame saugomos įvairios vartotojų savybės (pvz., vardas, amžius, miestas). 
//Sukurkite funkciją, kuri naudojant for in ciklą, pakeistų tam tikrų savybių reikšmes, 
//jeigu jos tenkina nurodytą sąlygą 
//(pvz., jeigu vartotojo amžius yra mažesnis nei 18, pridėkite savybę pilnametis: false).

console.log('--------------------------10>');


function justObj (obj) {


    for (const key in obj) {
        const innerObj = obj[key];
       for(const innerKey in innerObj) {
            if (innerKey === 'age') {
                if (innerObj[innerKey] >= 18) {
                    innerObj['adult'] = true;
                } else innerObj['adult'] = false;
          } 
       }
    }

    return obj;
    
}

const studentsObj = {
    a:{
        name: 'Petras',
        age: 20,
        city: 'Kaunas'
    },
    b:{
        name: 'Jonas',
        age: 25,
        city: 'Klaipeda'
    },
    c:{
        name: 'Ona',
        age: 33,
        city: 'Raseiniai'
    },
    d:{
        name: 'Ignas',
        age: 17,
        city: 'Plunge'
    },
}

console.log(justObj(studentsObj));








    
