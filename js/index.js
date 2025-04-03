// ======================
// === DOM ELEMENTS ===
// ======================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const scrollTopBtn = document.querySelector('.scroll-top');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const contactForm = document.querySelector("#contactForm");

// ======================
// === MOBILE MENU ===
// ======================
function initMobileMenu() {
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

// ======================
// === STICKY HEADER ===
// ======================
function initStickyHeader() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('#header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });
}

// ======================
// === SCROLL TO TOP ===
// ======================
function initScrollTop() {
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

// ======================
// === THEME TOGGLE ===
// ======================
function initThemeToggle() {
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeIcon.classList.toggle('fa-moon', theme === 'dark');
        themeIcon.classList.toggle('fa-sun', theme === 'light');
    }

    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Theme toggle handler
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

// ======================
// === SKILLS ANIMATION ===
// ======================
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

// ======================
// === SCROLL ANIMATIONS ===
// ======================
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

// ======================
// === SCROLL PROGRESS ===
// ======================
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

// ======================
// === CONTACT FORM ===
// ======================
function initContactForm() {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Capture form values
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const subject = document.querySelector("#subject").value.trim();
        const message = document.querySelector("#message").value.trim();

        // Validate form
        if (!name || !email || !subject || !message) {
            alert("Please fill all the fields!");
            return;
        }

        // Encode values for URL
        const encodedName = encodeURIComponent(name);
        const encodedEmail = encodeURIComponent(email);
        const encodedSubject = encodeURIComponent(subject);
        const encodedMessage = encodeURIComponent(message);

        // Prepare WhatsApp message
        const whatsappMessage = `Hello, I have a new contact request:%0A%0A Name: ${encodedName}%0A%0A Email: ${encodedEmail}%0A%0A Subject: ${encodedSubject}%0A%0A Message: ${encodedMessage}`;
        const whatsappURL = `https://wa.me/918879300301?text=${whatsappMessage}`;

        // Open WhatsApp
        window.open(whatsappURL, "_blank");
    });
}

// ======================
// === PARTICLE EFFECT ===
// ======================
function initParticles() {
    const container = document.createElement('div');
    container.classList.add('particles-container');
    document.body.appendChild(container);

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random properties
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

// ======================
// === PROJECT SHOWCASE ===
// ======================
function initProjectShowcase() {
    const heroSection = document.querySelector('#hero .container');
    const projects = Array.from(document.querySelectorAll('.project-card')).slice(0, 5); // Get first 3 projects
    
    // Create showcase container
    const showcase = document.createElement('div');
    showcase.className = 'project-showcase';
    
    // Create project items
    projects.forEach(project => {
        const clone = project.cloneNode(true);
        clone.classList.add('showcase-item');
        showcase.appendChild(clone);
    });
    
    // Add to hero section
    heroSection.appendChild(showcase);
    
    // Handle scroll events
    let currentIndex = 0;
    const items = showcase.querySelectorAll('.showcase-item');
    
    function updateShowcase() {
        items.forEach((item, index) => {
            const offset = (index - currentIndex) * 100;
            item.style.transform = `translateY(${offset}%)`;
            item.style.opacity = index === currentIndex ? '1' : '0.5';
        });
    }
    
    // Auto-scroll
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateShowcase();
    }, 3000);
    
    // Initial update
    updateShowcase();
}

// ======================
// === BUTTON EFFECTS ===
// ======================
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
// === INITIALIZATION ===
// ======================
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initStickyHeader();
    initScrollTop();
    initThemeToggle();
    initSkillsAnimation();
    initScrollAnimations();
    initScrollProgress();
    initContactForm();
    initParticles();
    initProjectShowcase();
    initButtonEffects();
});