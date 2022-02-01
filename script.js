const grid = document.querySelector(".grid");
const slider = document.getElementById("range");
let sizePara = document.querySelector(".inputValue");
let cellNumber = slider.value;

createCells();

function createCells()
{
    //remove current cells
    while(grid.lastChild)
        grid.removeChild(grid.lastChild);

    for(let i = 1; i <= cellNumber; i++)
        for(let i = 1; i <= cellNumber; i++)
        {
            const newDiv = document.createElement("div");
            newDiv.style.backgroundColor = "#8fbcbb";
            grid.appendChild(newDiv);
        }
}

function Eraser()
{

}

slider.addEventListener('change', () => {
    cellNumber = slider.value;
    sizePara.textContent = `${cellNumber} x ${cellNumber}`;
    grid.style.gridTemplateRows = `repeat(${cellNumber}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${cellNumber}, 1fr)`;
    createCells();
});

grid.addEventListener('mouseover', (event) => {
    console.log(event.target);
})