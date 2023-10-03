/*function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
*/
 // Refactor the above code to use two arrow functions. Turn it into a one-liner.
 //question: what constitues single expression in body

  const double = arr => {
    return arr.map(val => val * 2)
  }


  //answer********
  //const double = arr => arr.map(val => val * 2);


//   Replace ALL functions with arrow functions:
 /* function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }
*/
//Mine******************
//implicit return?  
//first parameter is numbers.  function body is numbers.map...
//there are two array methods: numbers.map and .filter(); filter passes return value of numbers.map as argument.
const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);




//answer
//chains methods; second method operates on result of first
//const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)



    


  