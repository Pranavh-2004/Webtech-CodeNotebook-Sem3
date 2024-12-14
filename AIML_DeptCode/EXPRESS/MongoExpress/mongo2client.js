//sending new document to mongodb


var fetch=require('node-fetch')
fetch('http://localhost:3000/student',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({"name":"Ram","srn":"24"})
})
.then((res)=>res.text())
.then((res)=>console.log(res))