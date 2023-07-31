const gridCountBtn = document.getElementById("grid");
const root = document.documentElement;
let selectedColor = 'black';

let gridSize = 16;
let squares;

gridCountBtn.addEventListener('click', () => {
    eraserOn = false;
    eraser.classList.remove('toggle-btn');

    gridSize = prompt("Enter grid size: ");

    if (isNaN(parseInt(gridSize))) {
        alert("Please enter a number");
    } else if (parseInt(gridSize) <= 0 || parseInt(gridSize) > 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        gridSize = parseInt(gridSize);
        gridCountBtn.textContent = "Edit Grid Size: " + gridSize;
        root.style.setProperty('--size', gridSize);
        container.style.width = "450px"; // Reset the container width
        container.style.height = "450px"; // Reset the container height
        generateGrid(gridSize);
    }
});

const container = document.querySelector(".container");
generateGrid(gridSize);


function generateGrid(gridSize) {
    container.innerHTML = ''; // Clear the existing grid
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
    squares = document.querySelectorAll(".square");
}

const colorPickerButton = document.getElementById("colorPickerButton");
const colorPicker = document.getElementById("colorPicker");
const colorCircle = document.querySelector(".colorCircle");

colorPickerButton.addEventListener("click", () => {
    eraserOn = false;
    eraser.classList.remove('toggle-btn');
    colorPicker.click();
});

colorPicker.addEventListener("change", () => {
    selectedColor = colorPicker.value;
    root.style.setProperty('--pen-color', selectedColor);
    colorCircle.style.backgroundColor = selectedColor;
});

// squares.forEach(square => {
// square.addEventListener("mouseover", () => {
//     square.style.backgroundColor = selectedColor;
//     if (eraserOn) {
//         square.style.backgroundColor = 'white';
//     }
//     if (rainbowOn) {
//         // Generate random RGB values
//       let red = Math.floor(Math.random() * 256);
//       let green = Math.floor(Math.random() * 256);
//       let blue = Math.floor(Math.random() * 256);

//       // Set the background color using rgb
//       square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//     }
// });
// });

container.addEventListener("mouseover", (event) => {
    const square = event.target;
    if (square.classList.contains("square")) {
        square.style.backgroundColor = selectedColor;
        if (eraserOn) {
            square.style.backgroundColor = 'white';
        }
        if (rainbowOn) {
            // Generate random RGB values
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);

            // Set the background color using rgb
            square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
    }
});

const eraser = document.getElementById('eraser');
let eraserOn = false;
eraser.addEventListener('click', () => {
    eraser.classList.add('toggle-btn');
    eraserOn = true;
    rainbowBtn.textContent = "Rainbow: OFF";
    rainbowOn = false;
});

const rainbowBtn = document.getElementById('rainbow');
let rainbowOn = false;
rainbowBtn.addEventListener('click', () => {
    eraserOn = false;
    eraser.classList.remove('toggle-btn');

    if (rainbowBtn.textContent === "Rainbow: OFF") {
        rainbowBtn.textContent = "Rainbow: ON";
        rainbowOn = true;
    }
    else if (rainbowBtn.textContent === "Rainbow: ON") {
        rainbowBtn.textContent = "Rainbow: OFF";
        rainbowOn = false;
    }
});

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', resetGrid);
function resetGrid() {
    eraserOn = false;
    eraser.classList.remove('toggle-btn');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
}