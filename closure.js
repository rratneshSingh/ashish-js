function outer() {
    
    var name = 'John';

    function print() {
        console.log( name );
    }
    return print;
}

var returedFn = outer();
returedFn();