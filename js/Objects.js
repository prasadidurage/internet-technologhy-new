console.log("Object file is loarded.............");

//01 Create Object - Object Litarals

let person = {
      firstName : 'zayn',LastName: 'malik' ,age :30 ,song: ['let me','do my  fast'] , band:{leader:'Harry', cute:'luvice',handsome:'nail'} , getBirthYear: function(){ return 2025 - this.age}
}

console.log(person);


//1. Accessing Object Properties

//-- dot Notention

console.log(person.firstName);
console.log(person.LastName);
 console.log(person.getBirthYear());

//-- Braket Notention
console.log(person ['firstName']);
console.log(person ['LastName']);
console.log(person['band']['handsome']);
console.log(person['getBirthYear']());

//02.Adding Properties
person.phone = " 0766240504"
console.log(person);


//03.Modify Properties
person.firstName = "yasith"
console.log(person);


// 04. DElete aproperty
delete person.phone;
console.log(person);


let car = {
    brand: 'toyota',model:'corolla',year:2022,
    getDetail: function(){ return 'the',this.brand ,'-',this.model ,'-',this.year}
}
let description =car.getDetail();
console.log(description);


// looping Object Proprty
for(let key in person){
    console.log(key ,person[key]);
}

console.log("======================================================================");


//Object Descructing
let {firstName,LastName,age} = person;
console.log(firstName);
console.log(age);

//Build -in Object Funtion
// 1. Object .keys-----> fistname Last Name age
console.log(Object.keys(person))

// 2. Object .values------> key wala value tika
console.log(Object.values(person))

// 3. Object .Entries
console.log(Object.entries(person))


// Class Definition
class Student{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        

        }

        getFullName() {
            return firstName,this.lastName;
        }

        // let Stusent = new Student('john','deo',30);

    
}

