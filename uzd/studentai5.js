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




const charObj = {
    //a - z
    alphabetBeginning: 97,
    alphabetEnd: 122,
    //A - Z
    alphabetUpperCaseBeginning: 65,
    alphabetUpperCaseEnd: 90,
    //!# $ % & '
    specialCharactersBeginning: 33,
    specialCharactersEnd: 39,
    //* + - /.
    specialCharactersBeginning2: 42,
    specialCharactersEnd2: 47,
    //=
    equal: 61,
    //?
    questionMark: 63,
    //_
    underscore: 95,
    //"
    quotationMark: 34,
    //,
    comma: 44,
    //-
    minus: 45,
    //.
    dot: 46,
}

const alphabetLtObj = {
    ą: 'ą',
    č: 'č',
    ę: 'ę',
    ė: 'ė',
    į: 'į',
    š: 'š',
    ų: 'ų',
    ū: 'ū',
    ž: 'ž',
    Ą: 'Ą',
    Č: 'Č',
    Ę: 'Ę',
    Ė: 'Ė',
    Į: 'Į',
    Š: 'Š',
    Ų: 'Ų',
    Ū: 'Ū',
    Ž: 'Ž'
}


function isValidUsername(text) {

    if (text.length < 1) {
        return 'The name is too short.';
    }

    if (text.length > 20) {
        return 'The name is too long.';
    }

    const valid = true;
    let invalidSymbols = '';

    for (let i = 0; i < text.length; i++) {
        //a-z
        //ąčęėįšųūž
        const letterLt = alphabetLtObj[text[i]];
        const symbolAtCharCode = text.charCodeAt(i);

        if (symbolAtCharCode >= charObj.alphabetBeginning && symbolAtCharCode <= charObj.alphabetEnd) {
            valid;
        } else if (symbolAtCharCode >= charObj.alphabetUpperCaseBeginning && symbolAtCharCode <= charObj.alphabetUpperCaseEnd) {
            valid;
        } else if (letterLt) {
            valid;
        } else invalidSymbols += text[i];
    }

    if (invalidSymbols.length > 0) {
        return `This "${invalidSymbols}" symbol cannot be used`;
    }

    return text;
}

console.log('---------------------------------->')

function isValidEmail(text) {
    const emailMinLength = 6;
    const emailMaxLength = 50;
    const domainMinLength = 2;
    const domainMaxLength = 6;
    const domainPartsMinLength = 2;
   
    if (text.length < emailMinLength) {
        return 'Email is too short.';
    }

    if (text.length > emailMaxLength) {
        return 'Email is too long.';
    }

    let countAtTheRate = 0;
    let parts = null;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '@') {
            countAtTheRate++;
        }
    }

    
    if (countAtTheRate > 1) {
        return 'The part after the @ should not contain the @ character.';
    }else if (countAtTheRate < 1) {
        return 'The @ symbol is missing.'
    }else {
        parts = text.split('@');
    }

    const recipientName = parts[0];
    const domainNameParts = parts[1] < domainPartsMinLength ? '' : parts[1].split('.');
    const domain = domainNameParts.length < domainPartsMinLength ? '' : domainNameParts[domainNameParts.length -1];
    const domainName = parts[1].slice(0, -(domain.length +1)).length < 1 ? '' : parts[1].slice(0, -(domain.length +1));

    if (domainNameParts.length === 0) {
        return 'Incomplete email mail adress.'
    }

    if (domainName.length === 0) {
        return 'Missing domain name.'
    }

 
    const firstCharacter = recipientName[0];
    const lastCharacter = recipientName[recipientName.length -1];
    
    let recipientNameStr = '';
    let invalidCharacters = '';

    for (let i = 0; i < recipientName.length; i++) {
        //a-z
        //0-9
        //!# $ % & '* + - /.=?_
        const symbolAtCharCode = recipientName.charCodeAt(i);

        if (symbolAtCharCode >= charObj.alphabetBeginning && symbolAtCharCode <= charObj.alphabetEnd) {
            recipientNameStr += recipientName[i];
        } else if (recipientName[i] >= '0' && recipientName[i] <= '9') {
            recipientNameStr += recipientName[i];
        } else if (symbolAtCharCode === charObj.equal || symbolAtCharCode === charObj.questionMark || symbolAtCharCode === charObj.underscore) {
            if (firstCharacter !== recipientName[i] && recipientName[i] !== lastCharacter && recipientName[i] !== recipientName[i + 1]) {
                recipientNameStr += recipientName[i];
            } else invalidCharacters += recipientName[i];
        } else if (symbolAtCharCode >= charObj.alphabetUpperCaseBeginning && symbolAtCharCode <= charObj.alphabetUpperCaseEnd) {
            recipientNameStr += recipientName[i];
        } else if (symbolAtCharCode >= charObj.specialCharactersBeginning && symbolAtCharCode <= charObj.specialCharactersEnd && symbolAtCharCode !== charObj.quotationMark) {
            if (firstCharacter !== recipientName[i] && recipientName[i] !== lastCharacter && recipientName[i] !== recipientName[i + 1]) {
                recipientNameStr += recipientName[i];
            } else invalidCharacters += recipientName[i];
        } else if (symbolAtCharCode >= charObj.specialCharactersBeginning2  && symbolAtCharCode <= charObj.specialCharactersEnd2 && symbolAtCharCode !== charObj.comma) {
            if (firstCharacter !== recipientName[i] && recipientName[i] !== lastCharacter && recipientName[i] !== recipientName[i + 1]) {
                recipientNameStr += recipientName[i];
            } else invalidCharacters += recipientName[i];
        } else invalidCharacters += recipientName[i];

    }

    let domainNameStr = '';
    let invalidDomainCharacters = '';
    let isIpAddress = '';

    const firstCharacterDomainN = domainName[0];
    const lastCharacterDomainN = domainName[domainName.length -1];
    for (let i = 0; i < domainName.length; i++) {
        //a-z
        //0-9
        //-.
        const symbolAtCharCode = domainName.charCodeAt(i);

        if (symbolAtCharCode >= charObj.alphabetBeginning && symbolAtCharCode <= charObj.alphabetEnd) {
            domainNameStr += domainName[i];
        } else if (symbolAtCharCode >= charObj.alphabetUpperCaseBeginning && symbolAtCharCode <= charObj.alphabetUpperCaseEnd) {
            domainNameStr += domainName[i];
        } else if (domainName[i] >= '0' && domainName[i] <= '9') {
            domainNameStr += domainName[i];
            isIpAddress += domainName[i];
        } else if (symbolAtCharCode === charObj.minus || symbolAtCharCode === charObj.dot) {
            if (firstCharacterDomainN !== domainName[i] && domainName[i] !== lastCharacterDomainN && domainName[i] !== domainName[i + 1]) {
                domainNameStr += domainName[i];
                if (symbolAtCharCode === charObj.dot) {
                    isIpAddress += domainName[i];
                }
            } else invalidDomainCharacters += domainName[i];
        } else invalidDomainCharacters += domainName[i];        
    }


    if (recipientName.length !== recipientNameStr.length) {
        return `"${invalidCharacters[0]}" Used in the wrong "${recipientName}" place`;
    }

    if (domainName.length !== domainNameStr.length) {
        return `"${invalidDomainCharacters[0]}" Used in the wrong ${domainName} place`;
    }

    if (domain.length === 0) {
        return `The domain is missing.`;
    }

    if (domain.length < domainMinLength) {
        return `Domain too short: ${domain}.`;
    }

    if (domain.length > domainMaxLength) {
        return `Domain too long: ${domain}.`;
    }


    if (domainName.length === isIpAddress.length) {
        return `"${isIpAddress}" Invalid format.`;
    }

    return text;
}

console.log(isValidEmail('aasddas@a.alt'))


function isValidPassword(text) {
    const passwordMinLength = 8;
    const passwordMaxLength = 50;
    const minimumLimit = 1;
    const valid = true;

    if (text.length < passwordMinLength) {
        return 'Passwords must be at least 8 characters.';
    }

    if (text.length > passwordMaxLength) {
        return 'Password is too long.';
    }

    let countLowerCaseLetters = 0;
    let countUpperCaseLetters = 0;
    let countNumbers = 0;

    let invalidPasswordStr = '';

    for (let i = 0; i < text.length; i++) {
        const symbolAtCharCode = text.charCodeAt(i);
        //a-z
        //0-9
        //!# $ % & '* + - /.=?_

        if (symbolAtCharCode >= charObj.alphabetBeginning && symbolAtCharCode <= charObj.alphabetEnd) {
            valid;
            countLowerCaseLetters++
        } else if (symbolAtCharCode >= charObj.alphabetUpperCaseBeginning && symbolAtCharCode <= charObj.alphabetUpperCaseEnd) {
            valid;
            countUpperCaseLetters++
        } else if (symbolAtCharCode >= charObj.specialCharactersBeginning && symbolAtCharCode <= charObj.specialCharactersEnd && symbolAtCharCode !== charObj.quotationMark) {
            valid;
        } else if (symbolAtCharCode >= charObj.specialCharactersBeginning2  && symbolAtCharCode <= charObj.specialCharactersEnd2 && symbolAtCharCode !== charObj.comma) {
            valid;
        } else if (symbolAtCharCode === charObj.equal || symbolAtCharCode === charObj.questionMark || symbolAtCharCode === charObj.underscore) {
            valid;
        } else if (text[i] >= '0' && text[i] <= '9') {
            valid;
            countNumbers++
        } else invalidPasswordStr += text[i];
    }
   
    if (invalidPasswordStr.length > 0) {
        return `This "${invalidPasswordStr}" symbol cannot be used`;
    }

    if (countLowerCaseLetters < minimumLimit) {
        return 'There must be at least one lowercase letter';
    }

    if (countUpperCaseLetters < minimumLimit) {
        return 'There must be at least one uppercase letter';
    }

    if (countNumbers < minimumLimit) {
        return 'There must be at least one number';
    }

    return text;
}



