console.log("DOM Manipulation file is loaded................")

const heading = document.getElementById("heading");
console.log(heading);

heading.textContent = "Hello World";

//Get Or Set The HTML Inside the Element
const card = document.querySelector(".card");
// console.log(card.innerHTML);
// card.innerHTML = "<h2>My card</h2> <p>This is my card</p>";

// get or set  texw content of an element
console.log(card.innerText);
card.innerText = " just the text"

const id = document.querySelector('input[type = "text"]')
id.value = "hello world";

