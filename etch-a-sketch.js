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
            black(gridCell);
            rainbow(gridCell);
            shading(gridCell);
        }
    }
}

function rainbow(gridCell) {
    rainbowButton.addEventListener('click', () => {
        gridCell.addEventListener('mouseenter', () => {
            gridCell.style.backgroundColor = `${randomRGB()}`;
        });
    });
}

function randomRGB() {
    let rgb = [];
    for (i = 0; i < 3; i++) {
        rgb[i] = Math.floor(Math.random() * 255);
    }
    return `rgb(${rgb.toString()})`;
}

function black(gridCell) {
    blackButton.addEventListener('click', () => {
        gridCell.addEventListener('mouseenter', () => {
            gridCell.style.backgroundColor = 'black';
        });
    });
}


function shading(gridCell) {
    shadingButton.addEventListener('click', () => {
        gridCell.addEventListener('mouseenter', () => {
            const rgb = (gridCell.style.backgroundColor);
            // string-to-array code from:
            // https://stackoverflow.com/questions/10970958/get-a-color- 
                //component-from-an-rgb-string-in-javascript
            let rgbArr = rgb.match(/\d+/g);
            if (!rgbArr) {
                rgbArr = [255, 255, 255];
            }
            for (i = 0; i < 3; i++) {
                console.log('before', rgbArr[i]);
                let rgbDarker = Math.floor(rgbArr[i] - (25));
                if (rgbDarker < 0) {
                    rgbArr[i] = 0;
                } else rgbArr[i] = rgbDarker;
                console.log('after',rgbArr[i]);
            }
            console.log('afterafter', rgbArr);
            gridCell.style.backgroundColor = `rgb(${rgbArr.toString()})`;
        });
    });
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


drawGrid(gridSize);