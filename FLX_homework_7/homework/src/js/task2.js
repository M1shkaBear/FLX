let possiblePrize = 10;
let rMax = 5;
let nowPrize = 10;
let totalPrize = 0;
let randomNumber = Math.floor(Math.random() * 5) + 1;
let startGame = confirm("Do you want to play a game?");
let userNumber = 0;
if (startGame) {
  for (let firstAttempt = 3; firstAttempt > 0; firstAttempt--) {
    userNumber = prompt(
      "Enter a random number from 0 to 5\nAttempts left: " +
        firstAttempt +
        "\nTotal prize: " +
        totalPrize +
        "\nPossible prize on current attempt: " +
        possiblePrize,
      "0"
    );
    if (parseInt(userNumber) === randomNumber) {
      totalPrize += possiblePrize;
      let secGame = confirm(
        "Congratulation! Your prize is: " +
          totalPrize +
          ". Do you want to continue?"
      );
      if (secGame) {
        rMax *= 2;
        nowPrize *= 3;
        possiblePrize = nowPrize;
        firstAttempt = Math.round(Math.random() * rMax);
      } else {
        break;
      }
    } else {
      possiblePrize = Math.floor(possiblePrize / 2);
    }
  }
  alert("Thank you for a game. Your prize is: " + totalPrize);
} else {
  alert("You did not become a millionaire, but can.");
}
