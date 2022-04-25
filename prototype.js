function Person( name, age ) {
    this.name = name;
    this.age = age;
}

Person.prototype.printName = function () {
    console.log( 'Hello My name is ' +  this.name );
}
Person.prototype.printAge = function () {
    console.log( 'Hello My age is ' + this.age ); 
}

var p1 = new Person( 'Ram', 45 );
var p2 = new Person( 'Shyam', 40 );
console.log( p1.printName() );
console.log( p2.printName() );



