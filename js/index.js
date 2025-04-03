
onload = function () {
    // === DOM ELEMENTS ===
    let hamburger = document.querySelector('.hamburger');
    let navMenu = document.querySelector('.nav-menu');
    let scrollTopBtn = document.querySelector('.scroll-top');
    let themeToggle = document.getElementById('theme-toggle');
    let contactForm = document.querySelector("#contactForm");

    // === FUNCTION CALLS ===
    initMobileMenu(hamburger, navMenu);
    initStickyHeader();
    initScrollTop(scrollTopBtn);
    initSkillsAnimation();
    initScrollAnimations();
    initScrollProgress();
    initContactForm();
    initParticles();
    initProjectShowcase();
    initButtonEffects();

};
// ======================
// === FUNCTIONS ===
// ======================

// === MOBILE MENU ===
function initMobileMenu(hamburger, navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// === STICKY HEADER ===
function initStickyHeader() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('#header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });
}

// === SCROLL TO TOP ===
function initScrollTop(scrollTopBtn) {
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('show', window.scrollY > 500);
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// === SKILLS ANIMATION ===
function initSkillsAnimation() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                const progress = entry.target.querySelector('.skill-progress');
                const level = entry.target.getAttribute('data-level') || "85";
                progress.style.width = level + '%';
            }
        });
    }, { threshold: 0.5 });

    skillCards.forEach(card => {
        observer.observe(card);
    });
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const educationCards = document.querySelectorAll('.education-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 150);
            }
        });
    }, { threshold: 0.2 });
    
    timelineItems.forEach(item => observer.observe(item));
    educationCards.forEach(card => observer.observe(card));
}

// === SCROLL PROGRESS ===
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

// === CONTACT FORM ===
function initContactForm() {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const subject = document.querySelector("#subject").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill all the fields!");
            return;
        }

        const whatsappMessage = `Hello, I have a new contact request:%0A%0A Name: ${encodeURIComponent(name)}%0A%0A Email: ${encodeURIComponent(email)}%0A%0A Subject: ${encodeURIComponent(subject)}%0A%0A Message: ${encodeURIComponent(message)}`;
        const whatsappURL = `https://wa.me/918879300301?text=${whatsappMessage}`;

        window.open(whatsappURL, "_blank");
    });
}

// === PARTICLE EFFECT ===
function initParticles() {
    const container = document.createElement('div');
    container.classList.add('particles-container');
    document.body.appendChild(container);

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;

        container.appendChild(particle);
    }
}

// === PROJECT SHOWCASE ===
function initProjectShowcase() {
    const heroSection = document.querySelector('#hero .container');
    const projects = Array.from(document.querySelectorAll('.project-card')).slice(0, 5);

    const showcase = document.createElement('div');
    showcase.className = 'project-showcase';

    projects.forEach(project => {
        const clone = project.cloneNode(true);
        clone.classList.add('showcase-item');
        showcase.appendChild(clone);
    });

    heroSection.appendChild(showcase);

    let currentIndex = 0;
    const items = showcase.querySelectorAll('.showcase-item');

    function updateShowcase() {
        items.forEach((item, index) => {
            const offset = (index - currentIndex) * 100;
            item.style.transform = `translateY(${offset}%)`;
            item.style.opacity = index === currentIndex ? '1' : '0.5';
        });
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateShowcase();
    }, 3000);

    updateShowcase();
}

// === BUTTON EFFECTS ===
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn, .btn1');

    buttons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const strength = 10;

            this.style.transform = `perspective(500px) translateZ(10px) rotateX(${-y / strength}deg) rotateY(${x / strength}deg)`;
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(500px) translateZ(0) rotateX(0) rotateY(0)';
        });
    });
}

// ======================
// === INITIALIZATION IN ONLOAD ===
// ======================

