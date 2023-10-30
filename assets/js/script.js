gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    heroScrollAnimation();
    gsap.to('.content-header', {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 0.3,
    })
});

function heroScrollAnimation() {
    const heroParallax = gsap.timeline({
        scrollTrigger: {
            trigger: '.header',
            start: `bottom bottom`,
            end: `bottom center`,
            scrub: 2,
            markers: false,
        },
    });

    heroParallax.to('.content-header', {
        y: 30,
    }, '<');
}