$(document).ready(function() {
    $('.ac-panel').hide();
    $('.ac-trigger').click(function() {
        $(this).parent().next('.ac-panel').slideToggle();
        $(this).parent().toggleClass('active');
    });
});