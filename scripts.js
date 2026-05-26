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
    if (currentMode !== 'shadingMode') {
        event.target.style.opacity = '';
    }

    if (currentMode == 'userColor') {
        event.target.style.backgroundColor = colorInput.value;
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
    if (currentMode == 'shadingMode') {
        let opacity = event.target.style.opacity;
        if (opacity == "") {
            opacity = 1.0;
        }
        event.target.style.opacity = parseFloat(opacity) - 0.1;
        return;
    }
}
    
function toggleBtn(turnMode, activeBtn) {
    modeBtns.forEach(function (btn){
        btn.classList.remove("button-on");
    })
    
    if (currentMode == turnMode && turnMode !== "userColor") {
        currentMode = "userColor";
        colorPickBtn.classList.add("button-on");
    } else {
        currentMode = turnMode ;
        activeBtn.classList.add("button-on");
    }
}

const grid = document.querySelector('.grid');
const modeBtns = document.querySelectorAll('.mode-btn')
const colorInput = document.querySelector('#colorInput')
const rgbBtn = document.querySelector('#rgbBtn');
const sizeBtn = document.querySelector('#sizeBtn');
const textValueSize = document.querySelector('#textValueSize');
const eraserBtn = document.querySelector('#eraserBtn');
const shadingBtn = document.querySelector('#shadingBtn');
const colorPickBtn = document.querySelector('#colorPick');
const colorFrame = document.querySelector('.color-frame');
let currentMode = 'userColor';

makeGrid(10);

sizeBtn.addEventListener('click', changeGridSize);

rgbBtn.addEventListener('click', () => toggleBtn('rgbMode', rgbBtn));
eraserBtn.addEventListener('click', () => toggleBtn('eraserMode', eraserBtn));
shadingBtn.addEventListener('click', () => toggleBtn('shadingMode', shadingBtn));

colorPickBtn.addEventListener('click', () => {
    toggleBtn('userColor', colorPickBtn)
    colorInput.click();
});

colorInput.addEventListener('input', () => {
    colorFrame.style.backgroundColor = colorInput.value;
});

grid.addEventListener('mouseover', colorSquare);
grid.addEventListener('mousedown', colorSquare);
colorPickBtn.classList.add("button-on");