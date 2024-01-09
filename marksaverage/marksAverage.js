const marks1 = [1, 2, 3, 4, 5];
const marks2 = [2, 4, 6, 8, 10];
const marks3 = [10, 2, 8, 4, 6, 10, 2, 8, 4, 6];
const marks4 = [7, 7, 7, 7, 7, 7, 7];
const marks5 = [10];
const marks6 = [1, 10];
const marks7 = [];
const marks8 = [10, -10];
const marks9 = [10, 2, 0, -6, 8, -3.14, 4, 2.727, 6, 11, 200, 1000, 10.999999, 10.00001];
const marks10 = ['labas'];
const marks11 = [false];
const marks12 = [true];
const marks13 = [undefined];
const marks14 = [null];
const marks15 = [NaN];
const marks16 = ['?,.,.,'];
const marks17 = 'labas';
const marks18 = -5;
const marks19 = [10, -10, 0, 0.09999, 10.0000001, 'labas', true, false, [], NaN, Infinity, -Infinity, undefined, marksAverage];









function marksAverage(marks){
    if (marks.length === 0) {
        return 'Truksta duomenu (pazymiu)';
    }
    
    if (marks.constructor !== Array) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    
    let count = 0;
    let sum = 0;
    
    for (let i = 0; i < marks.length; i++){
        const mark = marks[i];

        if (typeof mark === 'number' && mark >= 1 && mark % 1 === 0 && mark <= 10) {
            sum += mark;
            count++;
        }
    }

    return sum / count;
}

console.log(marksAverage(marks1));
console.log(marksAverage(marks2));
console.log(marksAverage(marks3));
console.log(marksAverage(marks4));
console.log(marksAverage(marks5));
console.log(marksAverage(marks6));
console.log(marksAverage(marks7));
console.log(marksAverage(marks8));
console.log(marksAverage(marks9));
console.log(marksAverage(marks10));
console.log(marksAverage(marks11));
console.log(marksAverage(marks12));
console.log(marksAverage(marks13));
console.log(marksAverage(marks14));
console.log(marksAverage(marks15));
console.log(marksAverage(marks16));
console.log(marksAverage(marks17));
console.log(marksAverage(marks18));
