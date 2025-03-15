console.log("Arrays\ file is loarded.............");

//01.Create Array

//Using Array litarals
let color = ['red','purple','green'];
console.log(color);


// 
// let color2 = new Array["blue","blue","hhh"];
// console.log(color2);

let myArray =['kamal',true,null,{name:'john'},[1,2,3]]
console.log(myArray);


//2.Accessing Element
console.log(color[0]);
console.log(color[3]);// array eke mehem element ekk nathi nisa undifined lanba de


//3.modification Element
color[0] = " yellow"
console.log(color[0]);

//Array length
console.log(color.length);

//Build in Array funtion
let fruits = ['banana','mango','apple','orange']
console.log(fruits);

//5.push()----> add new element to the end of an Array
fruits.push('guvava');
console.log(fruits);

//6.pop()--------> removeelement to the end of an Array
fruits.pop();
console.log(fruits);


//unshift()-----> adds new elements to the beginning of an arry
fruits.unshift('strowberry');
console.log(fruits);


//8. shift()-----> remove elements to the beginning of an arry
fruits.shift();
console.log(fruits);

console.log("==============================================================================================")

//09.concat ();-> join two arrays

let variable = ['carrot','beens','pumpkin']

let items = fruits.concat(variable)
console.log(items)


//10.for each---> on eby one item gannawa

items.forEach(function(item){
    console.log(item);

}
)

//11.map----->aluth Array ekak create kara ganu labai
let upparecaseitem = items.map(item => item.toUpperCase())// upper case funtion eka magin okkoma akuru capoyal karagatha haka
console.log(upparecaseitem);


let lowercase = upparecaseitem.map(item => item.toLowerCase())
console.log(lowercase);


// 12 filture --> ek array ekakin thawa array ekak filture kr gena aluth Array ekk create kara gannawa condition ekekt yatathwa
let filterItem = items.filter( item => item.length > 5);
console.log(filterItem);

