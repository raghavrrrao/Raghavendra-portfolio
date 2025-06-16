import * as fm from './functionModules.js';

window.onload = async function () {
    // === DOM ELEMENTS ===
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const scrollTopBtn = document.querySelector('.scroll-top');
    // Initialize Vanta.js Waves background
    // Ultra-Premium Smooth Liquid Waves with Droplet Physics
    const vantaEffect = VANTA.WAVES({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        // Performance Optimization
        forceAnimate: true,
        pixelRatio: window.devicePixelRatio || 1, // Crisp on Retina displays

        // Hyper-Smooth Wave Parameters
        waveSpeed: 0.3,
        waveHeight: 15,
        shininess: 30, // Softer reflections
        zoom: 0.85, // Wider FOV

        // Advanced Liquid Simulation
        distortion: 3.5,
        distortionSpeed: 0.8,
        frequency: 0.01, // Smoother waveform

        // Deep Ocean Color Science
        color: 0x00172e,
        color2: 0x2a006e,
        hue: 215,
        saturation: 50,
        brightness: 5,

        // Cinematic Effects
        blendMode: 0.8, // Prevents color banding
        alpha: 0.9 // Subtle transparency
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // === FUNCTION CALLS ===
    fm.initMobileMenu();
    fm.initStickyHeader();
    fm.initScrollTop(scrollTopBtn);
    fm.initSkillsAnimation();
    fm.initScrollAnimations();
    fm.initScrollProgress();
    fm.initContactForm();
    fm.initButtonEffects();
    fm.initHeroAnimations();
    fm.initGlareHover();
    fm.createGlobalClickSparks();

    // Render projects from Supabase
    await fm.renderProjects();

    // Initialize project showcase if needed
    await fm.initProjectShowcase();

    // Disable dev tools
    // document.onkeydown = function (e) {
    //     if (e.key === "F12" ||
    //         (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
    //         (e.ctrlKey && e.key === "U")) {
    //         return false;
    //     }
    // };

    fm.applyTrueFocusToDiv("myFocusText", {
        blurAmount: 4,
        borderColor: "blue",
        glowColor: "rgba(0, 0, 255, 0.5)",
        animationDuration: 0.4,
    });

    

    // Clean up Vanta effect when leaving the page
    window.addEventListener('beforeunload', function () {
        if (vantaEffect) {
            vantaEffect.destroy();
        }
    });
};