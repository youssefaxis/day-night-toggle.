let isNight = false;

function toggleMode() {
  const body = document.body;
  const toggle = document.getElementById('toggle');
  const label = document.getElementById('label');

  isNight = !isNight;

  if (isNight) {
    body.style.backgroundColor = '#121212';
    body.style.color = '#ffffff';
    toggle.classList.add('night');
    label.textContent = 'Night Mode ';
  } else {
    body.style.backgroundColor = '#ffffff';
    body.style.color = '#000000';
    toggle.classList.remove('night');
    label.textContent = 'Day Mode ';
  }

  toggle.classList.add('shake');
  toggle.classList.add('glow-effect');
  toggle.classList.add('gradient-effect');

  setTimeout(() => {
    toggle.classList.remove('shake');
    toggle.classList.remove('glow-effect');
    toggle.classList.remove('gradient-effect');
  }, 1500);
}
