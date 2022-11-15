const oneLinerJoke = require('one-liner-joke');
const cowsay= require("cowsay");
var getRandomJoke = oneLinerJoke.getRandomJoke();
const gay = getRandomJoke.body;
console.log(cowsay.say({
    text : gay,
    e : "oO",
    T : "U "
}));
