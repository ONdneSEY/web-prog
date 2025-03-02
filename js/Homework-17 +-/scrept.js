const boxResult = document.querySelector(".box-result");
const buttonStart = document.querySelector("#start");


function getFibonacci(n) {
  if (n === 0) return 0;
//   if (n === 1) return 1;


  
  if (n > 0) {
    let F0 = 0, F1 = 1, temp;
    for (let i = 2; i <= n; i++) {
      temp = F0 + F1;
      F0 = F1;
      F1 = temp;
    }
    return F1;
  }

  
  if (n < 0) {
    let F0 = 0, F1 = -1, temp;
    for (let i = -1; i >= n; i--) {
      temp = F0 + F1; 
      F0 = F1;
      F1 = temp;
    //   console.log(`${i} , ${F0} , ${F1} , ${temp}`);
    }
    return F0;
  }
}


buttonStart.addEventListener("click", () => {
  const numberInput = document.querySelector(".number");
  const number = parseInt(numberInput.value);

  
  if (isNaN(number)) {
    boxResult.textContent = "Будь ласка, введіть число!";
    return;
  }

  
  const result = getFibonacci(number);

 
  const span = document.createElement("span");
  span.innerHTML =`F(${number}) = ${result}`;
  boxResult.appendChild(span);
});