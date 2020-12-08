export default function getBoardGame(boardSize) {
  const body = document.querySelector('body');
  const board = document.createElement('div');
  board.className = 'hole-game';

  for (let i = 0; i < boardSize; i += 1) {
    const hole = document.createElement('div');
    hole.className = 'hole';
    hole.id = `hole${i}`;
    board.append(hole);
  }
  body.append(board);
}
