console.log("Data type file is loarded.............");

//Primitive Data Type 

//.1 Number ------->

let num1 = 10;
let num2 = 20;
console.log(typeof num1);
console.log(typeof num2);

//2.String -----------> Represent a sequnencse of charactor
let cus = ("john");
console.log(typeof cus);

//3. boolean ----------> represent logigal entity value
let isLogged = true;
console.log(typeof isLogged);

//4. Undifined -------> Represent an unassinged Value
let x;
console.log(x);
console.log(typeof x);

// 5.Null --------> Represent and intentional absense any object
let y = null;
console.log(y);
console.log(typeof y);


6.//BigInt -----------> Represent whole numbers larger than 2^53-1
let bigIntValue =1234566789963n;
console.log(bigIntValue);
console.log(typeof bigIntValue);

//=============non-Primitive Data Type  / reffrence data type ================

// 7.Object-------> Represent a collection of key value pairs
let person = {firstName : "john",
    lastName : "doe",
    age : 3 

}

//8.Arrays
console.log(person);
console.log(typeof person);

let colors = ["red","blue","green"];
console.log(colors);
console.log(typeof colors);

//9.Funtion------->represent a funtion
function greet(){
    console.log("hello world");
}

greet();
console.log(typeof greet);



//10.Date ----> represent a date and time
let today = new Date();
console.log(today);
console.log(typeof today);





