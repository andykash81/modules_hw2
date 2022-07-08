import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './js/game.js'

console.log (GameSavingData, loadGame, saveGame);

const game = new Game();
game.start();