//input is two arrays
//The task is to find comparison points of two arrays a[0] with b[0], a[1] with b[1] and so on using these rules:
//If a[i]>b[i], then a is awarded 1 point.
//If a[i]<b[i], then b is awarded 1 point.
//If a[i]=b[i], then neither a nor b receives a point.
//the output an array of two integers denoting the respective comparison points earned by a and b.

solve([1,2,3],[3,2,1]); // returns [1,1]

function solve(a, b) {
    var i;
    var aCount=0, bCount=0;
    for (i=0; i<a.length; i++) {
        if (a[i]>b[i]) {
            aCount++;
            } else if (b[i]>a[i]) {
                       bCount++;
                       }
    }
    return [aCount,bCount];
}
