var a = [24, 53, 78, 4, 91, 12];
var b = [];
matchCounter = false;
for (var i = 0; i < a.length; i++) {
  if (a[i] < a[i+1]) {
    matchCounter = true;
    b.push(a[i]);
    break;
  }
  else {
    b.push(a[i+1]);
  }
}
document.write(a);