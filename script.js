const PRIMARY = "#d8dee9";
const SECONDARY = "#4c566a"
const GRID_COLOR = "#eceff4"

const grid = document.querySelector(".grid");
const colorPicker = document.querySelector("#colorPicker");
const buttons = document.querySelector(".buttons");
const clearBtn = document.querySelector(".clear");
const sizePara = document.querySelector(".inputValue");
const slider = document.getElementById("range");

let cellNumber = slider.value;
let drawMode = "color";
colorPicker.value = SECONDARY;
let drawColor = colorPicker.value;

function updateGrid()
{
    //remove current cells
    while(grid.lastChild)
        grid.removeChild(grid.lastChild);

    //change grid layout
    grid.style.gridTemplateRows = `repeat(${cellNumber}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${cellNumber}, 1fr)`;

    //create new cells
    for(let i = 1; i <= cellNumber; i++)
        for(let j = 1; j <= cellNumber; j++)
        {
            const newDiv = document.createElement("div");
            newDiv.style.backgroundColor = "#eceff4";
            grid.appendChild(newDiv);
        }
}

function changeMode(event)
{
    if(event.target.classList.contains("color"))
        drawMode = "color";
    else if(event.target.classList.contains("rainbow"))
        drawMode = "rainbow";
    else if(event.target.classList.contains("eraser"))
        drawMode = "eraser";
}

function clearGrid()
{
    children = Array.from(grid.children);
    children.forEach(item => item.style.backgroundColor = GRID_COLOR);
}

function drawGrid(event)
{
    if(drawMode == "color")
        event.target.style.backgroundColor = drawColor;
    else if(drawMode == "rainbow")
    {
        const R = Math.floor(Math.random()*256);
        const G = Math.floor(Math.random()*256);
        const B = Math.floor(Math.random()*256);
        event.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    }
    else if(drawMode == "eraser")
        event.target.style.background = GRID_COLOR;
}

//clear grid
clearBtn.addEventListener('click', clearGrid);

//update color pick
colorPicker.addEventListener('change', () => drawColor = colorPicker.value);

//change mode
buttons.addEventListener('click', changeMode);

//update grid size
slider.addEventListener('change', () => {
    cellNumber = slider.value;
    sizePara.textContent = `${cellNumber} x ${cellNumber}`;
    
    updateGrid();
});

//draw grid
grid.addEventListener('mouseover', drawGrid); //grid.addEventListener('mouseover', (event) => drawGrid(event));

updateGrid();