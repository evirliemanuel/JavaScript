function Person(name){
	this.setName = function(name){
		this.name = name;
	};
	this.getName = function(){
		return this.name;
	};
}
var verly = new Person();
verly.setName("Ronald");
console.log(verly.getName());
