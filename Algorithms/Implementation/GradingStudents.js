function gradingStudents(grades) {
    var newGrades=[];
    for (var i=0; i<grades.length; i++) {
        var multOfFive=Math.ceil(grades[i]/5);
        var roundingCutoff=multOfFive*5-grades[i];
        if (grades[i]<38) {
            //console.log(grades[i]);
            newGrades.push(grades[i]);
        } else {
            if (roundingCutoff<3) {
                //console.log(multOfFive*5);
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
