function checkFirstVisit() {
  if (document.cookie.indexOf('mycookie') == -1) {
    // cookie doesn't exist, create it now
    document.cookie = 'mycookie=1';
  } else {
    let score1 = Math.floor(Math.random() * 6) + 1;
    let score2 = Math.floor(Math.random() * 6) + 1;
    if (score1 > score2) {
      document.querySelector(".dice-heading").innerHTML = "Player 1 Wins! 🚩"
    } else if (score1 < score2) {
      document.querySelector(".dice-heading").innerHTML = "Player 2 Wins! 🚩"
    } else {
      document.querySelector(".dice-heading").innerHTML = "Draw !"
    }
    document.querySelector(".dice-image-player1").setAttribute("src", 'images/dice' + score1 + '.png');
    document.querySelector(".dice-image-player2").setAttribute("src", 'images/dice' + score2 + '.png');
  }
}checkFirstVisit();
