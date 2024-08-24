let board = document.querySelector('#boardContainer');

let size = document.querySelector('#size');
let sizeText = document.querySelector('#sizeText');
let coloring = true;
let color = 'black';
let isRainbowMode = false;

size.addEventListener('input', function() { 
  sizeText.textContent = this.value;
  createGrid(this.value);
});

sizeText.textContent = size.value;

function createGrid(size) {
  board.innerHTML = '';

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    const square = document.createElement('div');
    square.classList.add('piece');
    square.style.backgroundColor = 'white';
    square.style.border = '1px solid black';
    board.appendChild(square);
    square.addEventListener('mouseover', colorSquare);
  }
}

createGrid(size.value);

const rainbowBtn = document.querySelector('#rainbowButton');

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function colorSquare() {
  if (coloring && !isRainbowMode) {
    this.style.backgroundColor = color;
  }

  if (coloring & isRainbowMode){
    this.style.backgroundColor = getRandomColor()
  }
}

rainbowBtn.addEventListener('click', function() {
  if (!isRainbowMode) {
    isRainbowMode = true;

    rainbowBtn.style.backgroundImage = 'none';
    rainbowBtn.style.backgroundColor = 'black';

    let clrBtnName = document.querySelector('.clrBtnName');
    clrBtnName.textContent = 'black'
    
    
  } else {
    isRainbowMode = false;

    rainbowBtn.style.backgroundImage = 'radial-gradient(circle, red, orange, yellow, green, blue, indigo, violet)';
    let clrBtnName = document.querySelector('.clrBtnName');
    clrBtnName.textContent = 'rainbow'

  } ;
})

let resetBtn = document.querySelector('#reset-button');

resetBtn.addEventListener('click', function() {
  let pieces = document.querySelectorAll('.piece');
  pieces.forEach(pieces => pieces.style.backgroundColor = 'white')
})