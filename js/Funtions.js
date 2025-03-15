console.log("Funtion.js loaded..........");

function greet(name){
    if(name === "undefined"){
        console.log("Hello " + "World") 
    }else{
        console.log("Hello " + name);
        console.log("Hello " , name);
        // console.log(Hello ${name});
    }

}
greet();
greet("yasith");

// Funtion Expression
let  greet2 = function(name){
    console.log("Hello " , name);
}
greet2("john");


//03.Arrow funtion
let  greet3 = (name)=>{
    console.log("Hello " , name);
}
greet3("malan");

//inline 
let greet4 = name => console.log("hello " + name);// tahni sout walata use karanna puluwan
greet4("ram")

// defalt parameter ---> argivment ekak nattam mehem karanna puluwan
let greet5 = (name = "tharindu" ) =>{
    console.log("Hello " , name);
}
greet5()


//Rest parameter

let sum =(... numbers)=>{
    numbers.forEach(numbers=>console.log(numbers) )
}
sum(10,20,30,40,50,60);