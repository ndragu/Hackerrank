//Print a staircase of size n using # symbols and spaces.
//e.g. staircase of size 4
//   #
//  ##
// ###
//####

staircase(4);

function staircase(n) {
    for (let i=0; i<n; i++) {
        console.log(' '.repeat(n-i-1)+'#'.repeat(i+1));           
    }
}
