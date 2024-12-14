//creating buffer using alloc() - asigns to 0 if no initialization
//can also use allocUnsafe() but initialises to junk data not to zero

const buf1 = Buffer.alloc(2,"hi");
console.log(buf1); //hexa-decimal representation
console.log(buf1.toJSON()); //decimal representation
console.log(buf1.toString()); //string representation

//Buffer.from(string) 
const buf2 = Buffer.from("hi");
console.log(buf2); //hexa-decimal representation
console.log(buf2.toJSON()); //decimal representation
console.log(buf2.toString()); //string representation

//Buffer.from(array)
const buf3 = Buffer.from([1,2,3]);
console.log(buf3); //hex representation of 1, 2, 3
console.log(buf3.toJSON()); //decimal representation of data 

