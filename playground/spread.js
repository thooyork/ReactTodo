//
//
// function add(a,b){
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
//
// console.log(add(...toAdd));
//

// var groupA = ['Bill','Bob','corey'];
// var groupB = ['Antony','Elisabeth'];
//
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Andrew',25];
var personTwo = ['Jen',35];

function greet(name, age){
  return 'Hi ' + name + ' you are ' + age;
}

console.log(greet(...person));
console.log(greet(...personTwo));


var names = ['Bill','Bob','corey'];
var final = ['THomas', ...names];

for (i=0; i<3; i++) {
  console.log('Hi ' + final[i]);
}
