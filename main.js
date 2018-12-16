const food = ['pizza', 'tacos', 'hamburger'];
const games = ['monopoly', 'chess', 'pong'];
const animals = ['dog', 'cat', 'lion'];
const alphabetSoup = 'A'.charCodeAt(0);

let foodHolder = (food[Math.floor(Math.random() * food.length)]);
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

function wordSplitter() {
    for (i = 0; i < foodHolder.length; i++) {
        $('#wordLocation').append('<div>' + foodHolder[i] + '</div>')
    }
}

$('.clickLetter').on('click', function () {
    let letterValue = $(this).html();
    alert(letterValue);
    for (let j = 0; j < foodHolder.length; j++) {
        if (foodHolder[j].toUpperCase() === letterValue) {
            alert("ok");
            $('chosenWord div:eq(j)').css('background-color', 'red');
        }
        // } else if (foodHolder[j].toUpperCase() !== letterValue) {
        //     alert("Try again");
        // }
    }
});