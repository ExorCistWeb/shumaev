const images = document.querySelectorAll('img');
images.forEach(img => {
    const src = img.getAttribute('src');
    img.setAttribute('src', src);
});
// Инициализация слайдеров
function initSwipers() {
    new Swiper(".swiper-usual", {
        pagination: {
            el: ".products-pagination",
        },
        cssMode: true,
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    new Swiper(".rating-slider", {
        loop: true,
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: 14,
        navigation: {
            nextEl: ".rating-button-next",
            prevEl: ".rating-button-prev",
        },
        breakpoints: {
            375: {
                slidesPerView: 1.2,
                centeredSlides: true,
                cssMode: true,
            },
            1200: {
                slidesPerView: 3,
                centeredSlides: false,
                cssMode: false,
            },

        },
    });

    new Swiper(".doctors-slider", {
        loop: true,
        slidesPerGroup: 1,
        slidesPerView: 2,
        spaceBetween: 105,
        centeredSlides: true,
        cssMode: true,

        navigation: {
            nextEl: ".doctors-button-next",
            prevEl: ".doctors-button-prev",
        },
        breakpoints: {
            375: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 2,
            },

        },
    });

    new Swiper(".clinic-swiper", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".clinic-button-next",
            prevEl: ".clinic-button-prev",
        },
        breakpoints: {
            375: {

                centeredSlides: true,
                cssMode: true,
            },
            1200: {
                centeredSlides: false,
                cssMode: false,
            },

        }
    });

    new Swiper(".repairing-slider", {
        slidesPerGroup: 1,
        slidesPerView: "auto",

        cssMode: true,
        spaceBetween: 28,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".repairing-button-next",
            prevEl: ".repairing-button-prev",
        },
        breakpoints: {
            375: {
                slidesPerView: 1.3,

            },
            768: {
                slidesPerView: 3.8,
            },
            1790: {
                slidesPerView: 3.8,
            },
            1920: {
                slidesPerView: 4.3,
            },
        },
    });
    new Swiper(".partners-slider", {
        slidesPerGroup: 1,
        slidesPerView: 5,
        spaceBetween: 28,

        loop: true,
        navigation: {
            nextEl: ".partner-button-next",
            prevEl: ".partner-button-prev",
        },
        breakpoints: {
            375: {
                slidesPerView: 1.4,
            },
            768: {
                slidesPerView: 3,
                cssMode: true,
                centeredSlides: true,
            },
            1790: {
                slidesPerView: 4,
            },
            1920: {
                slidesPerView: 5,
            },
        },
    });
    new Swiper(".patients-slider", {
        autoplay: {
            delay: 9000,
            disableOnInteraction: false,
        },

        // cssMode: true,
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            375: {
                slidesPerView: 1.8,
                cssMode: true,
            },
            1040: {
                slidesPerView: 2.5,

            },
            1280: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 3.5,
            },
            1690: {
                slidesPerView: 4,
            },

            1920: {
                slidesPerView: 4.5,
            },
        },
    });
}

document.addEventListener("DOMContentLoaded", function() {
    initSwipers();
});
window.addEventListener('DOMContentLoaded', () => {
    // get all progress bar
    const elements = [].slice.call(document.querySelectorAll('.pie'));
    // call to function
    const circle = new CircularProgressBar('pie');

    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    // if IntersectionObserver is supported by the browser
    if ('IntersectionObserver' in window) {
        const config = {
            root: null,
            rootMargin: '0px',
            threshold: 0.75,
        };

        const ovserver = new IntersectionObserver((entries, observer) => {
            entries.map((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
                    circle.initial(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, config);

        elements.map((item) => {
            ovserver.observe(item);
        });
    } else {
        // if the browser does not support IntersectionObserver
        // we run all progress bars at once
        elements.map((element) => {
            circle.initial(element);
        });
    }
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
    document.body.style.overflow = "visible";
}

const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {
    const closeButton = modal.querySelector(".close");
    closeButton.addEventListener("click", function() {
        closeModal(modal.id);
    });

    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});






const hamburger = document.querySelector('.hamburger');
const menuOverlay = document.querySelector('.menu-overlay');

if (hamburger && menuOverlay) {
    hamburger.addEventListener('click', () => {
        menuOverlay.classList.toggle('active');
    });
}

const columnTitles = document.querySelectorAll('.footer__column h5');
columnTitles.forEach((title) => {
    let isVisible = false;
    title.addEventListener('click', () => {
        const column = title.parentNode;
        const links = column.querySelectorAll('a');
        links.forEach((link) => {
            if (isVisible) {
                link.style.display = 'none';
            } else {
                link.style.display = 'block';
            }
        });
        isVisible = !isVisible;
    });
});

$(".phone_mask").click(function() {
    $(this).setCursorPosition(3);
}).mask("+7(999) 999-99-99");