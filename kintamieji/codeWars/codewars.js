// console.log('codewar')
// console.clear()




// function hello(name) {
    
//     if (name === '') return 'Hello, World!';
//     if (typeof name === 'undefined') return 'Hello, World!';
//     let correctName = name[0].toUpperCase() + name.slice(1).toLowerCase();
//     if (name !== correctName) return `Hello, ${correctName}!`;
//     if (name === correctName) return `Hello, ${name}!`;
//   }

// console.log(hello())



// let array = ["Telescopes", "Glasses", "Eyes", "Monocles"];

// let sorted = array.sort();
// console.log(sorted)


// function sortByLength (array) {
//     const sorted = array.sort((a, b) => a.length - b.length);
//     return sorted;
// }


// console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))
// console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]))
// console.log(sortByLength(["Longer", "Longest", "Short"]))



// function solution(pairs){
//     let list = '';
    
//     for (let pair in pairs)
//        list += `${pair} = ${pairs[pair]},`;
//     return list.slice(0, -1);
//   }


// console.log(solution({'a': 1, 'b': 2}))



// function calculate_total(subtotal, tax, tip) {
//     const total = subtotal * (1 + tax / 100 + tip / 100);
//     const result = + total.toFixed(2);
//     return result;
    
// }


// console.log(calculate_total(5, 5, 10))
// console.log(calculate_total(36.97, 7, 15))
// console.log(calculate_total(0.00, 6, 18))
// console.log(calculate_total(80.94, 0, 20))
// console.log(calculate_total(54.96, 8, 0))



// function avgArray(arr) {
//      let list = [];

//      for (let i = 0; i < arr[0].length; i++)
//          return  arr.flat();
        
        
// }

// console.log(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]))



// function doubleChar(str){
//     let doubleLetters = '';

//     for (let i = 0; i < str.length; i++)
//         doubleLetters += str[i] + str[i];
//     return doubleLetters;
// }


// console.log(doubleChar('Hello'))


// function  calculateAge(birth, year) {
//     if (year > birth){
//         const age = year - birth;
//         if (age === 1)return `You are ${age} year old.`;
//         return `You are ${age} years old.`};
//     if (year < birth){
//         const willBorn = birth - year;
//         if (willBorn === 1)return `You will be born in ${willBorn} year.`;
//         return `You will be born in ${willBorn} years.`};
//     if (year === birth){
//         return `You were born this very year!`};

// }


// console.log(calculateAge(2015, 2016))
// console.log(calculateAge(2013, 2012))
// console.log(calculateAge(2016, 2016))


// function generateRange(min, max, step){
//     let range = [];

//     for (let i = min; i <= max; i += step)
//         range.push(i);

//     return range;
// }


// console.log(generateRange(1, 10, 5))


// function check(a, x) {

//     let count = 0;

//     for (let i = 0; i < a.length; i++)
//         if (a[i] === x){
//             count++;
//         } 
//     return count > 0;

    
    
//   }

// console.log(check([66, 101], 66));
// console.log(check([101, 45, 75, 105, 99, 107], 107));
// console.log(check(['t', 'e', 's', 't'], 'e'));
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'));


// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         name = 'Mercury'
//         break;
//       case 2:
//         name = 'Venus'
//         break;
//       case 3:
//         name = 'Earth'
//         break;
//       case 4:
//         name = 'Mars'
//         break;
//       case 5:
//         name = 'Jupiter'
//         break;
//       case 6:
//         name = 'Saturn'
//         break;
//       case 7:
//         name = 'Uranus'
//         break;
//       case 8:
//         name = 'Neptune'
//         break;
//     }
    
//     return name;
//   }


// console.log(getPlanetName(4))


// function positiveSum(arr) {

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) sum += arr[i];
//     }
//   return sum;
// }


// console.log(positiveSum([1,2,3,4,5]))
// console.log(positiveSum([1,-2,3,4,5]))
// console.log(positiveSum([]))
// console.log(positiveSum([-1,-2,-3,-4,-5]))
// console.log(positiveSum([-1, 2, 3, 4,-5]))


// function strCount(str, letter){
    
//     let result = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) result++;
//     }
//     return result;
//   }

// console.log(strCount('Hello', 'o'));
// console.log(strCount('Hello', 'l'));
// console.log(strCount('Hello', 'z'));




// function testEven(n) {
    
//     return (n % 2 === 0);
    
// }


// console.log(testEven(0));
// console.log(testEven(0.5));
// console.log(testEven(1));
// console.log(testEven(2));
// console.log(testEven(-4));


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return (mpg * fuelLeft) >= distanceToPump;
//   };


// console.log(zeroFuel(50, 25, 2))
// console.log(zeroFuel(100, 50, 1))


// function arrayMadness(a, b) {
//     let resultA = 0;
//     let resultB = 0;


//     for (let i = 0; i < a.length; i++) {
//        resultA += a[i] ** 2;
//     }

//     for (let i = 0; i < b.length; i++) {
//         resultB += b[i] ** 3;
//     }

//     return resultA > resultB;
//   }


// console.log(arrayMadness([4,5,6],[1,2,3]));
// console.log(arrayMadness([5,6,7],[4,5,6]));
// console.log(arrayMadness([4,5,6],[3,4,5]));
// console.log(arrayMadness([3,4,5],[2,3,4]));
// console.log(arrayMadness([2,3,4],[1,2,3]));
// console.log(arrayMadness([1,2,3],[0,1,2]));
// console.log(arrayMadness([5,3,2,4,1],[15]));
// console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]));
// console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]));
// console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]));
// console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]));



// function differenceInAges(ages){
//     let max = ages[0];
//     let min = ages[0];

//     let list = [];

//     for (let i = 0; i < ages.length; i++) {
//         if (ages[i] > max){ 
//             max = ages[i];
//         }
//         if (ages[i] < min){
//             min = ages[i];
//         }
//     }

//     list.push(min);
//     list.push(max);
//     list.push(max - min);

//     return list;
// }



// console.log(differenceInAges([82, 15, 6, 38, 35]))


// function hero(bullets, dragons){
//     const twoBullets = 2;
//     return (dragons * twoBullets) <= bullets;
//     }
    
// console.log(hero(10, 5));
// console.log(hero(7, 4));
// console.log(hero(4, 5));
// console.log(hero(100, 40));
// console.log(hero(1500, 751));
// console.log(hero(0, 1));

// function getDrinkByProfession(param){
//     let splitBySpace = param.split(' ');
//     let correctedWord = "";


//     for (let i = 0; i < splitBySpace.length; i++)
//         correctedWord += (splitBySpace[i][0].toUpperCase() + splitBySpace[i].slice(1).toLowerCase() + " "); 
    
//         const drink = correctedWord.slice(0, -1);
        
//     if (drink === "Jabroni") return "Patron Tequila";
//     if (drink === "School Counselor") return "Anything with Alcohol";
//     if (drink === "Programmer") return "Hipster Craft Beer";
//     if (drink === "Bike Gang Member") return "Moonshine";
//     if (drink === "Politician") return "Your tax dollars";
//     if (drink === "Rapper") return "Cristal";
//     else return "Beer";
// }


// console.log(getDrinkByProfession("School Counselor"));
// console.log(getDrinkByProfession("Bike Gang Member"));

// function opposite(number) {
    
//    return (number > 0) ? 0 - number : number - (number * 2);
//     //   return -number
// }




// console.log(opposite(-14))
// console.log(opposite(3.3333333))
// console.log(opposite(-12525220.3325))
// console.log(opposite(-5))
// console.log(opposite(0))



// function litres(time) {
//     const literPerHour = time * 0.5;
//     return Math.floor(literPerHour);
//   }

// console.log(litres(2))


// function reverseWords(str){

//   let arr = str.split(' ');

//   let wordsInReverse = '';

//   for (let i = arr.length -1; i >= 0; i--)
//         wordsInReverse += arr[i] + ' ';
      
//   return wordsInReverse.slice(0, -1);
// }



// console.log(reverseWords("hello world!"))
// console.log(reverseWords("yoda doesn't speak like this"))



// const areaOrPerimeter = function(l , w) {
//     return (l === w)? l * w : (l * 2) + (w * 2);
// };



// console.log(areaOrPerimeter(3, 3))
// console.log(areaOrPerimeter(6, 10))


// function century(year) {

//   let toString = '' + year;

//   if (toString.length === 4){
//     if (+ toString.slice(2) > 0){
//       return + toString.slice(0, 2) + 1;
//     }else return + toString.slice(0, 2);
//   }
//   else if (toString.length === 5){
//     if (+ toString.slice(2) > 0){
//        return + toString.slice(0, 3) + 1;
//     }else return + toString.slice(0, 3);
//   }
//     else if (toString.length === 6){
//       if (+ toString.slice(2) > 0){
//          return + toString.slice(0, 4) + 1;
//       }else return + toString.slice(0, 4);
//   } else{
//     if (toString <= 100){
//        return 1;
//     }else return + toString.slice(0, 1) + 1; 
//   }
// }


// console.log(century(1705))
// console.log(century(1900))
// console.log(century(1601))
// console.log(century(2000))
// console.log(century(109))
// console.log(century(158666))
// console.log(century(259828))


// function enough(cap, on, wait) {
//   return (cap >= on + wait)? 0 : (on + wait) - cap;
// }



// console.log(enough(10, 5, 5));
// console.log(enough(100, 60, 50));
// console.log(enough(20, 5, 5));



// function bmi(weight, height) {
//     const bmi = weight / (height * height);
    
//     if (bmi <= 18.5) {
//       return 'Underweight';
//     }
//     if (bmi <= 25) {
//       return 'Normal';
//     }
//     if (bmi <= 30) {
//       return 'Overweight';
//     }
//     if (bmi > 30) {
//       return 'Obese';
//     }
// }




// console.log(bmi(80, 1.80));
// console.log(bmi(82, 1.89));

// function findDifference(a, b) {

//   const result = a[0] * a[1] * a[2] - b[0] * b[1] * b[2];

//   return (result > 0) ? result : result - (result * 2);
  

  
// }


// console.log(findDifference([3, 2, 5], [1, 4, 4]));
// console.log(findDifference([9, 7, 2], [5, 2, 2]));
// console.log(findDifference([11, 2, 5], [1, 10, 8]));
// console.log(findDifference([4, 4, 7], [3, 9, 3]));
// console.log(findDifference([15, 20, 25], [10, 30, 25]));
// console.log(findDifference([17,12,20], [22,16,27]));



// function magNumber(info){

// const PT92 = 17; 
// const M4A1 = 30;
// const M16A2 = 30;
// const PSG1 = 5; 
  
// const gun = info[0];
// const streets = info[1];
// const threeBullets = 3;

// if (gun === 'PT92') return Math.ceil((streets * threeBullets) / PT92);
// if (gun === 'M4A1') return Math.ceil((streets * threeBullets) / M4A1);
// if (gun === 'M16A2') return Math.ceil((streets * threeBullets) / M16A2);
// if (gun === 'PSG1') return Math.ceil((streets * threeBullets) / PSG1);


// }

// console.log(magNumber(["PT92", 6]));
// console.log(magNumber(["M4A1", 8]));
// console.log(magNumber(["M16A2", 19]));
// console.log(magNumber(["PSG1", 31]));
// console.log(magNumber(["PT92", 19]));


// function simpleMultiplication(number) {
//   return (number % 2 === 0)? number * 8 : number * 8 + number;
// }

// console.log(simpleMultiplication(2))
// console.log(simpleMultiplication(1))
// console.log(simpleMultiplication(8))
// console.log(simpleMultiplication(4))
// console.log(simpleMultiplication(5))



// function switchItUp(number){
//   const numbers = {
//     1: 'One',
//     2: 'Two',
//     3: 'Three',
//     4: 'Four',
//     5: 'Five',
//     6: 'Six',
//     7: 'Seven',
//     8: 'Eight',
//     9: 'Nine'
//   };
// return numbers[number];

//   }


// console.log(switchItUp(7))


// function problem(x){
//   if (typeof x !== 'number'){ 
//     return 'Error';
//   }
//     return x * 50 + 6;

// }



// console.log(problem(0.03));
// console.log(problem(3));
// console.log(problem(5));



// function checkAlive (health) {
//   return health > 0;
// }


// console.log(checkAlive(0));
// console.log(checkAlive(5));


// function capitalizeWord(word) {
//   const firstLetterCapitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
//   return (word[0] === word[0].toUpperCase())? `${firstLetterCapitalized} (the first letter was already capitalized)` : firstLetterCapitalized;

// }


// console.log(capitalizeWord('Word'));
// console.log(capitalizeWord('i'));
// console.log(capitalizeWord('glasswear'));


// function countSheeps(sheep) {
//   let result = 0;

//   for (let i = 0; i < sheep.length; i++)
//       if (sheep[i] === true) result++;
//   return result;
// }


// console.log(countSheeps([]));
// console.log(countSheeps([null]));
// console.log(countSheeps([false]));
// console.log(countSheeps([undefined,null,false,true]));
// console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]));
// console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]));


// function contamination(text, char){
//   let repeatChar = '';

//   for(let i = 0; i < text.length; i++){
//       repeatChar += char;
//   }
//   return repeatChar;  
// }

// console.log(contamination("abc","z"));
// console.log(contamination("","z"));
// console.log(contamination("abc",""));
// console.log(contamination("_3ebzgh4","&"));
// console.log(contamination("//case"," "));



// function greet(name){
 
//   return (name === "Johnny")? "Hello, my love!" : "Hello, " + name + "!";
    
// }

// console.log(greet("Jim"));
// console.log(greet("Jane"));
// console.log(greet("Simon"));
// console.log(greet("Johnny"));




// function position(letter){
  
//   const alphabet = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
//     k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18,
//     s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26};

//   return alphabet[letter];
//   }

// console.log(position('a'))
// console.log(position('b'))
// console.log(position('z'))


// function xor(a, b) {
//   if (a === b) return false;
//   if (a !== b) return true;
// }


// console.log(xor(false, false))
// console.log(xor(true, false))
// console.log(xor(false, true))
// console.log(xor(true, true))
// console.log(xor(true, true))



// function findNeedle(haystack) {
  
//     for (let i = 0; i < haystack.length; i++){
//         if (haystack[i] === 'needle'){ 
//           return i;
//         }
//     }
// }

// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));
// console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']));
// console.log(findNeedle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]));

// function smash (words) {

//   let result = '';
//   for(let i = 0;i < words.length; i++){
//     if(i === 0){//this is made so there is no space at start
//         result += words[i];
//      }else{
//        result += ' ' + words[i];
//      }
//   }
//   return result;
      

// };

// console.log(smash(["hello", "world"]));
// console.log(smash(["hello", "amazing", "world"]));
// console.log(smash(["this", "is", "a", "really", "long", "sentence"]));


// function peopleWithAgeDrink(old) {
//   if (old <= 14) return "drink toddy";
//   if (old <= 18) return "drink coke";
//   if (old <= 29) return "drink beer";
//   if (old > 30) return "drink whisky";
  

// };


// console.log(peopleWithAgeDrink(15))

// console.clear();

// function multipleOfIndex(array) {
//   let  result = [];

//   for (let i = 0; i < array.length; i++) {
//       if (array[i] % i === 0 || array[i] === 0){
//         result.push(array[i]);
//       }
//   }
//   return result;
// }


// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
// console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
// console.log(multipleOfIndex([0, 2, 3, 6, 9]));

// function solution(a, b){
//   return (a.length > b.length)? b + a + b : a + b + a;
// }


// console.log(solution('45', '1'));
// console.log(solution('13', '200'));
// console.log(solution('Soon', 'Me'));
// console.log(solution('U', 'False'));


// function booleanToString(b){
//   return '' + b;
// }

// console.log(booleanToString(true));
// console.log(booleanToString(false));

// function updateLight(current) {

//     if (current === "green") return "yellow";
//     if (current === "yellow") return "red";
//     if (current === "red") return "green";
  

// }

// console.log(updateLight("green"));
// console.log(updateLight("yellow"));
// console.log(updateLight("red"));


// function integrate(coefficient, exponent) {
//   return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
// }

// console.log(integrate(3, 2));
// console.log(integrate(12, 5));
// console.log(integrate(20, 1));
// console.log(integrate(40, 3));
// console.log(integrate(90, 2));


// function getAverage(marks){
//   let count = 0;

//   for (let i = 0; i < marks.length; i++){
//     count += marks[i];
//   }
//   const average = Math.floor(count / marks.length);
//   return average;
// }

// console.log(getAverage([2,2,2,2]));
// console.log(getAverage([1,2,3,4,5,]));
// console.log(getAverage([1,1,1,1,1,1,1,2]));

// function grow(x){
//   let count = 1;

//   for (let i = 0; i < x.length; i++){
//       count *= x[i];
//   }
//   return count;
// }

// console.log(grow([1, 2, 3]));
// console.log(grow([4, 1, 1, 1, 4]));
// console.log(grow([2, 2, 2, 2, 2, 2]));

// 

// function mystery() {
  
//   return {sanity: 'Hello'};
// }

// console.log(mystery())


// function createArray(number){
//   let newArray = [];
  
//   for(var counter = 1; counter <= number; counter++){
//     newArray.push(counter);
//   }
  
//   return newArray;
// }

// console.log(createArray(1));
// console.log(createArray(2));
// console.log(createArray(3));
// console.log(createArray(4));
// console.log(createArray(5));


// function evalObject(value){
//   var result = 0;
//   switch(value.operation){
//     case'+': result = value.a + value.b; break;
//     case'-': result = value.a - value.b; break;
//     case'/': result = value.a / value.b; break;
//     case'*': result = value.a * value.b; break;
//     case'%': result = value.a % value.b; break;
//     case'^': result = Math.pow(value.a, value.b);
//   }
//   return result;
// }


// console.log(evalObject({a:1,b:1,operation:'+'}))


// function weatherInfo (temp) {
//   const c = convertToCelsius(temp);
//   if (c < 0)
//     return (c + " is freezing temperature");
//   else
//     return (c + " is above freezing temperature");
// }

// function convertToCelsius (temperature) {
//   const celsius = (temperature - 32) * (5/9)
//   return celsius;
// }

// console.log(weatherInfo(50));
// console.log(weatherInfo(23));


// function myFirstKata(a, b) {
//   if (typeof a !== "number" || typeof b !== "number"){
//     return false; 
//   }else 
//     return (a % b) + (b % a);
  
// }


// console.log(myFirstKata(3,5));
// console.log(myFirstKata("hello", 5));
// console.log(myFirstKata(3, "bye"));
// console.log(myFirstKata(true, true));

// function rainAmount(mm){
//   if (mm < 40) {
//       return "You need to give your plant " + (40 - mm) + " mm of water";
//   }else
//       return "Your plant has had more than enough water for today!";
  
// }


// console.log(rainAmount(100));
// console.log(rainAmount(39));


// const greet_abe = function() {
//   const name = 'Abe';
//   return "Hello, " + name + '!';
// };

// const greet_ben = function() {
//   const name = 'Ben';
//   return "Hello, " + name + '!';
// };


// console.log(greet_abe())
// console.log(greet_ben())


// function getMax1(){
//   const name = 'Max Headroom';
//   return name; 
// }

// function getMax2(){
//   const name = 'Max Headroom';
//   return name;
// }


  
   
// console.log(getMax1() === getMax2());


// function giveMeFive(obj){
  
//   let arr = [];

//   for (let key in obj){
//     if (key.length === 5){
//       arr.push(key);
//     }
//     if (obj[key].length === 5){
//       arr.push(obj[key]);
//     } 
   
//   }
//   return arr;
// }

// console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));
// console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}));
// console.log(giveMeFive({Pears:"than",apple:"sweet"}));

// function pickIt(arr){
//   let odd=[],even=[];
  
//   for (let i = 0; i < arr.length; i++){
//       ((arr[i] % 2 === 0) ? even : odd).push(arr[i]);
//     }
  
//   return [odd,even];
// }

// console.log(pickIt([1, 2]));
// console.log(pickIt([1, 2, 3]));
// console.log(pickIt([3, 2, 1]));
// console.log(pickIt([10, 20, 30]));

// const countSheep = function (num){

//   let count = ''

//   for (let i = 0; i <= num; i++)
//       if (i > 0) count += `${i} sheep...`;

//     return count;
// }

// console.log(countSheep(3));

// function pushElement(arr){
//   var el=1;
//   //push el to arr
  
//   return arr.push(el);

// }


// console.log(pushElement([1, 2, 3]))


// function animal(obj){
//   return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
// }


// console.log(animal({name:"dog",legs:4,color:"white"})) //"This white dog has 4 legs."

// function reverseList(list) {
//     let reverse = [];

//     for (let i = list.length - 1; i >= 0; i--)
//         reverse.push(list[i]);
//     return reverse;
// }


// console.log(reverseList([1,2,3,4]));


// function pillars(numPill, dist, width) {
//     if (numPill <= 1){
//       return 0;
//     }
//     return (dist * 100 * (numPill - 1)) + (width * (numPill -2));

// }

// console.log(pillars(1, 10, 10));
// console.log(pillars(2, 20, 25));
// console.log(pillars(11, 15, 30));


// function howManydays(month){
//   let days;
//   switch (month) {
//     case 1: 
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       days = 31;
//       break;
//     case 4: 
//     case 6:
//     case 9:
//     case 11:
//       days = 30;
//       break;
//     case 2:
//       days = 28;
//       break;
//   }
//   return days;
// }


// console.log(howManydays(2))

// console.clear()

// function sixToast(num) {
//   return num > 6 ? num - 6 : 6 - num;
// }


// console.log(sixToast(6));
// console.log(sixToast(17));
// console.log(sixToast(3));

// function seatsInTheater(nCols, nRows, col, row) {
//   return (nCols - (col - 1)) * (nRows - row);
  
  
// }


// console.log(seatsInTheater(16,11,5,3))
// console.log(seatsInTheater(1,1,1,1))
// console.log(seatsInTheater(13,6,8,3))
// console.log(seatsInTheater(60,100,60,1))
// console.log(seatsInTheater(1000,1000,1000,1000))


// function padIt(str,n){
//   const star = '*'
//   let starList = '';
//   let starList2 = '';
  
//   let i = 0;
//   while (i < n){
//     if (i % 2 === 0){
//       starList += star;
//     }else starList2 += star;
//       i++
//   }
//   return starList + str + starList2;
// }


// console.log(padIt('a', 10))

// function greet(language) {
	
//   const greeting = {
//    english: "Welcome",
//    czech: "Vitejte",
//    danish: "Velkomst",
//    dutch: "Welkom",
//    estonian: "Tere tulemast",
//    finnish: "Tervetuloa",
//    flemish: "Welgekomen",
//    french: "Bienvenue",
//    german: "Willkommen",
//    irish: "Failte",
//    italian: "Benvenuto",
//    latvian: "Gaidits",
//    lithuanian: "Laukiamas",
//    polish: "Witamy",
//    spanish: "Bienvenido",
//    swedish: "Valkommen",
//    welsh: "Croeso",
//   }
//   return greeting[language] ? greeting[language] : "Welcome";
//   //return language === language ? greeting[language] : "Welcome";
// }

// console.log(greet('w'))

// function SubtractSum(n){

//   if (n > 100) toStr = '' + n;
//   toStr.split('');
//   let list = [];
//   let count = 0;
  
  
//   for (let i = 0; i < toStr.length; i++) {
//       list.push(+ toStr[i])
//   }
  
// }

// console.log(SubtractSum(110))


// function basicOp(operation, value1, value2){
//     if (operation === '+') return value1 + value2;
//     if (operation === '-') return value1 - value2;
//     if (operation === '*') return value1 * value2;
//     if (operation === '/') return value1 / value2;
   
      
// }


// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 4, 7));
// console.log(basicOp('*', 5, 5));
// console.log(basicOp('/', 49, 7));


// function whatday(num) { 
//   const days = {
//     1: "Sunday",
//     2: "Monday",
//     3: "Tuesday",
//     4: "Wednesday",
//     5: "Thursday",
//     6: "Friday",
//     7: "Saturday"
//   }
//   return (num < 1 || num > 7) ? 'Wrong, please enter a number between 1 and 7' : days[num];
// }

// console.log(whatday(8));



// function dutyFree(normPrice, discount, hol){
//     const moneySaved = normPrice - (normPrice * (1 - discount / 100));
//     return Math.floor(hol / moneySaved);

// }


// console.log(dutyFree(12, 50, 1000));
// console.log(dutyFree(17, 10, 500));
// console.log(dutyFree(24, 35, 3000));



// function sumMix(x){
//     let count = 0;

//     for (let i = 0; i < x.length; i++){
//         count += (+x[i]);
//     }
// return count;
// }

// console.log(sumMix([9, 3, '7', '3']));
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));


// function abbrevName(name){
//     let nameList = name.split(' ')
//     let initials = '';

//     for (let i = 0; i < nameList.length; i++)
//         initials += nameList[i][0].toUpperCase() + '.';
//     return initials.slice(0, -1);

// }

// console.log(abbrevName("Sam Harris"))

// function digitize(n) {
//     let numToString = '' + n;
//     let reverseNums = [];

//     for (let i = numToString.length -1; i >= 0; i--){
//         reverseNums.push(+numToString[i]);
//     }
//     return reverseNums;
// }

// console.log(digitize(35231));


// function removeEveryOther(arr){
    
//     let list = [];
    
//     for (let i = 0; i < arr.length; i++){
//         //if (arr.length <= 2 && typeof arr[i] !== 'object' ) return arr;
//         if (i % 2 === 0) list.push(arr[i]);   
//     }
//     return list;
//   }

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
// console.log(removeEveryOther([[1, 2]]));
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]));
// console.log(removeEveryOther([ 'm', 'r' ]));


// function removeChar(str){
//     return str.length > 2 ? str.slice(1, -1) : str;
//   };

// console.log(removeChar('eloquent'))
  
// function betterThanAverage(classPoints, yourPoints) {
//     let  count = 0;

//     for (let i = 0; i < classPoints.length; i++){
//         count += classPoints[i];
//     }
//     let average = count / classPoints.length;
//     return average < yourPoints;
// }

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 100));


// const reverseSeq = n => {
    
//     let numList = [];

//     for (let i = n; i > 0; i--){
//         numList.push(i)
//     }
//     return numList;
//   };


// console.log(reverseSeq(5));


// String.prototype.toAlternatingCase = function (text) {
//         let newString = '';

//         for (let i = 0; i < text.length; i++)
//             text[i] === text[i].toLowerCase() ? newString += text[i].toUpperCase() : newString += text[i].toLowerCase();

//         return newString;
//   }


// console.log(String.prototype.toAlternatingCase("hello world"));
// console.log(String.prototype.toAlternatingCase("HELLO WORLD"));
// console.log(String.prototype.toAlternatingCase("hello WORLD"));
// console.log(String.prototype.toAlternatingCase("12345"));


// function maps(x){
//     let doubled = [];

//     for (let i = 0; i < x.length; i++)
//         doubled.push(x[i] * 2);

//     return doubled;
    
// }


// console.log(maps([1, 2, 3]));

// function monkeyCount(n) {
//     let monkeyList = [];

//     for (let i = 1; i <= n; i++){
//         monkeyList.push(i);
//     }
//     return monkeyList;
//     }


// console.log(monkeyCount(10))


// function between(a, b) {
//     let betweenList = [];

//     for (let i = a; i <= b; i++){
//         betweenList.push(i)
//     }
//     return betweenList;
//   }


// console.log(between(1, 4));


// function calculateTip(amount, rating) {
//     const ratingToLowerCase = rating.toLowerCase();

//     const ratingList = {
//         terrible: 0,
//         poor: 5,
//         good: 10,
//         great: 15,
//         excellent: 20
//     }
    
//     const objKeys = Object.keys(ratingList);

//     if(!objKeys.includes(ratingToLowerCase)){
//          return 'Rating not recognised';

//     }else tip =  ratingList[ratingToLowerCase] / 100;
//     return Math.ceil(amount * tip);
// }



// console.log(calculateTip(20, "Excellent"));
// console.log(calculateTip(26.95, "goo"));
// console.log(calculateTip(20, "Excellent"));

// function howMuchILoveYou(nbPetals) {
//     let list = {
//        1: "I love you",
//        2: "a little",
//        3: "a lot",
//        4: "passionately",
//        5: "madly",
//        6: "not at all",
//     }
    
//     for (let i = nbPetals; i > 0; i-=6)
//         if (nbPetals > 6){
//             nbPetals = i;  
//         }else nbPetals;
//         return list[nbPetals]

    
        
// }

// console.log(howMuchILoveYou(20))


// function findMultiples(integer, limit) {
//     let numberList = [];

//     for(let i = 1; i <= limit; i++){
//         if (i % integer === 0) numberList.push(i);
//     }
// return numberList;
//   }

  
// console.log(findMultiples(5, 25))
// console.log(findMultiples(1, 2))
// console.log(findMultiples(5, 7))


// String.prototype.isUpperCase = function(string) {
    
//     for (let i = 0; i < string.length; i++){
//         isToUpperCase = string[i] === string[i].toUpperCase()
//         return (isToUpperCase)? `${isToUpperCase} ${string} is upper case` : `${isToUpperCase} ${string} not is upper case`
//     }
// }


// console.log(String.prototype.isUpperCase('hello I AM DONALD'))
// console.log(String.prototype.isUpperCase('HELLO I AM DONALD'))


// function solution(str){
//     if (str.length % 2 === 0){
//         str = str; 
//     }else str += '_';

//     let list = [];

//     for (let i = 0; i < str.length; i++){
//         list.push(str[i] + str[++i]);
        
//     }
//     return list;
// }


// console.log(solution("abcdef"));



// function grabDoll(dolls){
//     let bag=[];
    
//     for (let i = 0; i < dolls.length; i++)
//         if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll"){
//             bag.push(dolls[i]);
//             if (bag.length >= 3){ break;
//             }else continue;
//         }
//         return bag;
//   }


// console.log(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]));
// console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]));
// console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]));
// console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]));
// console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]));



// function fixTheMeerkat(arr) {
//     let list = [];

//     for (let i = arr.length -1; i >= 0; i--){
//         list.push(arr[i])
//     }
//     return list;
//    }

// console.log(fixTheMeerkat(["tail", "body", "head"]));



// function pipeFix(numbers){
//     let fixList = [];

//     for (let i = numbers[0]; i <= numbers[numbers.length -1]; i++){
//         fixList.push(i);
//     }
//     return fixList;
// }

// console.log(pipeFix([1,2,3,5,6,8,9]))

// let array = [2,3,5,7,11]

// function find(array, element) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === element) return i;
//     }
//     return "Not found";
//   }


// console.log(find(array, 12))

// var templateStrings = function(noun, adjective) {
//   return `(${noun} are ${adjective})`;
// }



// console.log(templateStrings('Animals', 'Good'))


// function fuelPrice(litres, pricePerLitre) {
//     if (litres < 4) return ((litres * pricePerLitre) - (litres * 0.05));
//     if (litres < 6) return ((litres * pricePerLitre) - (litres * 0.10));
//     if (litres < 8) return ((litres * pricePerLitre) - (litres * 0.15));
//     if (litres < 10) return ((litres * pricePerLitre) - (litres * 0.20));
//     if (litres > 10) return ((litres * pricePerLitre) - (litres * 0.25));
    
// }


// console.log(fuelPrice(5, 1.23));
// console.log(fuelPrice(8, 2.5));
// console.log(fuelPrice(5, 5.6));


// function reverseNumber(n) {
//     const numToString = ('' + n);
//     let numList = '';

//     for (let i = numToString.length -1; i >= 0; i--)
//         numList += numToString[i];

//       if(numList[numList.length -1] === '-'){
//         return + (-numList.slice(0, -1));
//       } else return + (numList);
      
      
      
// }

// console.log(reverseNumber(-123))
// console.log(reverseNumber(1000))


function expressionMatter(a, b, c) {
  let resultList = [];
  let max = 0;

  resultList.push(a * (b + c));
  resultList.push(a * b * c);
  resultList.push(a + b * c);
  resultList.push((a + b) * c);
  resultList.push(a + b + c);
  
  for (let i = 0; i < resultList.length; i++){
    if (resultList[i] > max){
       max = resultList[i];
    }
  }
  return max;
}



console.log(expressionMatter(2, 1, 2))
console.log(expressionMatter(1, 2, 3))
console.log(expressionMatter(1, 1, 1))
console.log(expressionMatter(1, 3, 1))
console.log(expressionMatter(2, 2, 2))
console.log(expressionMatter(2, 1, 1))