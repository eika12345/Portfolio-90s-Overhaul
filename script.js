function toggleMenu() {
  const menu = document.getElementById('start-menu');
  menu.classList.toggle('hidden');
}

document.addEventListener('click', function (e) {
  const menu = document.getElementById('start-menu');
  const button = document.querySelector('.start-button');
  if (!menu.contains(e.target) && !button.contains(e.target)) {
    menu.classList.add('hidden');
  }
});