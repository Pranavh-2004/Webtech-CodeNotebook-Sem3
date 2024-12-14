//Importing URL module 
//parsing url - getting meaningful info from url string

console.clear(); //to clear the console area

const url = require('url');
const fs = require('fs');

//craeting an object for the class URL from the module url
//modern approach of parsing with URL class
const myURL = new url.URL('https://www.example.com:8080/path/to/resource?query=123&key=value#section');

// Access various components of the URL
console.log('Protocol:', myURL.protocol);  // Output: 'https:'
console.log('Hostname:', myURL.hostname);   // Output: 'www.example.com'
console.log('Port:', myURL.port);           // Output: '8080'
console.log('Pathname:', myURL.pathname);   // Output: '/path/to/resource'
console.log('Search:', myURL.search);       // Output: '?query=123&key=value'
console.log('Hash:', myURL.hash);           // Output: '#section'

fs.writeFile("parse.txt",myURL.protocol+myURL.hostname+myURL.port,
							(err)=>
                           {if(err) console.log(err)});
						   

//alternative way of parsing by calling parse function from url module

//parse function returns an object that holds pathname,port,hostname etc
var u=url.parse('https://www.example.com:8080/path/to/resource?query=123&key=value#section');
console.log(u.pathname);
console.log(u.hostname);


