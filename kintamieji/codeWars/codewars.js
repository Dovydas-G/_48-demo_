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



function evenOrOdd(str) {
     
     let numList = [];
     let even = 0;
     let odd = 0;

     for (let i = 0; i < str.length; i++) {
          numList.push(+ str[i]);
     }

     for (let i = 0; i < numList.length; i++) {
          if (numList[i] % 2 === 0) {
               even += numList[i];
          }else odd += numList[i];
     }


     if (even > odd) {
          return 'Even is greater than Odd';
     }
     else if (even < odd) { 
          return 'Odd is greater than Even';
     }
     else return 'Even and Odd are the same';
}


console.log(evenOrOdd('12'))
console.log(evenOrOdd('123'))
console.log(evenOrOdd('112'))