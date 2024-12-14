//requesting for the document from Mongodb with dept=cse
//you must have a database by name university, collection by name student on mongo compass
//insert a document {dept:cse}
//get() on server


var fetch=require('node-fetch')

fetch('http://localhost:3000/student?dept=cse',{
    method:'GET',
    headers:{'Accept':'application/json'},
})
.then((res)=>res.json())
.then((res)=>console.log(res))
