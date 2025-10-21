 // Debounced function for scroll events
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        let lastScroll = 0;

        // Parallax and navbar scroll handler
        window.addEventListener('scroll', debounce(() => {
            const scrolled = window.pageYOffset;

            // Navbar scroll effect
            if (scrolled > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Parallax effect for floating leaves
            const leaves = document.querySelectorAll('.floating-leaf');
            leaves.forEach((leaf, index) => {
                const speed = window.innerWidth < 576 ? 0.2 + (index * 0.05) : 0.4 + (index * 0.1);
                leaf.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }, 50));

        // Slogan word hover effects
        document.querySelectorAll('.slogan-word').forEach(word => {
            word.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
            word.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Philosophy pill click animation
        document.querySelectorAll('.philosophy-pill').forEach(pill => {
            pill.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-2px)';
                }, 150);
            });
        });

        // Yoga pose hover animation
        const yogaPose = document.querySelector('.yoga-pose');
        const yogaContainer = document.querySelector('.yoga-figure-container');
        
        yogaContainer.addEventListener('mouseenter', () => {
            yogaPose.style.animation = 'pulsePose 1.5s ease-in-out infinite alternate';
        });
        
        yogaContainer.addEventListener('mouseleave', () => {
            yogaPose.style.animation = 'pulsePose 2.5s ease-in-out infinite alternate';
        });


         // Enhanced Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '-10%',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        document.querySelectorAll('.section-title, .section-subtitle, .service-card').forEach(element => {
            observer.observe(element);
        });

        // Enhanced card interactions with 3D tilt effect
        const cards = document.querySelectorAll('.service-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const rotateX = (y / rect.height) * 10;
                const rotateY = (x / rect.width) * -10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            });
        });

        // Button click animations
        document.querySelectorAll('.btn-primary-custom, .btn-secondary-custom').forEach(button => {
            button.addEventListener('click', function(e) {
                if (this.classList.contains('btn-primary-custom')) {
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
                }
            });
        });

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