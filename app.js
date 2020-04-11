//Modules and Export
var stuff = require('./stuff');
/**
 * here you assign the exported module to a
 * variable, so you can use it where it is
 * required
 */

console.log(stuff.counter(['Oscar', 'Ikechukwu']));
console.log(stuff.adder(5, 8));
console.log(stuff.pi);
