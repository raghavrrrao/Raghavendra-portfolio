
// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

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

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animate skill progress bars
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level + '%';
    });
}

// Animate timeline and education items on scroll
function animateOnScroll() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const educationCards = document.querySelectorAll('.education-card');

    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 300 * index);
    });

    educationCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, 300 * index);
    });
}

// Initialize animations
window.addEventListener('load', () => {
    setTimeout(animateSkills, 500);
    setTimeout(animateOnScroll, 800);
});

// Form submission
document.querySelector("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Capture form field values
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let subject = document.querySelector("#subject").value.trim();
    let message = document.querySelector("#message").value.trim();

    // Debugging: Log form field values
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Ensure no empty fields are sent
    if (!name || !email || !subject || !message) {
        alert("Please fill all the fields!");
        return;
    }

    // Encode values for URL
    let encodedName = encodeURIComponent(name);
    let encodedEmail = encodeURIComponent(email);
    let encodedSubject = encodeURIComponent(subject);
    let encodedMessage = encodeURIComponent(message);

    // Debugging: Log encoded values
    console.log("Encoded Name:", encodedName);
    console.log("Encoded Email:", encodedEmail);
    console.log("Encoded Subject:", encodedSubject);
    console.log("Encoded Message:", encodedMessage);

    // Prepare WhatsApp message
    let whatsappMessage = `Hello, I have a new contact request:%0A%0A Name: ${encodedName}%0A%0A Email: ${encodedEmail}%0A%0A Subject: ${encodedSubject}%0A%0A Message: ${encodedMessage}`;

    // WhatsApp URL with pre-filled message
    let whatsappURL = `https://wa.me/918879300301?text=${whatsappMessage}`;  // Replace with your number

    // Open WhatsApp with the message
    window.open(whatsappURL, "_blank");
});




