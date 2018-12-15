const food = ['pizza', 'tacos', 'hamburger'];
const games = ['monopoly', 'chess', 'pong'];
const animals = ['dog', 'cat', 'lion'];
const alphabetSoup = 'A'.charCodeAt(0);
let wordHolder;
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
    let wordHolder = (food[Math.floor(Math.random() * food.length)]);
    for (i = 0; i < wordHolder.length; i++) {
        $('#wordLocation').append('<div>' + wordHolder[i]);
        $('#wordLocation div').attr('class', 'invisibleWord');
        console.log(wordHolder)
    }
}
function gamesRandomizer() {
    let wordHolder = (games[Math.floor(Math.random() * games.length)]);
    for (i = 0; i < wordHolder.length; i++) {
        $('#wordLocation').append('<div>' + wordHolder[i]);

        console.log(wordHolder)
    }
}
function animalsRandomizer() {
    let wordHolder = (animals[Math.floor(Math.random() * animals.length)]);
    for (i = 0; i < wordHolder.length; i++) {
        $('#wordLocation').append('<div>' + wordHolder[i]);
        console.log(wordHolder)
    }
}

// function letterMatch() {
//     for (i = 0; i < wordHolder.length; i++) {
//         if ()
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