document.addEventListener('DOMContentLoaded', function() {
    // Initialize particle canvas
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d', { alpha: false });
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
        { r: 129, g: 199, b: 132 }, // #81c784
        { r: 67, g: 160, b: 71 },   // #43a047
        { r: 27, g: 94, b: 32 },    // #1b5e20
        { r: 165, g: 214, b: 167 }, // #a5d6a7
    ];

    const particles = [];
    const particleCount = Math.min(100, Math.floor(window.innerWidth * window.innerHeight / 5000));
    const mouse = { x: null, y: null, isMoving: false, trail: [] };

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.6;
            this.vy = (Math.random() - 0.5) * 0.6;
            this.radius = Math.random() * 2 + 1;
            this.baseRadius = this.radius;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.alpha = Math.random() * 0.4 + 0.3;
            this.pulse = Math.random() * 0.02 + 0.01;
            this.phase = Math.random() * Math.PI * 2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.phase += this.pulse;
            this.alpha = Math.max(0.3, Math.min(0.7, this.alpha + Math.sin(this.phase) * 0.1));
            this.radius = this.baseRadius + Math.sin(this.phase * 2) * 0.3;

            if (mouse.x && mouse.y) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 120) {
                    const force = (120 - distance) / 120;
                    this.vx += (dx / distance) * force * 0.1 * (mouse.isMoving ? -1 : 0.5);
                    this.vy += (dy / distance) * force * 0.1 * (mouse.isMoving ? -1 : 0.5);
                    this.alpha = Math.min(1, this.alpha + force * 0.3);
                    this.radius = this.baseRadius + force * 1.5;
                }
            }

            if (this.x < 0 || this.x > canvas.width) {
                this.vx *= -0.9;
                this.x = Math.max(0, Math.min(this.x, canvas.width));
            }
            if (this.y < 0 || this.y > canvas.height) {
                this.vy *= -0.9;
                this.y = Math.max(0, Math.min(this.y, canvas.height));
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2);
            gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1)`);
            gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    function drawConnections() {
        ctx.strokeStyle = 'rgba(67, 160, 71, 0.15)';
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < Math.min(i + 10, particles.length); j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    ctx.globalAlpha = (1 - distance / 100) * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        ctx.globalAlpha = 1;
    }

    function animate() {
        ctx.fillStyle = 'rgba(232, 245, 233, 0.03)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        drawConnections();
        requestAnimationFrame(animate);
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Event listeners
    canvas.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.isMoving = true;
        setTimeout(() => mouse.isMoving = false, 100);
    });

    canvas.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
        mouse.isMoving = false;
    });

    canvas.addEventListener('touchmove', e => {
        e.preventDefault();
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.isMoving = true;
    }, { passive: false });

    canvas.addEventListener('touchend', () => {
        mouse.x = null;
        mouse.y = null;
        mouse.isMoving = false;
    });

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles.forEach(p => {
            p.x = Math.min(p.x, canvas.width);
            p.y = Math.min(p.y, canvas.height);
        });
    });

    // Start animation
    animate();

    // Animate slogan words
    const sloganWords = document.querySelectorAll('.slogan-word');
    sloganWords.forEach((word, index) => {
        word.style.animationDelay = `${0.3 + index * 0.3}s`;
    });

    // Animate philosophy pills
    const philosophyPills = document.querySelectorAll('.philosophy-pill');
    philosophyPills.forEach((pill, index) => {
        pill.style.animationDelay = `${0.5 + index * 0.2}s`;
    });
});