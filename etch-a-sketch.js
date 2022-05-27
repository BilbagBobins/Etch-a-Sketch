function drawGrid(size) {
    for (i = 0; i < size; i++){
        for (j = 0; j <size; j++){
            const gridCell = document.createElement('div');
            gridCell.classList.add('cell');
            // 960 is the grid size. - 2 to account for cell border
            const cellSize = ((960/size) - 2) + 'px';
            gridCell.style.height = cellSize;
            gridCell.style.width =  cellSize;
            gridContainer.appendChild(gridCell);
            gridCell.addEventListener('mouseenter', () => {
                gridCell.style.backgroundColor = 'black';
            })
        }
    }
}

const gridContainer = document.querySelector('.grid-container');
const resizeButton = document.querySelector('#grid-size');
const blackButton = document.querySelector('#black');
const rainbowButton = document.querySelector('#rainbow');
const shadingButton = document.querySelector('#shading');

let gridSize = 16;

resizeButton.addEventListener('click', () => {
    do {
    newSize = prompt('Enter a new grid size (Max 100)');
    } while (newSize > 100)
    while (gridContainer.firstChild)
        gridContainer.removeChild(gridContainer.firstChild);
    drawGrid(newSize)
});

drawGrid(gridSize);