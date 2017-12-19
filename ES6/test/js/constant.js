window.onload = function() {
  const value1 = 10;
  var value2 = 20;

  console.log(value1);
  console.log(value2);

// constant variable can't change value;
  value1 = 30; //Uncaught TypeError: Assignment to constant variable.
    at window.onload (script.js:9)
  value2 = 40;

  console.log(value1);
  console.log(value2);


}
