const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

// Create an array of drops for each column, with random start times
const drops = Array.from({ length: columns }, () => ({
    y: Math.random() * canvas.height / fontSize,
    speed: Math.random() * 5 + 2 // Random speed for each line
}));

// Function to draw the matrix effect
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Semi-transparent background for trailing effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff00'; // Matrix green
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((drop, i) => {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drop.y * fontSize);

        // Move drop down
        drop.y += drop.speed;

        // If the drop goes off screen, reset it with a random position
        if (drop.y * fontSize > canvas.height && Math.random() > 0.95) {
            drop.y = 0;
            drop.speed = Math.random() * 5 + 2; // Reset speed randomly
        }
    });
}

// Loop the drawing function to animate the matrix effect
setInterval(draw, 50);

// Make the canvas responsive to window size changes
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops.length = Math.floor(canvas.width / fontSize);
});
