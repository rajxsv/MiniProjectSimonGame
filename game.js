const buttonColours = ["red", "blue", "green", "yellow"];
const userClickedPattern = [];
const gamePattern = [];

var level = 0;
let started = false;
$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function () {
  const userChosenColour = this.id;

  playSound(userChosenColour);
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
})


function checkAnswer(currentLevel) {

}

function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(color) {
  $("#" + color).addClass("pressed");
  // setTimeout($("#" + color).removeClass("pressed"), 100)
  setTimeout(function () {
    $("#" + color).removeClass("pressed");
  }, 100);

}

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
}

