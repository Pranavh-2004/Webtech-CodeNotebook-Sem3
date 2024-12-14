//local module with a function print
//exporting a function, a literal, an object 

function print(name)
{
return `Hello!!! ${name}`;
}

var num = 23;

var obj = {"name":"pesu","id":123,"address":"RingRoad"};

module.exports = {print,num,obj};