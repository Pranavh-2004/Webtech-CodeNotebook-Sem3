//local module with a class Person
//exporting function as a class in commonJS module mode

class Person
{
	greet()
	{
		console.log("hello pesu");
	}
}

module.exports = Person;