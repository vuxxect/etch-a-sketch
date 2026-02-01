function makeGrid(size) {
    const grid = document.querySelector('.grid');
    const gridWidth = grid.clientWidth;
    const squareSize = gridWidth / size;
    
    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        grid.appendChild(square);
    }
}

makeGrid(10);