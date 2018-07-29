//You are given a 2D matrix of dimension mxn and a positive integer r. 
//You have to rotate the matrix r times and print the resultant matrix. Rotation should be in anti-clockwise direction.
//E.g. By one rotation we mean shifting elements in anti-clockwise direction starting with the outer perimeter and
//continuing with the inner layers

//1 2 3 4         2 3 4 8
//5 6 7 8      => 1 7 11 12
//9 10 11 12      5 6 10 16
//13 14 15 16     9 13 14 15

matrixRotation([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],4,4,2);

function matrixRotation(matrix,m,n,r) {    
    
    //get the number of circular rotations possible for current matrix
    var layerRotations=Math.floor(Math.min(m,n)/2);    
    var str = matrix.slice();
    
    for (var rotations=0; rotations<r; rotations++) {
      for (var count=0; count<layerRotations; count++) {
        var topLeft=str[count][count];
        var bottomLeft=str[m-count-1][count];
        var bottomRight = str[m-count-1][n-count-1];

        //Shift top row
        for (var i=count; i<n-count-1; i++) {
          str[count][i]=str[count][i+1];
        }

        //Shift left column  
        for (var i=m-count-1; i>count+1; i--) {  	   
          str[i][count]=str[i-1][count];
        }
        str[count+1][count]=topLeft;

        //Shift bottom row          
        for (var i=n-count-1; i>count; i--) {  	
          str[m-count-1][i]=str[m-count-1][i-1];
        }
        str[m-count-1][count+1]=bottomLeft;

        //Shift right column   
        for (var i=count; i<m-count-1; i++) {  	
          str[i][n-count-1]=str[i+1][n-count-1];
        }
        str[m-count-2][n-count-1]=bottomRight;

      }
    }
    
    for(var i=0; i<str.length;i++){
        console.log(str[i].join(' ')); 
    }

}
