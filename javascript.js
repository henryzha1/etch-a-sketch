function highlight(box) {
    box.setAttribute('style', 'background-color: black;');
}

function createGrid(dim = 16) {
    //creates grid
    const container = document.querySelector('#container');
    for(let i = 1; i < dim + 1; i++) {
        let row = document.createElement('div');
        row.id = 'r' + i;
        row.className = 'row';
        container.appendChild(row);
        for(let j = 1; j < dim + 1; j++) {
            let newDiv = document.createElement('div');
            newDiv.id = 'c' + j;
            newDiv.className = 'box';
            newDiv.style.width = 640/dim + 'px';
            newDiv.style.height = 640/dim + 'px';
            row.appendChild(newDiv);
        }
    }
    //adds mouseover to grid
    const grid = document.querySelectorAll('.box');
    container.addEventListener('mousedown', () => {
        grid.forEach((box) => box.addEventListener('mouseover', () => {
            highlight(box);
            box.style.width = 640/dim + 'px';
            box.style.height = 640/dim + 'px';
        }));
    });
    //removes mouseover from grid when mouseup
    container.addEventListener('mouseup', () => {
        grid.forEach((box) => {
            let colorBlack = (box.style.backgroundColor === 'black');
            box.addEventListener('mouseover', () => {
                if(colorBlack) {
                    box.setAttribute('style', 'background-color: black;');
                    box.style.width = 640/dim + 'px';
                    box.style.height = 640/dim + 'px';
                } else {
                    box.setAttribute('style', 'background-color: white;');
                    box.style.width = 640/dim + 'px';
                    box.style.height = 640/dim + 'px';
                }
            });
        });
    });
}


function removeGrid() {
    const row = document.querySelectorAll('.row');
    const container = document.querySelector('#container');
    row.forEach((row) => container.removeChild(row));
}

function requestDim() {
    let input = parseInt(prompt("How big would you like the grid to be? (less than 100)"));
    if(!isNaN(input) && input < 101) {
        return input;
    } else if(input > 100) {
        alert("This number is bigger than 100. Please enter a smaller number.");
        return requestDim();
    } else {
        alert("Please enter a number.");
        return requestDim();
    }
}


createGrid();
//adds action for button
const button = document.querySelector('button');
button.addEventListener('click', () => {
    let dim = requestDim();
    removeGrid();
    createGrid(dim);
})



