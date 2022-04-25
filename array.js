var fruits = ["Apple", "Orange", "Plum", "Mango", "Banana", "Grapes"];
// console.log( fruits.length );
var n = fruits.length;

// console.log( fruits[ n - 1 ] );
var i = 0;
var indexOfMango = null;
while( i < n ) {
    if ( fruits[ i ] === "Mango" ) {
        indexOfMango = i;
    }
    i = i + 1;
}
// console.log( indexOfMango );
// do {
//     console.log( fruits[ i ] ); 
//     i = i + 1;
// } while ( i < n );


for ( var i = 0; i < n; i++ ) {
    if( i%2 === 0 ) {
        continue;
    }
    // console.log( fruits[ i ] );
}

// i =>   0, 1, 2, 3, 4
// i%2 => 0, 1, 0, 1

// console.log( 3**2 );
var x = 2;
console.log( x++ );
console.log( x );

