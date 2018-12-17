const picArray = ["https://i.imgur.com/hcxMzEb.png?1", "https://i.imgur.com/0u8yPXP.png?1", "https://i.imgur.com/rkDnlVb.png?1", "https://i.imgur.com/d8JYvo7.png?1", "https://i.imgur.com/6Y49UI1.png?1", "https://i.imgur.com/DlTpcl3.png?1"];
const food = ['pizza', 'tacos', 'hamburger'];
const games = ['monopoly', 'chess', 'pong'];
const animals = ['dog', 'cat', 'lion'];

const alphabetSoup = 'A'.charCodeAt(0);
let picCounter = 0;
let missCounter = 0;
let letterCounter = 0;
let missedLetterCounter = 0;
let totalMisses = 0;
let playerScore = 0;
let cpuScore = 0;

// let foodHolder = (food[Math.floor(Math.random() * food.length)]);
let gamesHolder = (games[Math.floor(Math.random() * games.length)]);
let animalsHolder = (animals[Math.floor(Math.random() * animals.length)]);

let wordHolder;
// let foodHolder = [];
alphaSoup();


$('#playerButton').on('click', function (event) {
    event.preventDefault;
    $('#scoreName').html($('#playerInput').val());
});

$('#topicButton').on('click', function () {
    if ($('#topicInput').val() == 1) {
        wordHolder = (food[Math.floor(Math.random() * food.length)]);
        wordRandomizer();
    } else if ($('#topicInput').val() == 2) {
        wordHolder = gamesHolder
        wordRandomizer();
    } else if ($('#topicInput').val() == 3) {
        wordHolder = animalsHolder;
        wordRandomizer();
    }
});

function wordRandomizer() {
    for (i = 0; i < wordHolder.length; i++) {
        $('#wordLocation').append('<div>' + wordHolder[i]);
        $('#wordLocation div').attr('class', 'invisibleWord');
        console.log(wordHolder)
    }
}

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
            console.log(letterCounter);
            missCounter = 0;
        }
    }
    winChecker();
    loseChecker();
});

function winChecker() {
    if (letterCounter === wordHolder.length) {
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
    if (missCounter === wordHolder.length) {
        totalMisses++;
        alert("wrong!");
        picLoader();
        missCounter = 0;
    }
}

$('#replayButton').on('click', function () {
    wordBoxReset();
    $('#hangImg').attr('src', "https://i.imgur.com/7KWkeDM.png?2");
    letterBoxReset();
    resetCounters();
    alphaSoup();
})

function picLoader() {
    $('#hangImg').attr('src', picArray[picCounter]);
    picCounter++;
}

function resetCounters() {
    let picCounter = 0;
    let missCounter = 0;
    let letterCounter = 0;
    let missedLetterCounter = 0;
    let totalMisses = 0;
    let playerScore = 0;
    let cpuScore = 0;
}

function wordBoxReset() {
    $('#wordLocation').load('index2.html #wordLocation')
}
// function imgBoxReset() {
//     $('img #hangImg').load('index2.html img #hangImg');
// }
function letterBoxReset() {
    $('#letConBox').load('index2.html #letConBox');
}
