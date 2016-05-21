$("#obtener-random").on('click', function() {
  $('#random').html(Math.random());
});

$('#titulo-desplegable').on('click', function() {

    var panel = $('#desplegable');
    panel.toggleClass('visible');
    panel.toggleClass('hidden');

    if (panel.hasClass('visible')) {
        $(this).html("Cierrame");
    } else {
        $(this).html("Despliegame");
    }
});
