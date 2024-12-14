//alloting memory using buffer

const buf1=Buffer.alloc(10,'Hi welcome'); //alloc is initialized to zero by default
const buf2=Buffer.alloc(17,' to pes university');
console.log("Buffer1",buf1.toString()); buf1 will have ascii values of a string
console.log("Buffer2",buf2.toString());
const totallength=buf1.length+buf2.length;
console.log(totallength);
const buf3=Buffer.concat([buf1,buf2]);
console.log(buf3.toString());
console.log(buf3.length);

 
 
 
 
