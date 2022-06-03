import Random from './random';

const random = new Random();

class GoblinGame {
  constructor() {
    this.dead = 0;
    this.lost = 0;
    this.holesArea = document.querySelector('.hole-game');
    this.timer = 0;
  }

  start() {
    this.timer = setInterval(() => {
      random.showGoblin();
      this.lost += 1;
      document.getElementById('lost').textContent = this.lost;
      this.gameOver();
    }, 1000);

    this.holesArea.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('hole_has-mole')) {
        event.target.classList.add('hammer');
        event.target.classList.remove('hole_has-mole');
        this.lost -= 1;
        this.dead += 1;
        document.getElementById('dead').textContent = this.dead;
      }
    });

    this.holesArea.addEventListener('mouseup', (event) => {
      event.target.classList.remove('hammer');
    });

    document.querySelector('.new-game').addEventListener('click', () => {
      this.newGame();
    });
  }

  gameOver() {
    if (this.lost === 5) {
      alert('Вы проиграли!');
      clearInterval(this.timer);
    }
  }

  newGame() {
    clearInterval(this.timer);
    document.getElementById('dead').textContent = 0;
    document.getElementById('lost').textContent = 0;
    this.lost = 0;
    this.dead = 0;
    this.start();
  }
}

const game = new GoblinGame();
game.start();
