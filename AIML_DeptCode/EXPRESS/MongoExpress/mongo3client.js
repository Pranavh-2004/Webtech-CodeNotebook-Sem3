//modifying data on mongo
//put() on the server

var fetch=require('node-fetch')
fetch('http://localhost:3000/student/24',{
    method:'PUT',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({$set:{"name":"krish","srn":"254"}})
})
.then((res)=>res.text())
.then((res)=>console.log(res))