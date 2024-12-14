//error handling

var express= require("express")
var app= express();

app.get("/student/:id",function(req,res,next)
{
    if(req.params.id.indexOf("2000")!=-1){
      var err = new Error("Something went Wrong!!!")
        next(err);
    }
    else{

        res.send("Everything is fine with"+req.params.id)      
    }
}
);
 
app.use(function(err, req, res,next) {
    // This middleware is executed when an error is passed to next(err)
    console.log(err.message); // Log the error message
    res.send("Error: " + err.message);
});
 
app.listen(8000,function(){
console.log("Server is listening on port 8000")
})
