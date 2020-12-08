import GamePlay from './GamePlay';

const boardsize = prompt('Введите количество полей (например - 16)');
const newGame = new GamePlay(boardsize);
newGame.init();
