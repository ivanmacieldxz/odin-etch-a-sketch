document.addEventListener("DOMContentLoaded", init);

//variables to hold squares in the list and the grid container
let squares;
let container;

function init() {
    //init container and squares as an empty list
    container = document.getElementById("grid-container");

    squares = [];
    
    //create button and grid
    createButton();

    //create a 16x16 grid first
    createGrid(16);
}

//code to create divs
function createGrid(number) {

    for (let i = 0; i < number*number; i++) {
        //create square
        let square = document.createElement("div");

        //add class for the styles
        square.classList.add("grid-square");
        square.style = "flex: 0 0 calc(100%/" + number + ");";

        //add hover event
        square.addEventListener("mouseover", () => {
            changeBackColor(square);
        });        

        //add created square to container and to squares list
        container.appendChild(square);
        squares.push(square);
    }

    
}

function createButton() {
    let button = document.createElement("button");

    button.addEventListener("click", () => {
        let size = prompt("Enter x, where x is the number of rows and columns: ");

        //while size is not valid, ask again
        while (size > 100 || size < 0) {
            alert("Size must be greater than 0 and lower or equal to 100");
            size = prompt("Enter x, where x is the number of rows and columns: ");
        }
        
        container.innerHTML = "";

        createGrid(size);
    });

    button.innerText = "Create new grid";

    document.body.insertBefore(button, container);
}

function changeBackColor(square) {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;

    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
