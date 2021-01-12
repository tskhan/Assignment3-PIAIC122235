var stuName = ["Michael", "Jhon", "Tony"];
var stuScore = [320, 230, 480];
for (var i = 0; i < 3; i++) {
  document.write("Score of " + stuName[i] + " is " + stuScore[i] + ". Percentage: " + Math.round((stuScore[i]/500*100)) + "%" + "<br>");
}