//removing a document from mongo db
//delete() on server


var fetch=require('node-fetch')
fetch('http://localhost:3000/student/254',{
    method:'DELETE',
    headers:{'content-type':'application/json'},
    
})
.then((res)=>res.text())
.then((res)=>console.log(res))