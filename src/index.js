import Game from './controllers/Game.js';

async function start() {
  const game = new Game();
  await game.start();
}

await start();
