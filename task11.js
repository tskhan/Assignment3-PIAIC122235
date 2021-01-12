var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var b = prompt("Welcome to ABC Bakery. What do you want to order sir/ ma'am?");
matchCounter = false
for (var i = 0; i < 6; i++) {
  if (b === a[i]) {
    matchCounter = true
    document.write(a[i] + " is available at index " + i + " in our Bakery");
    break;
  }
}
if (matchCounter === false) {
    document.write("We are Sorry. " + b + " is not available at our Bakery");
 }