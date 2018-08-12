/*
Given an array of grades, return an array of rounded grades based on the following two rules:
1. If the difference between the grade and the next multiple of 5 is less than 3, round up to the next multiple of 5.
2. If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
*/
function gradingStudents(grades) {
    var newGrades=[];
    for (var i=0; i<grades.length; i++) {
        var multOfFive=Math.ceil(grades[i]/5);
        var roundingCutoff=multOfFive*5-grades[i];
        if (grades[i]<38) {           
            newGrades.push(grades[i]);
        } else {
            if (roundingCutoff<3) {                
                newGrades.push(multOfFive*5);
            } else {
                newGrades.push(grades[i]);
            }   
        }
    }
    return newGrades;
}
/*shorter version
function gradingStudents(grades) {
   return grades.map( grade=>
   ((grade>=38 && grade%5>=3) ? grade+5-(grade%5) : grade)
   );
}
*/
var grades=[73,67,38,33];
console.log(gradingStudents(grades));
