// SCROLL ANIMATIONS
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('bmd-visible');
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(
    '.bmd-fade, .minister-card, .bmd-about-container, .bmd-flier-container, .fade-in-img, .guest-block'
).forEach(el => observer.observe(el));

// PRAYER BARS ANIMATION
window.addEventListener('load', function() {
    const bars = document.querySelectorAll('.bar-fill');
    bars.forEach(bar => {
        const target = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = target + '%';
        }, 300);
    });
});

// PRAISE NIGHT VIDEO AUTOPLAY ON SCROLL
const video = document.getElementById('praiseVideo');
if (video) {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.4 });
    videoObserver.observe(video);
}







