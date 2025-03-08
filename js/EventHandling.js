console.log("Event Handing file is loaded------------------");
const savebtn = document.getElementById("btnsave");

// 1.addeventListner
savebtn.addEventListener("click",HandleClick);



function HandleClick(){
    console.log("Button is clicked");
    alert("Button is clicked");
}
// remove karanna usekarai
// savebtn.removeEventListener("click",HandleClick)

