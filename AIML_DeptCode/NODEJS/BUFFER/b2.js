
//comparing buffer content
const buf1=Buffer.alloc(5,'hello');
const buf2=Buffer.alloc(5,'hello');
var result=buf1.compare(buf2);
console.log(result);
if(result<0)
{
    console.log(buf1+ " comes before"+ buf2);
 }
 else if(result===0)
 {
     console.log(buf1+ " is same as " +buf2); 
 }
 else
 {
     console.log(buf1+" comes after "+buf2);
 }
 
 //copying buffer content
 var buf3=Buffer.alloc(25);
 buf2.copy(buf3);
 console.log("Buffer2 content is copied to Buffer 3 "+buf3.toString());
 console.log(buf3.toString());

 