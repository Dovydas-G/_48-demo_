//1. Parašykite funkciją, kuri priima vartotojo vardą kaip argumentą ir grąžina pasveikinimo žinutę.

console.log('----------------1>');

function greeting (name) {
    return `Hello, ${name}!`;
}

console.log(greeting('Dovydas'));


//2. Sukurkite funkciją, kuri priima du skaičius kaip argumentus ir grąžina jų sumą.

console.log('----------------2>');

function sum (firstNum, secondNum) {
    return firstNum + secondNum;
}

console.log(sum(2, 5));


//3. Parašykite funkciją, kuri priima masyvą kaip argumentą ir grąžina visų masyvo elementų sumą.

console.log('----------------3>');

function arrSum (array) {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

console.log(arrSum([1, 2, 3, 4, 5]));

//4.  Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina didžiausią skaičių masyve.

console.log('----------------4>');

function highestNumber (arr) {

    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(highestNumber([1, 2, 3, 4, 5]));


//5.Parašykite funkciją, kuri priima tekstą kaip argumentą ir grąžina to teksto ilgį.

console.log('----------------5>');

function textLength (str) {
    return str.length;
}
console.log(textLength('Parašykite funkciją, kuri priima tekstą kaip argumentą ir grąžina to teksto ilgį.'));


//6.: Sukurkite funkciją, kuri priima skaičių ir grąžina jo faktorialą.

console.log('----------------6>');

function factorial (num) {

    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(4));


//7.Parašykite funkciją, kuri priima masyvą skaičių ir skaičių kaip argumentus, o grąžina naują masyvą, kuriame yra tik tie skaičiai, kurie didesni už pateiktą skaičių.

console.log('----------------7>');

function numFilter (arr, num) {
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

console.log(numFilter([1, 2, 3, 4, 5], 3));


//8. Sukurkite funkciją, kuri priima tekstą kaip argumentą ir grąžina jį atvirkštine tvarka.

console.log('----------------8>');

function reversedStr (str) {

    let reversedText = '';

    for (let i = 0; i < str.length; i++) {
        reversedText = str[i] + reversedText;
    }
    return reversedText;
}

console.log(reversedStr('atvirkštine tvarka'));


//9. Parašykite funkciją, kuri nustato, ar pateiktas tekstas yra palindromas.

console.log('----------------9>');

function palindrom (str) {

    let text = '';

    for (let i = 0; i < str.length; i++) {
        text = str[i] + text;
        
    }

    return text === str;
}

console.log(palindrom('madam'));



//10. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra lyginis, ir false, jei skaičius yra nelyginis.

console.log('----------------10>');

function isEven (num) {
    return num % 2 === 0;
}

console.log(isEven(10));


//11.  Parašykite funkciją, kuri priima tekstą ir dvi eilutes: pakeistiną simbolį ir pakeitimo simbolį. Funkcija grąžina naują tekstą su pakeistais simboliais.

console.log('----------------11>');

function changeText (text, replace, add) {

    let str = '';

    for (let i = 0; i < text.length; i++) {
        if(text[i] === replace) {
            str += add;
        }else str += text[i];
    }
    return str;
}

console.log(changeText('labas', 'a', 'e'));



//12. Sukurkite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir konvertuoja ją į Farenheito laipsnius.

console.log('----------------12>');

function celsiusToFahrenheit (c) {
    return (c * 9 / 5) + 32;
}

console.log(celsiusToFahrenheit(3));


//13.  Parašykite funkciją, kuri priima masyvą ir grąžina naują masyvą be dublikatų.

console.log('----------------13>');

function withoutDuplicates (arr) {

    const withoutDuplicatesArr = [];


    for (let i = 0; i < arr.length; i++) {
        if (!withoutDuplicatesArr.includes(arr[i])) {
            withoutDuplicatesArr.push(arr[i]);
        }
    }

    return withoutDuplicatesArr;
}


console.log(withoutDuplicates([1, 2, 3, 1, 2, 4, 5]));

//14. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra pirminis, ir false, jei ne.

console.log('----------------14>');

function isPrime (num) {
    
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++
        }
    }
    return count === 2;
}

console.log(isPrime(21));


//15. Parašykite funkciją, kuri priima masyvą skaičių ir grąžina jį surikiuotą mažėjančia tvarka.

console.log('----------------15>');

function sortArr (arr) {

const sorted = arr.sort((a,b) => b - a);

return sorted;

}

console.log(sortArr([1, 2, 3, 4, 5]));


//16.  Sukurkite funkciją, kuri priima du skaičius kaip pradžios ir pabaigos intervalo ribas ir grąžina visų skaičių, esančių tame intervale, sumą.

console.log('----------------16>');

function fromTo (star, end) {

    let sum = 0;

    for (let i = star; i <= end; i++) {
        sum += i;
    }

    return sum;
}

console.log(fromTo(1, 7));

//17.  Parašykite funkciją, kuri priima tekstą ir grąžina jį, pakeisdamas kiekvieną raidę į sekantį raidę abėcėlėje.

console.log('----------------17>');

function nextCharacter (str) {

    let text = '';

    for (let i = 0; i < str.length; i++) {
       let symbolPosition = (str.charCodeAt(i) + 1);
       if (symbolPosition === 123) {
            symbolPosition = 97;
            text += String.fromCharCode(symbolPosition);
       }
       else if (symbolPosition === 91) {
            symbolPosition = 65;
            text += String.fromCharCode(symbolPosition);
       }else text += String.fromCharCode(symbolPosition);
    }

    return text;
}

console.log(nextCharacter('abcdefghijklmnopqrstuvwxyz'));


//18.  Sukurkite funkciją, kuri priima gimimo metus ir grąžina asmenio amžių.

console.log('----------------18>');

function age (year, yearOfBirth) {
    return year - yearOfBirth; 
}


console.log(age(2024, 1989));

//19.Parašykite funkciją, kuri priima tekstą ir simbolį, o grąžina, kiek kartų tas simbolis pasikartoja tekste.

console.log('----------------19>');

function characterCalculator (text, symbol) {

    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === symbol) {
            count++
        }
    }
    return count;
}


console.log(characterCalculator('simbolis pasikartoja tekste', 'e'));


//20. Parašykite funkciją, kuri priima kelių masyvų sąrašą ir grąžina naują masyvą, kuris sudarytas tik iš tų elementų, kurie pasikartoja visuose pradiniuose masyvuose.
console.log('----------------20>');

function repeatingNumbers (firstArr, secondArr) {
    const arr = firstArr.concat(secondArr);
    const repeatingdNums = [];
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (!(obj[arr[i]])) {
            obj[arr[i]] = 1;
        }else obj[arr[i]] += 1;
    }
    
    for (const item in obj) {
        if (obj[item] > 1) {
            repeatingdNums.push(+ item);
        }
    }

    const allRepeatingNums = [];

    for (let i = 0; i < repeatingdNums.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === repeatingdNums[i]) {
                allRepeatingNums.push(arr[j]);
            }
        }
    }
   return allRepeatingNums;
}


console.log(repeatingNumbers([7, 6, 5, 4, 3, 2, 1,], [5, 5, 5, 4, 3, 2, 1,]));