function switchPlace() {
  const hole = document.querySelectorAll('.hole');
  const index = Math.floor(Math.random() * hole.length);
  hole.forEach((item) => {
    if (item.classList.contains('hole_has-mole')) {
      item.classList.remove('hole_has-mole');
    }
  });
  hole[index].classList.add('hole_has-mole');
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(switchPlace, 1000);
});
