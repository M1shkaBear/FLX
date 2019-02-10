let userName = prompt("Enter your login here");

if (userName === "User" || userName === "Admin") {
  let pass = prompt("Enter your password here");
  if (pass === "" || pass === null) {
    alert("Canceled.");
  } else if (
    (pass === "UserPass" && userName === "User") ||
    (pass === "RootPass" && userName === "Admin")
  ) {
    let currentHours = new Date().getHours();
    if (currentHours < 20) {
      alert(`Good day, dear ${userName}!`);
    } else {
      alert(`Good evening, dear ${userName}!`);
    }
  }
} else if (userName === "" || userName === null) {
  alert("Canceled.");
} else if (userName.length < 4) {
  alert("I don't know any users having name length less than 4 symbols");
} else {
  alert("I don’t know you");
}
