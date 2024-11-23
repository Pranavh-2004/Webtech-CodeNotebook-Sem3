let buf1 = Buffer.alloc(10, "pes");
console.log(buf1);
console.log(buf1.toString("utf-8", 0, 3));

let buf2 = new Buffer.from(" is great"); // new Buffer() is depricated
console.log(buf2);

let buf3 = Buffer.concat([buf1, buf2], buf1.length + buf2.length);
console.log(buf3.toString());

let buf4 = Buffer.alloc(buf3.length);
buf3.copy(buf4);

let res = buf3.compare(buf4); //returns -ve no if buf4 > buf3
console.log(res);
