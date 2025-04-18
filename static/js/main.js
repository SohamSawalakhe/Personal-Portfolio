// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00ff9d'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff9d',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Configure skills section particles
particlesJS('skills-particles', {
    particles: {
        number: {
            value: 40,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#00ff9d', '#6c63ff', '#ff00ff']
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff9d',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 100,
                size: 5,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Animate hero section on load
window.addEventListener('load', () => {
    // Hero text animation
    anime.timeline({
        easing: 'easeOutExpo',
    })
        .add({
            targets: '.profile-img',
            opacity: [0, 1],
            scale: [0.5, 1],
            duration: 1000,
            delay: 300
        })
        .add({
            targets: '.hero h1',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
            delay: 300
        })
        .add({
            targets: '.hero p',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
            offset: '-=800'
        })
        .add({
            targets: '.tech-stack .tech-icon',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(100),
            duration: 800,
            offset: '-=800'
        })
        .add({
            targets: '.cta-buttons',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
            offset: '-=600'
        });

    // Animate skill categories on scroll
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        anime({
            targets: category,
            opacity: [0, 1],
            translateY: [50, 0],
            delay: index * 200,
            duration: 800,
            easing: 'easeOutExpo',
            autoplay: false
        });
    });

    // Animate project cards on scroll
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        anime({
            targets: card,
            opacity: [0, 1],
            translateX: [50, 0],
            delay: index * 200,
            duration: 800,
            easing: 'easeOutExpo',
            autoplay: false
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Timeline animation
            if (entry.target.classList.contains('timeline')) {
                anime({
                    targets: entry.target.querySelectorAll('.timeline-item'),
                    opacity: [0, 1],
                    translateX: [-50, 0],
                    delay: anime.stagger(200),
                    duration: 800,
                    easing: 'easeOutExpo'
                });
            }

            // Interest list animation
            if (entry.target.classList.contains('interests')) {
                anime({
                    targets: entry.target.querySelectorAll('.interest-list li'),
                    opacity: [0, 1],
                    translateX: [-30, 0],
                    delay: anime.stagger(100),
                    duration: 800,
                    easing: 'easeOutExpo'
                });
            }

            // Trigger animation for skill categories
            if (entry.target.classList.contains('skills-grid')) {
                const categories = entry.target.querySelectorAll('.skill-category');
                categories.forEach((category, index) => {
                    anime({
                        targets: category,
                        opacity: [0, 1],
                        translateY: [50, 0],
                        delay: index * 200,
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                });
            }

            // Trigger animation for project cards
            if (entry.target.classList.contains('project-grid')) {
                const cards = entry.target.querySelectorAll('.project-card');
                cards.forEach((card, index) => {
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        translateX: [50, 0],
                        delay: index * 200,
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                });
            }

            // Animate key highlights
            if (entry.target.classList.contains('key-highlights')) {
                anime({
                    targets: entry.target.querySelectorAll('.highlights-list li'),
                    translateX: [-50, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(100),
                    duration: 800,
                    easing: 'easeOutExpo'
                });
            }

            // Animate contact items
            if (entry.target.classList.contains('contact-info')) {
                anime({
                    targets: entry.target.querySelectorAll('.contact-item'),
                    translateY: [50, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(100),
                    duration: 800,
                    easing: 'easeOutExpo'
                });
            }

            // Animate contact form
            if (entry.target.classList.contains('contact-form')) {
                anime({
                    targets: entry.target,
                    translateX: [50, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutExpo'
                });
            }
        }
    });
}, observerOptions);

// Observe additional elements
document.querySelectorAll('.key-highlights, .contact-info, .contact-form, .timeline, .interests, .skills-grid, .project-grid').forEach(element => {
    observer.observe(element);
});

// Enhanced typewriter effect with cursor
const typewriter = (text, element, speed = 100) => {
    let i = 0;
    element.innerHTML = '<span class="typing-cursor">|</span>';
    const type = () => {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span class="typing-cursor">|</span>';
            i++;
            setTimeout(type, speed);
        } else {
            element.innerHTML = text + '<span class="typing-cursor blink">|</span>';
        }
    };
    type();
};

// Initialize typewriter effect
const subtitle = document.querySelector('.typewriter');
if (subtitle) {
    const text = subtitle.textContent;
    typewriter(text, subtitle);
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 25, 47, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 25, 47, 0.85)';
    }
});

// Initialize skill levels
document.querySelectorAll('.skill-level').forEach(level => {
    const skillValue = level.getAttribute('data-level');
    level.style.setProperty('--level', `${skillValue}%`);
});

// Animate skill items on scroll
const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            anime.timeline({
                targets: skillItems,
                delay: anime.stagger(100),
                duration: 800,
                easing: 'easeOutExpo'
            })
                .add({
                    translateY: [50, 0],
                    opacity: [0, 1]
                })
                .add({
                    targets: '.skill-level::before',
                    scaleX: [0, 1],
                    duration: 1000,
                    delay: anime.stagger(100)
                });

            observer.unobserve(entry.target);
        }
    });
};

const skillsObserver = new IntersectionObserver(animateSkills, {
    threshold: 0.2
});

document.querySelectorAll('.skill-category').forEach(category => {
    skillsObserver.observe(category);
});

// Add floating animation to skill items
const floatingAnimation = anime({
    targets: '.skill-item',
    translateY: [-5, 5],
    duration: 2000,
    direction: 'alternate',
    loop: true,
    delay: anime.stagger(100),
    easing: 'easeInOutSine',
    autoplay: true
});

// Handle contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);

        // Animate button during submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual form submission logic)
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.backgroundColor = '#00ff9d';
            contactForm.reset();

            setTimeout(() => {
                submitBtn.innerHTML = 'Send Message';
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
            }, 3000);
        }, 2000);
    });
}

// Enhanced hover effects for skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        anime({
            targets: item,
            scale: 1.1,
            duration: 300,
            easing: 'easeOutExpo'
        });
    });

    item.addEventListener('mouseleave', () => {
        anime({
            targets: item,
            scale: 1,
            duration: 300,
            easing: 'easeOutExpo'
        });
    });
});

// Animate section titles on scroll
document.querySelectorAll('.section-title').forEach(title => {
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 1000,
                    easing: 'easeOutExpo'
                });
                titleObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    titleObserver.observe(title);
});

// Certificate Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.cert-carousel');

    carousels.forEach(carousel => {
        let isDown = false;
        let startX;
        let scrollLeft;

        // Mouse events for smooth dragging
        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.style.cursor = 'grabbing';
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('touchmove', (e) => {
            if (e.touches.length !== 1) return;
            const x = e.touches[0].pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
    });

    // Auto-rotate certificates every 5 seconds
    const certCards = document.querySelectorAll('.cert-card');
    let autoRotateInterval;

    function startAutoRotate() {
        autoRotateInterval = setInterval(() => {
            certCards.forEach(card => {
                if (!card.matches(':hover')) {
                    const inner = card.querySelector('.cert-inner');
                    inner.style.transform = inner.style.transform === 'rotateY(180deg)'
                        ? 'rotateY(0deg)'
                        : 'rotateY(180deg)';
                }
            });
        }, 5000);
    }

    function stopAutoRotate() {
        clearInterval(autoRotateInterval);
    }

    // Start auto-rotation and handle visibility changes
    startAutoRotate();
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoRotate();
        } else {
            startAutoRotate();
        }
    });

    // Badge hover effects
    const badges = document.querySelectorAll('.badge-item');
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'translateY(-5px)';
        });

        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'translateY(0)';
        });
    });
}); 