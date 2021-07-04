

var squares = $(".bingo-square")
var bingos = [
    "enemy spam",
    "sound effects everywhere",
    'bring yoshi to the goal',
    'tech level',
    'pick a door/pipe',
    '1-1 remake',
    'collect all coins',
    'music level',
    'softlock with no way of dying',
    'infinite fire flower boss fight',
    'no checkpoints (without clear condition)',
    'enemy spam (with star)',
    'good level',
    'builder/ superball level',
    'themed after another game',
    'kaizo blocks',
    'level can be cheesed',
    'auto mario level',
    '"First Level" in title',
    'meowser or boom-boom',
    'title level',
    'terribly named level',
    'kills mario at the start',
    'on/off blocks',
    '#DGR level',
    'Troll level',
    "can't touch the ground clear condition",
    'speedrun with full length timer',
    'vertical auto- scroller',
    'dev star/exit',
    '1up at goal is impossible',
    'pixel art in thumbnail',
    'back to cp1'

]

function setCard() {
    shuffleArray();
    for (var i=0; i < squares.length; i++) {
        squares[i].innerHTML = bingos[i]
    }
}

setCard();

if (parseFloat(window.getComputedStyle(document.querySelector("html")).width) > 850) {
    jQuery(squares).fitText(0.7);
} else {
    jQuery(squares).fitText(0.6)
}

function shuffleArray() {
    for (var i = bingos.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = bingos[i];
        bingos[i] = bingos[j];
        bingos[j] = temp;
    }
}

function shuffleCard() {
    document.querySelector(".bingo-modal-backdrop").classList.remove("got-bingo")
    // confetti.remove();
    var crossedTiles = Array.from($(".cross-off"))
    if (crossedTiles) {
        crossedTiles.forEach(item => {
            item.classList.remove("cross-off")
        })
    }
    shuffleArray();
    setCard()
}

function crossOff(e) {
    e.target.classList.toggle("cross-off");
    getBingo()
}

function getBingo() {
    var array = []
    var xOut = Array.from($(".cross-off"))
    xOut.forEach(x => {
        array.push(x.getAttribute("value"))
    })
    if (
        array.includes("1") &&
        array.includes("2") &&
        array.includes("3") &&
        array.includes("4") &&
        array.includes("5") ||
        array.includes("6") &&
        array.includes("7") &&
        array.includes("8") &&
        array.includes("9") &&
        array.includes("10") ||
        array.includes("11") &&
        array.includes("12") &&
        // array.includes("13") &&
        array.includes("14") &&
        array.includes("15") ||
        array.includes("16") &&
        array.includes("17") &&
        array.includes("18") &&
        array.includes("19") &&
        array.includes("20") ||
        array.includes("21") &&
        array.includes("22") &&
        array.includes("23") &&
        array.includes("24") &&
        array.includes("25") ||
        array.includes("1") &&
        array.includes("6") &&
        array.includes("11") &&
        array.includes("16") &&
        array.includes("21") ||
        array.includes("2") &&
        array.includes("7") &&
        array.includes("12") &&
        array.includes("17") &&
        array.includes("22") ||
        array.includes("3") &&
        array.includes("8") &&
        // array.includes("13") &&
        array.includes("18") &&
        array.includes("23") ||
        array.includes("4") &&
        array.includes("9") &&
        array.includes("14") &&
        array.includes("19") &&
        array.includes("24") ||
        array.includes("5") &&
        array.includes("10") &&
        array.includes("15") &&
        array.includes("20") &&
        array.includes("25") ||
        array.includes("1") &&
        array.includes("7") &&
        // array.includes("13") &&
        array.includes("19") &&
        array.includes("25") ||
        array.includes("5") &&
        array.includes("9") &&
        // array.includes("13") &&
        array.includes("17") &&
        array.includes("21")

        ) {
            document.querySelector(".bingo-modal-backdrop").classList.add("got-bingo")
            // confetti.start();
            // setCard();
        }        
}

function keepPlaying() {
    // confetti.remove();
    document.querySelector(".bingo-modal-backdrop").classList.remove("got-bingo")
}

document.querySelector(".copyright").innerHTML = `David Irvin © ${new Date().getFullYear()}`