
/* Using javascript, create a function that generates and returns a random excuse with the following structure:*/

let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

const excuse = document.getElementById('excuse');

/* random items from arrays*/
var randomWho = who[Math.floor(Math.random() * who.length)];

var randomAction = action[Math.floor(Math.random() *  action.length)];

var randomWhat = what [Math.floor(Math.random() * what.length)];

var randomWhen = when[Math.floor(Math.random() * when.length)];

console.log(randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen);

document.getElementById('excuse').innerHTML = randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen;


 


