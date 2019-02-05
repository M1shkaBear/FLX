var money = prompt("Enter a sum");
var disc = prompt("Enter the discount");
var withDisc;
var withoutDisc;
var save;

withDisc = (1 / 100) * disc;
withoutDisc = (money - money * withDisc).toFixed(2);

save = (money - withoutDisc).toFixed(2);

if (money < 0 || money > 9999999) {
  alert("Invalid input data");
} else if (disc < 0 || disc > 99) {
  alert("Invalid input data");
} else {
  alert(
    "Price without discount:" +
      money +
      "\n" +
      "Discount:" +
      disc +
      "%" +
      "\n" +
      "Price with discount:" +
      withoutDisc +
      "\n" +
      "Saved:" +
      save
  );
}
