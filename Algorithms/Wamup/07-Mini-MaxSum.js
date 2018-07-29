//Given five positive integers, find the minimum and maximum values 
//that can be calculated by summing exactly four of the five integers. 
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.

miniMaxSum([1,3,5,7,9]);

function miniMaxSum(arr) {
    var x=arr.sort((a,b)=>a-b);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
 		
    var sum=x.reduce(reducer);    
    var min=sum-x[4];    
    var max=sum-x[0];
    
    console.log(min+' '+max);
}
