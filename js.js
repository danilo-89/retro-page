console.log("test");

function myFunction() {
  return this;
}

console.log(myFunction());
console.log("fgdfg");

function calcCatAge() {
  var catAge = document.getElementsByName("catAge")[0].value;
  var humanYears = 4*(catAge - 2) + 24;
  console.log(catAge);
  console.log(humanYears);
  document.getElementById("humanAge").innerHTML = humanYears;
}
