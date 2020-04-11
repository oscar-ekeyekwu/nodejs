//Get directory name
console.log('Your are in ' + __dirname + ' directory');

//Get file name
console.log('Your file name is ' + __filename);

//Function Expressions

//Normal js function
function sayHi(){
    console.log("I said Hi");
}

sayHi(); //calls the function

//func expression in node

var sayBye = function(){
    /*here, an anonymous function is
    assigned to a variable
    making the variable a function*/
    console.log("Bye Bye");
}
sayBye(); //calls the function

//calling a function within a function
function callFunction(fun){
    fun();
}

callFunction(sayBye); //calls the sayBye function