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

$('.interior-container').each(function () {
    const h4Element = $(this).find('.h4-anim');

    gsap.from(h4Element, {
        y: 300,
        opacity: 0,
        scrollTrigger: {
            trigger: this,
            start: 'top 155%',
            end: 'bottom center',
            scrub: 1,
            toggleActions: 'restart none none reverse',
        },
    });
});



let isVisible = false;
let timeoutId = null;

$('.menu-icon-toggle').on('click', function (e) {
    $('body').toggleClass('open');

    if (!isVisible) {
        isVisible = true;
        $('.wrapper-menu').css({
            visibility: 'visible',
            opacity: 1
        });
    } else {
        isVisible = false;
        setTimeout(function () {
            $('.wrapper-menu').css('visibility', 'hidden');
            $('.wrapper-menu').css('opacity', '0');
        }, 1000);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    }

    e.preventDefault();
});




$('.menu-mobile li').each(function (index) {
    var delay = (index + 1) * 0.1;
    $(this).css('transition-delay', delay + 's');
    $(this).find('span').css('transition-delay', delay + 's');
});


var currentURL = window.location.href;

// Parcourir les éléments <a> dans la liste
$('.menu li a').each(function () {
    var href = $(this).attr('href');

    // Comparer l'URL de la page avec l'attribut href de l'élément <a>
    if (href === currentURL) {
        // Ajouter la classe "current-menu-item" à l'élément <li> parent
        $(this).parent().addClass('current-menu-item');
    }
});

function moveTool(elem) {
    if (elem) {
        var thisa = elem.querySelector("a");
        var x = thisa.offsetLeft + thisa.offsetWidth - (thisa.offsetWidth / 2);
        var triangle = document.querySelector(".menubottri");
        if (triangle) {
            triangle.style.left = x + "px";
        }
    }
}

function handleHover(event) {
    var target = event.target;
    var li = target.closest("li");
    if (li) {
        moveTool(li);
    }
}
var currentMenuItem = document.querySelector('.menu li.current-menu-item');
moveTool(currentMenuItem);

var menuItems = document.querySelectorAll('.menu li');
menuItems.forEach(function (item) {
    item.addEventListener('mouseenter', handleHover);
});


// Sélectionnez l'élément .nav
const nav = document.querySelector('header.header nav');

// Fonction pour changer la couleur de fond de l'en-tête en blanc lorsque l'utilisateur fait défiler
function changeNavBackground() {
    if (window.scrollY > 50) { // Vous pouvez ajuster le seuil selon vos besoins
        nav.style.backgroundColor = 'white';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
}

// Écoutez l'événement de défilement de la fenêtre
window.addEventListener('scroll', changeNavBackground);
