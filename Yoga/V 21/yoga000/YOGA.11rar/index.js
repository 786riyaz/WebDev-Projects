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


 // Intersection Observer for scroll animations
        const observera = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-delay') || '0';
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, parseFloat(delay) * 1000);
                    observera.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observera.observe(el);
        });

        // Add hover effect to cards
        document.querySelectorAll('.service-card1').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });



           
        // Animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const animateElements = document.querySelectorAll('.animate__animated');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const animation = entry.target.getAttribute('data-wow-delay') || '';
                        entry.target.style.animationDelay = animation;
                        entry.target.classList.add('animate__fadeInUp');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animateElements.forEach(element => {
                observer.observe(element);
            });
        });


// Replace the existing scroll event listener in the <script> tag with this:
  // Improved scroll animation handler
        document.addEventListener('DOMContentLoaded', function() {
            // Initial animations
            animateOnScroll();
            
            // Add scroll event listener
            window.addEventListener('scroll', animateOnScroll);
            
            // Run once on load
            window.addEventListener('load', animateOnScroll);
        });

        function animateOnScroll() {
            const elements = document.querySelectorAll(
                '.contact-header, .glass-container, .contact-info, .info-card12, .map-container'
            );
            
            const windowHeight = window.innerHeight;
            const triggerPoint = windowHeight * 0.8;
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                
                if (elementPosition < triggerPoint) {
                    element.classList.add('animate');
                    
                    // For info cards, stagger the animation
                    if (element.classList.contains('info-card12')) {
                        const index = Array.from(element.parentElement.children).indexOf(element);
                        element.style.transitionDelay = `${0.1 * index}s`;
                    }
                }
            });
        }



          document.addEventListener('DOMContentLoaded', function() {
            // Get all elements that need animation
            const sectionTitle = document.querySelector('.section-title');
            const sectionDescription = document.querySelector('.section-description');
            const decorativeLine = document.querySelector('.decorative-line');
            const featureItems = document.querySelectorAll('.feature-item');
            
            // Create intersection observer
            const observerss = new IntersectionObserver((entries) => {
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
                        observerss.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.3 // Trigger when 30% of element is visible
            });
            
            // Observe the features section
            const featuresSection = document.querySelector('.features-section');
            observerss.observe(featuresSection);
        });