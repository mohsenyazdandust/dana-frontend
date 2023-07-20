let message_fade = setTimeout(
    function () {
        $("#messages .message").fadeOut(1000);
    }, 5000
);

$("#messages .message").hover(function () {
    clearTimeout(message_fade);
}, function () {
    message_fade = setTimeout(
        function () {
            $("#messages .message").fadeOut(1000);
        }, 3000
    );
});