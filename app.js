const clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid);
clear.addEventListener('mouseenter', colorChange);
const wrapper = document.querySelector('#grid');

//Create default grid
createGrid(5);

function createGrid(size) {
    wrapper.style.setProperty('--grid-cols', size);
    for (let i = 1;i <= size*size; i++) {
        let div = document.createElement('div');
        div.className = "gridBlock";
        div.id = "item"+i;
        div.addEventListener('mouseenter', colorChange)
        wrapper.appendChild(div);
    }
}

function colorChange() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#"+randomColor;
}

function clearGrid() {
    const grid =  document.querySelectorAll(".gridBlock");
    grid.forEach(div => div.remove());
    gridsize = 101;
    while (gridsize > 100){
        gridsize = prompt("Please enter number of squares per side (Max: 100): ");
    }
    createGrid(gridsize);
}