const gridCountBtn = document.getElementById("grid");
const root = document.documentElement;
let selectedColor;

let gridSize = 16;

gridCountBtn.addEventListener('click', () => {
    gridSize = prompt("Enter grid size: ");

    if (typeof(parseInt(gridSize))!="number") {
        alert("Please enter a number")
    }
    else if (gridSize <= 0) {
        alert("Please enter a number between 1-100");
    }

    if(typeof(parseInt(gridSize))=="number") {
        gridCountBtn.textContent = "Edit Grid Size: " + gridSize;
        root.style.setProperty('--size', gridSize);
    }
});

const container = document.querySelector(".container");

for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
}

const colorPickerButton = document.getElementById("colorPickerButton");
const colorPicker = document.getElementById("colorPicker");
const colorCircle = document.querySelector(".colorCircle");

colorPickerButton.addEventListener("click", () => {
    colorPicker.click();
});

colorPicker.addEventListener("change", () => {
    selectedColor = colorPicker.value;
    root.style.setProperty('--pen-color', selectedColor);
    colorCircle.style.backgroundColor = selectedColor;
});

const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        if (square.getAttribute('data-inked') !== true) {
            square.classList.add("hovered");
            square.setAttribute('data-inked', true);
        }
    });
});
