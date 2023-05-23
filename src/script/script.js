const images = document.querySelectorAll('img');
images.forEach(img => {
    const src = img.getAttribute('src');
    img.setAttribute('src', src);
});

const btnScrollToTop = document.querySelector('.top_btn_red');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        btnScrollToTop.style.display = 'block';
    } else {
        btnScrollToTop.style.display = 'none';
    }
});

btnScrollToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

$(document).ready(function() {
    $('.review__play-button').click(function() {
        var videoUrl = $(this).data('video');
        $('#video-player').attr('src', videoUrl);
        $('#video-player').show();
    });
});