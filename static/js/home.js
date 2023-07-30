$('#profile-cart #foot h6:first-child').click(function() {
    if ($('#sources-container > div:first-child').css('display') == 'none') {
        $('#sources-container > div:last-child').fadeOut();
        $('#sources-container > div:first-child').fadeIn();
    }
    $('#profile-cart #foot h6').removeClass('selected');
    $(this).addClass('selected');
});

$('#profile-cart #foot h6:last-child').click(function() {
    if ($('#sources-container > div:last-child').css('display') == 'none') {
        $('#sources-container > div:first-child').fadeOut();
        $('#sources-container > div:last-child').fadeIn();
    }
    $('#profile-cart #foot h6').removeClass('selected');
    $(this).addClass('selected');
});