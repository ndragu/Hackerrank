//Given an array of integers, find the sum of its elements.
//For example, if the array ar=[1,2,3], 1+2+3=6, so it returns 6.

simpleArraySum([1,2,3,4,10,11]);

function simpleArraySum(ar) {
    var sum = ar.reduce((a, b) => a + b, 0);    
    return sum;
}
