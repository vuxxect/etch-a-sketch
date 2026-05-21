function makeGrid(size) {
    textValueSize.textContent = size;
    grid.style.setProperty('--size', size)
    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    }
}

function deleteGrid(){
    while (grid.firstChild){
        grid.removeChild(grid.firstChild)
    }
}

function changeGridSize() {
    let valueSize = prompt('Enter a number for the grid size (Maximum 100)')

    if (valueSize === null) return
    valueSize = Number(valueSize)

    if(isNaN(valueSize)) {
        alert('The value you entered is not a number')
        return
    }

    if (valueSize <= 0 || valueSize > 100){
        alert('The number must be greater than 0 and no greater than 100')
        return
    }
        
        deleteGrid()
        makeGrid(valueSize)
}

function randomRgbValue() {
    return Math.floor(Math.random() * 256)
}

function getRandomColor() {
    return `rgb(${randomRgbValue()}, ${randomRgbValue()}, ${randomRgbValue()})`
}

function colorSquare(event) {
    event.preventDefault();

    if (!event.target.classList.contains('square') || event.buttons !== 1) {
        return;
    }
    if (currentMode == 'black') {
        event.target.style.backgroundColor = 'black';
        return;
    }
    if (currentMode == 'rgbMode') {
        event.target.style.backgroundColor = getRandomColor();
        return;
    }
    if (currentMode == 'eraserMode') {
        event.target.style.backgroundColor = '';
        return;
    }
}

function offBtns() {
    modeBtns.forEach(function (btn){
        btn.classList.remove("button-on");
    })
}

const grid = document.querySelector('.grid');
const modeBtns = document.querySelectorAll('.mode-btn')
const rgbBtn = document.querySelector('#rgbBtn');
const sizeBtn = document.querySelector('#sizeBtn');
const textValueSize = document.querySelector('#textValueSize');
const eraserBtn = document.querySelector('#eraserBtn');
let currentMode = 'black';

makeGrid(10);

sizeBtn.addEventListener('click', changeGridSize);

rgbBtn.addEventListener('click', () => {
    offBtns()
    if (currentMode == "rgbMode") {
        currentMode = "black";
    } else {
        currentMode = "rgbMode";
        rgbBtn.classList.add("button-on")
    }
});

eraserBtn.addEventListener('click', () => {
    offBtns()
    if (currentMode == "eraserMode") {
        currentMode = "black";
    } else {
        currentMode = "eraserMode";
        eraserBtn.classList.add("button-on")
    }
});

grid.addEventListener('mouseover', colorSquare);
grid.addEventListener('mousedown', colorSquare);