let container = document.getElementById("container");
let clear_button = document.getElementById("clear")
let black = document.getElementById("btnBlack");
let coler_picker = document.getElementById("btnRgb");

coler_picker.addEventListener("input", watchColorPicker, false)
clear_button.addEventListener("click", clear, false)

function get_css(color="black"){
    return `.button_color:hover  { background-color:${color}}`

}

function watchColorPicker(event) {
    console.log(event.target.value)
    addColor(event.target.value)
  }

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
            div.setAttribute("style", `background-color: ${colorClass};`)
        })
}) 
}
// the Clear button 
function clear(){
    divs.forEach(function (div) {
        div.classList = ['box']         
    }) 
}

addColor()
