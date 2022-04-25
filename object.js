// var person = {
//     name: 'John',
//     age: 49,
//     gender: 'Male',
//     isMarried: false,
//     sons: [
//         {
//             name: 'Ram',
//             age: 15
//         },
//         {
//             name: 'Shyam',
//             age: 18
//         },
//         {
//             name: 'Laksman',
//             age: 12
//         }
//     ]
// };
// person.sons.sort( function( s1, s2 ) { 
//     return s1.age > s2.age ? 1 : -1;
// } );


// console.log( person.sons[ person.sons.length - 1 ].name );

// var numbers = [ 1, 4, 5, 2, 3 ];
// numbers.sort();
// console.log( numbers );
// var car = {
//     model: 'lxi',
//     brand: 'Maruti',
//     color: 'black',
//     gears: 6,
//     sons: {
//         name: 'Ram',
//         age: 47
//     },
//     print: function() {
//         console.log( this );
//     }
// }


// for ( var key in car ) {
//     if ( typeof car[ key ] !== 'function' ) {
//         console.log( key );
//     }
// }

// var showData = 'color';
// car.powerSterring = true;
// car.sons.naam = car.sons.name;
// delete car.sons.name;
// car.sons.age = 49;
// console.log( car.model );

// if ( showData === 'model' ) {
//     console.log( car.model );
// } else if ( showData === 'brand' ) {
//     console.log( car.brand );
// }

// onClick=getData( 'model' )
// onClick=getData( 'color' )
// onClick=getData( 'brand' )

// getData( 'model' );

// function getData( key ) {
//     showData = key;
// }

// console.log( car[ showData ] );
// var key = document.getElementById( 'key' ).value; // tank
// var value = document.getElementById( 'value' ).value; // 67
// var btn  = document.getElementById( 'submitBtn' );
// btn.addEventListener( 'click', function() {
//     setProperty( key, value );
// } )

// function setProperty( key, value ) {
//     car[ key ] = value;
// }

// console.log( car );

// localStorage.getItem( '' )

// car.print()


// var person = {
//     name: 'Shyam',
//     age: 40,
//     address: {
//         city: 'Noida',
//         state: 'UP'
//     },
//     welcomeMessage: function() {
//         console.log( 'Hello my name is ram. I am from noida');
//     }
// }


// person.welcomeMessage();

function Student() {

}

var stu = new Student();
console.log( stu );

var n = new Number( 1.676876 );
console.log( n + 1 );

var str = new String( 'Rani' );
console.log( str.toUpperCase() );

var x = 'ramesh';
console.log( x.charAt() );

console.log( 10..toFixed( 3 ) );