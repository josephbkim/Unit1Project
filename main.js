const food = ['pizza', 'tacos', 'hamburger'];
const games = ['monopoly', 'chess', 'pong'];
const animals = ['dog', 'cat', 'lion'];
const alphabetSoup = 'A'.charCodeAt(0);
// let foodHolder = [];
alphaSoup();


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
    let foodHolder = (food[Math.floor(Math.random() * food.length)]);
    for (i = 0; i < foodHolder.length; i++) {
        $('#wordLocation').append('<div' + foodHolder[i])
        console.log(foodHolder)
    }
}
function gamesRandomizer() {
    $('#wordLocation').html(games[Math.floor(Math.random() * games.length)]);
}
function animalsRandomizer() {
    $('#wordLocation').html(animals[Math.floor(Math.random() * animals.length)]);
}

// function letterDivCreator() {
//     for (i=0; i<foodHolder.length; i++) {
//         $('#wordLocation').append('<div' + foodHolder[i] + '</div>')
//     }
// }


//https://stackoverflow.com/questions/23409252/loop-from-a-to-z-in-jquery
function alphaSoup() {
    for (let i = alphabetSoup; i < (alphabetSoup + 26); i++) {
        $('#letConBox').append('<button>' + String.fromCharCode(i) + '</button>');
        $('#letConBox button').attr('class', 'clickLetter');
    }
}

function wordSplitter() {
    for (i = 0; i < foodHolder.length; i++) {
        $('#wordLocation').append('<div>' + foodHolder[i] + '</div>')
    }
}


$('.clickLetter').on('click', function () {
    let didit = $(this).html();
    alert(didit);
});