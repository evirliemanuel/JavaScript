db = connect('localhost:27017/verlieDB');

function insertData(myObject){
	db.names.insert(myObject);
}

function getDataBack(){
	var cursor = db.names.find();
	while(cursor.hasNext()){
		printjson(cursor.next());
	}
}