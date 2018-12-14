$('body').css('background', 'purple');

const food = ['pizza', 'tacos', 'hamburger'];
const games = ['monopoly', 'chess', 'pong'];
const animals = ['dog', 'cat', 'lion'];

$('#playerButton').on('click', function (event) {
    event.preventDefault;
    $('#scoreName').html($('#playerInput').val());
});

$('#topicButton').on('click', function () {
    if ($('#topicInput').val() == 1) {
        foodRandomizer();
    } else if ($('#topicInput').val() == 2) {
        gamesRandomizer();
    } else if ($('#topicInput').val() == 3) {
        animalsRandomizer();
    }
});

function foodRandomizer() {
    $('#chosenWord').html(food[Math.floor(Math.random() * food.length)]);
}

function gamesRandomizer() {
    $('#chosenWord') = games[Math.floor(Math.random() * games.length)];
}

function animalsRandomizer() {
    $('#chosenWord') = animals[Math.floor(Math.random() * animals.length)];
}