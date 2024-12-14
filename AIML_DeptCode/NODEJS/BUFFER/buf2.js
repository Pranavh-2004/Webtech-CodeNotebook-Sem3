//writing into the buffer
const buf1 = Buffer.alloc(10);
buf1.write("hello pesu");
console.log(buf1.toString());


//getting the length of a buffer
console.log(buf1.length);

//checking an object is a buffer
console.log(Buffer.isBuffer(buf1));

buf={"n":123}

console.log(Buffer.isBuffer(buf));

