const picArray = ["https://i.imgur.com/eVTqHsH.png", "https://i.imgur.com/PkMwrPa.png", "https://i.imgur.com/ZtKq1bU.png", "https://i.imgur.com/7gRbpfS.png", "https://i.imgur.com/pO8qUUD.png", "https://i.imgur.com/3gp0WIi.png"];
const food = ['pizza', 'tacos', 'hamburger'];
const games = ['monopoly', 'chess', 'pong'];
const animals = ['dog', 'cat', 'lion'];

let picCounter = 0;
let missCounter = 0;
let letterCounter = 0;
let missedLetterCounter = 0;
let totalMisses = 0;
let playerScore = 0;
let cpuScore = 0;
let wordHolder;
// alphaSoup();


$('#playerButton').on('click', function (event) {
    event.preventDefault;
    $('#scoreName').html($('#playerInput').val());
});

$('#topicButton').on('click', function () {


    if ($('#topicInput').val() == 1) {
        wordHolder = (food[Math.floor(Math.random() * food.length)]);
        wordRandomizer();
        alphaSoup();
        clickLetter();
    } else if ($('#topicInput').val() == 2) {
        wordHolder = (games[Math.floor(Math.random() * games.length)]);
        wordRandomizer();
        alphaSoup();
        clickLetter();
    } else if ($('#topicInput').val() == 3) {
        wordHolder = (animals[Math.floor(Math.random() * animals.length)]);
        wordRandomizer();
        alphaSoup();
        clickLetter();
    }
});

function wordRandomizer() {
    for (i = 0; i < wordHolder.length; i++) {
        $('#wordLocation').append('<div>' + wordHolder[i]);
        $('#wordLocation div').attr('class', 'invisibleWord');
    }
}

//https://stackoverflow.com/questions/23409252/loop-from-a-to-z-in-jquery
function alphaSoup() {
    let alphabetSoup = 'A'.charCodeAt(0);
    for (let i = alphabetSoup; i < (alphabetSoup + 26); i++) {
        $('#letConBox').append('<button>' + String.fromCharCode(i) + '</button>');
        $('#letConBox button').attr('class', 'clickLetter');
    }
}

// https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript
function clickLetter() {
    $('.clickLetter').on('click', function () {
        let letterValue = $(this).html();
        $(this).remove();
        for (let k = 0; k < wordHolder.length; k++) {
            if (wordHolder[k].toUpperCase() !== letterValue) {
                missCounter++;
                console.log('misses' + missCounter);

            }
            missFinder();
        }
        for (let j = 0; j < wordHolder.length; j++) {
            if (wordHolder[j].toUpperCase() === letterValue) {
                $("#wordLocation div").eq(j).css({ 'color': 'red' });
                letterCounter++;
                missCounter = 0;
            }
        }
        winChecker();
        loseChecker();
    });
}

function winChecker() {
    if (letterCounter === wordHolder.length) {
        swal('You win!!');
        playerScore++;
        $('#playerScore').html(playerScore);
    }
}

function loseChecker() {
    if (totalMisses === 6) {
        swal("You Lose!!");
        cpuScore++;
        $('#compScore').html(cpuScore);
        totalMisses = 0;
    }
}

function missFinder() {
    if (missCounter === wordHolder.length) {
        totalMisses++;
        swal("Wrong!");
        picLoader();
        missCounter = 0;
    }
}

$('#replayButton').on('click', function () {
    resetCounters();
    // wordBoxReset();
    $('#hangImg').attr('src', "https://i.imgur.com/pCD9I6s.png");
    // letterBoxReset();
    pageReset()
})

function picLoader() {
    $('#hangImg').attr('src', picArray[picCounter]);
    picCounter++;
}

function resetCounters() {
    picCounter = 0;
    missCounter = 0;
    letterCounter = 0;
    missedLetterCounter = 0;
    totalMisses = 0;
    totalMisses = 0;
    alphabetSoup = 'A'.charCodeAt(0);
}

// function wordBoxReset() {
//     $('#wordLocation').load('index2.html #wordLocation')
// }
// function letterBoxReset() {
//     $('#letterBox').load('index2.html #letterBox')
// }
// function playerInfoReset() {
//     $('#playerInfo').load('index2.html #letterBox')
// }

function pageReset() {
    $('body').load('index2.html #letterBox')
}