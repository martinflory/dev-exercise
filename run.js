
const Zoo = require('./zoo');
const Cow = Zoo.Cow;
const Bird = Zoo.Bird;

const c = new Cow();


console.log('A cow will say "this is madness"');
console.log(c.speak('this is madness'));

const b = new Bird();

console.log('A bird will say "this is madness"');
console.log( b.speak('this is madness'));