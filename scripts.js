const btnReset = document.querySelector('#btnReset');
const container = document.querySelector('#container');


// set number of container columns and rows, which sets number of boxes
let gridSize;
let gridSizeDefault = 16;
let gridSizeUser;
// check for user input
if (gridSizeUser) {
    gridSize = gridSizeUser;
} else {
    gridSize = gridSizeDefault;
}
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
//container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

// change boxBorderWidth > 0 to see box borders
let boxBorderWidth = 0;
let cssUnit = `px`;
let cssBoxBorderWidth = boxBorderWidth + cssUnit;

// create and append boxes to container
for (i = 0; i < (gridSize * gridSize); i++) {
    const box = document.createElement('div');
    // show box border
    box.setAttribute('style', `border-width: ${cssBoxBorderWidth};`);
    box.classList.add('box');
    container.appendChild(box);
}

function trail(e) {
    e.target.classList.add('trail');
}

function reset(e) {
    boxes.forEach(box => box.classList.remove('trail'));
    // ask for user input for gridSize
    gridSizeUser = prompt("Grid size?: ");
    // if user input is greater than 100, prompt again
    console.log(gridSizeUser);
    if (gridSizeUser > 100) {
        gridSizeUser = prompt("Please input a size less than 100. Grid size?: ");
    }
}

const boxes = Array.from(document.querySelectorAll('.box'));
boxes.forEach(box => box.addEventListener('mouseover', trail));

btnReset.addEventListener('click', reset);

// window.addEventListener('load', grid);