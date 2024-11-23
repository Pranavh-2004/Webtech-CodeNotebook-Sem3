var a =10;
function hoist(){
    if(false){
        var a = 20;
    }
    console.log(a);
}
hoist();

var a =10;
function hoist2(){
    if(false){
        let a = 20;
    }
    console.log(a);
}
hoist2();