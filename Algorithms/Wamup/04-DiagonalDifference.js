//Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//1 2 3
//4 5 6
//9 8 9
//Left to right diagonal: 1+5+9=15; Right to left:3+5+9=17;
//Output should be |15-17|=2

diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]);

function diagonalDifference(arr) {
    var primaryDiagonal=0, secondaryDiagonal=0;
    var maxLength=Math.min(arr.length, arr[0].length);
    
    for (var i=0; i<maxLength; i++) {
        primaryDiagonal+=arr[i][i];
        secondaryDiagonal+=arr[i][maxLength-i-1];
    }
    return Math.abs(primaryDiagonal-secondaryDiagonal);
}
