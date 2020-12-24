const container = document.querySelector('#container');

let boxWidthHeight = 20;
let boxBorderWidth = 1;
let boxSize = boxWidthHeight + boxBorderWidth;

let gridWidth = 3;
let gridHeight = 3;

let cssGridTemplateColumns = `grid-template-columns:`;
let cssGridTemplateRows = "grid-template-rows: 21px 21px 21px";
container.setAttribute('style', `${ cssGridTemplateRows }`);


for (i = 0; i < gridWidth; i++) {
    cssGridTemplateColumns += ` ${boxSize}px`
    container.setAttribute('style', `${ cssGridTemplateColumns };`);
    for (j = 0; j < gridHeight; j++) {
        const box = document.createElement('div');
        box.setAttribute('style', `width: ${boxWidthHeight}; height: ${boxWidthHeight}; border-width: ${boxBorderWidth};`);
        box.classList.add('box-base');
        container.appendChild(box);
    }
}

function trail(e) {
    e.target.classList.add('trail');
}

const boxes = Array.from(document.querySelectorAll('.box-base'));
boxes.forEach(box => box.addEventListener('mouseover', trail));