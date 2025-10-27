// ============================================
// NAVBAR SCROLL ANIMATION + LOGO CHANGE
// ============================================
const navbar = document.getElementById('navbar');
const navbarLogo = document.getElementById('navbarLogo');

let scrolled = false;
let timer = null;
const threshold = 100;

// Préchargement fah_2 pour éviter le flash
const preload = new Image();
preload.src = "assets/logos/fah_2.png";

// Écouter le scroll de Locomotive (seulement sur desktop)
if (typeof scroll !== 'undefined') {
    scroll.on('scroll', (args) => {
        // Ne pas appliquer l'effet de scroll sur mobile
        if (window.innerWidth <= 768) return;
        
        const scrollY = args.scroll.y;
        const isNowScrolled = scrollY > threshold;

        // Si pas de changement → on ne touche à rien
        if (isNowScrolled === scrolled) return;

        scrolled = isNowScrolled;
        navbar.classList.toggle("scrolled", scrolled);

        // Annuler un changement en cours
        clearTimeout(timer);

        navbarLogo.style.opacity = "0";

        timer = setTimeout(() => {
            navbarLogo.src = scrolled
                ? "assets/logos/fah_2.png"
                : "assets/logos/fah_1.png";

            navbarLogo.style.opacity = "1";
        }, 180);
    });
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navMenuMobile = document.getElementById('navMenuMobile');
const menuOverlay = document.getElementById('menuOverlay');

function openMenu() {
    menuToggle.classList.add('active');
    navMenuMobile.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    menuToggle.classList.remove('active');
    navMenuMobile.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Fermer tous les dropdowns
    document.querySelectorAll('.nav-menu-mobile .nav-item.dropdown').forEach(item => {
        item.classList.remove('active');
    });
}

// Toggle menu au clic sur le burger
menuToggle.addEventListener('click', () => {
    if (navMenuMobile.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Fermer le menu au clic sur l'overlay
menuOverlay.addEventListener('click', closeMenu);

// ============================================
// DROPDOWN MOBILE/DESKTOP
// ============================================

// Dropdowns desktop - au CLIC uniquement
const dropdownTriggersDesktop = document.querySelectorAll('.nav-menu-desktop .dropdown-trigger');
dropdownTriggersDesktop.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        if (window.innerWidth > 768) {
            e.preventDefault();
            const parent = trigger.closest('.nav-item.dropdown');
            
            // Toggle le dropdown
            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
            } else {
                // Fermer les autres dropdowns desktop
                document.querySelectorAll('.nav-menu-desktop .nav-item.dropdown').forEach(item => {
                    if (item !== parent) {
                        item.classList.remove('active');
                    }
                });
                
                parent.classList.add('active');
            }
        }
    });
});

// Fermer les dropdowns desktop si on clique ailleurs
document.addEventListener('click', (e) => {
    if (window.innerWidth > 768) {
        if (!e.target.closest('.nav-item.dropdown')) {
            document.querySelectorAll('.nav-menu-desktop .nav-item.dropdown').forEach(item => {
                item.classList.remove('active');
            });
        }
    }
});

// Dropdowns mobile
const dropdownTriggersMobile = document.querySelectorAll('.nav-menu-mobile .dropdown-trigger');
dropdownTriggersMobile.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = trigger.closest('.nav-item.dropdown');
        
        // Fermer les autres dropdowns
        document.querySelectorAll('.nav-menu-mobile .nav-item.dropdown').forEach(item => {
            if (item !== parent) {
                item.classList.remove('active');
            }
        });
        
        // Toggle le dropdown actuel
        parent.classList.toggle('active');
    });
});

// Fermer le menu si on clique sur un lien (sauf dropdown parent)
const navLinksMobile = document.querySelectorAll('.nav-menu-mobile .nav-link');
navLinksMobile.forEach(link => {
    // Ne pas fermer si c'est un lien dropdown parent
    if (!link.classList.contains('dropdown-trigger')) {
        link.addEventListener('click', () => {
            closeMenu();
        });
    }
});

// Fermer le dropdown si on clique sur un lien enfant
const dropdownChildLinks = document.querySelectorAll('.nav-menu-mobile .dropdown-link');
dropdownChildLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// ============================================
// GSAP BUTTON TEXT ANIMATION (Desktop uniquement)
// ============================================
const navButtons = document.querySelectorAll('.navbar .btn');
navButtons.forEach(btn => {
    const text = btn.querySelector('.btn-text');
    if (text) {
        btn.addEventListener('mouseenter', () => {
            // Désactiver l'animation sur mobile (burger menu)
            if (window.innerWidth <= 768) return;
            
            if (typeof gsap !== 'undefined') {
                gsap.to(text, {
                    y: -30,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    onComplete: () => {
                        gsap.set(text, { y: 30 });
                        gsap.to(text, {
                            y: 0,
                            opacity: 1,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                });
            }
        });
    }
});

// Fermer le menu mobile si on agrandit la fenêtre
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// Empêcher le scroll pendant l'ouverture du menu
if (navMenuMobile) {
    navMenuMobile.addEventListener('touchmove', (e) => {
        e.stopPropagation();
    }, { passive: false });
}