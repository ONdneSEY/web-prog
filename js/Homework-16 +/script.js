const start = document.querySelector(".start");
const result = document.querySelector(".result");
const historyList = document.querySelector("#historyList");

function getNumder() {
    const number = document.querySelector("#number").value;
    return parseFloat (number);
}

function addTohistoryList(entry){
    const span = document.createElement('span');
    span.innerHTML = entry;
    historyList.appendChild(span);
}

start.addEventListener("click", () =>{
    const numberValue = getNumder();
    
    let factorial = 1;
    for(let i=1; i <= numberValue; i++){
        factorial *= i; 
    }

    result.textContent = `!${numberValue} = ${factorial}`;
    addTohistoryList(`!${numberValue} = ${factorial}`);
})