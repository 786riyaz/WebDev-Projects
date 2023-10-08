const board = document.getElementById('board');
const cells = [];
let currentPlayer = 'X';
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
let winner = null;

// Initialize the board
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cells.push(cell);
    cell.addEventListener('click', () => handleCellClick(i));
    board.appendChild(cell);
}

// Handle cell click
function handleCellClick(index) {
    if (winner || cells[index].textContent !== '') return;

    cells[index].textContent = currentPlayer;
    if (checkWin()) {
        winner = currentPlayer;
        message.textContent = `Player ${winner} wins!`;
    } else if (checkDraw()) {
        message.textContent = "It's a draw!";
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

// Check for a win
function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            cells[a].style.backgroundColor = 'lightgreen';
            cells[b].style.backgroundColor = 'lightgreen';
            cells[c].style.backgroundColor = 'lightgreen';
            return true;
        }
    }

    return false;
}

// Check for a draw
function checkDraw() {
    return cells.every(cell => cell.textContent !== '');
}

// Reset the game
resetButton.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.backgroundColor = '#fff';
    });
    currentPlayer = 'X';
    message.textContent = "Player X's Turn";
    winner = null;
});
