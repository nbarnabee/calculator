let calcArray = [];
let calcString;
const buttonSet = document.querySelectorAll(".numButton");

Array.from(buttonSet).forEach(element => element.addEventListener('click', populateArray));

function populateArray(click) {
  calcArray.push(click.target.value);
  console.log(calcArray);
  calcString = calcArray.join("");
  document.getElementById("displayField").innerHTML = calcString;
}
