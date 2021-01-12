var citiesName = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var position = ["th", "st", "nd", "rd"]
var combinaiton = [];
for (var i = 1; i < 4; i++) {
    document.write("The " + i + position[i] + " choice is " + citiesName[i-1] + "<br>");
  }