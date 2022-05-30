function drawGrid(size) {
    for (i = 0; i < size; i++){
        for (j = 0; j <size; j++){
            const gridCell = document.createElement('div');
            gridCell.classList.add('cell');
            // 880 is the grid size. - 2 to account for cell border
            const cellSize = ((880/size) - 2) + 'px';
            gridCell.style.height = cellSize;
            gridCell.style.width =  cellSize;
            gridContainer.appendChild(gridCell);
        }
        let grid = document.querySelectorAll('.cell');
        grid.forEach(cell => cell.addEventListener('mouseenter', colorCell));
    }
}

// function selectGridCell() {
//     let grid = document.querySelectorAll('.cell');
//     grid.forEach(cell => cell.addEventListener('mouseenter', colorCell))
// }

function colorCell() {
    if (color === 'black') {
        this.style.backgroundColor = 'rgb(0, 0, 0)';
    } else if (color === 'rainbow') {
        this.style.backgroundColor = `${randomRGB()}`;
    } else if (color === 'shading') {
        const rgb = (this.style.backgroundColor);
        // string-to-array code from:
        // https://stackoverflow.com/questions/10970958/get-a-color- 
            //component-from-an-rgb-string-in-javascript
        let rgbArr = rgb.match(/\d+/g);
        if (!rgbArr) {
            rgbArr = [255, 255, 255];
        }
        for (i = 0; i < 3; i++) {
            let rgbDarker = Math.floor(rgbArr[i] - (25));
            if (rgbDarker < 0) {
                rgbArr[i] = 0;
            } else rgbArr[i] = rgbDarker;
        }
        this.style.backgroundColor = `rgb(${rgbArr.toString()})`;
    };
}

function randomRGB() {
    let rgb = [];
    for (i = 0; i < 3; i++) {
        rgb[i] = Math.floor(Math.random() * 255);
    }
    return `rgb(${rgb.toString()})`;
}

const gridContainer = document.querySelector('.grid-container');
const resizeButton = document.querySelector('#grid-size');
const blackButton = document.querySelector('#black');
const rainbowButton = document.querySelector('#rainbow');
const shadingButton = document.querySelector('#shading');

let color = 'black';
let gridSize = 16;

resizeButton.addEventListener('click', () => {
    do {
    newSize = prompt('Enter a new grid size (Max 100)');
    } while (newSize > 100)
    while (gridContainer.firstChild)
        gridContainer.removeChild(gridContainer.firstChild);
    drawGrid(newSize)
});

blackButton.addEventListener('click', () => color = 'black');
rainbowButton.addEventListener('click', () => color = 'rainbow');
shadingButton.addEventListener('click', () => color = 'shading');


drawGrid(gridSize);