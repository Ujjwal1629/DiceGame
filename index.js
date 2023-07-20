var randomNumber1 = Math.floor(Math.random() * 6) + 1; //The Math.floor() method rounds a number DOWN to the nearest integer.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var images1 = "images/dice" + randomNumber1 + ".png";
var images2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", images1);
document.querySelector(".dice .img2").setAttribute("src", images2);
if (randomNumber1 > randomNumber2) {
  //textContent to change the content according to if else function
  document.querySelector("h1").textContent = "Player 1 Wins⭐️";
  var tom1 = new Audio("sounds/victory.mp3");
  tom1.play();
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "⭐️Player 2 Wins"; //The querySelector() method returns the first element that matches a CSS selector. To return all matches (not only the first), use the querySelectorAll() instead.
  var tom2 = new Audio("sounds/victory.mp3");
  tom2.play();
} else {
  document.querySelector("h1").textContent = "Draw☹️";
  var tom3 = new Audio("sounds/draw.mp3");
  tom3.play();
}
