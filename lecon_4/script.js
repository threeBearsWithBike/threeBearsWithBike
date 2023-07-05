const board = document.querySelector('#board');
const SQUARE_NUMBER = 600;
const colors = [
    '#FFFF00',
    '#FF33FF',
    '#6633FF',
    '#00CCFF',
    '#00FF00',
];

for (let i = 0; i < SQUARE_NUMBER; i++) {
const square = document.createElement('div');
square.classList.add('square');

board.append(square);

square.addEventListener('mouseover', () => setColor(square));
square.addEventListener('mouseleave', () => removeColor(square));
}

function setColor(elem) {
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d';
    elem.style.boxShadow = `0 0 2px #000`;  
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}