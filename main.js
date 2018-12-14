$('body').css('background', 'purple');

const food = ['pizza', 'tacos', hamburger];
const games = ['monopoly', 'chess', 'pong'];
const animals = ['dog', 'cat', 'lion'];

$('#playerButton').on('click', function (event) {
    event.preventDefault;
    $('#scoreName').html($('#playerInput').val());
});

$('#topicButton').on('click', function {
    if ($('#topicInput').val() == 1) {
        foodTopic();
    }
})

function foodRandomizer() {
    food[Math.floor(Math.random() * food.length)];
}

function gamesRandomizer() {
    games[]
}