const gameboard = document.querySelector( '#gameboard');
const info = document.querySelector('#info');
const startCells = ["", "", "", "", "", "", "", "", ""];

let go = "circle";
let texto = "círculo";
info.textContent = "Círculos Primeiro";

function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index;
        cellElement.addEventListener('click', addGo);
        gameboard.append(cellElement);
    }) 
}

createBoard();

function addGo(e) {
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go = go === "circle" ? "cross" : "circle";
    texto = texto === "círculo" ? "cruz" : "círculo";
    
    info.textContent = " agora é " + texto + ".";
    e.target.removeEventListener("click", addGo);
}