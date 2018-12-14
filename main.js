$('body').css('background', 'purple');

$('#playerButton').on('click', function (event) {
    event.preventDefault;
    // let pNameInput = $('#playerInput').val();
    $('#scoreName').html($('#playerInput').val());
});

