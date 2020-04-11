var counter = function (arr) {
  return 'There are ' + arr.length + ' elements in this array';
};

var adder = function (a, b) {
  //using template string to pass variables
  return `The sum of the 2 numbers is ${a + b}`;
};

var pi = Math.PI;
//exporting as an object literal
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}
/*
here, you export the part of the module you want to make available when the module is called.
*/
