$('#obtener-random').on('click', function() {
    $('#random').html(Math.random());
});

$('#titulo-desplegable').on('click', function() {

    var panel = $('#desplegable');
    panel.toggleClass('visible');
    panel.toggleClass('hidden');

    if (panel.hasClass('visible')) {
        $(this).html("Cierrame");
        $(this).attr('aria-expanded', true);
        panel.attr('aria-hidden', false);
    } else {
        $(this).html("Despliegame");
        $(this).attr('aria-expanded', false);
        panel.attr('aria-hidden', true);
    }
});
