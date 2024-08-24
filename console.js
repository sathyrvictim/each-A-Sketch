let board = document.querySelector('#boardContainer');

let size = document.querySelector('#size');
let sizeText = document.querySelector('#sizeText');
let click = true;
let color = 'black';

size.addEventListener('input', function() { 
  sizeText.textContent = this.value;
  createGrid(this.value)
  
} );

sizeText.textContent = size.value;

function createGrid(size){
  board.innerHTML ='';

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size*size;
  for(let i =0; i < amount; i++){
    const square = document.createElement('div');
    square.classList.add('piece')
    square.style.backgroundColor ='white';
    square.style.border = '1px solid black';
    board.appendChild(square);
    square.addEventListener('mouseover', colorSquare );
  }

}

createGrid(size.value);

function colorSquare() {
  if(click){
  if (color === 'Rainbow') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
      this.style.backgroundColor = color;
  }
  }
}

function resetBoard(){
  let pieces = document.querySelectorAll('.piece');
pieces.forEach(piece => piece.style.backgroundColor = 'white');
}

const reset = document.querySelector('#reset-button');
reset.addEventListener('click', resetBoard)