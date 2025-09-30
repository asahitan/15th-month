// Stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 200; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 3;
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 3 + 's';
  starsContainer.appendChild(star);
}

function createShootingStar() {
  const shootingStar = document.createElement('div');
  shootingStar.className = 'shooting-star';
  shootingStar.style.left = Math.random() * 100 + '%';
  shootingStar.style.top = Math.random() * 50 + '%';
  starsContainer.appendChild(shootingStar);

  setTimeout(() => shootingStar.remove(), 2000);
}
setInterval(createShootingStar, 3000);

// Elements
const envelopeWrapper = document.getElementById('envelopeWrapper');
const flap = document.getElementById('flap');
const letter = document.getElementById('letter');
const messageContainer = document.getElementById('messageContainer');
const instruction = document.getElementById('instruction');
const closeBtn = document.getElementById('closeBtn');
const bgMusic = document.getElementById('bgMusic');

let opened = false;
let musicStarted = false;

function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-hearts';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = window.innerHeight + 'px';
  const duration = 3 + Math.random() * 2;
  heart.style.animation = 'float ' + duration + 's linear';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

function startMusic() {
  if (!musicStarted) {
    bgMusic.play().catch(err => {
      console.log("Music blocked until user interacts:", err);
    });
    musicStarted = true;
  }
}

function openEnvelope() {
  if (opened) return;

  opened = true;
  instruction.classList.add('hidden');
  envelopeWrapper.classList.add('opened');

  flap.classList.add('open');
  startMusic(); // 🔥 ensure music starts when envelope opens

  setTimeout(() => { letter.classList.add('pull'); }, 800);

  setTimeout(() => {
    messageContainer.classList.add('show');
    setInterval(createFloatingHeart, 300);
  }, 1800);
}

// Listen for any first click/tap → start music
document.body.addEventListener('click', () => {
  startMusic();
});

// Envelope interaction
envelopeWrapper.addEventListener('click', openEnvelope);
envelopeWrapper.addEventListener('touchstart', (e) => {
  e.preventDefault();
  openEnvelope();
  startMusic();
});

closeBtn.addEventListener('click', () => {
  messageContainer.classList.remove('show');
});
