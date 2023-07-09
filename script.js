const container = document.getElementById('container');
let gridSize = 16;

function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', changeColor);
    container.appendChild(square);
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = 'black';
}

function resetGrid() {
  gridSize = prompt('Enter the number of squares per side (maximum 30):');
  if (gridSize > 30) gridSize = 30;

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  createGrid();
}

createGrid();

