var studentsSaved = [];

function Student( fname, lname, batch ) {
    this.firstName = fname;
    this.lastName = lname;
    this.batch = batch;
    console.log( this );
}

var address = new Student();

function save() {
    var firstName = document.getElementById( 'firstName' );
    var lastName = document.getElementById( 'lastName' );
    var batch = document.getElementById( 'batch' );

    var student = new Student( firstName.value, lastName.value, batch.value );
    addRow( firstName.value, lastName.value, batch.value );
    studentsSaved.push( student );
    firstName.value = '';
    lastName.value = '';
    batch.value = '';
}

function addRow( fname, lname, batch ) {
    var table = document.getElementById( 'studentList' );
    var tr = document.createElement( 'tr' );
    var tdFname = document.createElement( 'td' );
    tdFname.innerHTML = fname;
    var tdLname = document.createElement( 'td' );
    tdLname.innerHTML = lname;
    var tdBatch = document.createElement( 'td' );
    tdBatch.innerHTML = batch;
    var tdAction = document.createElement( 'td' );
    tdAction.innerHTML = 'Delete';
    tdAction.addEventListener( 'click', function( event ) {
        var tdClicked = event.target;
        var trToRemove = tdClicked.parentNode;
        var table = document.getElementById( 'studentList' );
        table.removeChild( trToRemove );
    } );
    tr.appendChild( tdFname );
    tr.appendChild( tdLname );
    tr.appendChild( tdBatch );
    tr.appendChild( tdAction )
    table.appendChild( tr );
}