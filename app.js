var sum = document.getElementById("sum");
var show = document.getElementById("=");
var clear = document.getElementById("clear");
var numArr = [];
var opreators = [];
for (var i = 0; i < 14; i++) {
  numArr[i] = document.getElementById(`${i}`);
}
numArr.forEach((element) => {
  if (
    element.textContent == "+" ||
    element.textContent == "-" ||
    element.textContent == "/" ||
    element.textContent == "*"
  ) {
    element.addEventListener("click", () => {
      sum.textContent += ` ${element.textContent} `;
    });
  } else {
    element.addEventListener("click", () => {
      sum.textContent += element.textContent;
    });
  }
});
clear.addEventListener("click", () => {
  sum.textContent = "";
});

show.addEventListener("click", () => {
  sum.textContent = eval(sum.textContent);
});
