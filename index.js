// detecting button press

for (var c = 0; c < document.querySelectorAll(".drum").length; c++) {
  document.querySelectorAll(".drum")[c].addEventListener("click", function () {
    var buttonPressed = this.innerHTML;
    // console.log(buttonPressed);
    makeSound(buttonPressed); // wywołuję funkcję makeSound dla input = var buttonPressed
    buttonAnimation(buttonPressed);
  });
}

// detecting keyboard press

document.addEventListener("keydown", function (event) {
  var keyPressed = event.key;
  // console.log(keyPressed);
  makeSound(keyPressed);
  buttonAnimation(keyPressed);
});

// deklaracje funkcji

function makeSound(input) {
  switch (input) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "l":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(this.innerHTML);
      break;
  }
}

function buttonAnimation(input4animation) {
  var activeButton = document.querySelector("." + input4animation);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);
}
