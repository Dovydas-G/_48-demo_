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


function problem(x){
  if (typeof x !== 'number'){ 
    return 'Error';
  }
    return x * 50 + 6;

}



console.log(problem(0.03));
console.log(problem(3));