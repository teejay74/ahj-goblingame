/**
 * @class GamePlay
 */

import getBoardGame from './getBoardGame';

export default class GamePlay {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.hitStatus = document.querySelector('.status__hit');
    this.lifes = 5;
  }

  init() {
    getBoardGame(this.boardSize);
    this.getHole();
    this.events();
    this.reset();
  }

  getHole() {
    let currentHole = Math.floor(Math.random() * this.boardSize);
    const hole = (i) => document.getElementById(`hole${i}`);
    const hideHole = (i) => hole(i).className = 'hole';
    const showHole = (i) => hole(i).className = 'hole hole_has-mole';
    const nextHole = () => setTimeout(() => {
      this.lifes -= 1;
      this.checkFail();
      hideHole(currentHole);
      currentHole = Math.floor(Math.random() * this.boardSize);
      showHole(currentHole);

      nextHole();
    }, 1000);

    nextHole();
  }

  events() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('hole_has-mole')) {
        this.success(e.target);
      }
    });
  }

  success(enemy) {
    enemy.classList.remove('hole_has-mole');
    ++this.hitStatus.textContent;
    ++this.lifes;
  }

  checkFail() {
    if (this.lifes === 0) {
      alert(`Игра окончена, вы ударили ${this.hitStatus.textContent} гоблинов`);
      this.reset();
    }
  }

  reset() {
    this.hitStatus.textContent = 0;
    this.lifes = 5;
  }
}
