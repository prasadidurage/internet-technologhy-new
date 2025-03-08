console.log("Class manifulation file is loadeed-----------------");

const heading = document.getElementById("heading");
console.log(heading.classList);

heading.classList.add("new-class");
console.log(heading.classList);


heading.classList.add("hello","rounded");
console.log(heading.classList);

heading.classList.remove("rounded");
console.log(heading.classList);


heading.classList.toggle("active");
console.log(heading.classList);
heading.classList.toggle("active");
console.log(heading.classList);
