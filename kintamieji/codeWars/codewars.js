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


// function expressionMatter(a, b, c) {
//   let resultList = [];
//   let max = 0;

//   resultList.push(a * (b + c));
//   resultList.push(a * b * c);
//   resultList.push(a + b * c);
//   resultList.push((a + b) * c);
//   resultList.push(a + b + c);
  
//   for (let i = 0; i < resultList.length; i++){
//     if (resultList[i] > max){
//        max = resultList[i];
//     }
//   }
//   return max;
// }



// console.log(expressionMatter(2, 1, 2))
// console.log(expressionMatter(1, 2, 3))
// console.log(expressionMatter(1, 1, 1))
// console.log(expressionMatter(1, 3, 1))
// console.log(expressionMatter(2, 2, 2))
// console.log(expressionMatter(2, 1, 1))


// function find(seq) {
//   let count = 0;

//   let sortedSeq = seq.sort((a, b) => a - b)

//   for(let i = 0; i < sortedSeq.length; i++){
//       count += sortedSeq[i];
//   }
//   return count / sortedSeq.length;
// }


// console.log(find([5, -1, 0, 3, 4, -3, 2, -2]))
// console.log(find([2, -2, 8, -8, 4, -4, 6, -6]))
// console.log(find([212, 224, 246, 258, 260, 272]))


// var number = function(busStops){
//     let result = 0;

//     for (let i = 0; i < busStops.length; i++){
//       result += busStops[i][0] - busStops[i][1];
//     }
//     return result;
        
    
// }

// console.log(number([[10,0],[3,5],[5,8]]))


//Kaip pakeisti raides pvz:

//  function htmlspecialchars(formData) {
  
//   const list = {
//     '<': '&lt;',
//     '>':  '&gt;',
//     '"':  '&quot;',
//     '&':  '&amp;',
//   }

//   let TextChanged = '';
  
//   for (let i = 0; i < formData.length; i++)
//       if(list[formData[i]]) {
//         TextChanged += list[formData[i]];
//       }else TextChanged += formData[i];
      
//       return TextChanged;
// }



// console.log(htmlspecialchars("<h2>Hello World</h2>"))

// function getChar(c){
//   return String.fromCharCode(c)
    
// }

// console.log(getChar(222))





//   function correctPolishLetters (string) {
//     const list = {
//         ą: 'a',
//         ć: 'c',
//         ę: 'e',
//         ł: 'l',
//         ń: 'n',
//         ó: 'o',
//         ś: 's',
//         ź: 'z',
//         ż: 'z'
//       }
    
//       let TextChanged = '';
      
//       for (let i = 0; i < string.length; i++)
//           if(list[string[i]]) {
//             TextChanged += list[string[i]];
//           }else TextChanged += string[i];
          
//           return TextChanged;
//   }


// function splitAndMerge(string, separator) {
    
    
//     let arrWithoutGapItem = [];
//     let text = '';
//     let modifyText = '';
    
//     for (let i = 0; i < string.length; i++){
//         if (string[i] === ' '){ 
//             text += string[i];
//         }else text += string[i] + separator;
//     }

//     let arr = text.split(' ');

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] !== '') arrWithoutGapItem.push(arr[i]);
//     }
        
//     for (let i = 0; i < arrWithoutGapItem.length; i++){
//         if (arrWithoutGapItem[i].length < 2){
//             modifyText += arrWithoutGapItem[i] + ' ';
//         }else modifyText += arrWithoutGapItem[i].slice(0, -1) + ' ';
//     }
// return modifyText.slice(0, -1);
// }
// console.log(splitAndMerge("My name is John"," "))
// console.log(splitAndMerge("My name is John","-"))
// console.log(splitAndMerge("My name is John","."))
// console.log(splitAndMerge("Hello World!","."))


// function reverseWords(str) {
//     let lettersReversed = '';
//     let unchangedList = '';
//     let reverseList = '';
//     let words = str.split(' ');
    
//     for (let i = 0; i < words.length; i++){
//         if ('' + words[i].length < 2) {
//             unchangedList += words[i] + ' ';
//         }
//     }
//     for (let i = 0; i < str.length; i++){
//         lettersReversed = str[i] + lettersReversed;
//     }

//     let words2 = lettersReversed.split(' ')

//     for (let i = 0; i < words2.length; i++){
//         reverseList = words2[i] + ' ' + reverseList;
//     }

//     return (reverseList.length > unchangedList.length)? reverseList : unchangedList;
//   }


// console.log(reverseWords('apple'))
// console.log(reverseWords('a b c d'))
// console.log(reverseWords('double  spaced  words'))
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))


// function uniTotal (string) {
//     let result = 0;

//     for (let i = 0; i < string.length; i++){
//         result += string[i].charCodeAt()
//     }
//     return result;
//     }


// console.log(uniTotal('aaa'))
// console.log(uniTotal("Mary Had A Little Lamb"))


// function isOpposite(s1,s2){
//     if (!s1 || s1.length === 0 || !s2 || s2.length === 0 ) return false;
    
//     for (let i = 0; i < s1.length; i++){
//         if (s1[i] === s1[i].toLowerCase() && s2[i] === s2[i].toUpperCase() && s1.length === s2.length) return true;
//         if (s1[i] === s1[i].toUpperCase() &&  s2[i] === s2[i].toLowerCase() && s1.length === s2.length) return true;
//         if (s1[i] === s1[i].toUpperCase() &&  s2[i] === s2[i].toUpperCase()) return false;
//         if (s1[i] === s1[i].toLowerCase() &&  s2[i] === s2[i].toLowerCase()) return false;
//         else return false
//     }
    
//   }

//   function isOpposite(s1,s2){
//     if (!s1 || s1.length === 0 || !s2 || s2.length === 0 ) return false;
//     let newString = '';
    
//       for (let i = 0; i < s1.length; i++){
//           s1[i] === s1[i].toLowerCase() ? newString += s1[i].toUpperCase() : newString += s1[i].toLowerCase();
//         }
//     return newString === s2;

//   }


//   console.log(isOpposite("ab","AB"))
//   console.log(isOpposite("aBe","Ab"))
//   console.log(isOpposite("ABcde","AbCD"))
//   console.log(isOpposite("",""))
//   console.log(isOpposite("IaZBS", "iazBS"))

// function sumMul(n,m){
//     if (n <= 0 || m <= 0) return 'INVALID'

//     let s = (m % n === 0) ? m - n : m - (m % n);
//     let count = 0;
//     for (let i = s; i >= n; i -= n){
//         count += i
//     }
//     return count;
//     }

// console.log(sumMul(15, 2055))


// function equal5(a, b){
   
//     return a % b;
//   }


// console.log(equal5(100, 200))


// var uniqueInOrder=function(iterable){
//         let nonRepeatedElements = [];

//         for (let i = 0; i < iterable.length; i++){
//             if (!nonRepeatedElements.includes(iterable[i])) nonRepeatedElements.push(iterable[i])
//         }
//     return nonRepeatedElements;
//   }


// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder([1,2,2,3,3]));
// console.log(uniqueInOrder('ABBCcAD'));

// function finalGrade (exam, projects) {
//     if (exam > 90 || projects > 9) return 100;
//     if (exam > 75 && projects > 4) return 90;
//     if (exam > 50 && projects > 1) return 75;
//     return 0;
    
//   }


// console.log(finalGrade(100, 12))
// console.log(finalGrade(99, 0))
// console.log(finalGrade(10, 15))
// console.log(finalGrade(85, 5))
// console.log(finalGrade(55, 3))
// console.log(finalGrade(55, 0))
// console.log(finalGrade(20, 2))


// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   this.name = `${this.firstName} ${this.lastName}`;
  
// }

// let n = new NameMe('John', 'Doe')
// console.log(n.name)



// function combineNames(firstName, lastName) {
//       return `${firstName} ${lastName}`;
// }


// console.log(combineNames('James', 'Stevens'))


// function twoDecimalPlaces(n) {
//   return n.toFixed(2)
// }

// console.log(twoDecimalPlaces(4.659725356))


// function shortenToDate(longDate) {
//   let arr = longDate.split(',');
//   return arr[0];
// }

// console.log(shortenToDate("Friday May 2, 9am"))


// function basicOp(operation, value1, value2) {
//         if (operation === '+') return value1 + value2;
//         if (operation === '-') return value1 - value2;
//         if (operation === '*') return value1 * value2;
//         if (operation === '/') return value1 / value2;
// }


// console.log(basicOp('+', 4, 7))


// function isItANum(str) {
//     let num = '';
//     let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === digits[0]) num += str[i];
//         if (str[i] === digits[1]) num += str[i];
//         if (str[i] === digits[2]) num += str[i];
//         if (str[i] === digits[3]) num += str[i];
//         if (str[i] === digits[4]) num += str[i];
//         if (str[i] === digits[5]) num += str[i];
//         if (str[i] === digits[6]) num += str[i];
//         if (str[i] === digits[7]) num += str[i];
//         if (str[i] === digits[8]) num += str[i];
//         if (str[i] === digits[9]) num += str[i];
//     }
//     return (num[0] === '0' && num.length === 11) ? num : "Not a phone number";
//   }



// console.log(isItANum('S:)0207ERGQREG88349F82!efRF)'))
// console.log(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"))
// console.log(isItANum("sjfniebienvr12312312312ehfWh"))


// function mergeArrays(a, b) {
//   let concatArr = a.concat(b);
//   let noDuplicates = [];

//   for (let i = 0; i < concatArr.length; i++) {
//       if (!noDuplicates.includes(concatArr[i])) {
//         noDuplicates.push(concatArr[i]);
//       }

//   }
//   return noDuplicates.sort((a,b) => a - b);
// }


// console.log(mergeArrays([1, 3, 5], [2, 4, 6]))
// console.log(mergeArrays([2, 3, 5], [2, 4, 6]))


// function leo(oscar){
//     if (oscar > 88) return "Leo got one already!";
//     if (oscar === 88) return "Leo finally won the oscar! Leo is happy";
//     if (oscar === 86) return "Not even for Wolf of wallstreet?!";
//     if (oscar !== 86 || oscar !== 88 && oscar < 88) return "When will you give Leo an Oscar?";
// }

// console.log(leo(89));
// console.log(leo(88));
// console.log(leo(87));
// console.log(leo(86));



// function getNumberFromString(s) {
//     let num = '';

//     for (let i = 0; i < s.length; i++)
//         if (s[i] >= '0' && s[i] <= '9') {
//           num += s[i];
//         }
//     return + num;
// }


// console.log(getNumberFromString("this is number: 7"));
// console.log(getNumberFromString("123"));


// function remove (string) {  
  
//   return (string[string.length -1] === '!')? string.slice(0, -1) : string;
// }


// console.log(remove("!Hi!"))
// console.log(remove("Hi!"))
// console.log(remove("Hi"))


// function cookie(x){
//     if (typeof x === 'string') return "Who ate the last cookie? It was Zach!";
//     if (typeof x === 'number') return "Who ate the last cookie? It was Monica!";
//     return "Who ate the last cookie? It was the dog!";
// }


// console.log(cookie("Ryan"));
// console.log(cookie(22));
// console.log(cookie(2.3));
// console.log(cookie(true));


// function sc(floor){

//   const paAa = ['Pa!', 'Aa!'];
//   const aaPa = ['Aa~', 'Pa!'];

//   let str = '';
  
//   for (let i = 1; i < floor; i++) {
//     str += (aaPa[0] + ' ');
//   }

//   let itemLength = str.split(' ').slice(0, -1).length;

//   if (itemLength < 1) return '""';
//   if (itemLength < 6) return `${str}${paAa[0]} ${paAa[1]}`;
//   if (itemLength > 5) return `${str}${aaPa[1]}`;
  
  
// }

// console.log(sc(7))


// function sumArray(array) {
//     let result = 0;
//     let min = array[0];
//     let max = array[0];


//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min)  min = array[i];
//         if (array[i] > max)  max = array[i];  
//     }
    
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > min && array[i] < max) result += array[i];
//     }
//     return result;
// }



// function sumArray(array) {

//     if (array.length < 2 || array.length === 0) return 0;

//     let result = 0;
//     const sorted = array.sort((a, b) => a - b);
//     const withoutMaxAndMin = sorted.slice(1, -1);
    

//     for (let i = 0; i < withoutMaxAndMin.length; i++) {
//         result += withoutMaxAndMin[i];
//     }

//     return result;
// }

// console.log(sumArray([ 6, 2, 1, 8, 10]))
// console.log(sumArray([ 0, 1, 6, 10, 10]))
// console.log(sumArray([ -6, -20, -1, -10, -12 ]))
// console.log(sumArray([ -6, 20, -1, 10, -12 ]))
// console.log(sumArray([null]))


// function correct(string) {
// 	const list = {
//             '5': 'S',
//             '0': 'O',
//             '1': 'I'
//           }
        
//           let TextChanged = '';
          
//           for (let i = 0; i < string.length; i++)
//               if(list[string[i]]) {
//                 TextChanged += list[string[i]];
//               }else TextChanged += string[i];
              
//               return TextChanged;
// }

// console.log(correct("L0ND0N"))


// function getSize(width, height, depth) {
//     const area = ((width * height) + (width * depth) + (height * depth)) * 2; 
//     const volume = (width * height * depth);

//     return [area, volume];
// }

// console.log(getSize(4, 2, 6))
// console.log(getSize(10, 10, 10))


// const rps = (p1, p2) => {
//   const rock = 'rock';
//   const scissors = 'scissors';
//   const paper = 'paper';


//   if (p1 === scissors && p2 === paper || p1 === rock && p2 === scissors || p1 === paper && p2 === rock) return "Player 1 won!";
//   if (p1 === paper && p2 === scissors || p1 === scissors && p2 === rock || p1 === rock && p2 === paper) return "Player 2 won!";
//   if (p1 ===  p2) return "Draw!";
   
// };

// console.log(rps('rock', 'scissors'))
// console.log(rps('scissors', 'paper'))
// console.log(rps('paper', 'rock'))

// console.log(rps('scissors', 'rock'))
// console.log(rps('paper', 'scissors'))
// console.log(rps('rock', 'paper'))

// console.log(rps('rock', 'rock'))
// console.log(rps('scissors', 'scissors'))
// console.log(rps('paper', 'paper'))


// function combat(health, damage) {
//       let healthLeft = health - damage;
//       return (healthLeft < 0) ? `Health cannot go below ${0}:` : healthLeft;
// }


// console.log(combat(100, 5))
// console.log(combat(92, 8))
// console.log(combat(20, 30))



// var humanYearsCatYearsDogYears = function(humanYears) {
//       let catYears = [15, 9, 4];
//       let dogYears = [15, 9, 5];

//       if (humanYears < 2)
//        return [humanYears, catYears[0], dogYears[0]];
//       if (humanYears < 3)
//        return [humanYears, catYears[0] + catYears[1], dogYears[0] + dogYears[1]];
//       if (humanYears > 2)
//        return [humanYears, catYears[0] + catYears[1] + ((humanYears - 2) * catYears[2]), dogYears[0] + dogYears[1] + ((humanYears - 2) * dogYears[2])];
//     }


// console.log(humanYearsCatYearsDogYears(1))
// console.log(humanYearsCatYearsDogYears(2))
// console.log(humanYearsCatYearsDogYears(10))

// function swapValues() {
//       var args = Array.prototype.slice.call(arguments);
//       var temp = args[0];
//       args[0] = args[1];
//       args[1] = temp;
//       return 
//   }

// console.log(swapValues())


// var replaceDots = function(str) {
//       const list = {
//             '.': '-'        
//                       }
                    
//       let TextChanged = '';
                      
//       for (let i = 0; i < str.length; i++)
//       if(list[str[i]]) {
//             TextChanged += list[str[i]];
//       }else TextChanged += str[i];
                          
//       return TextChanged;
//     }

// console.log(replaceDots("one.two.three"))


// function arrayPlusArray(arr1, arr2) {
//       const concatArray = arr1.concat(arr2);
//       let result = 0;

//       for (let i = 0; i < concatArray.length; i++){
//             result += concatArray[i];
//       }

//       return result;
// }


// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))

// function validate(username, password){
//       if (username.length === 0) return 'Wrong username or password!'

      

//       let symbolsList = '';

//       for (let i = 0; i < password.length; i++) {
//             if (password[i] >= '0' && password[i] <= '9' || password[i] === '/' || password[i] === '=' || password[i] === '|') {
//                   symbolsList += password[i];
//             }
//       }
//      return (symbolsList.length > 0) ?  'Wrong username or password!': 'Successfully Logged in!'
//     }


// console.log(validate('adsad','passwosasrd'))


// function multiplyAndFilter(array, multiplier){
//       let numList = [];

//       for (let i = 0; i < array.length; i++) {
//             if (typeof array[i] === 'number') {
//             numList.push(array[i] * multiplier);
//             }
//       }
//       return numList;
// }


// console.log(multiplyAndFilter([1,2,3,4], 1.5))
// console.log(multiplyAndFilter([0,0,0], 2))
// console.log(multiplyAndFilter([1, null, function(){}, 2.5, 'string', 10, undefined, {}, []], 3))


// const orderedCount = function (text) {
      

//       let obj = {};
//       let arr = []
      
      
//       for (let i = 0; i < text.length; i++) {
//             if (!obj[text[i]]) {
//                   obj[text[i]] = 1;
//             } else  obj[text[i]] += 1;
             
//       }
//       return obj
// }


// console.log(orderedCount("abracadabra"))
// console.log(orderedCount("233312"))



// function repeatStr (n, s) {
      
//       let str = '';

//       for (let i = 0; i < n; i++) {
//             str += s;
//       }
//       return str;
// }

// console.log(repeatStr(3, '*'))


// function howManyDalmations(number) {
  
//       var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
      
//       var respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number < 101 ? dogs[2] : dogs[3]
      
//     return respond

// }

// console.log(howManyDalmations(101))
      

// function divisibleBy(numbers, divisor){
//       let numList = [];

//       for (let i = 0; i < numbers.length; i++) {
//             if (numbers[i] % divisor === 0) {
//                   numList.push(numbers[i]);
//             }
//       }
//       return numList;
// }

// console.log(divisibleBy([1,2,3,4,5,6], 2))
// console.log(divisibleBy([1,2,3,4,5,6], 3))
// console.log(divisibleBy([0,1,2,3,4,5,6], 4))


// var sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
//       7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 
//       5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 
//       6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
// monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
//       6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 
//       5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
//       7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
// tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
//        7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
//        7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 
//        5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
// wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 
//          5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
//          5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 
//          9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
// thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
//         9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
//         9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 
//         7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
// friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 
//      6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 
//      9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
//      5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
// saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 
//         5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 
//         5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 
//         7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];

// var stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]


// let marks = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

// function stairsIn20(s){
      
//       let sum = 0;
      
//       for (let i = 0; i < s.length; i++) {
//             for (let j = 0; j < s[i].length; j++) {
//                   sum += s[i][j] 
//             }
//       }
//       return sum * 20;
// }



// console.log(stairsIn20(stairs))
// console.log(stairsIn20(marks))


// function countBy(x, n) {
//       let numList = [];
//       let count = x * n;

//       for (let i = 1; i <= count; i++) {
//             if (i % x === 0) numList.push(i)
//       }
//       return numList;
// }


// console.log(countBy(2, 5));
// console.log(countBy(1, 10));

// function sayHello( name, city, state ) {

//       const str = '' + name;
//       const fullName = str.split(',').join(' ');
//       return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;


// }

// console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))


// function binaryCleaner(arr) {
//       let index = [];
//       let num = [];

//       for (let i = 0; i < arr.length; i++){
//             if (arr[i] < 2 && arr[i] >= 0) {
//                   num.push(arr[i]);
//             } 
//             if (arr[i] > 1) {
//                   index.push(i);
//             } 
//       }
// return [num, index];


// }

// console.log(binaryCleaner([0,1,2,1,0,2,1,1,1,0,4,5,6,2,1,1,0]))


// function findScreenHeight(width, ratio) {
     
//       let num = ratio.split(':');
//       let height = width / (num[0] / num[1]);
//       return `${width}x${height}`;
// }


// console.log(findScreenHeight(1024,"4:3"))
// console.log(findScreenHeight(1280,"16:9"))
// console.log(findScreenHeight(3840,"32:9"))


// function calculate(num1, operation, num2) {
      
//        let p = {
//             '+': num1 + num2,
//             '-': num1 - num2,
//             '*': num1 * num2,
//             '/': num1 / num2,
//        }
       
//       if (p[operation] === -Infinity || typeof p[operation] === 'undefined') return null;
//       if (p[operation] === -0) return -0 - -0;
//       return p[operation];
      
      
// }

// console.log(calculate(3.2,"+", 8))
// console.log(calculate(3.2,"-", 8))
// console.log(calculate(3.2,"/", 8))
// console.log(calculate(3.2,"*", 8))
// console.log(calculate(-3,"+", 0))
// console.log(calculate(-3,"-", 0))
// console.log(calculate(-3,"/", 0))
// console.log(calculate(-3,"*", 0))
// console.log(calculate(-3,"w", 0))

// const reverse = function(array) {
//      let reversed = [];

//      for (let i = 0; i < array.length; i++) {
//           const x = array.length - 1 - i;
//           reversed.push(array[x]);
//      }
//      return reversed;
// }

// console.log(reverse([1,2,3]))
// console.log(reverse([1,null,14,"two"]))


// function inAscOrder(arr) {
//      const array = [...arr];
//      const sortedArr = arr.sort((a, b) => a - b);
     
//      for (let i = 0; i < arr.length; i++){
//           if (array[i] !== sortedArr[i]) 
//           return false;
//      }return true;
// }


// console.log(inAscOrder([1, 2, 4, 7, 19]))
// console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))


// var websites = [];
// let add = websites.push('codewars')

// console.log(add)


// function evil(n) {
//      const evilN = {
//           3: "It's Evil!",
//           5: "It's Evil!",
//           6: "It's Evil!",
//           9: "It's Evil!",
//           10: "It's Evil!",
//           12: "It's Evil!",
//           15: "It's Evil!",
//           17: "It's Evil!",
//           18: "It's Evil!",
//           20: "It's Evil!"
//      }
//      return (evilN[n]) ? evilN[n] : "It's Odious!";
//  }


// console.log(evil(1))

// const sharePrice = (invested, changes) => {
//      let currentPrice = invested;


//      for (let i = 0; i < changes.length; i++) {
//           currentPrice *=  (1 + changes[i] / 100);
//      }

//      return currentPrice.toFixed(2);
// }


// console.log(sharePrice(100, [-50, 50]))
// console.log(sharePrice(100, [-20, 30]))
// console.log(sharePrice(1000, [0, 2, 3, 6]))
// console.log(sharePrice(1000, [0, 2, 3, 6]))
// console.log(sharePrice(100, []))


// function defineSuit(card) {
//      const lastCharacter = card[card.length -1];
//      const cards = {
//           '♣': 'clubs',
//           '♦': 'diamonds',
//           '♥': 'hearts',
//           '♠': 'spades'
//      }
//      return cards[lastCharacter];
// }

// console.log(defineSuit('3♣'))


// function sumArray(array) {
//      if (!array || array.length < 3) return 0;

//      let min = array[0];
//      let max = array[0];
//      let count = 0;

//      for (let i = 0; i < array.length; i++) {
//           if (array[i] > max) {
//                max = array[i];
//           }
//           if (array[i] < min) {
//                min = array[i];
//           }
//           count += array[i];
//      }

//      return count - (max + min);
     
//  }


// console.log(sumArray([0, 1, 6, 10, 10]))
// console.log(sumArray([]))
// console.log(sumArray(null))
// console.log(sumArray([ 3, 5 ]))
// console.log(sumArray([3]))
// console.log(sumArray([ -6, 20, -1, 10, -12 ]))
// console.log(sumArray([ -6, -20, -1, -10, -12 ]))



// function remove (string) {
//      let str = '';

//      for (let i = 0; i < string.length; i++) {
//           if (string[i] !== '!') {
//                str += string[i];
//           }
//      }
//      return str + '!';
//    }

// console.log(remove("Hi!!!"))


// function lowestTemp(t) {
//      if (t.length < 1) {
//           return null;
//      }

//      let strArr = t.split(' ');

//      let convertToNum = [];

     
//      for (let i = 0; i < strArr.length; i++) {
//           convertToNum.push(+ strArr[i]);
//      }
     
//      let min = convertToNum[0];

//      for (let i = 0; i < convertToNum.length; i++) {
//           if (convertToNum[i] < min) {
//                min = convertToNum[i];
//           }
//      }
//     return min;
// }


// console.log(lowestTemp('-1 50 -4 20 22 -7 0 10 -8'))
// console.log(lowestTemp(''))
// console.log(lowestTemp('18 27 -42 16 17 -43 36 45 -25 -24 19 -14'))


// function makeNegative(num) {
//      return (num <= 0) ? num : num - num * 2;
// }


// console.log(makeNegative(1));
// console.log(makeNegative(0.12));
// console.log(makeNegative(0));


// function shorterReverseLonger(a,b){
//      const longest = (a.length >= b.length) ? a : b;
//      const shortest = (a.length < b.length) ? a : b;
//      let reverse = '';
     
//      for (let i = 0; i < longest.length; i++) {
//           reverse = longest[i] + reverse;
//      }
//      return shortest + reverse + shortest;
// }

// console.log(shorterReverseLonger("first", "abcde"));
// console.log(shorterReverseLonger("hello", "bau"));
// console.log(shorterReverseLonger("fghi",  "abcde"));



// function nthChar(words){
//      let str = ''

//      for (let i = 0; i < words.length; i++) {
//           str += words[i][i];
//      }
//      return str;
// }


// console.log(nthChar(['yoda', 'best', 'has']));
// console.log(nthChar([]));



// function evenOrOdd(str) {
     
//      let numList = [];
//      let even = 0;
//      let odd = 0;

//      for (let i = 0; i < str.length; i++) {
//           numList.push(+ str[i]);
//      }

//      for (let i = 0; i < numList.length; i++) {
//           if (numList[i] % 2 === 0) {
//                even += numList[i];
//           }else odd += numList[i];
//      }


//      if (even > odd) {
//           return 'Even is greater than Odd';
//      }
//      else if (even < odd) { 
//           return 'Odd is greater than Even';
//      }
//      else return 'Even and Odd are the same';
// }


// console.log(evenOrOdd('12'))
// console.log(evenOrOdd('123'))
// console.log(evenOrOdd('112'))

// function sumTimesTables(tables, min, max){
//      let count = 0;
//      let result = 0;

     

//      for (let i = min; i <= max; i++) {
//           count += i;
//      }
     
//      for (let i = 0; i < tables.length; i++) {
//           result += tables[i] * count;
//      }
//      return Math.round(result);
// }


// console.log(sumTimesTables([2, 3], 1, 3))
// console.log(sumTimesTables([1,3,5],1,1))
// console.log(sumTimesTables([1,3,5],1,10))
// console.log(sumTimesTables([50, 90],1,100000))

// function ensureQuestion(s) {
//      return (s[s.length -1] === '?') ? s : s + '?';
// }

// console.log(ensureQuestion(""))
// console.log(ensureQuestion("Yes"))
// console.log(ensureQuestion("No?"))


// function stringClean(s){
//      let cleanStr = '';

//      for (let i = 0; i < s.length; i++) {
//           if (!(s[i] >= '0' && s[i] <= '9')) {
//                cleanStr += s[i];
//           }
//      }
//      return cleanStr;
// }

// console.log(stringClean('E3at m2e2!!'))

// function closeCompare(a, b, margin){
//      let count = Math.ceil(margin > 0) ? a - (b - margin): a - b;

     
//      return count;
// }

// console.log(closeCompare(4, 5))
// console.log(closeCompare(5, 5))
// console.log(closeCompare(6, 5))
// console.log(closeCompare(-6, -5))
// console.log(closeCompare(2, 5, 3))
// console.log(closeCompare(8.1, 5, 3))
// console.log(closeCompare(1.99, 5, 3))


// function datingRange(age){
//      const min = (age <= 14) ? age - 0.10 * age : age / 2 + 7;
//      const max = (age <= 14) ? age + 0.10 * age : (age - 7) * 2;
     

//      return `${Math.floor(min)}-${Math.floor(max)}`;
// }


// console.log(datingRange(17))
// console.log(datingRange(10))


// function lowercaseCount(str){
//      let lowerCase = '';

//      for (let i = 0; i < str.length; i++) {
//           if (str[i] >= 'a' && str[i] <= 'z') {
//                lowerCase += str[i]
//           }
//      }
//      return lowerCase.length;
//  }

// console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))

// function excludingVatPrice(price){
//      const str = '' + price;
//      if (isNaN(str)) {
//           return -1;
//      }
     

//      const vat = 15;
//      const coof = 1 + vat / 100;
//      const result =  (price / coof);
//      return + result.toFixed(2);
     
// }


// console.log(excludingVatPrice(230))
// console.log(excludingVatPrice(123))
// console.log(excludingVatPrice(0))
// console.log(excludingVatPrice())




// function gimmeTheLetters(sp) {
//      const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//      let str = '';

//      for (let i = 0; i < letters.length; i++) {
//           if (letters[i] >= sp[0] && letters[i] <= sp[2]) {
//                str += letters[i];
//           }
//      }
//      return str;
// }


// console.log(gimmeTheLetters('g-i'))


// function highAndLow(numbers){

//      let strNum = numbers.split(' ');
//      let numArr = [];
     
//      for (let i = 0; i < strNum.length; i++) {
//           numArr.push(+ strNum[i]);
//      }
     
//      let min = numArr[0];
//      let max = numArr[0];

//      for (let i = 0; i < numArr.length; i++) {
//           if (numArr[i] < min) {
//                min = numArr[i];
//           } 
//           if (numArr[i] > max) {
//                max = numArr[i];
//           }
//      }

//      return `${max} ${min}`;


// }


// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))


// function squareDigits(num){
//      let count = '';
//      let numToStr = '' + num;
//      let numArr =  numToStr.split('');
     
     
//      for (let i = 0; i < numArr.length; i++) {
//           count += ((+ numArr[i]) * (+ numArr[i]));
//      }
//      return + count;
// }

// console.log(squareDigits(3212))
// console.log(squareDigits(2112))


// function filter_list(l) {

//      let onlyNum = [];

//      for (let i = 0; i < l.length; i++) {
//           if (l[i] >= 0 && l[i] <= Infinity && typeof l[i] !== 'string') {
//                onlyNum.push(l[i]);
//           }
//      }
//      return onlyNum;
// }

// console.log(filter_list([1,2,'a','b']))
// console.log(filter_list([1,'a','b',0,15]))
// console.log(filter_list([1,2,'aasf','1','123',123]))


// function descendingOrder(n){

//      const numToStr = '' + n;
//      let numList = [];

//      for (let i = 0; i < numToStr.length; i++) {
//           if (numToStr[i] >= '0') {
//                numList.push(+ numToStr[i]);
//           }
//      }

//      const sorted = numList.sort((a, b) => b - a);
//      const highest = sorted.join('');

//      return + highest;
// }

// console.log(descendingOrder(1021))


// function solution(str, ending){
//     const start = str.length - ending.length;
//     let strList = '';

//     for (let i = start; i < str.length; i++) {
//         strList += str[i];
//     }
//     return strList === ending;
// }

// console.log(solution('abcde', 'cde'))
// console.log(solution('abcde', 'abc'))


// function isIsogram(str){

//     const lowerCase = str.toLowerCase();
//     let obj = {};
//     let count = 0;
    
//     for (let i = 0; i < lowerCase.length; i++) {
//         if (!obj[lowerCase[i]]) {
//             obj[lowerCase[i]] = 1;
//         }else obj[lowerCase[i]] += 1;
//     }
    
//     for (let key in obj) {
//         if (obj[key] > 1) {
//             count++
//         }    
//     }
//     return count <= 0;
// }

// console.log(isIsogram("moOse"))
// console.log(isIsogram("Dermatoglyphics"))

// function getSum(a, b){
   
//     const swap =  (b < a) ? [a, b] = [b, a] : [a, b] = [a, b];

//     let count = 0;

//     for (let i = swap[0]; i <= swap[1]; i++) {
//         count += i;
//     }
//     return count;
// }

// console.log(getSum(-1, 2))
// console.log(getSum(0, -1))
// console.log(getSum(0, 1))
// console.log(getSum(1, 1))


// function oddOrEven(array) {
    
//     let count = 0;

//     for (let i = 0; i < array.length; i++) {
//         count += array[i];
//     }
//     return (count % 2 === 0) ? 'even' : 'odd';
// }

// console.log(oddOrEven([0, -1, -5]))


// function whatListAmIOn(actions){
//     let str = '';

//     let obj = {
//         'g': 'nice',
//         's': 'nice',
//         'n': 'nice',
//         'b': 'naughty',
//         'f': 'naughty',
//         'k': 'naughty'

//     }

//     let naughty = 0;
//     let nice = 0;

//     for (let i = 0; i < actions.length; i++) {
//         str += actions[i][0][0];
//     }

//     for (let i = 0; i < str.length; i++) {
//         if (obj[str[i]] === 'naughty') naughty++;
//         if (obj[str[i]] === 'nice') nice++;
//     }


    
//     if (naughty < 1 && nice < 1) return 'naughty'
//     if (naughty === nice) return 'naughty';
//     if (nice > naughty ) return 'nice';
//     if (naughty > nice ) return 'naughty';
   
   
// }

// console.log(whatListAmIOn(['answered an issue on CW repo']))
// console.log(whatListAmIOn(["tied someone's shoes", "updated profile", "yawned"]))
// console.log(whatListAmIOn(['pet a cat', 'pet a cat']))
// console.log(whatListAmIOn(['yawned', 'replied to a user', 'answered an issue on CW repo']))
// console.log(whatListAmIOn(["saved a man from drowning", "fought over a toaster", "new kata submitted", "being arrogant on CodeWars", "tied someone's shoes", "pet a cat", "finished a kata cheating", "never got into a fight", "answered an issue on CW repo", "tied someone's shoes", "broke someone's window", "finished a kata cheating"]))



// function getMiddle(s) {
//     if (s.length < 2) {
//          return s;
//     }

//     const start = Math.round((s.length / 2) - 1);
//     const middle = s.slice(start, -start);

//     return middle;
// }


// console.log(getMiddle("test"))
// console.log(getMiddle("testing"))
// console.log(getMiddle("middle"))
// console.log(getMiddle("A"))


// function findShort(s){
//     let strArr = s.split(' ');
    
//     let numArr = [];

//     for (let i = 0; i < strArr.length; i++) {
//         numArr.push(strArr[i].length);
//     }
    
//     let min = numArr[0];

//     for (let i = 0; i < numArr.length; i++) {
//         if (numArr[i] < min) {
//             min = numArr[i];
//         }
//     }
//     return min;
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))


// function sumTwoSmallestNumbers(numbers) {  
//     let sorted = numbers.sort((a,b) => a - b);

//     return sorted[0] + sorted[1];
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))


// function multiple(x) {
//     if (x % 3 === 0 && x % 5 === 0) {
//         return "BangBoom";
//     }
//     if (x % 3 === 0) {
//         return "Bang";
//     }
//     if (x % 5 === 0) {
//         return "Boom";
//     }
//     return "Miss";
// }

// console.log(multiple(30))
// console.log(multiple(3))
// console.log(multiple(98))
// console.log(multiple(65))
// console.log(multiple(23))
// console.log(multiple(15))



// function maskify(cc) {

// const lastFour = cc.slice(-4);
// const first = cc.slice(0, -4);

// let hidden = '';

// for (let i = 0; i < first.length; i++) {
//     hidden += '#';
// }
// return hidden + lastFour;
// }


// console.log(maskify('4556364607935616'))
// console.log(maskify('1'))
// console.log(maskify('11111'))


// function validatePIN (pin) {
    
//     let num = '';

//     for (let i = 0; i < pin.length; i++) {
//         if (pin[i] >= '0' && pin[i] <= '9') {
//             num += pin[i]
//         }
//     }
    
//    let onlyNum = (num.length === pin.length) ? num.length : 3;

//    return (onlyNum === 4 || onlyNum === 6);

   
// }

// console.log(validatePIN("-1.234"))
// console.log(validatePIN("0000"))
// console.log(validatePIN("0"))
// console.log(validatePIN("123456x"))


// function longest(s1, s2) {
//     const connect = s1 + s2;

//     let arr = [];

//     for (let i = 0; i < connect.length; i++) {
//         if (!arr.includes(connect[i])) {
//             arr.push(connect[i]);
//         } 
//     }
//     const sorted = arr.sort().join('');

//     return sorted;

    
// }

// console.log(longest("aretheyhere", "yestheyarehere"))
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))

// function minMax(arr){
//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return [min, max];
// }

// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([5]));
// console.log(minMax([2334454, 5]));


// function solution(nums){
//     if (nums === null) {
//         return [];
//     }
//     const sorted = nums.sort((a, b) => a - b);
//     return sorted;


// }

// console.log(solution([1,2,3,10,5]))
// console.log(solution([20, 2, 10]))
// console.log(solution([]))
// console.log(solution(null))


// function removeSmallest(numbers) {
//     let arrCopy = [...numbers]
//     let min = numbers[0];
    
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < min) {
//             min = numbers[i];
//         }
//     }
    
//     const target = arrCopy.indexOf(min);
//     arrCopy.splice(target, 1);
//     return arrCopy;
    
// }


// console.log(removeSmallest([1, 2, 3, 4, 5]))
// console.log(removeSmallest([5, 3, 2, 1, 4]))
// console.log(removeSmallest([2, 2, 1, 2, 1]))


// function gimme (triplet) {
//     let min = triplet[0];
//     let max = triplet[0];
//     let result = 0;

//     for (let i = 0; i < triplet.length; i++) {
//         if (triplet[i] < min) {
//             min = triplet[i];
//         }
//         if (triplet[i] > max) {
//             max = triplet[i];
//         }
//     }
    
//     for (let i = 0; i < triplet.length; i++) {
//         if (triplet[i] > min && triplet[i] < max) {
//             result += i;
//         }

//     }
//     return result;
// }

// console.log(gimme([2, 3, 1]))
// console.log(gimme([5, 10, 14]))
// console.log(gimme([-2, -3, -1]))
// console.log(gimme([5.9, 10.4, 14.2]))
// console.log(gimme([-5.2, -10.6, 14]))

// function inviteMoreWomen(L) {
//     let men = [];
//     let women = [];


//     for (let i = 0; i < L.length; i++) {
//         if (L[i] > 0) {
//             men.push(L[i]);
//         }else women.push(L[i]);
//     }
//     return men.length > women.length;
    
// }

// console.log(inviteMoreWomen([1, -1, 1]));
// console.log(inviteMoreWomen([1, 1, 1]));
// console.log(inviteMoreWomen([-1, -1, -1]));
// console.log(inviteMoreWomen([1, -1]));


// function stray(numbers) {
//     let min = numbers[0];
//     let max = numbers[0];
//     let countMin = 0;
//     let countMax = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < min) {
//             min = numbers[i];
//         }
//         if (numbers[i] > max) {
//             max = numbers[i];
//         }
//     }

//     for ( let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === min) {
//             countMin++
//         }else countMax++
//     }
//     return (countMax < 2) ? max : min;
// }


// console.log(stray([17, 17, 3, 17, 17, 17, 17]))
// console.log(stray([1, 1, 2]))


// var number=function(array){
    
//     let numberedItems = [];

//     for (let i = 0; i < array.length; i++) {
//         numberedItems.push(`${i + 1}: ${array[i]}`)
//     }
//     return numberedItems;
// }

// console.log(number(["a", "b", "c"]))

// function arithmetic(a, b, operator){
//     const operators = {
//         "add" : a + b,
//         "subtract": a - b,
//         "multiply": a * b,
//         "divide": a / b
//     }
//     return operators[operator];
// }


// console.log(arithmetic(1, 2, "add"))
// console.log(arithmetic(8, 2, "subtract"))
// console.log(arithmetic(5, 2, "multiply"))
// console.log(arithmetic(8, 2, "divide"))

// const sequenceSum = (begin, end, step) => {
//     let result = 0;

//     for (let i = begin; i <= end; i += step) {
//         result += i;
//     }
//     return result;
// };


// console.log(sequenceSum(2, 6, 2))
// console.log(sequenceSum(1, 5, 1))
// console.log(sequenceSum(1, 5, 3))


// function openOrSenior(data){
    
//     let  members = [];
//     for (let i = 0; i < data.length; i++) {
//         if (data[i][0] > 54 && data[i][1] > 7) {
//              members.push('Senior');
//         } else  members.push('Open');
//     }
//     return  members;
// }

// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
// console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))
// console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))



// function breakChocolate(n,m) {
//     let result = n * m - 1;
//     return (result < 0) ? result - result : result;
// }

// console.log(breakChocolate(5, 5))
// console.log(breakChocolate(2, 1))
// console.log(breakChocolate(0, 0))


// function removeUrlAnchor(url){
//     let index = 0;
//     let correctUrl = '';
    
//     for (let i = 0; i < url.length; i++) {
//         if (url[i] === '#') {
//             index += i;
//         }
//     }

//     const urlLength = index === 0 ? url.length : index;

//     for (let i = 0; i < urlLength; i++) {
//         correctUrl += url[i];
//     }
//     return correctUrl;
// }


// console.log(removeUrlAnchor('www.codewars.com#about'))
// console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))
// console.log(removeUrlAnchor('www.codewars.com/katas/'))


// function dontGiveMeFive(start, end) {
//     let strNumArr = [];
//     let splitedNumArr = [];
    
//     for (let i = start; i <= end; i++) {
//         strNumArr.push('' + i);
//     }
//     for (let i = 0; i < strNumArr.length; i++) {
//         splitedNumArr.push(strNumArr[i].split(''));
//     }
    
//     let fiveArr = [];
//     for (let i = 0; i < splitedNumArr.length; i++) {
//         for (let j = 0; j < splitedNumArr[i].length; j++)
//         if (splitedNumArr[i][j] === '5') {
//             fiveArr.push(+ splitedNumArr[i].join(''));
//         }
//     }
    
//     let countNotIncludes = [];
//     for (let i = 0; i < fiveArr.length; i++) {
//         if (!countNotIncludes.includes(fiveArr[i])) {
//             countNotIncludes.push(fiveArr[i]);
//         }
//     }
//     return strNumArr.length - countNotIncludes.length;
// }

// // console.log(dontGiveMeFive(1, 9))
// // console.log(dontGiveMeFive(4, 17))
// console.log(dontGiveMeFive(1, 10000))


// function factorial(n) {
    
//     if (n < 0 || n > 12) {
//         throw new Error('RangeError');
//     }

//     let count = 1;

//     for (let i = 1; i <= n; i++) {
//         count *= i;
//     }
//     return count;
// }

// console.log(factorial(13))


// function twoOldestAges(ages){

//     const sorted = ages.sort((a,b) => b - a);

//     return [sorted[1], sorted[0]];
// }

// console.log(twoOldestAges([1,5,87,45,8,8]))


// var capitals = function (word) {
	
//     let upperCaseIndex = [];

//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === word[i].toUpperCase()) {
//             upperCaseIndex.push(i);
//         }
//     }
//     return upperCaseIndex;
// };


// console.log(capitals('CodEWaRs'))


// function smallEnough(a, limit){
//     let count = 0;

//     for (let i = 0; i < a.length; i++) {
//         if (a[i] <= limit) {
//             count++;
//         }
//     }
//     return count === a.length;
// }

// console.log(smallEnough([66, 101], 200))
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))


// function reverseLetter(str) {
//     let lettersReversed = '';

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= 'a' && str[i] <= 'z') {
//             lettersReversed = str[i] + lettersReversed;
//         }
//     }
    
//     return lettersReversed;
// }

// console.log(reverseLetter("krishan"))
// console.log(reverseLetter("ultr53o?n"))

// function maxMultiple(divisor, bound){
//     let numbersThatDivide = [];
    
//     for (let i = 0; i <= bound; i++) {
//         if (i % divisor === 0) {
//             numbersThatDivide.push(i)
//         }
//     }
    
//     let max = numbersThatDivide[0];

//     for (let i = 0; i < numbersThatDivide.length; i++) {
//         if (numbersThatDivide[i] > max) {
//             max = numbersThatDivide[i];
//         }
//     }
//     return max;
// }


// console.log(maxMultiple(2,7));
// console.log(maxMultiple(3,10));
// console.log(maxMultiple(7,17));
// console.log(maxMultiple(10,50));
// console.log(maxMultiple(37,200));
// console.log(maxMultiple(7,100));


// function divisors(integer) {
  
//     let numArr = [];

//     for (let i = 2; i < integer; i++) {
//         if (integer % i === 0) {
//             numArr.push(i)
//         }
//     }
//     return (numArr.length === 0) ? `${integer} is prime` : numArr;
// };


// console.log(divisors(15))
// console.log(divisors(12))
// console.log(divisors(13))


// function capitalize(s){

//     const str = (s.length % 2 === 0) ? s : s + '_';

//     let firstLettersUp = '';
//     let secondLettersUp = '';

//     for (let i = 0; i < str.length; i++) {
//          firstLettersUp += str[i].toUpperCase() + str[++i];
//     }

//     for (let i = 0; i < str.length; i++) {
//         secondLettersUp += str[i] + str[++i].toUpperCase();
//     }
    
//     const first = (firstLettersUp.length === s.length) ? firstLettersUp : firstLettersUp.slice(0, -1);
//     const second = (secondLettersUp.length === s.length) ? secondLettersUp : secondLettersUp.slice(0, -1);

//     return [first, second];
    
// };


// console.log(capitalize("abcdef"))
// console.log(capitalize("abracadabra"))


// function noOdds( values ){
    
//     let numArr = [];

//     for (let i = 0; i < values.length; i++) {
//         if (values[i] % 2 === 0) {
//             numArr.push(values[i]);
//         }
//     }
//     return numArr;
// }

// console.log(noOdds([0,1]))
// console.log(noOdds([0,1,2,3]))


// function solve(s){
    
// let countUpperCase = 0;
// let countLowerCase = 0;

// for (let i = 0; i < s.length; i++) {
//     if (s[i] === s[i].toUpperCase()) {
//         countUpperCase++
//     } else countLowerCase++
// }

// const result = (countLowerCase >= countUpperCase) ? s.toLowerCase() : s.toUpperCase();

// return result;

// }


// console.log(solve("CODe"))
// console.log(solve("COde"))


// function checkExam(array1, array2) {
   
//     let correctAnswers = 0;
//     let incorrectAnswer = 0;


//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] === array2[i]) {
//             correctAnswers += 4;
//         }else incorrectAnswer += 1;

//         if (array2[i] === '') {
//             correctAnswers += 1;
//         }
//     }
//     const score = correctAnswers - incorrectAnswer;

//     return (score < 0) ? 0 : score;

// }


// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
// console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))


// function flattenAndSort(array) {
    
//     let numArr = [];

//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             numArr.push(array[i][j]);
//         }
//     }
    
//     const sorted = numArr.sort((a, b) => a - b);
//     return sorted;
// }


// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));
// console.log(flattenAndSort([[], []]));
// console.log(flattenAndSort([[], [1]]));


// function getEvenNumbers(numbersArray){
//    let numArr = [];


//    for (let i = 0; i < numbersArray.length; i++) {
//         if (numbersArray[i] % 2 === 0) {
//             numArr.push(numbersArray[i]);
//         }
//    }
//    return numArr;
// }


// console.log(getEvenNumbers([1,2,3,6,8,10]));


// function minValue(values){

//     const sorted = values.sort((a, b) => a - b);
    
//     let numStr = '' ;

//     for (let i = 0; i < sorted.length; i++) {
//         if (!numStr.includes(sorted[i])) {
//             numStr += ('' + sorted[i]);
//         }
//     }
//     return + numStr;
// }


// console.log(minValue([4, 7, 5, 7]))


// function fizzbuzz(n) {

//     let list = [];

//     for (let i = 1; i <= n; i++) {

//         if (i % 3 === 0 && i % 5 === 0) {
//             list.push('FizzBuzz');
//         }
        
//         else if (i % 3 === 0) {
//             list.push('Fizz');
//         }
        
//         else if  (i % 5 === 0) {
//             list.push('Buzz');
//         }
        
//         else  list.push(i)
//     }
//     return list;
// }

// console.log(fizzbuzz(10))


// function factorial(n){
   
//     let count = 1;

//     for (let i = 1; i <= n; i++) {
//         count *= i;
//     }
//     return count;
// }


// console.log(factorial(0))


// function rowWeights(array){
//     let team1 = 0;
//     let team2 = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (i % 2 === 0) {
//             team1 += array[i];
//         }else team2 += array[i];
//     }

//     return [team1, team2];
// }


// console.log(rowWeights([50,60,70,80]))


// var greet = function(name) {

//     const correctName = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() + '!';

//     return 'Hello' + ' ' + correctName;
// };


// console.log(greet('riley'))


// function removeDuplicateWords (s) {
    
//     const wordsArr = s.split(' ');

//     let noDuplicates = [];


//     for (let i = 0; i < wordsArr.length; i++) {
//         if (!noDuplicates.includes(wordsArr[i])) {
//             noDuplicates.push(wordsArr[i]);
//         }
//     }
//     return noDuplicates.join(' ');
// }


// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));


// function isSortedAndHow(array) {
//     const original = [...array];

//     const copyAscending = [...array];
    
//     const copyDescending = [...array];

//     const ascending = copyAscending.sort((a, b) => a - b);

//     const descending = copyDescending.sort((a, b) => b - a);

//     let countA = 0;

//     let countD = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === ascending[i]) {
//             countA++
//         }
//         if (array[i] === descending[i]) {
//             countD++
//         }
//     }

//     if (original.length === countA) {
//         return 'yes, ascending';
//     }
//     if (original.length === countD) {
//         return 'yes, descending';
//     }
//     return 'no';
    

// }


// console.log(isSortedAndHow([1, 2]))
// console.log(isSortedAndHow([15, 7, 3, -8]))
// console.log(isSortedAndHow([4, 2, 30]))


// var splitInParts = function(s, partLength){
    
//     let splitStr = '';

//     for (let i = 0; i < s.length; i++) {
//         if ((i + 1) % (partLength) === 0) {
//             splitStr += s[i] + ' ';
//         }else splitStr += s[i];
//     }

//     const result = (splitStr[splitStr.length -1] === ' ') ? splitStr.slice(0, -1) : splitStr;

//     return result;
// }


// console.log(splitInParts('supercalifragilisticexpialidocious', 3))
// console.log(splitInParts("HelloKata", 1))


// function bump(x){

//     let countBumps = 0;

//     for (let i = 0; i < x.length; i++) {
//         if (x[i] === 'n') {
//             countBumps++
//         }
//     }
//     return (countBumps <= 15) ? 'Woohoo!' : 'Car Dead';
// }


// console.log(bump("__nn_nnnn__n_n___n____nn__nnn"))
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"))

// function triangular( n ) {

//     if (n < 0) {
//         return 0;
//     }

//     let count = 0;

//     for (let i = 0; i <= n; i++) {
//         count += i;
//     }
    
//     return count;
// }

// console.log(triangular(95350998))



// function sortGiftCode(code){

//     const strArr = code.split('');

//     const sorted = strArr.sort();

//     return sorted.join('');
// }

// console.log(sortGiftCode('pqksuvy'))



// function angle(n) {
//     return (n - 2) * 180;
// }


// console.log(angle(4))


// function sumCubes(n){
    
//     let count = 0;

//     for (let i = 1; i <= n; i++) {
//         count += (i ** 3)
//     }
//     return count;
// }


// console.log(sumCubes(2))


// function wordsToMarks(string){
    
//     const alphabet = {
//         a: 1,
//         b: 2,
//         c: 3,
//         d: 4,
//         e: 5,
//         f: 6,
//         g: 7,
//         h: 8,
//         i: 9,
//         j: 10,
//         k: 11,
//         l: 12,
//         m: 13,
//         n: 14,
//         o: 15,
//         p: 16,
//         q: 17,
//         r: 18,
//         s: 19,
//         t: 20,
//         u: 21,
//         v: 22,
//         w: 23,
//         x: 24,
//         y: 25,
//         z: 26,
//     }

//     let count = 0;

//     for (let i = 0; i < string.length; i++) {
//         if (alphabet[string[i]]) {
//             count += alphabet[string[i]];
//         }
//     }
//     return count;
// }


// console.log(wordsToMarks('attitude'))


// function explode(s) {
//     let str = '';

//     for (let i = 0; i < s.length; i++) {
//         str += s[i].repeat(+ s[i]);
//     }
//     return str;
// }


// console.log(explode("312"))


// function largestPairSum (numbers) {
    
//     const sorted = numbers.sort((a, b) => b - a);

//     return sorted[0] + sorted[1];
// }


// console.log(largestPairSum([10,14,2,23,19]))
// console.log(largestPairSum([-100,-29,-24,-19,19]))


// function generateShape(integer){

// let str = '';

// for (let i = 0; i < integer; i++) {
//     for (let j = 0; j < integer; j++) {
//         str += '+';
//     } 
//     str += '\n';
// }
// return str.slice(0, -1);
// }

// console.log(generateShape(3))



// function evenNumbers(array, number) {
    
//     let even = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             even.push(array[i])
//         }
//     }
//     let start = even.length - number;
    
//     return even.slice(start);
// }


// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
// console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
// console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))



// var filterString = function(value) {

//     let str = '';

//     for (let i = 0; i < value.length; i++) {
//         if (value[i] >= '0' && value[i] <= '9') {
//             str += value[i];
//         }
//     }
//     return + str;
// }

// console.log(filterString("a1b2c3"))


// function alphabetWar(fight) {
    
//     const lettersLeft = {
//         'w': 4,
//         'p': 3,
//         'b': 2,
//         's': 1,
//     }
   
//     const letersRight = {
//         'm': 4,
//         'q': 3,
//         'd': 2,
//         'z': 1,
//     }

//     let countLeftSide = 0;
//     let countRightSide = 0;

//     for (let i = 0; i < fight.length; i++) {
//         if (lettersLeft[fight[i]]) {
//             countLeftSide += lettersLeft[fight[i]];
//         }
//         if (letersRight[fight[i]]) {
//             countRightSide += letersRight[fight[i]];
//         }
//     }


//     if (countLeftSide > countRightSide) {
//         return 'Left side wins!';
//     }
//     if (countRightSide > countLeftSide) {
//         return 'Right side wins!';
//     }
//     return "Let's fight again!";
// }


// console.log(alphabetWar("zapmwht"))


// function mygcd(x,y){
    
//     const max = x > y ? x : y;

//     let list = [];

//     for (let i = 0; i <= max; i++) {
//         if (x % i === 0 && y % i === 0) {
//             list.push(i)
//         }
//     }
//     return list[list.length -1];
// }

// console.log(mygcd(30, 12))
// console.log(mygcd(36, 12))
// console.log(mygcd(8, 9))
// console.log(mygcd(1, 1))
// console.log(mygcd(57948951566544, 53451783652248))


// var isSquare = function(n){

//     let numArr = [];

    
//     for (let i = 0; i <= n; i++) {
//         if (n % i === 0) {
//             numArr.push(i)
//         }
//     }
    
//     let result = 0;

//     for (let i = 0; i < numArr.length; i++) {
//         if ((numArr[i] * numArr[i]) === n)
//             result += numArr[i];
//         else result += -1
//     }
//     return result > -1;
// }


// console.log(isSquare(26))
// console.log(isSquare(25))
// console.log(isSquare(3))
// console.log(isSquare(0))



// function cookingTime(eggs) {

//     const fiveMin = 5;

//     let times = 0;


//     for (let i = 0; i < eggs; i+=8) {
//         times++;
//     }
//     return fiveMin * times;
// }

// console.log(cookingTime(17))


// function myLanguages(results) {

//     let languages = [];

//     for (let key in results) {
//         if (results[key] >= 60) {
//             languages.push([key, results[key]]);
//         }
//     }
   
//     languages.sort(function(a, b) {
//         let  sorted =  b[1] - a[1];
//         return sorted;

//     }) 

//     let result = [];

//     for (let i = 0; i < languages.length; i++) {
//         result.push(languages[i][0]);
//     }
//     return result;
// }


// console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}))
// console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}))


// function halvingSum(n) {
//     if (n === 1) {
//         return 1;
//     }

//     let result = 0;
    
//     for (let i = n; i > 1; i /= 2 ) {
//         result += Math.floor(i);
//     }
//     return result;
// }


// console.log(halvingSum(1620))
// console.log(halvingSum(1))

// function sum (numbers) {
    
//     let result = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }
    
//     return result;
// };

// console.log(sum([1, 5.2, 4, 0, -1]))
// console.log(sum([]))


// function sortMyString(S) {

//     let oddStr = '';
//     let evenStr = '';

//     for (let i = 0; i < S.length; i++) {
//         if (i % 2 === 0) {
//             oddStr += S[i];
//         } else evenStr += S[i];
//     }
//     return oddStr + ' ' + evenStr;
// }

// console.log(sortMyString('CodeWars'))
// console.log(sortMyString("YCOLUE'VREER"))


// function countRedBeads(n) {
    
//     let count = 0;

//     for (let i = 1; i < n; i++) {
//         if (n > 1) {
//             count += 2;
//         }else count += 0;
//     }
//     return count;
// }

// console.log(countRedBeads(4))


// function minSum(arr) {

//     const sorted = arr.sort((a,b) => b - a);

//     const halfList = sorted.length / 2;

//     const min = sorted.slice(halfList).sort((a,b) => a - b);
//     const max = sorted.slice(0, halfList);


//     let result = 0;

//     for (let i = 0; i < min.length; i++) {
//         result += min[i] * max[i];
//     }
        
       
    
//     return result;
// }


// console.log(minSum([5, 4, 2, 3]))
// console.log(minSum([12,6,10,26,3,24]))



// function maxTriSum(numbers){

//     let noDuplicates = [];
    
//     for (let i = 0; i < numbers.length; i++) {
//         if (!noDuplicates.includes(numbers[i])) {
//             noDuplicates.push(numbers[i]);
//         }
//     }
    
//     const sorted = noDuplicates.sort((a, b) => b - a);

//     const tripletArr = sorted.slice(0, 3);

//     let sum = 0;

//     for (let i = 0; i < tripletArr.length; i++) {
//         sum += tripletArr[i];
//     }

//     return sum;
// }


// console.log(maxTriSum([3,2,6,8,2,3]))
// console.log(maxTriSum([2,9,13,10,5,2,9,5]))
// console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]))



// function partlist(arr) {
    
//     let list = [];

//     for (let i = 1; i < arr.length; i++) {
//         list.push([`${arr.slice(0, i).join(' ')}`, `${arr.slice(i).join(' ')}`]);
//     }
//     return list;
// }


// console.log(partlist(["I", "wish", "I", "hadn't", "come"]));



// function findLongest(array){
    
//     let numLength = [];

//     for (let i = 0; i < array.length; i++) {
//         numLength.push(('' + array[i]).length);
//     }
    
//     let max = numLength[0];
//     let index = 0;

//     for (let i = 0; i < numLength.length; i++) {
//         if (numLength[i] > max) {
//             max = numLength[i];
//             index = i;
//         }
//     }
//     return array[index];
// }

// console.log(findLongest([1, 10, 100]))
// console.log(findLongest([9000, 8, 800]))
// console.log(findLongest([8, 900, 500]))


// function invert(array) {
    
//     let numArr = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > 0) {
//         numArr.push(array[i] - (array[i] * 2));
//         } else numArr.push(array[i] - (array[i] * 2));
//     }

//     return numArr;
// }


// console.log(invert([1,2,3,4,5]))
// console.log(invert([1,-2,3,-4,5]))


// function digitize(n) {
    
//     let numToStr = ('' + n).split('');


//     let numArr = [];

//     for (let i = 0; i < numToStr.length; i++) {
//         numArr.push( + numToStr[i])
//     }

//     return numArr;
// }

// console.log(digitize(123))


// function divCon(x){

//     let strNum = 0;

//     let num = 0;

//     for (let i = 0; i < x.length; i++) {
//         if (typeof x[i] === 'string') {
//             strNum += (+ x[i]);
//         } else num += x[i];
//     }
//     const result = (num > strNum) ? num - strNum : strNum - num;

//     return result;

// }

// console.log(divCon([9, 3, '7', '3']))
// console.log(divCon([2,"7","6","6","6","3",3,4,"3",7,"6",6,"6",5,5,"8","7","1",2,6,"5","7",6,"4","7"]))


// function toCsvText(array) {
    
//     let str = '';

//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             str += ('' + array[i][j]) + ',';
//         }
//         str = str.slice(0, -1);
//         str += '\n';
//     }
//     return str.slice(0, -1);
// }


// console.log(toCsvText([
//     [ 0, 1, 2, 3, 45 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]
//    ]))


// function likes(names) {
    
//     if (names.length < 1) {
//         return 'no one likes this';
//     }

//     if (names.length < 2) {
//         return `${names[0]} likes this`;
//     }

//     if (names.length < 3) {
//         return `${names[0]} and ${names[1]} likes this`;
//     }

//     if (names.length < 4) {
//         return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
//     }

//     if (names.length >= 4) {
//         return `${names[0]}, ${names[1]} and ${names.length -2} others likes this`;
//     }

    

// }


// console.log(likes([]));
// console.log(likes(['Peter']));
// console.log(likes(['Jacob', 'Alex']));
// console.log(likes(['Max', 'John', 'Mark']));
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));


// function findOdd(a) {
    
//     let obj = {};

//     for (let i = 0; i < a.length; i++) {
//         if (!obj[a[i]]) {
//             obj[a[i]] = 1;
//         }else obj[a[i]] += 1
//     }
    
//     let result = 0;

//     for (let key in obj) {
//         if (obj[key] % 2 !== 0) {
//             result += (+ key);
//         }
//     }
//     return result;
// }

// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
// console.log(findOdd([0,1,0,1,0]))
// console.log(findOdd([1,1,2]))
// console.log(findOdd([0]))
// console.log(findOdd([7]))
// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))


// function spinWords(string){
    
//     const strArr = string.split(' ');
    
//     let str = '';

//     for (let i = 0; i < strArr.length; i++) {
//         if (strArr[i].length > 4) {
//             str += strArr[i].split('').reverse().join('') + ' ';
//         } else str += strArr[i] + ' ';
//     }
    
//     return str.slice(0, -1);
    
// }


// console.log(spinWords("Hey fellow warriors"))


// function duplicateCount(text){

//     let textToLowerCase = text.toLowerCase();
    
//     let obj = {};

//     for (let i = 0; i < textToLowerCase.length; i++) {
//         if (!obj[textToLowerCase[i]]) {
//             obj[textToLowerCase[i]] = 1;
//         }else obj[textToLowerCase[i]] += 1;
//     }

//     let  moreThanOnce = 0;

//     for (let key in obj) {
//         if (obj[key] > 1) {
//             moreThanOnce++;
//         }
//     }

//     return moreThanOnce;
// }

// console.log(duplicateCount("aabBcde"))
// console.log(duplicateCount("abcde"))
// console.log(duplicateCount("Indivisibility"))
// console.log(duplicateCount("Indivisibilities"))



// function findOutlier(integers){
    
//     let odd = [];
//     let even = [];

//     for (let i = 0; i < integers.length; i++) {
//         if (integers[i] % 2 === 0) {
//             even.push(integers[i]);
//         }else odd.push(integers[i]);
//     }
    
//     const result = (odd.length < even.length) ? odd[0] : even[0];

//     return result;
//   }


// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
// console.log(findOutlier([1,1,0,1,1]))



// function alphabetPosition(text) {
    
//     const textToLowerCase = text.toLowerCase();

//     const alphabet = {
//                 a: 1,
//                 b: 2,
//                 c: 3,
//                 d: 4,
//                 e: 5,
//                 f: 6,
//                 g: 7,
//                 h: 8,
//                 i: 9,
//                 j: 10,
//                 k: 11,
//                 l: 12,
//                 m: 13,
//                 n: 14,
//                 o: 15,
//                 p: 16,
//                 q: 17,
//                 r: 18,
//                 s: 19,
//                 t: 20,
//                 u: 21,
//                 v: 22,
//                 w: 23,
//                 x: 24,
//                 y: 25,
//                 z: 26,
//             }

//     let alphabetPosition = '';

//     for (let i = 0; i < textToLowerCase.length; i++) {
//         if (alphabet[textToLowerCase[i]]) {
//             alphabetPosition += ('' + alphabet[textToLowerCase[i]]) + ' ';
//         }
//     }
//     return alphabetPosition.slice(0, -1);
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))



// function narcissistic(value) {
    
//     const numArr = ('' + value).split('');
    
//     let count = 0;

//     for (let i = 0; i < numArr.length; i++) {
//         count += (+ numArr[i]) ** numArr.length;
//     }

//     return count === value;

// }
  

// console.log(narcissistic(153))
// console.log(narcissistic(7))
// console.log(narcissistic(1652))


// function solution(number){

//     if (number < 1) {
//         return 0;
//     }

//     const numArr = [];

//     for (let i = 1; i < number; i++) {
//         if (i % 3 === 0 || i % 5 === 0 && !numArr.includes(i)) {
//             numArr.push(i);
//         }
//     }
    
//     let sum = 0;

//     for (let i = 0; i < numArr.length; i++) {
//         sum += numArr[i];
//     }

//     return sum;
// }

// console.log(solution(-1))


// function findUniq(arr) {
//     let obj = {};


//     for (let i = 0; i < arr.length; i++) {
//         if (!obj[arr[i]]) {
//             obj[arr[i]] = 1; 
//         }else obj[arr[i]] += 1;

//     }

//     let result = 0;

//     for (let key in obj) {
//         if (obj[key] < 2) {
//             result += (+ key);
//         }
//     }

//     return result;
// }


// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
// console.log(findUniq([  0, 0, 0.55, 0, 0 ]))



// function count(string) {

//    const obj = {};

//    for (let i = 0; i < string.length; i++) {
//         if (!obj[string[i]]) {
//             obj[string[i]] = 1;
//         }else obj[string[i]] += 1;
//    }

//    return obj;
// }

// console.log(count('aba'))


// function order(words){

//     const wordsArr = words.split(' ');

//     const obj = {};


//     for (let i = 0; i < wordsArr.length; i++) {
//         for (let j = 0; j < wordsArr[i].length; j++) {
//             if (wordsArr[i][j] >= '0' && wordsArr[i][j] <= '9') {
//                obj[wordsArr[i][j]] = wordsArr[i]; 
//             }
//         }
//     }
    
//     let sorted = '';

//     for(let key in obj) {
//         sorted += obj[key] + ' ';
//     }

//     return sorted.slice(0, -1);
// }


// console.log(order('is2 Thi1s T4est 3a'))
// console.log(order('4of Fo1r pe6ople g3ood th5e the2'))
// console.log(order(''))


// function solution(string) {

//     let reversedStr = '';


//     for (let i = 0; i < string.length; i++) {
//         const r = string.length - 1 - i;
//         if (string[r] === string[r].toUpperCase()) {
//             reversedStr += string[r] + ' ';
//         } else reversedStr += string[r];
//     }

//     let str = '';

//    for (let i = 0; i < reversedStr.length; i++) {
//         str = reversedStr[i] + str;
//    } 

//    return str;
// }


// console.log(solution("camelCasingTest"))


// function sortArray(array) {
    
//     const index = [];
//     const odd = [];

//     for (let i = 0; i < array.length; i++) {
//         if (!(array[i] % 2 === 0)) {
//              odd.push(array[i]) && index.push(i);  
//         }
//     }

//     const sortedOdd = odd.sort((a, b) => a - b);

//     for (let i = 0; i < odd.length; i++) {
//         (array.splice(index[i], 1, sortedOdd[i]))
//     }
//     return array;
// }


// console.log(sortArray([-5, -3, 2, 8, -1, 4]))
// console.log(sortArray([-44, -31, -34, 2, 44, 20, 16, 42, -19, 34, 50, -36, 14, 22, -35, -39, 2, 43, -10, -20, -44, -44, 48, -6, 16, -6 ]))


// function high(x){

//     const strArr = x.split(' ');

//     const numArr = [];

//     for (let i = 0; i < strArr.length; i++) {
//         let sum = 0;
//         for (let j = 0; j < strArr[i].length; j++) {
//             const code = strArr[i].charCodeAt(j) - 96;
//             sum += code; 
//         }
//         numArr.push(sum);  
//     }
    
//     let max = numArr[0];
//     let index = 0;
//     for (let i = 0; i < numArr.length; i++) {
//         if (numArr[i] > max) {
//             max = numArr[i];
//             index = i;
//         }
//     }
//     return strArr[index];
// }

// console.log(high('man i need a taxi up to ubud'));
// console.log(high('what time are we climbing up the volcano'));
// console.log(high('take me to semynak'));


// function towerBuilder(nFloors) {
    
//     const strList = [];

//     for (let i = 1; i <= nFloors; i++) {
//         let x = (nFloors + 1) - 1 - i;
//         let str = '';
//         str += (' '.repeat(x))
//         for (let j = 0; j < i; j++) {
//             str += '*' + ('*'.repeat([i][j] - 1)); 
//         } 
//         str += (' '.repeat(x));
        
//         strList.push(str);
        
//     } 
//     return  strList
// }

// console.log(towerBuilder(4))


// function longestConsec(strarr, k) {
//     if (k > strarr.length || strarr.length === 0 || k <= 0) {
//         return '';
//     }

//     let strArr = [];

//     for (let i = 0; i < strarr.length; i++) {
//         if (strarr.slice(i, k + i).length === k) {
//         strArr.push(strarr.slice(i, k + i));
//         }
//     }

//     let strLength = [];

//     for (let i = 0; i < strArr.length; i++) {
//         let sum = 0;
//         for (let j = 0; j < strArr[i].length; j++) {
//             sum += strArr[i][j].length;
//         }
//         strLength.push(sum);
//     }
    
//     let max = strLength[0];
//     let index = 0;

//     for (let i = 0; i < strLength.length; i++) {
//         if (strLength[i] > max) {
//             max = strLength[i];
//             index = i;
//         }
//     }

//     let result = '';

//     for (let i = 0; i < strArr[index].length; i++) {
//         result += strArr[index][i];
//     }

//     return result;
// }


// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
// console.log(longestConsec([], 2))


// function wave(str){
    
//     const strArr = [];
    
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') {
//             strArr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
//         }
//     }
    
//     return strArr;
// }

// console.log(wave('hello'))
// console.log(wave("two words"))
// console.log(wave(" gap "))

// function expandedForm(num) {

//     const numToStr = '' + num;
    
//     const zero = '0';
//     let index = 0;
//     const indexArr = [];

//     for (let i = 0; i < numToStr.length; i++) {
//         if (numToStr[i] !== '0') {
//             index = i;
//             indexArr.push(index);
//         }
//     }

//     const numArr = [];
    
//     for (let i = 0; i < indexArr.length; i++) {
//         const times = numToStr.slice(indexArr[i] + 1).length;
//         numArr.push(numToStr.slice(indexArr[i], indexArr[i] + 1) + zero.repeat(times));
//     }

//     return numArr.join(' + ');
    
// }

// console.log(expandedForm(70304))
// console.log(expandedForm(42))


// function noBoringZeros(n) {
    
//     const numToStr = '' + n;

//     let index = 0;
//     const indexArr = [];

//     for (let i = 0; i < numToStr.length; i++) {
//         if (numToStr[i] !== '0') {
//             index = i;
//             indexArr.push(index);
//         }
//     }
//     const until = indexArr[indexArr.length -1] + 1;

//     return + numToStr.slice(0, until);

// }

// console.log(noBoringZeros(1050))


// function sumEvenNumbers(input) {
    
//     let sum = 0;

//     for (let i = 0; i < input.length; i++) {
//         if (input[i] % 2 === 0) {
//             sum += input[i];
//         }
//     }
//     return sum;
// }

// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  

// function sumDigPow(a, b) {
    
//     const numArr = [];

//     const numTwoDArr = [];

//     for (let i = a; i <= b; i++ ) {
//        numArr.push(i);
//        numTwoDArr.push(('' + i).split(''))
//     }

//     const numTimesExponent = [];

//     for (let i = 0; i < numTwoDArr.length; i++) {
//         let sum = 0
//         for (let j = 0; j < numTwoDArr[i].length; j++) {
//                 sum += ((+ numTwoDArr[i][j]) ** (j + 1));
//             } numTimesExponent.push(sum);  
//     }
    
//     const result = [];

//     for (let i = 0; i < numArr.length; i++) {
//         if (numArr[i] === numTimesExponent[i]) {
//             result.push(numArr[i]);
//         }
//     }
//     return result;
// }
  

// console.log(sumDigPow(1, 10))
// console.log(sumDigPow(1, 100))
// console.log(sumDigPow(90, 100))
// console.log(sumDigPow(90, 150))
// console.log(sumDigPow(50, 150))
// console.log(sumDigPow(10, 150))




// function camelCase (s) {
//     const strArr = this.split(' ');

//     let str = '';

//     for (let i = 0; i < strArr.length; i++) {
//         str += strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase();
//     }

//     return str;
// }

// console.log(camelCase('camel case word'))



// String.prototype.camelCase = function() {
//   return this
//   .split(" ")
//   .map(s => {
//     if (!s) return s
//     return s[0].toUpperCase()+s.substring(1)
//   })
//   .join('')
  
// }

// console.log('camel case word'.camelCase())


// const multiplicationTable = function(size) {

//   const twoDArr = [];

//   for(let i = 1; i <= size; i++) {
//       const arr = [];
//     for (let j = 1; j <= (size * size); j++) {
//         if (j % i === 0) {
//           arr.push(j);
//         }
//       }
//       twoDArr.push(arr.slice(0, size));
//   }
//   return twoDArr;
// }


// console.log(multiplicationTable(4))


// function calculate(str) {

//   let text = '';
  
//   let splitedPlus = '' + str.split('plus');
//   let splitedMinus = '' + splitedPlus.split('minus');
//   let numArr = splitedMinus.split(',');
  
//   for (let i = 0; i < str.length; i++) {
//     if (!(str[i] >= '0' && str[i] <= '9')) {
//       text += str[i];
//     }
//   }
  
//     let splitedText = text.split('s').slice(0, -1);
    
//     let arr = [];

//     for (let i = 0; i < numArr.length; i++) {
//         arr.push(numArr[i]) && arr.push(splitedText[i])   
//     }

//     let content = arr.slice(0, -1);
//     let count = 0;

//     for (let i = 0; i < content.length; i++) {
//         if (content[i] === 'plu') {
//           count += (+ content[i += 1]);
//         }
//         else if (content[i] === 'minu') {
//           count -= (+ content[i += 1]);
//         }
//         else count += (+ content[i]);
//     }

//     return count;
// }

// console.log(calculate('1plus2plus3plus4'))
// console.log(calculate('1minus2minus3minus4'))
// console.log(calculate('1plus2plus3minus4'))
// console.log(calculate('230minus174plus434'))


// let math = {
//   '+' : function (x, y) { return x + y},
//   '-' : function (x, y) { return x - y}
// }

// console.log(math['+'](4, 5))





// let math = {
//   '%' : function (x, y) { return  x + x * (y / 100) },
//   '-' : function (x, y) { return x - y}
// }

// console.log(math['%'](30, 20))



// function count (str) {
//     let arr = str.split(' ');

//     let result = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//          if (arr[i] === '+') {
//             if (arr[i + 2] === '%') {
//                result -= (+ arr[i + 1])
//             }else result += ( + arr[i += 1]);
//         }
//         else if (arr[i] === '-') {
//             if (arr[i + 2] === '%') {
//                 result -= (+ arr[i + 1])
//              } else result -= ( + arr[i += 1]);
//         }
//         else if (arr[i] === '*') {
//             if (arr[i + 2] === '%') {
//                 result -= (+ arr[i + 1])
//              } else result *= ( + arr[i += 1]);
//         }
//         else if (arr[i] === '/') {
//             if (arr[i + 2] === '%') {
//                 result -= (+ arr[i + 1])
//              } else result /= ( + arr[i += 1]);
//         }
//         else if (arr[i] === '%' && arr[i + 3] === '%') {
//                 console.log(((+ arr[i - 1]) + (+ arr[i - 1]) * (+ arr[i + 2] / 100)) / 100)
//         }
//         else if (arr[i] === '%') {
//            let percentages = 0;
//            if (arr.length < 3) {
//                percentages += (+ arr[i - 1] / 100);
//                return percentages;
//            }
//            else if (arr[1] === '%') {
//                 result -= (+ arr[i - 1]);
//                 result += (+ arr[i - 1] / 100);  
//            }
           
//            else {
                
//                percentages += (+ arr[i - 1] / 100);
               
               
//                 if (arr[i - 2] === '+') {
//                     result += (result * percentages);
                    
//                 }
//                 if (arr[i - 2] === '-') {
//                     result -= (result * percentages);

//                 }
//                 if (arr[i - 2] === '*') {
//                     result -= (+ arr[i - 3]);
//                     result += (+ arr[i - 3]) * percentages;
//                 }
//                 if (arr[i - 2] === '/') {
//                     result -= (+ arr[i - 3]);
//                     result += (+ arr[i - 3]) / percentages;
//                 }
        
//             }
//        }
//         else {
//             result += ( + arr[i]);
//         }
        

//     }
//     // return result;
// }


// console.log(count('20 % + 10 %'))


// function toWeirdCase(string){
    
//     const strArr = string.split(' ');
//     let str = '';

//    for (let i = 0; i < strArr.length; i++) {
//         let words = '';
//         for (let j = 0; j < strArr[i].length; j++) {
//             if (j % 2 === 0) {
//                 words += strArr[i][j].toUpperCase();
//             }else words += strArr[i][j];
//         }
//         str += words + ' ';
//    }
//    return str.slice(0, -1);
// }

// console.log(toWeirdCase('This is a test'))


// function validate(n){
//     const strArr = ('' + n).split('');
    
//     const numArr = [];

//     for (let i = 0; i < strArr.length; i++) {
//         if (strArr.length % 2 !== 0) {
//             if (i % 2 !== 0) {
//                 let double = (+ strArr[i]) * 2;
//                 if (9 < double) {
//                     numArr.push(double / 2);
//                 }else numArr.push(double);
//             }else numArr.push(+ strArr[i]);
//         } else {
//             if (i % 2 === 0) {
//                 let double = (+ strArr[i]) * 2;
//                 if (9 < double) {
//                     numArr.push(double / 2);
//                 }else numArr.push(double);
//             }else numArr.push(+ strArr[i]);
//         }
//     }
    
//     let result = 0;

//     for (let i = 0; i < numArr.length; i++) {
//         result += numArr[i]
//     }

//     return result % 10 === 0;
// }


// console.log(validate(123))
// console.log(validate(1))
// console.log(validate(2121))
// console.log(validate(1230))


// function comp(array1, array2){
    
//     if (array1 === null || array2 === null) {
//         return false;
//     }

//     const arr = [];

//     for (let i = 0; i < array1.length; i++) {
//         arr.push(array1[i] ** 2);
//     }

//     let sorted1 = arr.sort((a, b) => a - b);
//     let sorted2 = array2.sort((a,b) => a - b);
    
//     let count = 0;

//     for (let i = 0; i < sorted1.length; i++) {
//         if (sorted1[i] === sorted2[i]) {
//             count++;
//         }
//     }

//     return count === sorted1.length;
    
//   }

//   let b1 = [null, null]
//   let b2 = [3, 4]

//   let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//   let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
// console.log(comp(a1, a2))
// console.log(comp(b1, b2))


// function decode(string) {
   
//     const obj1 = {
//         'a': '1',
//         'e': '2',
//         'i': '3',
//         'o': '4',
//         'u': '5'
//     }
//     const obj2 = {
//         '1': 'a',
//         '2': 'e',
//         '3': 'i',
//         '4': 'o',
//         '5': 'u'
//     }

//     let str = '';

//     for (let i = 0; i < string.length; i++) {
//         if (obj1[string[i]] || obj2[string[i]]) {
//             str += obj1[string[i]] || obj2[string[i]];
//         } else str += string[i];
//     }
//     return str;
// }




// function encode(string) {
//     const obj1 = {
//         'a': '1',
//         'e': '2',
//         'i': '3',
//         'o': '4',
//         'u': '5'
//     }

//     let str = '';

//     for (let i = 0; i < string.length; i++) {
//         if (obj1[string[i]]) {
//             str += obj1[string[i]];
//         } else str += string[i];
//     }
//     return str;

// }
  
//   function decode(string) {
//     const obj2 = {
//         '1': 'a',
//         '2': 'e',
//         '3': 'i',
//         '4': 'o',
//         '5': 'u'
//     }

//     let str = '';

//     for (let i = 0; i < string.length; i++) {
//         if (obj2[string[i]]) {
//             str += obj2[string[i]];
//         } else str += string[i];
//     }
//     return str;
//   }


// console.log(decode('h2ll4'))
// console.log(encode('hello'))
// console.log(decode('How are you today?'))



// function toFixed (number, fractionDigits) {
//     const numToStr = ('' + number);
    
//     let index = 0;
//     let fixedNum = '';
//     let zeros = '';
//     let count = 0;
    
    
//     for (let i = 0; i < numToStr.length; i++) {
//         if (numToStr[i] === '.') {
//             index = i;
//         } else {
//             if (i > index) {
//                 count++;
//             }
//         }  
//     }
    
//     const lengthAfterDot = (number < 0) ? count - 1 : count;
    
//     const repeatZeros = (number < 0) ? (fractionDigits - lengthAfterDot) : fractionDigits - count;
    
//     const numLength = (index + fractionDigits !== 0) ? index + fractionDigits : numToStr.length;


//     for (let i = 0; i < repeatZeros; i++) {
//         zeros += '0';
//     }
   
//     for (let i = 0; i <= numLength; i++) {
//        if (index === 0 && fractionDigits === 0) {
//             if (i !== numLength) {
//                 fixedNum += numToStr[i];
//             }
//         }
//         else if (fractionDigits === 0) {
//             if (numToStr[numLength + 1] >= 5) {
//                 if (i === (numLength - 1)) {
//                     fixedNum += ('' + (+(numToStr[i]) + 1));
                    
//                 } else {
//                     if (numToStr[i] !== '.') {
//                         fixedNum += numToStr[i];
//                     }
//                 }  
//             } else {
//                 if (numToStr[i] !== '.') {
//                     fixedNum += numToStr[i];
//                 }
//             }
//         }
//         else if (index === 0) {
//             if (i !== numLength) {
//             fixedNum = numToStr + '.';
//             fixedNum += zeros;
//             }   
//         }
//         else if (fractionDigits >= lengthAfterDot) {
//             fixedNum = numToStr + zeros; 
//         } else {
//             if (numToStr[numLength + 1] >= 5) {
//                 if (i === numLength) {
//                     fixedNum += ('' + (+(numToStr[i]) + 1));
 
//                 } else {
//                     fixedNum += numToStr[i];
        
//                 } 
//             } else {
//                 fixedNum += numToStr[i];
//             }
//         }
//     }

//     return fixedNum;
// }


// // console.log(toFixed(425.556, 0))

// // console.log((425.556).toFixed(0))



// console.log(toFixed(3, 0), '-->', '3');
// console.log(toFixed(-3, 0), '-->', '-3');
// console.log(toFixed(3.14, 0), '-->', '3');
// console.log(toFixed(-3.14, 0), '-->', '-3');
// console.log(toFixed(3.11, 1), '-->', '3.1');
// console.log(toFixed(-3.12, 1), '-->', '-3.1');
// console.log(toFixed(3.14, 5), '-->', '3.14000');
// console.log(toFixed(-3.14, 5), '-->', '-3.14000');
// console.log(toFixed(3.1412, 3), '-->', '3.141');
// console.log(toFixed(-3.1412, 3), '-->', '-3.141');
// console.log(toFixed(3.14, 2), '-->', '3.14');
// console.log(toFixed(-3.14, 2), '-->', '-3.14');
// console.log(toFixed(3.14159, 5), '-->', '3.14159');
// console.log(toFixed(-3.14159, 5), '-->', '-3.14159');
// console.log(toFixed(3.14, 4), '-->', '3.1400');
// console.log(toFixed(-3.14, 4), '-->', '-3.1400');
// console.log(toFixed(3.1412, 0), '-->', '3');
// console.log(toFixed(-3.1412, 0), '-->', '-3');
// console.log(toFixed(3.1, 2), '-->', '3.10');
// console.log(toFixed(-3.1, 2), '-->', '-3.10');
// console.log(toFixed(3, 3), '-->', '3.000');
// console.log(toFixed(-3, 3), '-->', '-3.000');

// console.log(toFixed(3.14159, 3), '-->', '3.142');
// console.log(toFixed(-3.14159, 3), '-->', '-3.142');

// const firstNumObj = {
//     '1': 'pirma',
//     '2': 'antra',
//     '3': 'trecia',
//     '4': 'ketvirta',
//     '5': 'penkta',
//     '6': 'sesta',
//     '7': 'septinta',
//     '8': 'astunta',
//     '9': 'devinta',
//     '10': 'desimt',
//     '11': 'venuolika',
//     '12': 'dvylika',
//     '13': 'trylika',
//     '14': 'keturiolika',
//     '15': 'penkiolika',
//     '16': 'sesiolika',
//     '17': 'septyniolika',
//     '18': 'astuoniolika',
//     '19': 'devyniolika',
//     '20': 'dvidesimt',
//     '21': 'dvidesimt pirma',
//     '22': 'dvidesimt antra',
//     '23': 'dvidesimt trecia',
//     '24': 'dvidesimt ketvirta',
// }

// const secondNumObj = {
//     '10': 'desimt',
//     '20': 'dvidesimt',
//     '30': 'trisdesimt',
//     '40': 'keturiasdesimt',
//     '50': 'penkiasdesimt',
//     '60': 'sesiasdesimt',
// }

// const thirdNumObj = {
//     '0': 'nulis',
//     '1': 'viena',
//     '2': 'dvi',
//     '3': 'trys',
//     '4': 'keturios',
//     '5': 'penkios',
//     '6': 'sesios',
//     '7': 'septynios',
//     '8': 'astuonios',
//     '9': 'devynios',
// }



// const start = new Date()
// const hours = '' + start.getHours();
// const minutes = '' + start.getMinutes();
// const seconds = '' +  start.getSeconds();



// const h = firstNumObj[hours];
// let m = 0;
// let s = 0;

// if (seconds < 10) {
//     s = (thirdNumObj[seconds]);
// }
// else if (seconds < 20) { 
//     s = (firstNumObj[seconds]);
// }

// else  {
//     s = (seconds[1] < 1 ? secondNumObj[seconds[0] + '0'] : secondNumObj[seconds[0] + '0'] + ' ' + thirdNumObj[seconds[1]]);
// }


// if (minutes < 10) {
//     m = (thirdNumObj[minutes]);
    
// }
// else if (minutes < 20) { 
//     m = (firstNumObj[minutes]);
// }

// else  {
//     m = (minutes[1] < 1 ? secondNumObj[minutes[0] + '0'] : secondNumObj[minutes[0] + '0'] + ' ' + thirdNumObj[minutes[1]]);
// }

// const time = `${h} val : ${m} min : ${s} sec`;

// console.log(time)



// function names(arr) {

//     const obj = {
//         'ė': 'e',
//         's': 'i',
//     }

//     const namesArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         let lastLetter = arr[i][arr[i].length - 1];
//         let penultimateLetter = arr[i][arr[i].length - 2];
//         if (obj[lastLetter] && penultimateLetter !== 'i' && penultimateLetter !== 'u' && penultimateLetter !== 'y') {
//             namesArr.push(arr[i].slice(0, -1) + obj[lastLetter])
//         }
//         else if (penultimateLetter === 'i' || penultimateLetter === 'y') {
//             namesArr.push(arr[i].slice(0, -1));
//         }
//         else if (penultimateLetter === 'u') {
//             namesArr.push(arr[i].slice(0, -2) + 'au');
//         }
//         else {
//             namesArr.push(arr[i]);
//         }
       
//     }

//     return namesArr;

// }



// console.log(names(['Dovydas', 'Sandra', 'Eglė', 'Algis', 'Ona', 'Aistis', 'Giedrius', 'Kęstutis', 'Laimis', 'Laisvydas', 'Naglis', 'Ramojus', 'Tautvilis','Giedrys']))





// let firstName = 'Dovydas';

// const lastLetter = firstName[firstName.length - 1].toLowerCase();
// const penultimateLetter = firstName[firstName.length - 2].toLowerCase();

// let greetingName = '';

// if (lastLetter === 'ė' && penultimateLetter !== 'i' && penultimateLetter !== 'u' && penultimateLetter !== 'y') {
//     greetingName = (firstName.slice(0, -1) + 'e');
// }
// else if (lastLetter === 's' && penultimateLetter !== 'i' && penultimateLetter !== 'u' && penultimateLetter !== 'y') {
//     greetingName = (firstName.slice(0, -1) + 'i');
// }
// else if (penultimateLetter === 'u') {
//     greetingName = (firstName.slice(0, -2) + 'au');
// }
// else if (penultimateLetter === 'i' || penultimateLetter === 'y') {
//     greetingName = (firstName.slice(0, -1));
// }
// else {
//     greetingName = (firstName);
// }

// console.log(greetingName)


