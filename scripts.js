const btnReset = document.querySelector('#btnReset');
const container = document.querySelector('#container');

// set grid, box, and border sizes
let gridSize = 16;

container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
//container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

let boxBorderWidth = 0;
let cssUnit = `px`;
let cssBoxBorderWidth = boxBorderWidth + cssUnit;

// create and append boxes to container
for (i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
        const box = document.createElement('div');
        // show box border
        box.setAttribute('style', `border-width: ${cssBoxBorderWidth};`);
        box.classList.add('box');
        container.appendChild(box);
    }
}

function trail(e) {
    e.target.classList.add('trail');
}

function reset(e) {
    boxes.forEach(box => box.classList.remove('trail'));
}

const boxes = Array.from(document.querySelectorAll('.box'));
boxes.forEach(box => box.addEventListener('mouseover', trail));

btnReset.addEventListener('click', reset);

// window.addEventListener('load', grid);