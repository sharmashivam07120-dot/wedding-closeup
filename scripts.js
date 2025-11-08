// Countdown Timer
const targetDate = new Date('2025-12-04T00:00:00').getTime();
const countdown = document.getElementById('countdown');
setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  let text = '';
  if (distance > 0) {
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const m = Math.floor((distance / (1000 * 60)) % 60);
    const s = Math.floor((distance / 1000) % 60);
    text = `Countdown: ${d}d ${h}h ${m}m ${s}s`;
  } else {
    text = 'The big day is here!';
  }
  countdown.textContent = text;
}, 1000);

// RSVP "Thank You" Message
const form = document.querySelector('.rsvp form');
const thankyou = document.querySelector('.thankyou-message');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  thankyou.style.display = "block";
  form.reset();
  setTimeout(() => {
    thankyou.style.display = "none";
  }, 3500);
});