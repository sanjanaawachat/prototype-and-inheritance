//que2

//Write code to explain prototype chaining


// function Person(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     }
//     //Person class created
    
//     Person.prototype.getFullName = function(){
//     return this.firstName + " " + this.lastName;
//     }
//     // we have added getFullName method in Person’s prototype.
//      var person = new Person("pushpendu", "purkait", 25);
//     // It will create an instance of the Person class
    
//      person.hasOwnProperty("firstName");  // true
//      person.hasOwnProperty("getFullName");  // false
    
//      person.getFullName();



let emp_1 = {
    fname : "sanjana",
    lname : "awachat",
    get_Details : function () {
     console.log(this.fname + " " + this.lname);
    }
}
emp_1.get_Details();
let emp_2 = {
 fname : "sanjana",
}
emp_2.__proto__ = emp_1;
emp_2.get_Details();
console.log(emp_2);