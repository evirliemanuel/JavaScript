function Person(name){
	this.setName = function(name){
		this.name = name;
	};
	this.getName = function(){
		return this.name;
	};
}
var verly = new Person();
var ronald = new Person();
verly.setName("Ronald");
ronald.setName("Manuel");

console.log(verly.getName());
console.log(ronald.getName());
console.log(verly.getName());
