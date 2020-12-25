const container = document.querySelector('#container');

// set grid size and box sizes
let gridWidth = 16;
let gridHeight = 16;

let boxWidthHeight = 20;
let boxBorderWidth = 1;
let boxSize = boxWidthHeight + boxBorderWidth;


let cssUnit = `px`;
let cssBoxWidthHeight = boxWidthHeight + cssUnit;
let cssBoxBorderWidth = boxBorderWidth + cssUnit;

// external stylesheet's list of rules
const styleSheetList = document.styleSheets;
let styleSheet = styleSheetList[0];

// create classes to set container grid size based on gridWidth and gridHeight
let cssGridTemplateColumns = `grid-template-columns:`;
let cssGridTemplateRows = `grid-template-rows:`;

for (i = 0; i < gridWidth; i++) {
    cssGridTemplateColumns += ` ${boxSize}` + cssUnit;
}
styleSheet.insertRule(`.grid-width { ${cssGridTemplateColumns}; }`, 1);
container.classList.add('grid-width');

for (i = 0; i < gridHeight; i++) {
    cssGridTemplateRows += ` ${boxSize}` + cssUnit;
}
styleSheet.insertRule(`.grid-height { ${cssGridTemplateRows};}`, 2);
container.classList.add('grid-height');

// create and append boxes to container
for (i = 0; i < gridWidth; i++) {
    for (j = 0; j < gridHeight; j++) {
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

const boxes = Array.from(document.querySelectorAll('.box'));
boxes.forEach(box => box.addEventListener('mouseover', trail));