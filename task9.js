var a = [24, 53, 78, 91, 12];
var b;
for (i = 0; i < a.length-1; i++) {
  if (a[i] > a[i+1]) {
    b = a[i]
    console.log(b);
  }
  else {
    b = a[i+1];
    console.log(b);
  }
}
document.write("Array Items: " + a + "<br>")
document.write("The largest number is " + b);