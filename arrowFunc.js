/*
ES5 Map Callback
function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}
ES2015 Arrow Functions Shorthand
Refactor the above code to use two arrow functions. Turn it into a one-liner.

Write an ES2015 Version
*/
const double = (arr) => arr.map((val) => val * 2)
// console.log(double([1,2,3]))
// const example1 = [2,4,65,4,7,6]
// console.log(double(example1))

/*
Refactor the following function to use arrow functions:
Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
*/

const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(sqr => sqr % 2 === 0)

function squareAndFindEvensLongVer(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }
const example2 = [1,2,3,4,5,6,7,8,9]
console.log(squareAndFindEvens(example2))
console.log(squareAndFindEvensLongVer(example2))