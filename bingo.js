var bingos = [
  "enemy spam",
  "sound effects everywhere",
  "bring yoshi to the goal",
  "tech level",
  "pick a door/pipe",
  "1-1 remake",
  "collect all coins",
  "music level",
  "softlock with no way of dying",
  "infinite fire flower boss fight",
  "no checkpoints (without clear condition)",
  "enemy spam (with star)",
  "good level",
  "builder/ superball level",
  "themed after another game",
  "kaizo blocks",
  "level can be cheesed",
  "auto mario level",
  '"First Level" in title',
  "meowser or boom-boom",
  "title level",
  "terribly named level",
  "kills mario at the start",
  "on/off blocks",
  "#DGR level",
  "Troll level",
  "can't touch the ground clear condition",
  "speedrun with full length timer",
  "vertical auto- scroller",
  "dev star/exit",
  "1up at goal is impossible",
  "pixel art in thumbnail",
  "back to cp1",
  "manadatory yoshi death",
]

var squares = document.querySelectorAll(".bingo-square")
var modal = document.querySelector(".bingo-modal-backdrop")
var bingoMatch =
  /12345|678910|1112131415|1617181920|2122232425|1.*6.*11.*16.*21|2.*7.*12.*17.*22|3.*8.*13.*18.*23|4.*9.*14.*19.*24|5.*10.*15.*20.*25|1.*7.*13.*19.*25|5.*9.*13.*17.*21/

function setCard() {
  shuffleArray()
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerText = bingos[i]
  }
}

function shuffleArray() {
  for (var i = bingos.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = bingos[i]
    bingos[i] = bingos[j]
    bingos[j] = temp
  }
}

function playAgain() {
  keepPlaying()
  clearBoard()
  setCard()
}

function markBoard(e) {
  e.target.classList.toggle("cross-off")
  checkBingo()
}

function clearBoard() {
  Array.from(squares).forEach(square => {
    square.classList.remove("cross-off")
  })
}

function checkBingo() {
  var values = Array.from(document.querySelectorAll(".cross-off"))
    .map(x => +x.getAttribute("value"))
    .sort((a, b) => a - b)
    .join("")
  if (bingoMatch.test(values)) bingo()
}

function bingo() {
  modal.classList.add("got-bingo")
}

function keepPlaying() {
  modal.classList.remove("got-bingo")
}

setCard()
document.querySelector(".copyright").innerText = `David Irvin © ${new Date().getFullYear()}`
