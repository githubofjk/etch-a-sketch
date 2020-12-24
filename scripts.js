const container = document.querySelector('#container');

// set grid size and box sizes
let gridWidth = 16;
let gridHeight = 16;

let boxWidthHeight = 20;
let boxBorderWidth = 1;
let boxSize = boxWidthHeight + boxBorderWidth;

let cssBoxWidthHeight = boxWidthHeight + "px";
let cssBoxBorderWidth = boxBorderWidth + "px";

// external stylesheet's list of rules
const styleSheetList = document.styleSheets;
let styleSheet = styleSheetList[0];

// set container grid size based on gridWidth and gridHeight
let cssGridTemplateColumns = `grid-template-columns:`;
let cssGridTemplateRows = `grid-template-rows:`;

for (i = 0; i < gridWidth; i++) {
    cssGridTemplateColumns += ` ${boxSize}px`;
}
styleSheet.insertRule(`.grid-width { ${cssGridTemplateColumns}; }`, 1);
container.classList.add('grid-width');

for (i = 0; i < gridHeight; i++) {
    cssGridTemplateRows += ` ${boxSize}px`;
}
styleSheet.insertRule(`.grid-height { ${cssGridTemplateRows};}`, 2);
container.classList.add('grid-height');

// create and append boxes to container
for (i = 0; i < gridWidth; i++) {
    for (j = 0; j < gridHeight; j++) {
        const box = document.createElement('div');
        // sets dynamic inline style instead of stylesheet class
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