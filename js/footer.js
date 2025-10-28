// ============================================
// FOOTER - NEWSLETTER FORM HANDLER
// ============================================

const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('.newsletter-input');
        const email = emailInput.value.trim();
        
        // Validation basique
        if (!email || !isValidEmail(email)) {
            showNotification('Veuillez entrer une adresse email valide.', 'error');
            return;
        }
        
        // Animation de chargement
        const submitBtn = newsletterForm.querySelector('.newsletter-submit');
        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = '<div class="loader"></div>';
        submitBtn.disabled = true;
        
        // Simuler l'envoi (remplace par ton vrai appel API)
        setTimeout(() => {
            // Succès
            showNotification('Merci ! Vous êtes inscrit à notre newsletter.', 'success');
            emailInput.value = '';
            
            // Restaurer le bouton
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Validation email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Système de notification simple
function showNotification(message, type = 'info') {
    // Supprimer notification existante
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Créer notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style inline (ou ajoute dans footer.css)
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-size: 0.95rem;
        max-width: 350px;
    `;
    
    document.body.appendChild(notification);
    
    // Retirer après 4 secondes
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Ajouter styles d'animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .loader {
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255,255,255,0.3);
        border-top-color: #0d0d0d;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ============================================
// SMOOTH SCROLL VERS SECTIONS
// ============================================

// Si tu veux ajouter un smooth scroll pour les liens du footer
const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ============================================
// GSAP BUTTON TEXT ANIMATION (Desktop uniquement)
// ============================================
const navButtons = document.querySelectorAll('.footer .btn-cta');
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