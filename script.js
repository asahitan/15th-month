const envelopeWrapper = document.getElementById('envelopeWrapper');
const flap = document.getElementById('flap');
const letter = document.getElementById('letter');
const messageContainer = document.getElementById('messageContainer');
const closeBtn = document.getElementById('closeBtn');
const bgMusic = document.getElementById('bgMusic');
let opened = false;

// Floating hearts
function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-hearts';
  heart.innerHTML = '💖';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = window.innerHeight + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

// Stars
function createStars() {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = star.style.height = Math.random() * 2 + 'px';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(star);
  }
}

// Shooting stars
function createShootingStar() {
  const shootingStar = document.createElement('div');
  shootingStar.className = 'shooting-star';
  shootingStar.style.top = Math.random() * window.innerHeight / 2 + 'px';
  shootingStar.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(shootingStar);
  setTimeout(() => shootingStar.remove(), 1000);
}

// Envelope click
envelopeWrapper.addEventListener('click', function () {
  if (opened) return;
  opened = true;

  flap.classList.add('open');
  bgMusic.play();

  setTimeout(() => {
    letter.classList.add('pull');
  }, 800);

  setTimeout(() => {
    messageContainer.classList.add('show');
    setInterval(createFloatingHeart, 400);
  }, 1800);
});

// Close button
closeBtn.addEventListener('click', function () {
  messageContainer.classList.remove('show');
  bgMusic.pause();
  bgMusic.currentTime = 0;
});

// Init stars + shooting stars
createStars();
setInterval(createShootingStar, 3000);
