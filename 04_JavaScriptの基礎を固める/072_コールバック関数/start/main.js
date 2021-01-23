// function hello(callback, lastname) {
//   console.log('hello ' + callback(lastname));
// }

// function getName() {
//   return 'Koji Yamabe';
// }
// // function getFirstName() {
// //   return 'Yamabe'
// // }

// const getFirstName = function() {
//   return 'Yamabe'
// }

// // hello(getFirstName);
// hello(function(name) {
//   return 'Yamabe' + name;
// }, 'Koji');

function doSomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function multiply(a, b) {
  return a * b;
}

function plus(a, b) {
  return a + b;
}

doSomething(5, 2, multiply);
doSomething(5, 2, plus);