const students = [
    {
        name: 'Jonas',
        marks: [2],
    },
    {
        name: 'Maryte',
        marks: [9, 8, 7],
    },
    {
        name: 'Petras',
        marks: [10, 10],
    },
    {
        name: 'Ona',
        marks: [7, 7, 7, 7, 7],
    },
];


// Koks yra klases pazymiu vidurkis?
function allStudentsAverage (marksA) {
    let average = 0;
    let studentsMarks = [];
    
    for (let i = 0; i < marksA.length; i++){
        studentsMarks.push(marksA[i].marks)
    }
    
    for (let i = 0; i < studentsMarks.length; i++){
        let sum = 0;

        for (let j = 0; j < studentsMarks[i].length; j++)
            sum += studentsMarks[i][j];
            average += sum / studentsMarks[i].length;     
    }
    return average / studentsMarks.length;
}

console.log(allStudentsAverage(students));


// Koks yra maziausias pazymys?

function findTheLowestGrade (allMarks) {
    let studentsMarks = [];
    
    for (let i = 0; i < allMarks.length; i++) {
        studentsMarks = studentsMarks.concat(allMarks[i].marks)
    }

    let min = studentsMarks[0];

    for (let i = 0; i < studentsMarks.length; i++) {
        if(studentsMarks[i] < min) min = studentsMarks[i];
    }
    return min;
}

console.log(findTheLowestGrade(students));


// Koks yra didziausias pazymys?

function findTheHighestGrade (allMarks) {
    let studentsMarks = [];
    
    for (let i = 0; i < allMarks.length; i++) {
        studentsMarks = studentsMarks.concat(allMarks[i].marks)
    }

    let min = studentsMarks[0];

    for (let i = 0; i < studentsMarks.length; i++) {
        if(studentsMarks[i] > min) min = studentsMarks[i];
    }
    return min;
}

console.log(findTheHighestGrade(students));


// Koks yra skirtumas tarp didziausio ir maziausio pazymiu?

function difference (first, second) {
    return first - second;
}
console.log(difference(findTheHighestGrade(students),  findTheLowestGrade(students)));



//Koks yra vardas studento kuris turi prasciausia pazymiu vidurki?

function studentWithTheHighestGPA (marksList) {
    let average = [];
    let studentsMarks = [];
    
    for (let i = 0; i < marksList.length; i++){
        studentsMarks.push(marksList[i].marks)
    }
    
    for (let i = 0; i < studentsMarks.length; i++){
        let sum = 0;

        for (let j = 0; j < studentsMarks[i].length; j++)
            sum += studentsMarks[i][j];
            average.push(sum / studentsMarks[i].length);     
    }
    

    let studentAverageObj = {}
    let studentName = [];
    for (let i = 0; i < marksList.length; i++){
        studentName.push(marksList[i].name)
    }
    for (let i = 0; i < marksList.length; i++){
        studentAverageObj[studentName[i]] = [average[i]];
    }
    const student = Object.keys(studentAverageObj).sort((a, b) => studentAverageObj[a] - studentAverageObj[b]);
    return student[student.length -1]
}

console.log(studentWithTheHighestGPA(students));


//Koks yra vardas studento kuris turi geriausia pazymiu vidurki?


function theStudentWithTheLowestGrade (marksList) {
    let average = [];
    let studentsMarks = [];
    
    for (let i = 0; i < marksList.length; i++){
        studentsMarks.push(marksList[i].marks)
    }
    
    for (let i = 0; i < studentsMarks.length; i++){
        let sum = 0;

        for (let j = 0; j < studentsMarks[i].length; j++)
            sum += studentsMarks[i][j];
            average.push(sum / studentsMarks[i].length);     
    }
    

    let studentAverageObj = {}
    let studentName = [];
    for (let i = 0; i < marksList.length; i++){
        studentName.push(marksList[i].name)
    }
    for (let i = 0; i < marksList.length; i++){
        studentAverageObj[studentName[i]] = [average[i]];
    }
    const student = Object.keys(studentAverageObj).sort((a, b) => studentAverageObj[a] - studentAverageObj[b]);
    return student[0]
}

console.log(theStudentWithTheLowestGrade(students));



//Grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki (didejimo tvarka).
function studentsInAscendingOrder (marksList) {
    let average = [];
    let studentsMarks = [];
    
    for (let i = 0; i < marksList.length; i++){
        studentsMarks.push(marksList[i].marks)
    }
    
    for (let i = 0; i < studentsMarks.length; i++){
        let sum = 0;

        for (let j = 0; j < studentsMarks[i].length; j++)
            sum += studentsMarks[i][j];
            average.push(sum / studentsMarks[i].length);     
    }
    

    let studentAverageObj = {}
    let studentName = [];
    for (let i = 0; i < marksList.length; i++){
        studentName.push(marksList[i].name)
    }
    for (let i = 0; i < marksList.length; i++){
        studentAverageObj[studentName[i]] = [average[i]];
    }
    const student = Object.keys(studentAverageObj)
        .sort((a, b) => studentAverageObj[a] - studentAverageObj[b]);

    return student;
}

console.log(studentsInAscendingOrder(students));


// Grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki (mazejimo tvarka).
function studentsInDescendingOrder (marksList) {
    let average = [];
    let studentsMarks = [];
    
    for (let i = 0; i < marksList.length; i++){
        studentsMarks.push(marksList[i].marks)
    }
    
    for (let i = 0; i < studentsMarks.length; i++){
        let sum = 0;

        for (let j = 0; j < studentsMarks[i].length; j++)
            sum += studentsMarks[i][j];
            average.push(sum / studentsMarks[i].length);     
    }
    

    let studentAverageObj = {}
    let studentName = [];
    for (let i = 0; i < marksList.length; i++){
        studentName.push(marksList[i].name)
    }
    for (let i = 0; i < marksList.length; i++){
        studentAverageObj[studentName[i]] = [average[i]];
    }
    const student = Object.keys(studentAverageObj)
        .sort((a, b) => studentAverageObj[b] - studentAverageObj[a]);

    return student;
}

console.log(studentsInDescendingOrder(students));



// Koks yra vardas studento kuris turi maziausiai pazymiu?

function studentWithTheShortestList (marksList) {
    
    let studentListLength = [];
    let studentName = [];
    let studentsObj = {}
    
    for (let i = 0; i < marksList.length; i++){
        studentListLength.push(marksList[i].marks.length)
    }
    
    for (let i = 0; i < marksList.length; i++){
        studentName.push(marksList[i].name)
    }

    for (let i = 0; i < marksList.length; i++){
        studentsObj[studentName[i]] = [studentListLength[i]];
    }
    const student = Object.keys(studentsObj)
        .sort((a, b) => studentsObj[a] - studentsObj[b]);

    return student[0];
        
}

console.log(studentWithTheShortestList(students));

// Koks yra vardas studento kuris turi daugiausiai pazymiu?

function studentWithTheLongestList (marksList) {
    
    let studentListLength = [];
    let studentName = [];
    let studentsObj = {};
    
    for (let i = 0; i < marksList.length; i++){
        studentListLength.push(marksList[i].marks.length)
    }
    
    for (let i = 0; i < marksList.length; i++){
        studentName.push(marksList[i].name)
    }

    for (let i = 0; i < marksList.length; i++){
        studentsObj[studentName[i]] = [studentListLength[i]];
    }
    const student = Object.keys(studentsObj)
        .sort((a, b) => studentsObj[a] - studentsObj[b]);

    return student[student.length -1];
        
}

console.log(studentWithTheLongestList(students)); 


// Koks yra vardas studento kuris turi maziausia pazymi?

function studentWithTheLowestGrade (marksA) {
   
    let studentName = [];
    let studentsMarks = [];
    let minMarks = [];
    let studentsObj = {};
    
    for (let i = 0; i < marksA.length; i++){
        studentsMarks.push(marksA[i].marks);
    }
    
    for (let i = 0; i < studentsMarks.length; i++){
        let min = 10;

        for (let j = 0; j < studentsMarks[i].length; j++)
            if(studentsMarks[i][j] < min) min = studentsMarks[i][j];
                minMarks.push(min)
    }

    for (let i = 0; i < marksA.length; i++){
        studentName.push(marksA[i].name);
    }

    for (let i = 0; i < marksA.length; i++){
        studentsObj[studentName[i]] = [minMarks[i]];
    }
    const student = Object.keys(studentsObj)
        .sort((a, b) => studentsObj[a] - studentsObj[b]);

    return student[0];
}

console.log(studentWithTheLowestGrade(students));


// Koks yra vardas studento kuris turi geriausia pazymi?

function studentWithTheHighestGrade (studentsMarksNames) {
   
    let studentName = [];
    let studentsMarks = [];
    let topMarks = [];
    let studentsObj = {};
    
    for (let i = 0; i < studentsMarksNames.length; i++){
        studentsMarks.push(studentsMarksNames[i].marks)
    }
    
    for (let i = 0; i < studentsMarks.length; i++){
        let min = 0;

        for (let j = 0; j < studentsMarks[i].length; j++)
            if(studentsMarks[i][j] > min) min = studentsMarks[i][j];
                topMarks.push(min)
    }

    for (let i = 0; i < studentsMarksNames.length; i++){
        studentName.push(studentsMarksNames[i].name)
    }

    for (let i = 0; i < studentsMarksNames.length; i++){
        studentsObj[studentName[i]] = [topMarks[i]];
    }
    const student = Object.keys(studentsObj)
        .sort((a, b) => studentsObj[a] - studentsObj[b]);

    return student[student.length -1];
}

console.log(studentWithTheHighestGrade(students));



// Kokia yra klases pazymiu mediana?


function gradePointAverage (allMarks) {
    let studentsMarks = [];
    
    for (let i = 0; i < allMarks.length; i++) {
        studentsMarks = studentsMarks.concat(allMarks[i].marks);
    }
    const markMiddleList = Math.floor(studentsMarks.length / 2);
    const sortedMarks = studentsMarks.sort((a, b) => a - b);

    return sortedMarks[markMiddleList];
}

console.log(gradePointAverage(students));