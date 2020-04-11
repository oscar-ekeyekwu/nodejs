//Modules and Export
var counter = require("./count");
/**
 * here you assign the exported module to a 
 * variable, so you can use it where it is
 * required
 */
 var count = counter(["Oscar", "Ikechukwu"]);
 console.log(count)