console.log("Element Handing file is loaded------------------");
const newDiv =document.createElement("div");
console.log(newDiv);

newDiv.id = "alert-sucsess";
newDiv.className ="alet  alert-scccess";
newDiv.textContent ="Succsessfully created";
newDiv.style.backgroundColor ="green";
newDiv.style.color ="white";
newDiv.style.borderRadius ="12px";
newDiv.textContent.textAlign = "center";
newDiv.style.margin = "10px"; 
newDiv.style.width ="300px";
newDiv.style.height ="30px";
newDiv.textContent.textAlign ="center"
newDiv.style.display ="flex";
newDiv.style.justifyContent ="center"
newDiv.style.alignItems ="center"

const errorDiv =document.createElement("div");
console.log(errorDiv);

newDiv.style.margin = "10px"; 
errorDiv.id = "alert-error";
errorDiv.textContent ="Error";
 errorDiv.style.backgroundColor ="red";
 errorDiv.style.borderRadius ="12px";
 errorDiv.style.width ="300px";
 errorDiv.style.height ="30px";

 const cloneDiv = errorDiv.cloneNode(true);

const card = 
document.querySelector('.card');
console.log(newDiv);
card.append(newDiv)
card.append(errorDiv);
card.append(cloneDiv);



