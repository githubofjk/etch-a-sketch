const btnChangeSize = document.querySelector('#btnChangeSize');
const container = document.querySelector('#container');

let boxes;

// change boxBorderWidth > 0 to see box borders
let boxBorderWidth = 0;
let cssUnit = `px`;
let cssBoxBorderWidth = boxBorderWidth + cssUnit;

let gridSize;
let gridSizeDefault = 16;
let gridSizeUser = 0;

// determine container grid size
// check for user input
function grid(gridSizeUser) {
    if (gridSizeUser !== 0) {
        gridSize = gridSizeUser;
    } else {
        gridSize = gridSizeDefault;
    }
    return gridSize;
}

// set number of container columns and rows, which sets number of boxes
function gridCreate(gridSize) {
    // check for user input
    if (typeof(gridSize) === 'string') {
        gridSize = parseInt(gridSize);
        // remove existing grid-template-columns style
        container.classList.remove.gridTemplateColumns;
    }
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

// create and append boxes to container
function createBoxes(gridSize, cssBoxBorderWidth) {
    for (i = 0; i < (gridSize * gridSize); i++) {
        const box = document.createElement('div');
        // show box border
        box.setAttribute('style', `border-width: ${cssBoxBorderWidth};`);
        box.classList.add('box');
        container.appendChild(box);
    }

    boxes = Array.from(document.querySelectorAll('.box'));
    boxes.forEach(box => box.addEventListener('mouseover', trail));
}


function trail(e) {
    e.target.classList.add('trail');
}

function changeSize(e) {
    boxes.forEach(box => box.classList.remove('trail'));
    // ask for user input for gridSize
    gridSizeUser = prompt("Grid size?: ");
    // if user input is greater than 100, prompt again
    if (gridSizeUser > 100) {
        gridSizeUser = prompt("Please input a size less than 100. Grid size?: ");
    } else if (gridSizeUser <= 0) {
        gridSizeUser = prompt("Please input a size greater than 0. Grid size?: ");
    }
    gridSize = grid(gridSizeUser);
    gridCreate(gridSize);
    createBoxes(gridSize, cssBoxBorderWidth);
}

btnChangeSize.addEventListener('click', changeSize);

gridSize = grid(gridSizeUser);
gridCreate(gridSize);
createBoxes(gridSize, cssBoxBorderWidth);