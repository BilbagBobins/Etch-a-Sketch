function drawGrid(size) {
    // clear current if any grid so as to not draw multiple grids on the page
    while (gridContainer.firstChild)
        gridContainer.removeChild(gridContainer.firstChild);
    for (i = 0; i < size; i++){
        for (j = 0; j <size; j++){
            const gridCell = document.createElement('div');
            gridCell.classList.add('cell');
            // 720 is the grid size. - 2 to account for cell border
            const cellSize = ((720/size) - 2) + 'px';
            gridCell.style.height = cellSize;
            gridCell.style.width =  cellSize;
            gridContainer.appendChild(gridCell);
        }
        let grid = document.querySelectorAll('.cell');
        grid.forEach(cell => cell.addEventListener('mouseenter', colorCell));
    }
}

function colorCell() {
    if (color === 'black') {
        this.style.backgroundColor = 'rgb(0, 0, 0)';
    } else if (color === 'rainbow') {
        this.style.backgroundColor = `${randomRGB()}`;
    } else if (color === 'shading') {
        this.style.backgroundColor = `${shading(this)}`;
    }
}

function randomRGB() {
    let rgb = [];
    for (i = 0; i < 3; i++) {
        rgb[i] = Math.floor(Math.random() * 255);
    }
    return `rgb(${rgb.toString()})`;
}

function shading(thisCell) {
    const rgb = (thisCell.style.backgroundColor);

    let rgbArr = rgb.match(/\d+/g);  // string-to-array code from:
    // username: "user372551"
    // https://stackoverflow.com/questions/10970958/get-a-color-component-from-an-rgb-string-in-javascript

    if (!rgbArr) {
        rgbArr = [255, 255, 255];
    }
    for (i = 0; i < 3; i++) {
        let rgbDarker = Math.floor(rgbArr[i] - (25));
        if (rgbDarker < 0) {
            rgbArr[i] = 0;
        } else rgbArr[i] = rgbDarker;
    }
    return`rgb(${rgbArr.toString()})`;
}

function newGrid(newValue) {
    document.getElementById('gridValue').innerHTML = newValue;
}

const gridContainer = document.querySelector('.grid-container');
const resizeSlider = document.getElementById('grid-size');
const blackButton = document.querySelector('#black');
const rainbowButton = document.querySelector('#rainbow');
const shadingButton = document.querySelector('#shading');

let color = 'black';
let gridSize = 16;

blackButton.addEventListener('click', () => color = 'black');
rainbowButton.addEventListener('click', () => color = 'rainbow');
shadingButton.addEventListener('click', () => color = 'shading');

drawGrid(gridSize);