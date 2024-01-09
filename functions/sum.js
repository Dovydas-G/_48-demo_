function add(a, b){

    return a + b
}


const s4 = add(7, 5)
console.log(s4)


function kainaSuPVM(kainaBePVM){
    const PVM = 21;
    const coof = 1 + PVM / 100;
    const galutineKaina = kainaBePVM * coof;
    return galutineKaina + ' Eur';

}


console.log(kainaSuPVM(100));
console.log(kainaSuPVM(200));