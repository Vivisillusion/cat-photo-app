// Falling Petals
const canvas = document.getElementById('petals');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const petals = [];

for (let i = 0; i < 30; i++) {
  petals.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 5 + 2,
    d: Math.random() * 1 + 1,
    angle: Math.random() * 360
  });
}

function drawPetals() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255,192,203,0.7)';
  ctx.beginPath();
  petals.forEach(p => {
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
  });
  ctx.fill();
  updatePetals();
}

function updatePetals() {
  petals.forEach(p => {
    p.y += p.d;
    p.x += Math.sin(p.angle) * 0.5;
    p.angle += 0.01;

    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawPetals, 33);

// Glitter cursor trail
document.addEventListener('mousemove', function(e) {
  const sparkle = document.createElement('div');
  sparkle.style.position = 'fixed';
  sparkle.style.width = '8px';
  sparkle.style.height = '8px';
  sparkle.style.borderRadius = '50%';
  sparkle.style.background = 'radial-gradient(#ffb6c1, transparent)';
  sparkle.style.left = e.pageX + 'px';
  sparkle.style.top = e.pageY + 'px';
  sparkle.style.pointerEvents = 'none';
  sparkle.style.zIndex = 9999;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 300);
});
