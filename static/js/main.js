let message_fade = setTimeout(
    function () {
        $("#messages .message").fadeOut(600);
    }, 3000
);

$("#messages .message").hover(function () {
    clearTimeout(message_fade);
}, function () {
    message_fade = setTimeout(
        function () {
            $("#messages .message").fadeOut(1000);
        }, 2000
    );
});