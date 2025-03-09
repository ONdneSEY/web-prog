let stydent = { 
    name: "", 
    lastName: "",
    tabel: {}
}



const logIn = document.querySelector('#log-in');
const enterLecon = document.querySelector('#enter-lecon');
const evaluationLog = document.querySelector('#evaluation-log');

//Log in

const inputName = document.createElement("input");
const inputLastName = document.createElement("input");
const buttonLogIn = document.createElement("button");
    
inputName.id = 'name';
inputLastName.id = 'lastName';
buttonLogIn.id = 'LogIn';

inputName.placeholder = "Введіть ім'я"
inputLastName.placeholder = "Введіть прізвище"
buttonLogIn.textContent = "Увійти"

logIn.append(
    inputName, 
    inputLastName, 
    buttonLogIn);

//Вхід
 buttonLogIn.addEventListener('click', () =>{
   const name = inputName.value;
   const lastName = inputLastName.value;

   if (/^\d+$/.test(name)){
        inputName.value = "";
        alert("Ти ж не клон, щоб ім'я було номером!!!");
        return;
   }
   if(/^\d+$/.test(lastName)){
        inputLastName.value = "";
        alert('Ти ж не клон, щоб прізвище було номером!!!');
        return;
   }

   if (!name || !lastName) {
        alert("А для кого ми заповнюємо табель???");
        return;
    }
   stydent.name = name;
   stydent.lastName = lastName;

    logIn.classList.remove('display-flex');
    enterLecon.classList.remove('display-flex');
    evaluationLog.classList.remove('display-flex');

    logIn.classList.add('display-none');
    enterLecon.classList.add('display-flex');
    evaluationLog.classList.add('display-none');
 })


 //Вікно з додавання уроків
 const inputLeson = document.createElement("input");
 const inputEvaluation = document.createElement("input");
 const buttonAddLeson = document.createElement("button");
 const buttonResult = document.createElement("button");
 const div = document.createElement('div');
 
 inputLeson.id = 'leson';
 inputEvaluation.id = 'evaluation';
 buttonAddLeson.id = 'add-leson';
 buttonResult.id = 'result';

div.classList.add('button-box')

 inputLeson.placeholder = "Введіть предмет";
 inputEvaluation.placeholder = "Введіть оцінку";
 buttonAddLeson.textContent = "Додати урок";
 buttonResult.textContent = "Дізнатися резутьтат";

 div.append(
    buttonAddLeson, 
    buttonResult
 );

 enterLecon.append(
    inputLeson, 
    inputEvaluation,
    div
 );

// Запуск додачі укрока з оцінкою
 buttonAddLeson.addEventListener('click', () =>{
    const spanNameLeson = document.createElement('span');
    const spanEvaluation = document.createElement('span');
    const buttonDel = document.createElement('button');
    const div = document.createElement('div');
    const divButton = document.createElement('div');
   
    spanNameLeson.classList.add('leson');
    spanEvaluation.classList.add('evaluation');
    buttonDel.classList.add('del');
    div.classList.add('leson-box');
    divButton.classList.add('div-button');


    const nameLeson = inputLeson.value;
    const evaluation = Number(inputEvaluation.value);

    if(!nameLeson){
        
        alert('А що за урок ми оцінюємо???');
        return;
    }

    if(!evaluation){
        alert('Значить отимуєш нуль (((');
        // inputEvaluation.value = 0;
    }

    if(/^\d+$/.test(nameLeson)){
        inputLeson.value = "";
        evaluation = inputLeson.value;
        alert('Може вже нарешті вичемо назву пердмета???');
        return;
    }

   if(isNaN(evaluation)){
        inputEvaluation.value = "";
        alert('Наскільки я знаю то в нас оцінюють числами!!!');
        return;
    }

   if(evaluation < 0 || evaluation > 10){
        inputEvaluation.value = "";
        alert('Наскільки я знаю то в нас десяти бальна система оцінювання(0 - 10)!!!');
        return;
    }
    stydent.tabel[nameLeson] = evaluation;
    spanNameLeson.innerText = nameLeson;
    spanEvaluation.innerText = evaluation;
    buttonDel.innerText = "X"


    // кнопка видалення передмета
    buttonDel.addEventListener('click', () => {
        div.remove();
        delete stydent.tabel[nameLeson];
        console.log(stydent.tabel);
    })
    console.log(stydent.tabel);

    divButton.append(buttonDel);
    div.append(divButton, spanNameLeson, spanEvaluation);
    enterLecon.appendChild(div);
 })
 
 // Кнопка запускку отримання результатів
 buttonResult.addEventListener('click', () =>{
    logIn.classList.remove('display-flex');
    enterLecon.classList.remove('display-flex');
    evaluationLog.classList.remove('display-flex');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const h3 = document.createElement('h3');

    logIn.classList.add('display-none');
    enterLecon.classList.add('display-none');
    evaluationLog.classList.add('display-flex');
    p2.classList.add('totalNam');

    console.log(stydent)

    p1.innerText = `${stydent.name} ${stydent.lastName}`
    
    evaluationLog.appendChild(p1);
    
    let evaluationAll = 0;
    let evaluationIsGood = 0;
    let evaluationIsBed = 0;
    let TotalScore = 0;
    let evaluationSer = 0;

    
    for(let evaluation  in stydent.tabel){

        const spanNameLeson = document.createElement('span');
        const spanEvaluation = document.createElement('span');
        const div = document.createElement('div');

        spanNameLeson.classList.add('leson');
        spanEvaluation.classList.add('evaluation');
        div.classList.add('leson-box');

        spanNameLeson.innerText = evaluation;
        spanEvaluation.innerText = stydent.tabel[evaluation];

        div.append(spanNameLeson, spanEvaluation);
        evaluationLog.appendChild(div);
        evaluationAll++;

        if(stydent.tabel[evaluation] <= 4)
            evaluationIsBed++;
        else
            evaluationIsGood++;

        const n = parseFloat(stydent.tabel[evaluation]);
        TotalScore += n;
        console.log(TotalScore);
    }
    evaluationSer = TotalScore/evaluationAll

    p2.innerText = `Всього оцінок ${evaluationAll}`
    p3.innerText = `Оцінки задовільно ${evaluationIsGood}`
    p4.innerText = `Оцінки не задовільно ${evaluationIsBed}`
    p5.innerText = `Середня кількість балів ${evaluationSer}`

    if(evaluationSer < 4){
        evaluationLog.classList.add('no');
        h3.innerText = "Уммм ти покидаєш нас (((";
    }

    if(evaluationSer > 7){
        evaluationLog.classList.add('yes');
        h3.innerText = "Ов єсс ти отримаєш монєту ;)";
    }

    evaluationLog.append(p2, p3, p4, p5, h3);
 })

