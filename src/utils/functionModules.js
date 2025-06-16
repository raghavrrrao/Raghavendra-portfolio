import anime from 'animejs';
import { getSupabase } from './supabaseClient.js';


// === MOBILE MENU ===
export function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !navContainer) {
        console.warn("Hamburger or navContainer not found.");
        return;
    }

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navContainer.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navContainer.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}




// === STICKY HEADER ===
export function initStickyHeader() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('#header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });
}

// === SCROLL TO TOP ===
export function initScrollTop(scrollTopBtn) {
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
export function initSkillsAnimation() {
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
export function initScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll(
        '.section, .section-title, .about-container, .skills-container, .projects-container, .timeline, .education-cards, .contact-container'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 800,
                    easing: 'easeOutExpo'
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elementsToAnimate.forEach(el => observer.observe(el));
}

// === SCROLL PROGRESS ===
export function initScrollProgress() {
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


// === PARTICLE EFFECT ===
export function initParticles() {
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


// === BUTTON EFFECTS ===
export function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn, .btn1');

    buttons.forEach(button => {
        button.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const strength = 10;

            this.style.transform = `perspective(500px) translateZ(10px) rotateX(${-y / strength}deg) rotateY(${x / strength}deg)`;
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'perspective(500px) translateZ(0) rotateX(0) rotateY(0)';
        });
    });
}

// === HERO ANIMATIONS ===
export function initHeroAnimations() {
    anime({
        targets: '.hero-greeting',
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 800,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.hero-name',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 800,
        delay: 200,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.hero-role',
        opacity: [0, 1],
        translateY: [60, 0],
        duration: 800,
        delay: 400,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.hero-description',
        opacity: [0, 1],
        translateY: [70, 0],
        duration: 800,
        delay: 600,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.hero-socials',
        opacity: [0, 1],
        translateY: [80, 0],
        duration: 800,
        delay: 800,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.hero-cta',
        opacity: [0, 1],
        translateY: [90, 0],
        duration: 800,
        delay: 1000,
        easing: 'easeOutExpo'
    });
}

// === PROJECT RENDERING ===
export async function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = '<div class="loading">Loading projects...</div>';

    try {
        const supabase = getSupabase();
        const { data: projects, error } = await supabase
            .from('projects')
            .select('*')
            .order('id', { ascending: true });

        if (error) throw error;

        container.innerHTML = '';

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card ';

            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <div class="project-role">${project.role}</div>
                    <p>${project.description}</p>
                    ${project.note ? `<b>${project.note}</b>` : ''}
                    <div class="project-links">
                        <a href="${project.link}" target="_blank" class="project-link">
                            <i class="fas fa-external-link-alt"></i>
                            Visit Site
                        </a>
                    </div>
                </div>
            `;

            container.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
        container.innerHTML = '<div class="error">Failed to load projects. Please try again later.</div>';
    }
}


function sanitize(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
// === CONTACT FORM ===
export async function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    // Notification system functions
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">${type === 'success' ? '✓' : '✕'}</div>
            <div class="notification-message">${message}</div>
        </div>
    `;

        const container = document.querySelector('.notification-container');
        container.appendChild(notification);

        // Trigger the show animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        // Auto-hide after some time
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 400); // Match this with your transition duration
        }, 5000);
    }

    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Honeypot check
        const honeypot = document.querySelector('[name="website"]').value;
        if (honeypot) {
            console.log('Bot detected');
            return; // Silently fail
        }

        // Rate limiting (30 seconds)
        const now = Date.now();
        const lastSubmit = localStorage.getItem('lastSubmit') || 0;
        if (now - lastSubmit < 30000) {
            showNotification("Please wait 30 seconds before submitting again", false);
            return;
        }

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const subject = document.querySelector("#subject").value.trim();
        const message = document.querySelector("#message").value.trim();

        // Input validation
        if (!name || !email || !subject || !message) {
            showNotification("Please fill all the fields!", false);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification("Please enter a valid email address", false);
            return;
        }

        try {
            const supabase = getSupabase();
            const { error } = await supabase
                .from('contact_submissions')
                .insert([{
                    name: name.substring(0, 100),
                    email: email.substring(0, 100),
                    subject: subject.substring(0, 200),
                    message: message.substring(0, 1000)
                }]);

            if (error) throw error;

            // Show success notification with proper apostrophe
            showNotification("Message sent successfully! I'll get back to you soon.");

            // Reset form
            contactForm.reset();

            // Update rate limit
            localStorage.setItem('lastSubmit', now);
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification("Failed to send message. Please try again or contact me directly at raoraghav28@gmail.com", false);
        }
    });
}

// === PROJECT SHOWCASE ===
export async function initProjectShowcase() {
    const heroSection = document.querySelector('#hero .container');
    if (!heroSection) return;

    // Remove existing showcase if any
    const existingShowcase = document.querySelector('.project-showcase');
    if (existingShowcase) existingShowcase.remove();

    try {
        const supabase = getSupabase();
        const { data: projects, error } = await supabase
            .from('projects')
            .select('*')
            .order('id', { ascending: true })
            .limit(7); // Only take first 7 projects

        if (error) throw error;

        const showcase = document.createElement('div');
        showcase.className = 'project-showcase';

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'showcase-item project-card';

            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <div class="project-role">${project.role}</div>
                    <p>${project.description}</p>
                    ${project.note ? `<b>${project.note}</b>` : ''}
                    <div class="project-links">
                        <a href="${project.link}" target="_blank" class="project-link">
                            <i class="fas fa-external-link-alt"></i>
                            Visit Site
                        </a>
                    </div>
                </div>
            `;

            showcase.appendChild(projectCard);
        });

        heroSection.appendChild(showcase);

        let currentIndex = 0;
        const items = showcase.querySelectorAll('.showcase-item');

        function updateShowcase() {
            items.forEach((item, index) => {
                const offset = (index - currentIndex) * 102;
                item.style.transform = `translateY(${offset}%)`;
                item.style.opacity = index === currentIndex ? '1' : '0.5';
            });
        }

        setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            updateShowcase();
        }, 3000);

        updateShowcase();
    } catch (error) {
        console.error('Error loading showcase projects:', error);
    }
}

export function applyTrueFocusToDiv(divId, {
    blurAmount = 5,
    borderColor = "green",
    glowColor = "rgba(0, 255, 0, 0.6)",
    animationDuration = 0.5
} = {}) {
    const container = document.getElementById(divId);
    if (!container) return;

    const words = container.textContent.trim().split(/\s+/);
    container.innerHTML = ""; // Clear existing text

    // Wrap each word in a span
    const wordSpans = words.map(word => {
        const span = document.createElement("span");
        span.className = "focus-word manual";
        span.textContent = word;
        span.style.setProperty("--border-color", borderColor);
        span.style.setProperty("--glow-color", glowColor);
        span.style.transition = `filter ${animationDuration}s ease`;
        span.style.filter = `blur(${blurAmount}px)`;
        container.appendChild(span);
        container.appendChild(document.createTextNode(" "));
        return span;
    });

    // Add focus frame
    const focusFrame = document.createElement("div");
    focusFrame.className = "focus-frame";
    focusFrame.style.setProperty("--border-color", borderColor);
    focusFrame.style.setProperty("--glow-color", glowColor);
    focusFrame.style.transition = `all ${animationDuration}s ease`;
    ["top-left", "top-right", "bottom-left", "bottom-right"].forEach(pos => {
        const corner = document.createElement("span");
        corner.className = `corner ${pos}`;
        focusFrame.appendChild(corner);
    });
    container.appendChild(focusFrame);

    function updateFocusFrame(target) {
        const parentRect = container.getBoundingClientRect();
        const rect = target.getBoundingClientRect();

        focusFrame.style.transform = `translate(${rect.left - parentRect.left}px, ${rect.top - parentRect.top}px)`;
        focusFrame.style.width = `${rect.width}px`;
        focusFrame.style.height = `${rect.height}px`;
        focusFrame.style.opacity = "1";
    }

    function hideFocusFrame() {
        focusFrame.style.opacity = "0";
    }

    wordSpans.forEach(span => {
        span.addEventListener("mouseenter", () => {
            wordSpans.forEach(s => s.style.filter = `blur(${blurAmount}px)`);
            span.style.filter = "blur(0px)";
            updateFocusFrame(span);
        });

        span.addEventListener("mouseleave", () => {
            wordSpans.forEach(s => s.style.filter = `blur(${blurAmount}px)`);
            hideFocusFrame();
        });
    });
}


export function initGlareHover(selector = '.glare-hover') {
    document.querySelectorAll(selector).forEach(el => {
        const hex = el.dataset.glareColor || "#ffffff";
        const opacity = parseFloat(el.dataset.glareOpacity || 0.5);

        // Convert hex to rgba
        let rgba = hex;
        const cleanHex = hex.replace("#", "");
        if (/^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
            const r = parseInt(cleanHex.slice(0, 2), 16);
            const g = parseInt(cleanHex.slice(2, 4), 16);
            const b = parseInt(cleanHex.slice(4, 6), 16);
            rgba = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        } else if (/^[0-9A-Fa-f]{3}$/.test(cleanHex)) {
            const r = parseInt(cleanHex[0] + cleanHex[0], 16);
            const g = parseInt(cleanHex[1] + cleanHex[1], 16);
            const b = parseInt(cleanHex[2] + cleanHex[2], 16);
            rgba = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        }

        el.style.setProperty('--gh-width', el.dataset.width || "300px");
        el.style.setProperty('--gh-height', el.dataset.height || "300px");
        el.style.setProperty('--gh-bg', el.dataset.bg || "#000");
        el.style.setProperty('--gh-br', el.dataset.br || "10px");
        el.style.setProperty('--gh-border', el.dataset.border || "#333");
        el.style.setProperty('--gh-angle', (el.dataset.glareAngle || -45) + "deg");
        el.style.setProperty('--gh-size', (el.dataset.glareSize || 250) + "%");
        el.style.setProperty('--gh-duration', (el.dataset.transition || 650) + "ms");
        el.style.setProperty('--gh-rgba', rgba);
    });
}


export function createGlobalClickSparks({
    sparkColor = "#fff",
    sparkSize = 25,
    sparkRadius = 40,
    sparkCount = 20,
    duration = 500,
    easing = "ease-out",
    extraScale = 1.0
} = {}) {
    const canvas = document.createElement("canvas");
    Object.assign(canvas.style, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",
        userSelect: "none"
    });
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const sparks = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    const easeFunc = (t) => {
        switch (easing) {
            case "linear": return t;
            case "ease-in": return t * t;
            case "ease-in-out": return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            default: return t * (2 - t); // ease-out
        }
    };

    function draw(timestamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = sparks.length - 1; i >= 0; i--) {
            const spark = sparks[i];
            const elapsed = timestamp - spark.startTime;
            if (elapsed > duration) {
                sparks.splice(i, 1);
                continue;
            }

            const progress = elapsed / duration;
            const eased = easeFunc(progress);
            const dist = eased * sparkRadius * extraScale;
            const lineLen = sparkSize * (1 - eased);

            const x1 = spark.x + dist * Math.cos(spark.angle);
            const y1 = spark.y + dist * Math.sin(spark.angle);
            const x2 = spark.x + (dist + lineLen) * Math.cos(spark.angle);
            const y2 = spark.y + (dist + lineLen) * Math.sin(spark.angle);

            ctx.strokeStyle = sparkColor;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }

        requestAnimationFrame(draw);
    }

    window.addEventListener("click", (e) => {
        const now = performance.now();
        for (let i = 0; i < sparkCount; i++) {
            sparks.push({
                x: e.clientX,
                y: e.clientY,
                angle: (2 * Math.PI * i) / sparkCount,
                startTime: now
            });
        }
    });

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    requestAnimationFrame(draw);
};

