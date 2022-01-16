let container = document.getElementById("container");
let black = document.getElementById("btnBlack");
let red = document.getElementById("btnRgb");

// the game columns
function game (number){
for (let i = 0 ; i < number ; i++) {
    for (let y = 0 ; y < number ; y++) {
        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box)
    }
}
}
game(16)

// adding the color
let divs = document.querySelectorAll("div");
function addColor (colorClass){
    divs.forEach(function (div) {
    div.addEventListener('mouseover', () => {
        div.classList.add(colorClass);
    })
})
}
addColor("black")
// the Clear button 
    
   