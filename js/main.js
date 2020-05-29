$(document).ready(function() {
    $('.filters h2').click(function() {
        $(this).toggleClass('open');
        $('.filters .list').slideToggle();
    })
})