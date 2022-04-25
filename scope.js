function calc( a, b, task1, task2 ) {
    console.log('Going To Do Stuff');
    console.log( task2 );
    task1( a, b );
}

function add( a, b ) {
    console.log( a + b );
}

function subs( a, b ) {
    console.log( a - b );
}

calc( 10, 45, subs );