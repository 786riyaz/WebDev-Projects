document.addEventListener('DOMContentLoaded', () => {
    // Initialize Vanta.js for hero section
    const vantaEffect = VANTA.CLOUDS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        speed: 0.8,
        skyColor: 0xe8f5e9,
        cloudColor: 0xc8e6c9,
        cloudShadowColor: 0xa5d6a7
    });

    // GSAP animations for hero section
    gsap.from(".hero-text", { opacity: 0, y: 50, duration: 1.5, ease: "power2.out" });
    gsap.from(".animate-btn", { opacity: 0, scale: 0.8, duration: 1, delay: 1.2, ease: "back.out(1.7)" });
    gsap.to(".animate-btn", {
        y: window.innerWidth <= 576 ? -10 : -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
    gsap.from(".animate-video", { opacity: 0, x: -50, duration: 1.5, ease: "power2.out" });
    gsap.from(".about-container", { opacity: 0, y: 50, duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: ".about-section", start: "top 80%" } });
    gsap.from(".Physiotherapy-content-layout", { opacity: 0, y: 50, duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: ".Physiotherapy-section", start: "top 80%" } });

    // Particle canvas setup for all three sections
    const canvases = [
        { id: 'particle-canvas', section: '.about-section' },
        { id: 'physio-particle-canvas', section: '.Physiotherapy-section' },
        { id: 'header-particle-canvas', section: '.main-header' }
    ];

    const settings = {
        gravity: false,
        attraction: true,
        chaos: false,
        colorScheme: 0,
        particleCount: Math.min(Math.floor(window.innerWidth * window.innerHeight / 3000), 1000),
        baseSpeed: 0.5,
        maxRadius: 4,
        minRadius: 1,
        mouseEffectDistance: 150,
        connectionDistance: 120,
        repulsionForce: 0.5,
        gravityForce: 0.05,
        chaosFactor: 0.2,
        trailLength: 40
    };

    const colorSchemes = [
        ['27, 94, 32', '43, 160, 71', '81, 199, 132', '165, 214, 167', '200, 230, 201', '232, 245, 233']
    ];

    const particleSystems = canvases.map(canvasConfig => {
        const canvas = document.getElementById(canvasConfig.id);
        const ctx = canvas.getContext('2d', { alpha: true });
        canvas.width = window.innerWidth;
        canvas.height = document.querySelector(canvasConfig.section).offsetHeight;

        const particles = [];
        const burstParticles = [];
        const attractionPoints = [];
        let lastAttractionPointTime = 0;
        const pointer = {
            x: null,
            y: null,
            active: false,
            lastX: null,
            lastY: null,
            speed: 0,
            trail: [],
            isDragging: false,
            dragStartX: null,
            dragStartY: null,
            vortexPower: 0
        };
        let lastTime = performance.now();
        let frameCount = 0;
        let fps = 60;
        let lastFpsUpdate = 0;
        let frameTimes = [];
        let animationFrameId;

        function initParticles(count = settings.particleCount) {
            particles.length = 0;
            for (let i = 0; i < count; i++) {
                const colorIndex = Math.floor(Math.random() * colorSchemes[settings.colorScheme].length);
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * (settings.maxRadius - settings.minRadius) + settings.minRadius,
                    baseRadius: Math.random() * (settings.maxRadius - settings.minRadius) + settings.minRadius,
                    color: `rgba(${colorSchemes[settings.colorScheme][colorIndex]}, ${Math.random() * 0.5 + 0.5})`,
                    baseColor: colorSchemes[settings.colorScheme][colorIndex],
                    speedX: (Math.random() * 2 - 1) * settings.baseSpeed,
                    speedY: (Math.random() * 2 - 1) * settings.baseSpeed,
                    originalSpeedX: (Math.random() * 2 - 1) * settings.baseSpeed,
                    originalSpeedY: (Math.random() * 2 - 1) * settings.baseSpeed,
                    lastX: 0,
                    lastY: 0,
                    life: Infinity,
                    mass: Math.random() * 0.5 + 0.5
                });
            }
        }

        function createBurst(x, y, count = 30, power = 3) {
            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * power + power / 2;
                const colorIndex = Math.floor(Math.random() * colorSchemes[settings.colorScheme].length);
                burstParticles.push({
                    x,
                    y,
                    radius: Math.random() * 3 + 2,
                    color: `rgba(${colorSchemes[settings.colorScheme][colorIndex]},0.8)`,
                    speedX: Math.cos(angle) * speed,
                    speedY: Math.sin(angle) * speed,
                    life: 60 + Math.random() * 40,
                    decay: 0.93 + Math.random() * 0.04
                });
            }
        }

        function createAttractionPoint(x, y) {
            attractionPoints.push({
                x,
                y,
                strength: 5,
                life: 300
            });
        }

        function animate(currentTime) {
            animationFrameId = requestAnimationFrame(animate);
            frameCount++;
            frameTimes.push(currentTime);
            if (frameTimes.length > 10) frameTimes.shift();
            if (currentTime - lastFpsUpdate >= 200) {
                const elapsed = (frameTimes[frameTimes.length - 1] - frameTimes[0]) || 1;
                fps = Math.round((frameTimes.length - 1) * 1000 / elapsed);
                lastFpsUpdate = currentTime;
            }

            ctx.fillStyle = 'rgba(245, 249, 245, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (pointer.active && pointer.x && pointer.y) {
                const section = document.querySelector(canvasConfig.section);
                const rect = section.getBoundingClientRect();
                const canvasY = pointer.y - rect.top;
                if (canvasY >= 0 && canvasY <= canvas.height) {
                    pointer.trail.push({
                        x: pointer.x,
                        y: canvasY,
                        age: 0,
                        power: pointer.vortexPower
                    });
                    if (pointer.lastX && pointer.lastY) {
                        const dx = pointer.x - pointer.lastX;
                        const dy = canvasY - pointer.lastY;
                        pointer.speed = Math.sqrt(dx * dx + dy * dy) * 0.5;
                        if (pointer.speed > 2) {
                            pointer.isDragging = true;
                            pointer.vortexPower = Math.min(pointer.vortexPower + 0.1, 1);
                        } else {
                            pointer.isDragging = false;
                            pointer.vortexPower = Math.max(pointer.vortexPower - 0.02, 0);
                        }
                    }
                    pointer.lastX = pointer.x;
                    pointer.lastY = canvasY;
                    if (currentTime - lastAttractionPointTime > 50) {
                        createAttractionPoint(pointer.x, canvasY);
                        lastAttractionPointTime = currentTime;
                    }
                }
            }

            pointer.trail = pointer.trail.filter(t => t.age++ < settings.trailLength);
            for (let i = 0; i < pointer.trail.length; i++) {
                const t = pointer.trail[i];
                const opacity = (1 - t.age / settings.trailLength) * 0.6;
                const size = 8 * (1 - t.age / settings.trailLength) * (1 + t.power);
                const gradient = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, size);
                gradient.addColorStop(0, `rgba(67, 160, 71, ${opacity * 0.7})`);
                gradient.addColorStop(1, `rgba(200, 230, 201, ${opacity * 0.3})`);
                ctx.beginPath();
                ctx.arc(t.x, t.y, size, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }

            for (let i = attractionPoints.length - 1; i >= 0; i--) {
                const point = attractionPoints[i];
                point.life--;
                const pulseSize = 10 + Math.sin(currentTime * 0.01) * 5;
                ctx.beginPath();
                ctx.arc(point.x, point.y, pulseSize * (point.life / 300), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(81, 199, 132, ${point.life / 300 * 0.2})`;
                ctx.fill();
                if (point.life <= 0) {
                    attractionPoints.splice(i, 1);
                }
            }

            particles.forEach((particle, index) => {
                particle.lastX = particle.x;
                particle.lastY = particle.y;
                if (pointer.active && pointer.x && pointer.y) {
                    const section = document.querySelector(canvasConfig.section);
                    const rect = section.getBoundingClientRect();
                    const canvasY = pointer.y - rect.top;
                    const dx = pointer.x - particle.x;
                    const dy = canvasY - particle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < settings.mouseEffectDistance && canvasY >= 0 && canvasY <= canvas.height) {
                        const force = (settings.mouseEffectDistance - distance) / settings.mouseEffectDistance;
                        const angle = Math.atan2(dy, dx);
                        const easing = 1 - Math.pow(1 - force, 3);
                        if (pointer.isDragging && pointer.vortexPower > 0.3) {
                            const vortexAngle = angle + Math.PI / 2;
                            const vortexForce = force * pointer.vortexPower * 5;
                            particle.speedX += Math.cos(vortexAngle) * vortexForce;
                            particle.speedY += Math.sin(vortexAngle) * vortexForce;
                        } else {
                            const direction = pointer.speed > 10 ? -1 : 1;
                            particle.speedX += direction * Math.cos(angle) * easing * settings.repulsionForce * (1 + pointer.speed / 50);
                            particle.speedY += direction * Math.sin(angle) * easing * settings.repulsionForce * (1 + pointer.speed / 50);
                        }
                        particle.radius = Math.min(particle.baseRadius * (1 + easing * 0.8), settings.maxRadius * 2);
                        const [r, g, b] = particle.baseColor.split(',');
                        particle.color = `rgba(${r},${g},${b},${0.5 + easing * 0.5})`;
                    } else {
                        particle.speedX += (particle.originalSpeedX - particle.speedX) * 0.05;
                        particle.speedY += (particle.originalSpeedY - particle.speedY) * 0.05;
                        particle.radius += (particle.baseRadius - particle.radius) * 0.1;
                        const [r, g, b] = particle.baseColor.split(',');
                        particle.color = `rgba(${r},${g},${b},${Math.random() * 0.4 + 0.4})`;
                    }
                }

                attractionPoints.forEach(point => {
                    const dx = point.x - particle.x;
                    const dy = point.y - particle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 200) {
                        const force = (200 - distance) / 200 * (point.life / 300) * 0.5;
                        const angle = Math.atan2(dy, dx);
                        particle.speedX += Math.cos(angle) * force;
                        particle.speedY += Math.sin(angle) * force;
                    }
                });

                particle.x += particle.speedX;
                particle.y += particle.speedY;
                const bounceDamping = 0.8;
                if (particle.x < 0) {
                    particle.speedX = -particle.speedX * bounceDamping;
                    particle.x = 0;
                } else if (particle.x > canvas.width) {
                    particle.speedX = -particle.speedX * bounceDamping;
                    particle.x = canvas.width;
                }
                if (particle.y < 0) {
                    particle.speedY = -particle.speedY * bounceDamping;
                    particle.y = 0;
                } else if (particle.y > canvas.height) {
                    particle.speedY = -particle.speedY * bounceDamping;
                    particle.y = canvas.height;
                }

                const glow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius * 2);
                glow.addColorStop(0, particle.color);
                glow.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color.replace(/[\d\.]+\)$/, '0.9)');
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                for (let j = i + 1; j < Math.min(i + 20, particles.length); j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < settings.connectionDistance) {
                        const opacity = 1 - distance / settings.connectionDistance;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(43, 160, 71, ${opacity * 0.3})`;
                        ctx.lineWidth = 0.5 + opacity * 1.5;
                        ctx.stroke();
                    }
                }
            }

            for (let i = burstParticles.length - 1; i >= 0; i--) {
                const p = burstParticles[i];
                p.x += p.speedX;
                p.y += p.speedY;
                p.life--;
                p.radius *= p.decay;
                const burstGlow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
                burstGlow.addColorStop(0, p.color);
                burstGlow.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
                ctx.fillStyle = burstGlow;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color.replace(/[\d\.]+\)$/, '0.8)');
                ctx.fill();
                if (p.life <= 0) {
                    burstParticles.splice(i, 1);
                }
            }
        }

        function updatePointer(e, active) {
            pointer.x = e.clientX || (e.touches && e.touches[0].clientX);
            pointer.y = e.clientY || (e.touches && e.touches[0].clientY);
            pointer.active = active;
            if (!active) {
                pointer.isDragging = false;
                pointer.vortexPower = 0;
            }
        }

        window.addEventListener('mousemove', e => updatePointer(e, true));
        window.addEventListener('touchmove', e => {
            e.preventDefault();
            updatePointer(e, true);
        }, { passive: false });
        window.addEventListener('mouseout', () => updatePointer({}, false));
        window.addEventListener('touchend', () => updatePointer({}, false));
        window.addEventListener('mousedown', (e) => {
            const section = document.querySelector(canvasConfig.section);
            const rect = section.getBoundingClientRect();
            const canvasY = e.clientY - rect.top;
            if (canvasY >= 0 && canvasY <= canvas.height) {
                pointer.dragStartX = e.clientX;
                pointer.dragStartY = canvasY;
            }
        });
        window.addEventListener('mouseup', (e) => {
            const section = document.querySelector(canvasConfig.section);
            const rect = section.getBoundingClientRect();
            const canvasY = e.clientY - rect.top;
            if (pointer.dragStartX !== null && Math.abs(e.clientX - pointer.dragStartX) < 5 && Math.abs(canvasY - pointer.dragStartY) < 5 && canvasY >= 0 && canvasY <= canvas.height) {
                createBurst(e.clientX, canvasY);
            }
            pointer.dragStartX = null;
            pointer.dragStartY = null;
        });
        window.addEventListener('touchstart', e => {
            const section = document.querySelector(canvasConfig.section);
            const rect = section.getBoundingClientRect();
            const canvasY = e.touches[0].clientY - rect.top;
            if (canvasY >= 0 && canvasY <= canvas.height) {
                e.preventDefault();
                createBurst(e.touches[0].clientX, canvasY, 20, 2);
            }
        }, { passive: false });

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = document.querySelector(canvasConfig.section).offsetHeight;
            particles.forEach(p => {
                p.x = Math.min(p.x, canvas.width);
                p.y = Math.min(p.y, canvas.height);
            });
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !canvasConfig.isVisible) {
                    canvasConfig.isVisible = true;
                    initParticles();
                    animationFrameId = requestAnimationFrame(animate);
                } else if (!entry.isIntersecting && canvasConfig.isVisible) {
                    canvasConfig.isVisible = false;
                    cancelAnimationFrame(animationFrameId);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(document.querySelector(canvasConfig.section));
        canvasConfig.isVisible = false;

        return { canvas, initParticles, animate, observer };
    });

    // Features section animations
    const sectionTitle = document.querySelector('.section-title');
    const sectionDescription = document.querySelector('.section-description');
    const decorativeLine = document.querySelector('.decorative-line');
    const featureItems = document.querySelectorAll('.feature-item');
    const featuresObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sectionTitle.classList.add('animate');
                sectionDescription.classList.add('animate');
                decorativeLine.classList.add('animate');
                featureItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, index * 200);
                });
                featuresObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    featuresObserver.observe(document.querySelector('.features-section'));

    // Main header animation
    const mainHeader = document.querySelector('.main-title');
    const mainHeaderObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                mainHeader.classList.add('animate');
                mainHeaderObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    mainHeaderObserver.observe(mainHeader);

    // Physiotherapy section title animation
    const physioTitle = document.querySelector('.Physiotherapy-section .section-title');
    const physioSubtitle = document.querySelector('.Physiotherapy-section .section-subtitle');
    const physioObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                physioTitle.classList.add('animate');
                physioSubtitle.classList.add('animate');
                physioObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    physioObserver.observe(document.querySelector('.Physiotherapy-section'));
});

// Cube slider functionality
let currentX = 0;
let currentY = 0;
const cube = document.getElementById('cube');
const dynamicTitle = document.getElementById('dynamic-title');
const dynamicSubtitle = document.getElementById('dynamic-subtitle');

const services = {
    'Ortho & Sports': {
        title: 'Ortho & Sports',
        description: 'Specialized physiotherapy for musculoskeletal injuries, sports rehabilitation, and performance enhancement through targeted exercises and manual therapy.'
    },
    'Cardio-Respiratory': {
        title: 'Cardio-Respiratory',
        description: 'Therapies to improve heart and lung function, manage chronic respiratory conditions, and enhance endurance through breathing exercises and conditioning.'
    },
    'Neuro & Pediatric': {
        title: 'Neuro & Pediatric',
        description: 'Neurological rehabilitation for conditions like stroke or Parkinson’s, and pediatric care for developmental disorders, promoting mobility and independence.'
    },
    'Women Health': {
        title: 'Women’s Health',
        description: 'Tailored physiotherapy for women’s needs, including prenatal and postnatal care, pelvic floor therapy, and management of conditions like endometriosis.'
    },
    'fitness-yoga': {
        title: 'Fitness Yoga',
        description: 'A dynamic, fitness-based approach to vinyasa-style yoga that builds strength, flexibility, and mental resilience through challenging sequences.'
    },
    'personal-yoga-training': {
        title: 'Personal Yoga Training',
        description: 'One-on-one yoga sessions customized to your goals, focusing on alignment, breathwork, and mindfulness to enhance physical and mental well-being.'
    }
};

function updateServiceDisplay() {
    const visibleFace = document.querySelector('.cube-face[style*="translateZ(200px)"]') || document.querySelector('.cube-face');
    if (visibleFace) {
        const serviceName = visibleFace.getAttribute('data-service');
        const service = services[serviceName];
        if (service) {
            dynamicTitle.textContent = service.title;
            dynamicSubtitle.textContent = service.description;
        }
    }
}

function rotateCubeLeft() {
    currentY -= 90;
    cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
    setTimeout(updateServiceDisplay, 500);
}

function rotateCubeRight() {
    currentY += 90;
    cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
    setTimeout(updateServiceDisplay, 500);
}

window.rotateCubeLeft = rotateCubeLeft;
window.rotateCubeRight = rotateCubeRight;

// Initialize cube display
updateServiceDisplay();