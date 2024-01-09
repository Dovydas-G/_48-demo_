

console.log(typeof 2);
console.log(typeof 2);
console.log(typeof 2);
console.log(typeof 2);
console.log(typeof 2);
console.log(typeof 2);
console.log(typeof 2);
console.log(typeof 2);
console.log(typeof 2);
console.log(typeof true);
console.log(typeof false);
console.log(typeof sum);
console.log(typeof []);
console.log(typeof [1, 2]);
console.log(typeof [true, false]);
console.log(typeof [sum, sum]);

function sum(a, b) {
    if(typeof a !== 'number'){
        return 'Error: pirmas parametras nera skaiciaus tipo.';
    }
    
    if(typeof b !== 'number'){
        return 'Error: antras parametras nera skaiciaus tipo.';
    }



    return a + b;
}

console.log(sum(7, 5));
console.log(sum(7, true));
console.log(sum([], 5));
console.log(sum(7, 5));
console.log(sum(7, 5));