const envelopeWrapper = document.getElementById('envelopeWrapper');
const flap = document.getElementById('flap');
const letter = document.getElementById('letter');
const messageContainer = document.getElementById('messageContainer');
const instruction = document.getElementById('instruction');
const closeBtn = document.getElementById('closeBtn');
const bgMusic = document.getElementById('bgMusic');
let opened = false;

// === STARRY BACKGROUND ===
function createStars(num) {
    for (let i = 0; i < num; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.animationDuration = 2 + Math.random() * 3 + 's';
        document.body.appendChild(star);
    }
}

function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.top = Math.random() * window.innerHeight / 2 + 'px';
    shootingStar.style.left = window.innerWidth + 'px';
    document.body.appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.remove();
    }, 1000);
}

// Initialize stars
createStars(100);
// Shooting stars every few seconds
setInterval(createShootingStar, 4000);

// === HEARTS ===
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-hearts';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.animation = `float ${3 + Math.random() * 2}s linear`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// === ENVELOPE INTERACTION ===
envelopeWrapper.addEventListener('click', function () {
    if (opened) return;
    opened = true;

    instruction.classList.add('hidden');
    envelopeWrapper.classList.add('opened');

    // Play custom music
    bgMusic.play();

    // Open flap
    flap.classList.add('open');

    // Pull out letter
    setTimeout(() => {
        letter.classList.add('pull');
    }, 800);

    // Show message
    setTimeout(() => {
        messageContainer.classList.add('show');
        setInterval(createFloatingHeart, 300);
    }, 1800);
});

closeBtn.addEventListener('click', function () {
    messageContainer.classList.remove('show');
    bgMusic.pause();
    bgMusic.currentTime = 0;
});
