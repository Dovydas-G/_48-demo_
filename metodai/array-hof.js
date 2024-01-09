// Hof - higher order function
// 'tevine' funkcija, kuri gauna kita funkcija kaip argumenta

function doubleTrouble(n){
    if (n * 2 > 10){
        return 10;
    }
    return n * 2;    
}

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const doubleMarks = [];


for (let i = 0; i < marks.length; i++){
    doubleMarks.push(doubleTrouble(marks[i]));
}

console.log(doubleMarks);


console.log('-------------------------');

const doubleMarksMap = marks.map(doubleTrouble);
console.log(doubleMarksMap);

const tripleMarks = marks.map(n => n * 3);
console.log(tripleMarks);

const forth = n => n * 4;

const forthMarks = marks.map(n => n * 4);
console.log(forthMarks);


console.clear();

const bool = [[true, true], [true, false], [true, false]];
const allTrue = bool.map(x => x.filter());
console.log(allTrue);

