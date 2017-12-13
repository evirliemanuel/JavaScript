db = connect('127.0.0.1:27017/mDB');

function insertData(myObject){
    db.names.insert(myObject);
}
function getDataBack(){
    const cursor = db.names.find();
    while(cursor.hasNext()){
        printjson(cursor.next());
    }
}