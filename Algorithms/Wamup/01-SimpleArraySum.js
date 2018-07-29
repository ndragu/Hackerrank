simpleArraySum([1,2,3,4,10,11]);

function simpleArraySum(ar) {
    var sum = ar.reduce((a, b) => a + b, 0);    
    return sum;
}
