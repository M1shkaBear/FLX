// Your code goes here
var a = prompt('Enter "a"', 0);
var b = prompt('Enter "b"', 0);
var c = prompt('Enter "c"', 0);

if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
  alert("Invalid input data");
} else {
  d = Math.pow(b, 2) - 4 * a * c;
  if (d === 0) {
    x = -b / (2 * a);
    alert("x1=x2=" + x);
  } else if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    alert("x1=" + x1 + " x2=" + x2);
  } else if (d < 0) {
    alert("No solution");
  }
}
