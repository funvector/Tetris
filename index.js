import Game from './src/game.js';
import View from './src/view.js';

const root = document.querySelector('#root');

const game = new Game();
const view = new View(root, 220, 440, 20, 10);

window.game = game;
window.view = view;

document.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 37:  // left arrow
      game.movePieceLeft();
      view.render(game.getState());
      break;
    case 38: // Up arrow
      game.rotatePiece();
      view.render(game.getState());
      break;
    case 39: // Right arrow
      game.movePieceRight();
      view.render(game.getState());
      break;
    case 40: // Down arrow
      game.movePieceDown();
      view.render(game.getState());
      break;
  }
});