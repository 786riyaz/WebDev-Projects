document.addEventListener('DOMContentLoaded', () => {
// Initialize Vanta.js for hero section
const vantaEffect = VANTA.CLOUDS({
el: "#vanta-bg",
mouseControls: true,
touchControls: true,
gyroControls: false,
minHeight: 200.00,
minWidth: 200.00,
speed: 0.8
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
// Particle canvas for about section
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d', { alpha: true });
// Initialize canvas
canvas.width = window.innerWidth;
canvas.height = document.querySelector('.about-section').offsetHeight;
// Simulation settings
const settings = {
gravity: false,
attraction: true,
chaos: false,
colorScheme: 0,
particleCount: Math.min(Math.floor(window.innerWidth * canvas.height / 3000), 1000),
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
const speed = Math.random() * power + power/2;
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
// Calculate FPS
frameCount++;
frameTimes.push(currentTime);
if (frameTimes.length > 10) frameTimes.shift();
if (currentTime - lastFpsUpdate >= 200) {
const elapsed = (frameTimes[frameTimes.length-1] - frameTimes[0]) || 1;
fps = Math.round((frameTimes.length-1) * 1000 / elapsed);
lastFpsUpdate = currentTime;
}
// Clear canvas with very light overlay for trails
ctx.fillStyle = 'rgba(245, 249, 245, 0.2)';
ctx.fillRect(0, 0, canvas.width, canvas.height);
// Update pointer trail
if (pointer.active && pointer.x && pointer.y) {
const aboutSection = document.querySelector('.about-section');
const rect = aboutSection.getBoundingClientRect();
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
// Limit trail length
pointer.trail = pointer.trail.filter(t => t.age++ < settings.trailLength);
// Draw trail with green gradient
for (let i = 0; i < pointer.trail.length; i++) {
const t = pointer.trail[i];
const opacity = (1 - t.age / settings.trailLength) * 0.6;
const size = 8 * (1 - t.age / settings.trailLength) * (1 + t.power);
const gradient = ctx.createRadialGradient(
    t.x, t.y, 0, 
    t.x, t.y, size
);
gradient.addColorStop(0, `rgba(67, 160, 71, ${opacity * 0.7})`);
gradient.addColorStop(1, `rgba(200, 230, 201, ${opacity * 0.3})`);
ctx.beginPath();
ctx.arc(t.x, t.y, size, 0, Math.PI * 2);
ctx.fillStyle = gradient;
ctx.fill();
}
// Update and draw attraction points
for (let i = attractionPoints.length - 1; i >= 0; i--) {
const point = attractionPoints[i];
point.life--;
const pulseSize = 10 + Math.sin(currentTime * 0.01) * 5;
ctx.beginPath();
ctx.arc(point.x, point.y, pulseSize * (point.life/300), 0, Math.PI * 2);
ctx.fillStyle = `rgba(81, 199, 132, ${point.life/300 * 0.2})`;
ctx.fill();
if (point.life <= 0) {
    attractionPoints.splice(i, 1);
}
}
// Update and draw particles
particles.forEach((particle, index) => {
particle.lastX = particle.x;
particle.lastY = particle.y;
// Mouse interaction
if (pointer.active && pointer.x && pointer.y) {
    const aboutSection = document.querySelector('.about-section');
    const rect = aboutSection.getBoundingClientRect();
    const canvasY = pointer.y - rect.top;
    const dx = pointer.x - particle.x;
    const dy = canvasY - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < settings.mouseEffectDistance && canvasY >= 0 && canvasY <= canvas.height) {
        const force = (settings.mouseEffectDistance - distance) / settings.mouseEffectDistance;
        const angle = Math.atan2(dy, dx);
        const easing = 1 - Math.pow(1 - force, 3);
        if (pointer.isDragging && pointer.vortexPower > 0.3) {
            const vortexAngle = angle + Math.PI/2;
            const vortexForce = force * pointer.vortexPower * 5;
            particle.speedX += Math.cos(vortexAngle) * vortexForce;
            particle.speedY += Math.sin(vortexAngle) * vortexForce;
        } else {
            const direction = pointer.speed > 10 ? -1 : 1;
            particle.speedX += direction * Math.cos(angle) * easing * settings.repulsionForce * (1 + pointer.speed/50);
            particle.speedY += direction * Math.sin(angle) * easing * settings.repulsionForce * (1 + pointer.speed/50);
        }
        particle.radius = Math.min(particle.baseRadius * (1 + easing * 0.8), settings.maxRadius * 2);
        const [r,g,b] = particle.baseColor.split(',');
        particle.color = `rgba(${r},${g},${b},${0.5 + easing * 0.5})`;
    } else {
        particle.speedX += (particle.originalSpeedX - particle.speedX) * 0.05;
        particle.speedY += (particle.originalSpeedY - particle.speedY) * 0.05;
        particle.radius += (particle.baseRadius - particle.radius) * 0.1;
        const [r,g,b] = particle.baseColor.split(',');
        particle.color = `rgba(${r},${g},${b},${Math.random() * 0.4 + 0.4})`;
    }
}
// Attraction to points
attractionPoints.forEach(point => {
    const dx = point.x - particle.x;
    const dy = point.y - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 200) {
        const force = (200 - distance) / 200 * (point.life/300) * 0.5;
        const angle = Math.atan2(dy, dx);
        particle.speedX += Math.cos(angle) * force;
        particle.speedY += Math.sin(angle) * force;
    }
});
// Update position
particle.x += particle.speedX;
particle.y += particle.speedY;
// Bounce off walls
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
// Draw particle with glow
const glow = ctx.createRadialGradient(
    particle.x, particle.y, 0,
    particle.x, particle.y, particle.radius * 2
);
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
// Draw connections
for (let i = 0; i < particles.length; i++) {
const p1 = particles[i];
for (let j = i + 1; j < Math.min(i + 20, particles.length); j++) {
    const p2 = particles[j];
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < settings.connectionDistance) {
        const opacity = 1 - distance/settings.connectionDistance;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(43, 160, 71, ${opacity * 0.3})`;
        ctx.lineWidth = 0.5 + opacity * 1.5;
        ctx.stroke();
    }
}
}
// Update and draw burst particles
for (let i = burstParticles.length - 1; i >= 0; i--) {
const p = burstParticles[i];
p.x += p.speedX;
p.y += p.speedY;
p.life--;
p.radius *= p.decay;
const burstGlow = ctx.createRadialGradient(
    p.x, p.y, 0,
    p.x, p.y, p.radius * 3
);
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
// Event handlers for particle canvas
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
const aboutSection = document.querySelector('.about-section');
const rect = aboutSection.getBoundingClientRect();
const canvasY = e.clientY - rect.top;
if (canvasY >= 0 && canvasY <= canvas.height) {
pointer.dragStartX = e.clientX;
pointer.dragStartY = canvasY;
}
});
window.addEventListener('mouseup', (e) => {
const aboutSection = document.querySelector('.about-section');
const rect = aboutSection.getBoundingClientRect();
const canvasY = e.clientY - rect.top;
if (pointer.dragStartX !== null && 
Math.abs(e.clientX - pointer.dragStartX) < 5 && 
Math.abs(canvasY - pointer.dragStartY) < 5 &&
canvasY >= 0 && canvasY <= canvas.height) {
createBurst(e.clientX, canvasY);
}
pointer.dragStartX = null;
pointer.dragStartY = null;
});
window.addEventListener('touchstart', e => {
const aboutSection = document.querySelector('.about-section');
const rect = aboutSection.getBoundingClientRect();
const canvasY = e.touches[0].clientY - rect.top;
if (canvasY >= 0 && canvasY <= canvas.height) {
e.preventDefault();
createBurst(e.touches[0].clientX, canvasY, 20, 2);
}
}, { passive: false });
window.addEventListener('resize', () => {
canvas.width = window.innerWidth;
canvas.height = document.querySelector('.about-section').offsetHeight;
particles.forEach(p => {
p.x = Math.min(p.x, canvas.width);
p.y = Math.min(p.y, canvas.height);
});
});
// Scroll-based toggle for particle animation
let isAboutSectionVisible = false;
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting && !isAboutSectionVisible) {
    isAboutSectionVisible = true;
    initParticles();
    animationFrameId = requestAnimationFrame(animate);
} else if (!entry.isIntersecting && isAboutSectionVisible) {
    isAboutSectionVisible = false;
    cancelAnimationFrame(animationFrameId);
}
});
}, { threshold: 0.1 });
observer.observe(document.querySelector('.about-section'));
});
document.addEventListener('DOMContentLoaded', function() {
// Get all elements that need animation
const sectionTitle = document.querySelector('.section-title');
const sectionDescription = document.querySelector('.section-description');
const decorativeLine = document.querySelector('.decorative-line');
const featureItems = document.querySelectorAll('.feature-item');
// Create intersection observer
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
    // When section comes into view, add animate class to elements
    sectionTitle.classList.add('animate');
    sectionDescription.classList.add('animate');
    decorativeLine.classList.add('animate');
    
    // Animate feature items with staggered delay
    featureItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animate');
        }, index * 200); // 200ms delay between each item
    });
    
    // Unobserve after animation to prevent retriggering
    observer.unobserve(entry.target);
}
});
}, {
threshold: 0.3 // Trigger when 30% of element is visible
});
// Observe the features section
const featuresSection = document.querySelector('.features-section');
observer.observe(featuresSection);
});
let currentX = 0;
let currentY = 0;
const cube = document.getElementById('cube');
const dynamicTitle = document.getElementById('dynamic-title');
const dynamicSubtitle = document.getElementById('dynamic-subtitle');
// Map cube faces to yoga services
const services = {
'Ortho & Sports': {
title: 'Ortho & Sports',
description: 'A dynamic, fitness-based approach to vinyasa-style yoga that builds strength, flexibility, and mental resilience through challenging sequences.'
},
'Cardio-Respiratory': {
title: 'Cardio-Respiratory',
description: 'Fun and engaging yoga classes designed specifically for children, promoting creativity, physical development, and emotional balance.'
},
'Neuro & Pediatric': {
title: 'Neuro & Pediatric',
description: 'Experience yoga like never before with silk hammocks that support your body in gravity-defying poses and deep stretches.'
},
'Women Health': {
title: 'Women Health',
description: 'Specialized yoga practice to support women through pregnancy and postpartum recovery with safe, gentle movements.'
},
};
// Map rotation angles to cube faces
const angleToFace = {
0: 'Ortho & Sports', // front
90: 'Cardio-Respiratory', // right
180: 'Neuro & Pediatric', // back
270: 'Women Health', // left
360: 'Ortho & Sports', // front (full rotation)
'-90': 'Women Health', // left
'-180': 'Neuro & Pediatric', // back
'-270': 'Cardio-Respiratory', // right
'-360': 'Ortho & Sports' // front
};
function updateCubeTransform() {
cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
updateHeader();
}
function updateHeader() {
// Normalize currentY to 0-360 range
let normalizedY = ((currentY % 360) + 360) % 360;
if (currentY < 0) {
normalizedY = (currentY % 360 === 0) ? 0 : 360 + (currentY % 360);
}
const serviceKey = angleToFace[normalizedY] || 'Ortho & Sports'; // Default to Ortho & Sports
const service = services[serviceKey];
// Animate title and subtitle change
gsap.to(dynamicTitle, {
opacity: 0,
y: -20,
duration: 0.3,
onComplete: () => {
dynamicTitle.textContent = service.title;
gsap.to(dynamicTitle, {
    opacity: 1,
    y: 0,
    duration: 0.3
});
}
});
gsap.to(dynamicSubtitle, {
opacity: 0,
y: 20,
duration: 0.3,
onComplete: () => {
dynamicSubtitle.textContent = service.description;
gsap.to(dynamicSubtitle, {
    opacity: 1,
    y: 0,
    duration: 0.3
});
}
});
}
function rotateCubeLeft() {
currentY += 90; // Rotate left by 90 degrees
updateCubeTransform();
}
function rotateCubeRight() {
currentY -= 90; // Rotate right by 90 degrees
updateCubeTransform();
}
// Initialize cube position
updateCubeTransform();
// Auto-rotate cube every 5 seconds
setInterval(() => {
rotateCubeLeft();
}, 5000);
// GSAP animations for initial load
gsap.from(".main-title", {
opacity: 0,
y: 50,
scale: 0.9,
duration: 1.5,
ease: "power2.out",
onComplete: () => {
document.querySelector(".main-title").classList.add("animate");
}
});
gsap.from(".section-title", {
scrollTrigger: {
trigger: ".Physiotherapy-section",
start: "top 80%",
toggleActions: "play none none none"
},
opacity: 0,
y: -50,
duration: 1.2,
onComplete: () => {
document.querySelector(".section-title").classList.add("animate");
}
});
gsap.from(".section-subtitle", {
scrollTrigger: {
trigger: ".Physiotherapy-section",
start: "top 80%",
toggleActions: "play none none none"
},
opacity: 0,
y: 30,
duration: 1,
delay: 0.5,
onComplete: () => {
document.querySelector(".section-subtitle").classList.add("animate");
}
});
// Button click animations
// Add ripple animation
const style = document.createElement('style');
style.textContent = `
@keyframes ripple {
to {
transform: scale(20);
opacity: 0;
}
}
`;
document.head.appendChild(style);
const videoList = [
{
src: "../YOGA/image/0.mp4",
thumb: "../YOGA/image/logo.jpg",
title: "Power Yoga",
desc: "Specialized Yoga for musculoskeletal injuries and sports performance enhancement."
},
{
src: "../YOGA/image/1.mp4",
thumb: "../YOGA/image/logo.jpg",
title: "Kids Yoga",
desc: "Therapies to improve heart and lung function through targeted exercises."
},
{
src: "../YOGA/image/2.mp4",
thumb: "../YOGA/image/logo.jpg",
title: "Aerial Yoga",
desc: "Neurological and pediatric Yoga for developmental and neurological conditions."
},
{
src: "../YOGA/image/3.mp4",
thumb: "../YOGA/image/logo.jpg",
title: "Pre & Post Natal Yoga",
desc: "Specialized Yoga for women’s health issues, including prenatal and postpartum care."
},
{
src: "../YOGA/image/4.mp4",
thumb: "../YOGA/image/logo.jpg",
title: "Fitness Yoga",
desc: "Combines Yoga with fitness training for overall health and mobility."
},
{
src: "../YOGA/image/4.mp4",
thumb: "../YOGA/image/logo.jpg",
title: "Fitness Yoga",
desc: "Combines Yoga with fitness training for overall health and mobility."
}

];
let currentVideoIndex = 0;
const backgroundVideo = document.getElementById("background-video");
const thumbnailsDiv = document.getElementById("thumbnails");
const dynamicTitle1 = document.getElementById("dynamic-title");
const dynamicSubtitle1 = document.getElementById("dynamic-subtitle");
function createThumbnails() {
thumbnailsDiv.innerHTML = '';
videoList.forEach((video, index) => {
if (index !== currentVideoIndex) {
const card = document.createElement("div");
card.className = "video-card";
const thumb = document.createElement("img");
thumb.src = video.thumb;
thumb.className = "thumb";
thumb.alt = video.title;
const infoDiv = document.createElement("div");
infoDiv.className = "video-info";
const title = document.createElement("p");
title.className = "video-title";
title.textContent = video.title;
const desc = document.createElement("p");
desc.className = "video-desc";
desc.textContent = video.desc;
infoDiv.appendChild(title);
infoDiv.appendChild(desc);
card.appendChild(thumb);
card.appendChild(infoDiv);
card.addEventListener("click", () => switchVideo(index));
thumbnailsDiv.appendChild(card);
}
});
}
function switchVideo(newIndex) {
if (newIndex === currentVideoIndex) return;
currentVideoIndex = newIndex;
backgroundVideo.classList.remove('zoom-animation');
void backgroundVideo.offsetWidth;
backgroundVideo.classList.add('zoom-animation');
backgroundVideo.src = videoList[newIndex].src;
backgroundVideo.load();
backgroundVideo.play();
gsap.to(dynamicTitle1, {
opacity: 0,
y: -20,
duration: 0.3,
onComplete: () => {
dynamicTitle1.textContent = videoList[newIndex].title;
gsap.to(dynamicTitle1, {
opacity: 1,
y: 0,
duration: 0.3
});
}
});
gsap.to(dynamicSubtitle1, {
opacity: 0,
y: 20,
duration: 0.3,
onComplete: () => {
dynamicSubtitle1.textContent = videoList[newIndex].desc;
gsap.to(dynamicSubtitle1, {
opacity: 1,
y: 0,
duration: 0.3
});
}
});
createThumbnails();
}
window.addEventListener("DOMContentLoaded", () => {
backgroundVideo.src = videoList[currentVideoIndex].src;
backgroundVideo.load();
backgroundVideo.play();
dynamicTitle1.textContent = videoList[currentVideoIndex].title;
dynamicSubtitle1.textContent = videoList[currentVideoIndex].desc;
createThumbnails();
});
// GSAP animations for initial load
gsap.from(".Yoga-main-title", {
opacity: 0,
y: 50,
scale: 0.9,
duration: 1.5,
ease: "power2.out",
onComplete: () => {
document.querySelector(".Yoga-main-title").classList.add("animate");
}
});
gsap.from(".section-title", {
scrollTrigger: {
trigger: ".Yoga-section",
start: "top 80%",
toggleActions: "play none none none"
},
opacity: 0,
y: -50,
duration: 1.2,
onComplete: () => {
document.querySelector(".section-title").classList.add("animate");
}
});
gsap.from(".section-subtitle", {
scrollTrigger: {
trigger: ".Yoga-section",
start: "top 80%",
toggleActions: "play none none none"
},
opacity: 0,
y: 30,
duration: 1,
delay: 0.5,
onComplete: () => {
document.querySelector(".section-subtitle").classList.add("animate");
}
});
gsap.from(".video-card", {
scrollTrigger: {
trigger: ".video-thumbnails",
start: "top 80%",
toggleActions: "play none none none"
},
opacity: 0,
y: 30,
stagger: 0.1,
duration: 0.5,
ease: "power2.out"
});
gsap.from(".service-detail-item", {
scrollTrigger: {
trigger: ".service-details",
start: "top 80%",
toggleActions: "play none none none"
},
opacity: 0,
y: 30,
stagger: 0.1,
duration: 0.5,
ease: "power2.out",
onComplete: function () {
document.querySelectorAll(".service-detail-item").forEach(item => item.classList.add("animate"));
}
});
// Button click animations
document.querySelectorAll('.btn-primary-custom').forEach(button => {
button.addEventListener('click', function (e) {
e.preventDefault();
const ripple = document.createElement('span');
ripple.style.position = 'absolute';
ripple.style.borderRadius = '50%';
ripple.style.background = 'rgba(255,255,255,0.3)';
ripple.style.transform = 'scale(0)';
ripple.style.animation = 'ripple 0.6s linear';
ripple.style.left = '50%';
ripple.style.top = '50%';
ripple.style.pointerEvents = 'none';
ripple.style.width = '10px';
ripple.style.height = '10px';
this.appendChild(ripple);
setTimeout(() => {
ripple.remove();
}, 600);
});
});
// Add ripple animation
const style1 = document.createElement('style');
style1.textContent = `
@keyframes ripple {
to {
transform: scale(20);
opacity: 0;
}
}
`;
document.head.appendChild(style1);