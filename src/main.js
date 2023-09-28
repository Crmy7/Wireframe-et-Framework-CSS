import "./scss/style.scss";

import * as bootstrap from "bootstrap";

//Point d'entré de votre javascript
gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            toggleActions: "restart none none reset"
        }
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.out
    });
    tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out,
    });
});

$(document).ready(function () {
    // Initialize the Slick carousel
    var slider = $('.slider-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
    });

    // Add click event handlers to custom buttons
    $('.custom-prev').click(function () {
        slider.slick('slickPrev');
    });

    $('.custom-next').click(function () {
        slider.slick('slickNext');
    });
});