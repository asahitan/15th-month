const messages = [
  "Happy 4 months of laughter, love, and unforgettable memories!",
  "Every day with you feels like a dream come true. I can't wait for more.",
  "You're the reason my world feels brighter every day.",
  "Four months down, a lifetime to go. I love you more each day."
];

function showMessage() {
  const messageElement = document.getElementById("message");
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageElement.textContent = messages[randomIndex];
}
