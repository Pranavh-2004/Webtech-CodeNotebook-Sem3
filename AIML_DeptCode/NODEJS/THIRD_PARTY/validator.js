//importing third party module validator
//install validator in the folder - command => npm install validator 
 
 
//checking for the mail 
const val = require('validator');
var mail = 'testmail@gmail.com';
console.log(val.isEmail(mail)); //checks only for the format not for the existance
 
//checking for lowecase
var word = 'abc';
console.log(val.isLowercase(word));

//checking for string empty
var str='';
console.log(val.isEmpty(str));

//checking for mobile number
var mob = '1234567890'; //false - indian mobile number has its own format
console.log(val.isMobilePhone(mob,'en-IN'));

var mob = '9876543210'; //true - meets the requirement of indian mobile number format
console.log(val.isMobilePhone(mob,'en-IN'));