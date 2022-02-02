const DEFAULT = "#d8dee9";

const grid = document.querySelector(".grid");
const buttons = document.querySelector(".buttons");
const clearBtn = document.querySelector(".clear");
let sizePara = document.querySelector(".inputValue");
const slider = document.getElementById("range");

let cellNumber = slider.value;
let colorMode = true, rainbowMode = false, eraserMode = false;
updateGrid();

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
            newDiv.style.backgroundColor = DEFAULT;
            grid.appendChild(newDiv);
        }
}

function clearGrid()
{
    //to be continued...
}

clearBtn.addEventListener('click', () => {
    //clear grid
    children = Array.from(grid.children);
    children.forEach(item => item.style.backgroundColor = DEFAULT);
    colorMode = true;
});

buttons.addEventListener('click', (event) => {
    //change mode
    colorMode = false; rainbowMode = false; eraserMode = false;
    if(event.target.classList.contains("color"))
        colorMode = true;
    else if(event.target.classList.contains("rainbow"))
        rainbowMode = true;
    else if(event.target.classList.contains("eraser"))
        eraserMode = true;
});

slider.addEventListener('change', () => {
    //update grid size
    cellNumber = slider.value;
    sizePara.textContent = `${cellNumber} x ${cellNumber}`;
    
    updateGrid();
});

grid.addEventListener('mouseover', (event) => {
    //draw grid
    if(colorMode)
        event.target.style.backgroundColor = "red";
    else if(rainbowMode)
    {
        const R = Math.floor(Math.random()*256);
        const G = Math.floor(Math.random()*256);
        const B = Math.floor(Math.random()*256);
        event.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    }
    else if(eraserMode)
        event.target.style.background = DEFAULT;
});