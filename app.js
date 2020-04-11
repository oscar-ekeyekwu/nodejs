//Modules and Export
var events = require('events');
var util = require('util');
/**
 * here you assign the exported module to a
 * variable, so you can use it where it is
 * required
 */

var myEmitter = new events.EventEmitter();
var Person = function (name) {
  this.name = name;
};

//makig the person constructor to inherit the events.Emitter
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];

//loop throught the people array created and assign the evennts
people.forEach(function (person) {
  person.on('speak', function (msg) {
    console.log(person.name + ' said: ' + msg);
  });
});
//add the event emitter to the instance of the emitter constructor
myEmitter.on('someEvent', function (msg) {
  console.log(msg);
});

//emit the event more like a trigger for the event emitter
myEmitter.emit('someEvent', 'the event was fired');
james.emit('speak', 'hello people');
ryu.emit('speak', 'good day neighbours');
