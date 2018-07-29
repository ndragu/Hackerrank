//You are in-charge of the cake for your niece's birthday and 
//have decided the cake will have one candle for each year of her total age. 
//When she blows out the candles, she’ll only be able to blow out the tallest ones. 
//Your task is to find out how many candles she can successfully blow out.
//Input: [3,2,1,3]; Output: 2

birthdayCakeCandles([3,2,1,3]);

function birthdayCakeCandles(ar) {
    var x=ar.sort((a,b)=>b-a);
    var candleCount=1;
    for (let i=0; i<x.length-1 && x[i]===x[i+1]; i++) {
        candleCount++;
    }
    return candleCount;
}
