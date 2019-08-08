
const Zoo = require('./zoo');
const Cow = Zoo.Cow;
const Bird = Zoo.Bird;
const parser = require('./url-parser');


const c = new Cow();

console.log('A cow will say "this is madness"');
console.log(c.speak('this is madness'));

const b = new Bird();

console.log('A bird will say "this is madness"');
console.log( b.speak('this is madness'));


console.log('The example from the url parser problem will be parsed');
console.log(parser.parse("/:version/api/:collection/:id","/6/api/listings/3?sort=desc&limit=10"));

console.log('This was a very basic run, please run npm test as well');