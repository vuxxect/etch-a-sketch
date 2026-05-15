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

const grid = document.querySelector('.grid');
const rgbBtn = document.querySelector('#rgbBtn');
const sizeBtn = document.querySelector('#sizeBtn');
const textValueSize = document.querySelector('#textValueSize');
let rgbMode = false;

makeGrid(10);

sizeBtn.addEventListener('click', changeGridSize);
rgbBtn.addEventListener('click', () => {
    rgbMode = !rgbMode;
    rgbBtn.classList.toggle("button-on")
});

grid.addEventListener('mousemove', (event) => {
    if (event.target.classList.contains('square')) {
        if (rgbMode) {
            event.target.style.backgroundColor = getRandomColor();
        } else {
            event.target.style.backgroundColor = 'black';
        }
    }
});