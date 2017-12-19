window.onload = function(){

  var names = new Set();

  names.add("Shaun").add("Ryu").add("Crystal");
  names.delete("Crystal");
  console.log(names.has("Crystal"));

  console.log(names.size);
  console.log(names);

  var ninjas = ["Shaun", "Crystal", "Yoshi", "Ryu", "Yoshi", "Ryu"];

  var refinedNinjas = new Set(ninjas);

  console.log(refinedNinjas);
  ninjas = [...refinedNinjas]
  console.log(ninjas);
}
