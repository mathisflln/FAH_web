// ============================================
// LOCOMOTIVE SCROLL INITIALIZATION
// ============================================
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
    lerp: 0.05,
    smoothMobile: false,
    smartphone: {
        smooth: false
    },
    tablet: {
        smooth: false
    }
});

// ============================================
// UPDATE LOCOMOTIVE ON WINDOW RESIZE
// ============================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        scroll.update();
    }, 250);
});