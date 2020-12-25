const btnReset = document.querySelector('#btnReset');
const container = document.querySelector('#container');

// set grid and box sizes
let gridSize = 16;

let boxWidthHeight = 29;
let boxBorderWidth = 1;
let boxSize = boxWidthHeight + boxBorderWidth;


let cssUnit = `px`;
let cssBoxWidthHeight = boxWidthHeight + cssUnit;
let cssBoxBorderWidth = boxBorderWidth + cssUnit;

// external stylesheet's list of rules
const styleSheetList = document.styleSheets;
let styleSheet = styleSheetList[0];

// create classes to set container grid size
let cssGridTemplateColumns = `grid-template-columns:`;
let cssGridTemplateRows = `grid-template-rows:`;

for (i = 0; i < gridSize; i++) {
    cssGridTemplateColumns += ` ${boxSize}` + cssUnit;
}
styleSheet.insertRule(`.grid-width { ${cssGridTemplateColumns}; }`, 1);
container.classList.add('grid-width');

for (i = 0; i < gridSize; i++) {
    cssGridTemplateRows += ` ${boxSize}` + cssUnit;
}
styleSheet.insertRule(`.grid-height { ${cssGridTemplateRows};}`, 2);
container.classList.add('grid-height');

// create and append boxes to container

for (i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
        const box = document.createElement('div');
        // set box size with inline style
        box.setAttribute('style', `width: ${cssBoxWidthHeight}; height: ${cssBoxWidthHeight}; border-width: ${cssBoxBorderWidth};`);
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