export default class Random {
  constructor() {
    this.hole = document.querySelectorAll('.hole');
  }

  showGoblin() {
    const index = Math.floor(Math.random() * this.hole.length);
    this.hole.forEach((item) => {
      if (item.classList.contains('hole_has-mole')) {
        item.classList.remove('hole_has-mole');
      }
    });
    this.hole[index].classList.add('hole_has-mole');
  }
}
