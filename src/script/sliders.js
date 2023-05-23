var swiper = new Swiper(".swiper-usual", {
    pagination: {
        el: ".products-pagination",
    },

    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



var swiper = new Swiper(".rating-slider", {
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

        },
        1200: {
            slidesPerView: 3,
            centeredSlides: false,
            cssMode: false,
        },

    },
});

var swiper = new Swiper(".doctors-slider", {
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: -50,
    centeredSlides: true,

    navigation: {
        nextEl: ".doctors-button-next",
        prevEl: ".doctors-button-prev",
    },
    breakpoints: {
        1280: {
            slidesPerView: 3,
        },
        760: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        },
    },
});
var swiper = new Swiper(".types_implants", {
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: "auto",
    centeredSlides: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
var swiper = new Swiper(".clinic-swiper", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".clinic-button-next",
        prevEl: ".clinic-button-prev",
    },
    breakpoints: {
        375: {

            centeredSlides: true,

        },
        1200: {
            centeredSlides: false,

        },

    }
});

var swiper = new Swiper(".repairing-slider", {
    slidesPerGroup: 1,
    slidesPerView: "auto",


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
var swiper = new Swiper(".partners-slider", {
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
var swiper = new Swiper(".patients-slider", {
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },


    loop: true,
    centeredSlides: true,
    spaceBetween: 30,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        375: {
            slidesPerView: 1.8,

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