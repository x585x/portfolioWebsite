// script to handle the color grid on the webpage
let startButton = document.getElementById("draw-grid");
let gridControls = document.getElementById("grid-controls");
let count = 0;

// Toggles drawing when the mouse is down
let isDrawing = false;
window.addEventListener("mousedown", () => isDrawing = true);
window.addEventListener("mouseup", () => isDrawing = false);

// Draw and erase tool
let draw = document.getElementById("draw");
let erase = document.getElementById("erase");
let tool = "pencil";

draw.addEventListener("click", () => {
    erase.style.border = "none";
    draw.style.border = "1px solid white";
    tool = "pencil";
});
erase.addEventListener("click", () => {
    erase.style.border = "1px solid white";
    draw.style.border = "none";
    tool = "eraser";
});

// constants
const SIZE = 20;
const GRID_BACKGROUD_COLOR = "white";
const DRAW_COLOR = "purple";
const TIME = 20;

// Sets up the ui for the grid when start button pressed
startButton.addEventListener("click", () => {
    switch (Number(count)) {
        case 0:
            let newHeading = document.createElement("h2");
            let resetButton = gridControls.appendChild(newHeading);
            draw.style.display = "inline-block";
            erase.style.display = "inline-block";
            resetButton.textContent = "Reset";
            resetButton.addEventListener("click", () => resetGrid());
            startButton.textContent = "Click To Draw More";
            break;
        case 2:
            startButton.textContent = "Dont Crash The Browser!";
            break;
    }
    count += 1;
    drawGrid();
})

// resets the grid when reset button pressed
function resetGrid() {
    let squares = document.querySelectorAll("td");
    console.log(squares);
    for (let i = 0; i < squares.length; i++) {
        squares[i].remove();
    }
    startButton.textContent = "Click To Draw More";
    count = 1;
    drawGrid();
}

function drawGrid(){
    let squares = Array();
    let squareContainer = document.getElementById('js-color-grid');

    solidFill();

    // add event listeners to each button and set square colors
    for (let i=0; i<squares.length; i++) {
        squares[i].addEventListener("mouseenter", () => color(i, DRAW_COLOR));
        squares[i].addEventListener("mousedown", () => {
            isDrawing = true;
            color(i, DRAW_COLOR);
        })
        squares[i].style.backgroundColor = GRID_BACKGROUD_COLOR;
}

// colors squares when mouse is down over them
function color(position, color) {
    let currentSquare = squares[position];

    if (isDrawing) {
        if (tool == "pencil") {
            currentSquare.style.backgroundColor = color;
        }
        else if (tool == "eraser") {
            currentSquare.style.backgroundColor = GRID_BACKGROUD_COLOR;
        }
    }
}

// fill the whole grid
function solidFill() {
    let currentRow;
    for (let i=0; i<SIZE; i++) { // 10 rows added
        let newRow = document.createElement('tr');
        currentRow = squareContainer.appendChild(newRow);

        for (let j=0; j<screen.width/20-30; j++) { // adds 10 squares per row
            let newSquare = document.createElement('td');
            squares.push(currentRow.appendChild(newSquare));
        }
    }
}
}