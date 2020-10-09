let dieRolls = [];
let rollButton = document.querySelector("#roll-button");
let numDice = document.querySelector("#num-dice");
let showRolls = document.querySelector("#show-all-rolls");
let showTotalRolls = document.querySelector("#total-rolls");
let listResults = document.querySelector("#list-of-results");
let diceRollTotal = 0;
let count = 0;

rollButton.addEventListener("click", function () {
  let diceQuantity = numDice.value;

  while (count < diceQuantity) {
    let diceRoll = Math.floor(Math.random() * 6 + 1);
    count++;
    dieRolls.push(diceRoll);

    diceRollTotal += diceRoll;
    console.log(diceRollTotal);
    showTotalRolls.innerHTML = diceRollTotal;
  }
});

showRolls.addEventListener("click", function () {
  let counter = 0;

  while (counter < dieRolls.length) {
    const newDiceString =
      '<li class= "listResults">' + dieRolls[counter] + "</li>";
    showTotalRolls.innerHTML += newDiceString;
    console.log(listResults);
    counter++;
  }
});
console.log(rollButton);
console.log(showRolls);
