let calcArray = [];
let calcString;
let answer;
const buttonSet = document.querySelectorAll(".calcButton");

document.querySelector(".equals").onclick = calculateAnswer;

Array.from(buttonSet).forEach(element => element.addEventListener('click', populateArray));

function populateArray(click) {
  if (click.target.value === "AC") {
    calcArray.length = 0;
  }

  else if (click.target.value === "C") {
    calcArray.pop();
  }

  else {
    calcArray.push(click.target.value);
  }

  calcString = calcArray.join("");
  document.getElementById("displayField").innerHTML = calcString;
  return calcString;

}


function calculateAnswer() {
  calcString = eval(calcString);
  document.getElementById("displayField").innerHTML = calcString;
}