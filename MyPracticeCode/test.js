function Employee(name, Iname) {
  this.firstName = fname;
  this.lastName = name;
  this.showName = function () {
    alert(this.firstName + " " + this.lastName);
  };
}
var emp5 = new Employee("Aruna", "Srinivasan");
emp5.showName();

Employee.prototype;
