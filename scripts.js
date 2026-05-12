function makeGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    }
}

const grid = document.querySelector('.grid');
makeGrid(10);
const square = document.querySelector('.square');

grid.addEventListener('mousemove', (event) => {
    if (event.target.classList.contains('square')) {
        event.target.style.backgroundColor = 'black';
    }
});