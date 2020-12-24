const container = document.querySelector('#container');

let gridWidth = 1;
let gridHeight = 3;

let gridTemplateColumns = "grid-template-columns: 22px";
let gridTemplateRows = "grid-template-rows: 22px 22px 22px";
container.setAttribute('style', `${ gridTemplateColumns }`, `${ gridTemplateRows }`)


for (i = 0; i < gridWidth; i++) {
    for (j = 0; j < gridHeight; j++) {
        const box = document.createElement('div');
        box.classList.add('box-base');
        container.appendChild(box);
    }
}

function trail(e) {
    e.target.classList.add('trail');
}

const boxes = Array.from(document.querySelectorAll('.box-base'));
boxes.forEach(box => box.addEventListener('mouseover', trail));