//Kintamųjų inicijavimas

// Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
//   a. Po kiekvieno jų inicijavimo, išvesti į console

const num1 = 1;
console.log(num1);

const num2 = 2;
console.log(num2);

const num3 = 3;
console.log(num3);

// Sukurti 3 kintamuosius su teksto tipo reikšmėmis
//   a. Po kiekvieno jų inicijavimo, išvesti į console

const greeting1 = 'Labas rytas';
console.log(greeting1);

const greeting2 = 'Laba  diena';
console.log(greeting2);

const greeting3 = 'Labas vakaras';
console.log(greeting3);

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
//   a. Po kiekvieno jų inicijavimo, išvesti į console

const numList1 = [1, 2, 3, 4, 5];
console.log(numList1);

const numList2 = [6, 7, 8, 9, 10];
console.log(numList2);

const numList3 = [11, 12, 13, 14, 15];
console.log(numList3);

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//   a. Po kiekvieno jų inicijavimo, išvesti į console

const topFiveMovies = ['1. Pabėgimas iš Šoušenko', '2. Krikštatėvis', '3. Tamsos riteris', '4. Krikštatėvis II', '5. 12 įtūžusių vyrų'];
console.log(topFiveMovies);

const topFiveTvShows = ['1. Bręstantis blogis', '2. Planeta žemė 2', '3. Planeta Žemė', '4. Karo vilkai. Desantininkai', '5. Černobylis'];
console.log(topFiveTvShows);

const topFiveFastestCars = ['1. Bugatti Chiron Supersport', '2. SSC Tuatara', '3. Hennessey Venom F5', '4. Rimac Nevera', '5. McLaren Speedtail'];
console.log(topFiveFastestCars);





// Veiksmai su kintamaisiais

// 1. Susumuoti visus skaičiaus tipo kintamuosius
//      a. Rezultatą išvesti į console

const count = num1 + num2 + num3;
console.log(count);

// 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
//      a. Rezultatą išvesti į console

const compoundWords = `${greeting1} ${greeting2} ${greeting3}`;
console.log(compoundWords)

// 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
//      a. 1-2+3-4+5
//      b. Rezultatą išvesti į console

const numListResult1 = numList1[0] - numList1[1] + numList1[2] - numList1[3] + numList1[4];
console.log(numListResult1);

const numListResult2 = numList2[0] - numList2[1] + numList2[2] - numList2[3] + numList2[4];
console.log(numListResult2);

const numListResult3 = numList3[0] - numList3[1] + numList3[2] - numList3[3] + numList3[4];
console.log(numListResult3)
     
// 4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip,
//    jog tarp jų būtų kablelis ir tarpas


const concatenatedList2 = `Top Five Movies
${topFiveMovies[4]},  ${topFiveMovies[3]},  ${topFiveMovies[2]},  ${topFiveMovies[1]},  ${topFiveMovies[0]}.

Top Five Tv Shows
${topFiveTvShows[4]}, ${topFiveTvShows[3]}, ${topFiveTvShows[2]}, ${topFiveTvShows[1]}, ${topFiveTvShows[0]}.

Top Five Fastest Cars
${topFiveFastestCars[4]}, ${topFiveFastestCars[3]}, ${topFiveFastestCars[2]}, ${topFiveFastestCars[1]}, ${topFiveFastestCars[0]}.`;
console.log(concatenatedList2);



// Kintamųjų palyginimas
// Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
// Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), tai į console išvesti žodį “Pomidoras”,
// o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

const min = 2;
const max = 4;

// 1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
//     a. kuris didesnis

const compareNum = max > min? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareNum);

//     b. kuris mažesnis

const compareNum1 = max < min? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareNum1);

//     c. ar jie lygūs

const compareNum2 = max === min? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareNum2);

//     d. ar jie nelygūs

const compareNum3 = max !== min? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareNum3);

//     e. kuris didesnis arba lygus

const compareNum4 = max >= min? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareNum4);

//     f. kuris mažesnis arba lygus

const compareNum5 = max <= min? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareNum5);

// 2. Išvesti teksto tipo kintamųjų ilgius

let text1 = 'Apelsinas';
let text2 = 'Obuolys';

const textLength1 = text1.length;
const textLength2 = text2.length;


// 3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
//     a. kuris didesnis

const compareText = textLength1 > textLength2? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareText);

//     b. kuris mažesnis

const compareText1 = textLength1 < textLength2? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareText1);


//     c. ar jie lygūs

const compareText3 = textLength1 === textLength2? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareText3);

//     d. ar jie nelygūs


const compareText4 = textLength1 !== textLength2? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareText4);


//     e. kuris didesnis arba lygus

const compareText5 = textLength1 >= textLength2? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareText5);


//     f. kuris mažesnis arba lygus

const compareText6 = textLength1 <= textLength2? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareText6);



// 4. Išvesti sąrašo tipo kintamųjų ilgius
// 5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:

let listOfNum1 = [1, 2, 3, 4, 3, 2];
let listOfNum2 = [4, 5, 6, 7, 9];

const numLength1 = listOfNum1.length;
const numLength2 = listOfNum2.length;

//     a. kuris didesnis

const compareList = numLength1 > numLength2? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareList);

//     b. kuris mažesnis

const compareList1 = numLength1 < numLength2? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareList1);

//     c. ar jie lygūs

const compareList2 = numLength1 === numLength2? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareList2);

//     d. ar jie nelygūs

const compareList3 = numLength1 !== numLength2? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareList3);

//     e. kuris didesnis arba lygus

const compareList4 = numLength1 >= numLength2? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareList4);

//     f. kuris mažesnis arba lygus

const compareList5 = numLength1 <= numLength2? 'Pomidoras' : 'Bandykite kitą kartą.';
console.log(compareList5);




// Ciklo for panaudojimas
//  1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
//      a. 0 … 0
//      b. 0 … 4
//      c. 0 … 100
//      d. 574 … 815
//      e. -50 … 50
//      f. -70 … 30

function countInterval (first, second){

  let count = 0;

  for (let i = first; i <= second; i++)
      count += i;

    return count;
}

console.log(countInterval(0, 0));     //0
console.log(countInterval(0, 4));     //10
console.log(countInterval(0, 100));   //5050
console.log(countInterval(574, 815)); //168069
console.log(countInterval(-50, 50));  //0
console.log(countInterval(-70, 30));  //-2020



//2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
//a. pvz.: “abcdef” -> “fedcba”


function reverse (string){

  let reverseText = ''

  for (let i = string.length -1; i >= 0; i--)
      reverseText += string[i];

  return reverseText;
}

console.log(reverse('abcdef'));



// 3.Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// a.  0 - 11
// b.  8 - 31
// c. -18 - 18
// d. rezultatą pateikti tokiu formatu:
//      i.  Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
//      ii.    Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
//      iii.    Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.


function withoutResidue(start, finish, remainder){

  let result = [];

  for (let i = start; i <= finish; i++)
      if (i % remainder === 0) result.push(i);
      
    return `Skaičių intervale tarp ${start} ir ${finish}, besidalijančių be liekanos iš ${remainder} yra ${result.length} vienetai.`;
}

// 0 - 11
console.log(withoutResidue(0, 11, 3));
console.log(withoutResidue(0, 11, 5));
console.log(withoutResidue(0, 11, 7));

//8 - 31
console.log(withoutResidue(8, 31, 3));
console.log(withoutResidue(8, 31, 5));
console.log(withoutResidue(8, 31, 7));

//-18 - 18
console.log(withoutResidue(-18, -18, 3));
console.log(withoutResidue(-18, -18, 5));
console.log(withoutResidue(-18, -18, 7));




// Funkcijos

// Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

// 1. Funkcija pavadinimu “tusciaFunkcija”:
//   a. nepriima jokių kintamųjų
//   b. neatlieka jokios vidinės logikos
//   c. gražina boolean tipo reikšmę “false”
//   d. TESTAS:
//      i. console.log( tusciaFunkcija() );
//      ii. rezultatas: false

function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());


// 2. Funkcija pavadinimu “daugyba”:
//   a. priima du skaičiaus tipo kintamuosius
//   b. atskirame kintamajame įsimena sandaugos reikšmę
//   c. gražina saudaugos rezultatą
//   d. TESTAI:
//      i.    console.log( daugyba( skaicius1, skaicius2 ) );
//      ii.   console.log( daugyba( skaicius3, skaicius2 ) );
//      iii.  console.log( daugyba( skaicius1, skaicius3 ) );
//      iV.   rezultatas: teisingos reikšmės;

console.log('daugyba----------->')

function daugyba (a, b) {
  result = a * b;
  return result;
}

console.log(daugyba(2, 22));
console.log(daugyba(333, 22));
console.log(daugyba(5, 222));


// 3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
//   a. priima vieną kintamąjį
//   b. jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
//   c. priešingu atveju, funkcija tęsia darbą
//   d. į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
//   e. gražina skaitmenų kiekį
//   f. TESTAI:
//        i. console.log( skaitmenuKiekisSkaiciuje( 5 ) );
//            1. rezultatas: 1
//        ii. console.log( skaitmenuKiekisSkaiciuje( 781 ) );
//            1. rezultatas: 3
//        iii. console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
//            1. rezultatas: 11
//        iV.  console.log( skaitmenuKiekisSkaiciuje( true ) );
//            1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
//        V.     console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
//            1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
//        VI.   console.log( skaitmenuKiekisSkaiciuje( NaN ) );
//            1. rezultatas: “Pateikta netinkamo tipo reikšmė.”

console.log('skaitmenuKiekisSkaiciuje------------->')
function skaitmenuKiekisSkaiciuje(skaicius) {

        const klaidosPranesimas =  'Pateikta netinkamo tipo reikšmė.';

        if (typeof skaicius !== 'number' || typeof skaicius === 'boolean' || isNaN(skaicius)) return klaidosPranesimas;
        const skaiciusITeksta = '' + skaicius;
        const rezultatas = skaiciusITeksta.length;

        return rezultatas;
}


console.log(skaitmenuKiekisSkaiciuje(false));
console.log(skaitmenuKiekisSkaiciuje(1));
console.log(skaitmenuKiekisSkaiciuje(37060123456));



//4. Funkcija pavadinimu “didziausiasSkaiciusSarase”:
//    a. priima vieną kintamąjį
//    b. jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
//    c. jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
//    d. priešingu atveju, funkcija tęsia darbą
//    e. pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
//    f. gražina didžiausią surastą skaičių
//    g. TESTAI:
//          i.   console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
//               1. rezultatas: 1
//          ii.  console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
//               2. rezultatas: 3
//          iii. console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
//               3. rezultatas: 78
//          iV.  console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
//               4. rezultatas: 69
//          V.   console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
//               5. rezultatas: -1
//          Vi.  console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
//               6. rezultatas: “Pateikta netinkamo tipo reikšmė.”
//          Vii. console.log( didziausiasSkaiciusSarase( [] ) );
//               7. rezultatas: “Pateiktas sąrašas negali būti tuščias.”


console.log('didziausiasSkaiciusSarase------------->');

function didziausiasSkaiciusSarase(sarasas) {
  if (sarasas.length === 0) return 'Pateiktas sąrašas negali būti tuščias.'
  if (sarasas.constructor !== Array) return 'Pateikta netinkamo tipo reikšmė.'

  let didziausias = sarasas[0];
    for (let i = 0; i < sarasas.length; i++)
        if (sarasas[i] > didziausias) didziausias = sarasas[i];
        
            
          return didziausias;
}

console.log(didziausiasSkaiciusSarase( [1] ) );

console.log(didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );

console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );

console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );

console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ));

console.log( didziausiasSkaiciusSarase( 'pomidoras' ));

console.log( didziausiasSkaiciusSarase( [] ) );



// 5. Funkcija pavadinimu “isrinktiRaides”:
//      a. priima du kintamuosius:
//         i.  pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
//         ii. antrasis nurodo kas kelintą raidę išrinkti
//      b. patikrinti, ar pirmasis kintamasis yra teksto tipo:
//         i.  jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
//         ii. priešingu atveju tęsiame darbą
//      c. patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
//         i.  jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
//         ii. priešingu atveju tęsiame darbą
//      d. patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
//         i.  jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
//         ii. priešingu atveju tęsiame darbą
//      e. patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
//         i.  jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
//         ii. priešingu atveju tęsiame darbą
//      f. patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
//         i. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
//         ii.priešingu atveju tęsiame darbą
//      g. išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
//      h. išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
//      i. gražina rezultatą
//      j. TESTAI:
//            i.  console.log( isrinktiRaides( “abcdefg”, 2 ) );
//                  1. rezultatas: “bdf”
//            ii. console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
//                  1. rezultatas: “cfil”
//            iii. console.log( isrinktiRaides( “abc”, 0 ) );
//                  1. rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
//            iV.  console.log( isrinktiRaides( “abc”, 4 ) );
//                  1. rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
//            V.   console.log( isrinktiRaides( 1561, 2 ) );
//                  1. rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”

console.log('isrinktiRaides------------------->')
function isrinktiRaides(raides, zingsnis){

  const klaiduPranesimai = [
    {klaida: 'Pirmans ir antras kintamieji yra netinkamo tipo.'},
    {klaida: 'Pirmasis kintamasis yra netinkamo tipo.'},
    {klaida: 'Antrasis kintamasis yra netinkamo tipo.'},
    {klaida: 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.'},
    {klaida: 'Antrasis kintamasis turi būti didesnis už nulį'},
    {klaida: 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'},

  ];
        if (typeof raides !== 'string' && typeof zingsnis !== 'number'){
           return klaiduPranesimai[0].klaida;
        }
        else if (typeof raides !== 'string' ){
           return klaiduPranesimai[1].klaida;
        }
        else if (typeof zingsnis !== 'number'){
           return klaiduPranesimai[2].klaida;
        }
        else if (raides.length === 0 || raides.length >= 100){
           return klaiduPranesimai[3].klaida;
        }
        else if (zingsnis === 0){
          return klaiduPranesimai[4].klaida;
       }
        else if (zingsnis > raides.length){
          return klaiduPranesimai[5].klaida;
        }

        let sarasas = ''; 
        
        for (let i = 0; i < raides.length; i++)
            if ((i + 1) % zingsnis === 0) sarasas += raides[i];
        return sarasas;
        
      
}



console.log(isrinktiRaides('abcdefg', 2)); //bdf

console.log(isrinktiRaides('abcdefghijkl', 3)); //cfil

console.log(isrinktiRaides('abc',0));

console.log( isrinktiRaides('abc',4));

console.log( isrinktiRaides(1561, 2));