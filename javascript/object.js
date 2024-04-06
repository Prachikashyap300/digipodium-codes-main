console.log('hello  world');
console.log('-----------')
let student = {
    name: 'John',
    age: 25,
    email: 'john123@gmail.com',
    city: 'New York',
    phone: '1234565789',
    course: 'javascript',
}
console.log(student)
//accessing the properties of an object in javascript is called dot notation or bracket notation
console.log('Name : ', student.name); // using dot notation
console.log('Age : ', student['age']); //using bracket notation

/*
Adding a new property to an existing object in JavaScript can be done by simply assigning a value to that property like this:
Adding a new property to an existing object can be done by simply adding it like this:
*/
student.country = "USA";
console.log("Country : ", student.country);
student.course = 'Python';
console.log(student.course);