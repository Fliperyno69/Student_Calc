let students = [
    {
        students: "Samuel",
        grades: [3, 5, 3, 4, 5]
    }
    ,
    {
        students: "Martin",
        grades: [1, 2, 1, 1, 5]
    },
    {
        students: "Adam T.",
        grades: [1, 2, 1, 1, 5]
    },
    {
        students: "Adam B.",
        grades: [1, 2, 1, 1, 5]
    }

]


function vypocetPrumeru(grades) {
    let sum = grades.reduce((a, b) => a + b, 0);
    return sum / grades.length;
}

students.forEach(student => {
    let lowGrade = Math.min(...student.grades);
    let highGrade = Math.max(...student.grades);
    console.log(`Name: ${student.students}, highest: ${lowGrade}, lowest: ${highGrade}`);
});

let student_Av = students.map(student => {
    let prum = vypocetPrumeru(student.grades);
    return {jmeno: student.students, prumer: prum};
});

let student_Av_2 = students.filter(student => {
    let prum2 = vypocetPrumeru(student.grades);
    return prum2 > 2;
});

console.log(student_Av);
console.log(student_Av_2);
