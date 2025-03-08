console.log("DOM selector loaded.................");
console.log(document);


//1. Select using Element Id
const heading = document.getElementById("heading");
console.log(heading);

//2. Select using Element by class name
const paragraph =  document.getElementsByClassName("paragraph");
console.log(paragraph);



//3. Select using Element by Tag name
const tag = document.getElementsByTagName("p");
console.log(tag);

//4. Select the first element that matvhes a specific Css spcific selector
const query = document.querySelector(".paragraph");
console.log(query);


//5. Select the all element that matvhes a specific Css spcific selector
const querySelector = document.querySelectorAll(".box h2")
console.log(querySelector);