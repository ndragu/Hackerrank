//Input is an n space-separated integers contained in an array.
//Returns the integer sum of the elements in the array.
aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]);

function aVeryBigSum(ar) {
    var i=0;
    var sum=0;
    for (i in ar) {
        sum+=ar[i];
    }
    return sum;
}
