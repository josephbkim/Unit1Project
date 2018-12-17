const food = ['pizza', 'tacos', 'hamburger'];
const games = ['monopoly', 'chess', 'pong'];
const animals = ['dog', 'cat', 'lion'];
const alphabetSoup = 'A'.charCodeAt(0);
//https://stackoverflow.com/questions/5557641/how-can-i-reset-div-to-its-original-state-after-it-has-been-modified-by-java
const emptyWordBox = $('#wordLocation').clone();

let missCounter = 0;
let letterCounter = 0;
let missedLetterCounter = 0;
let totalMisses = 0;
let playerScore = 0;
let cpuScore = 0;

let foodHolder = (food[Math.floor(Math.random() * food.length)]);
let gamesHolder = (games[Math.floor(Math.random() * games.length)]);
let animalsHolder = (animals[Math.floor(Math.random() * animals.length)]);

// let foodHolder = [];
alphaSoup();


$('#playerButton').on('click', function (event) {
    event.preventDefault;
    $('#scoreName').html($('#playerInput').val());
});

$('#topicButton').on('click', function () {
    // $('wordLocation').remove();
    if ($('#topicInput').val() == 1) {
        foodRandomizer();
    } else if ($('#topicInput').val() == 2) {
        gamesRandomizer();
    } else if ($('#topicInput').val() == 3) {
        animalsRandomizer();
    }
});

function foodRandomizer() {
    for (i = 0; i < foodHolder.length; i++) {
        $('#wordLocation').append('<div>' + foodHolder[i]);
        $('#wordLocation div').attr('class', 'invisibleWord');
        console.log(foodHolder)
    }
}
function gamesRandomizer() {
    for (i = 0; i < gamesHolder.length; i++) {
        $('#wordLocation').append('<div>' + gamesHolder[i]);
        $('#wordLocation div').attr('class', 'invisibleWord');
        console.log(gamesHolder)
    }
}
function animalsRandomizer() {
    for (i = 0; i < animalsHolder.length; i++) {
        $('#wordLocation').append('<div>' + animalsHolder[i]);
        $('#wordLocation div').attr('class', 'invisibleWord');
        console.log(animalsHolder)
    }
}

// function letterMatch() {
//     for (i = 0; i < wordHolder.length; i++) {
//         if (wordHolder[i] === letterValue) {
//             $('.invisibleWord').eq(i).css('color', 'black')
//     }
// }

//https://stackoverflow.com/questions/23409252/loop-from-a-to-z-in-jquery
function alphaSoup() {
    for (let i = alphabetSoup; i < (alphabetSoup + 26); i++) {
        $('#letConBox').append('<button>' + String.fromCharCode(i) + '</button>');
        $('#letConBox button').attr('class', 'clickLetter');
    }
}

// function wordSplitter() {
//     for (i = 0; i < foodHolder.length; i++) {
//         $('#wordLocation').append('<div>' + foodHolder[i] + '</div>')
//     }
// }

// https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript
$('.clickLetter').on('click', function () {
    let letterValue = $(this).html();
    $(this).remove();
    console.log(letterValue);
    for (let k = 0; k < foodHolder.length; k++) {
        if (foodHolder[k].toUpperCase() !== letterValue) {
            missCounter++;
            console.log('misses' + missCounter);

        }
        missFinder();
    }
    for (let j = 0; j < foodHolder.length; j++) {
        if (foodHolder[j].toUpperCase() === letterValue) {
            $("#wordLocation div").eq(j).css({ 'color': 'red' });
            letterCounter++;
            console.log(letterCounter);
            missCounter = 0;
        }
    }
    winChecker();
    loseChecker();
});

function winChecker() {
    if (letterCounter === foodHolder.length) {
        alert('You win!!');
        playerScore++;
        $('#playerScore').html(playerScore);
    }
}

function loseChecker() {
    if (totalMisses === 6) {
        alert("You Lose!!");
        cpuScore++;
        $('#compScore').html(cpuScore);
    }
}

function missFinder() {
    if (missCounter === foodHolder.length) {
        totalMisses++;
        alert("wrong!");
        missCounter = 0;
    }
}

//https://stackoverflow.com/questions/6666363/is-it-possible-to-clear-a-form-and-reset-reload-the-page-with-one-button
$('replayButton').on('click', function () {
    $('#wordLocation').replace(emptyWordBox)
})