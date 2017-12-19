window.onload = function() {
  console.log("running");
  var name = "Ivy";
  var age = 21;
  
  var personObject = {
    name, age,
    chop(x){
      console.log(`Kill this ${name} and chop it ${x} times`);
    }
  }
  console.log(personObject.chop(10));

}
