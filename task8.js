document.write("a. Counting: ");
for (j = 1; j < 16; j++) {
  document.write(j);
  if (j < 15) {
      document.write(", ");
  }
}

document.write("<br>" + "b. Reverse Counting: ");
for (j = 10; j > 0 ; j--) {
  document.write(j);
  if (j > 1) {
      document.write(", ");
  }
}

document.write("<br>" + "c. Even: ");
for (j = 2; j <= 20; j++) {
  if (j % 2 === 0) {
      document.write(j);
  }
  if (j % 2 === 0 && j < 20) {
      document.write(", ");
  }
}

document.write("<br>" + "d. Odd: ");
for (j = 1; j <= 20; j++) {
  if (j % 2 !== 0) {
      document.write(j);
  }
  if (j % 2 !== 0 && j < 19) {
      document.write(", ");
  }
}

document.write("<br>" + "e. Series: ");
for (j = 2; j <= 20; j++) {
  if (j % 2 === 0) {
      document.write(j + "k");
  }
  if (j % 2 === 0 && j < 20) {
      document.write(", ");
  }
}