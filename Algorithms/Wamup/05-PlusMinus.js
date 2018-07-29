//Given an array of integers, calculate the fractions of its elements 
//that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
//E.g. [1,1,0,-1,-1], there are two positive, two negative and one zero
//Output should be 0.400000, 0.400000, 0.200000, where 0.400000=2/5 and 0.200000=1/5

plusMinus([1,1,0,-1,-1]);

function plusMinus(arr) {
    var negativeFrac=0.0;
    var positiveFrac=0.0;
    var zeroFrac=0.0;
    var n=arr.length;
    
    positiveFrac = (arr.filter(x=>x>0).length/n).toFixed(6); 
    negativeFrac = (arr.filter(x=>x<0).length/n).toFixed(6);
    zeroFrac     = (arr.filter(x=>x===0).length/n).toFixed(6);    
    
    console.log(positiveFrac);
    console.log(negativeFrac);
    console.log(zeroFrac);
}
