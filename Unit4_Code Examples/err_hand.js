var express= require("express")
var app= express();

app.get("/student/:id",function(req,res,next)
{
    if(req.params.id.indexOf("2000")!=-1){
      var err = new Error("Something went Wrong!!!")
        next(err)
    }
    else{

        res.send("Everything is fine with"+req.params.id)
        next();
    }
    app.use("/student",function(req,res){
        console.log("I am Fine")
    })
})
    app.listen(8000,function(){

        console.log("Server is listening on port 8000")

  

})