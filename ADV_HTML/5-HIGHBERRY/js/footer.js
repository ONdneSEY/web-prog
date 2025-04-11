const compani = document.querySelector('#compani');
const person = document.querySelector('#person').value;
const phone = document.querySelector('#phone').value;
const maill = document.querySelector('#maill').value;
const regist = document.querySelector('.batton-footer');

let newUser = {};

regist.addEventListener('click', function(){
    newUser = "compani", compani.value;

    console.log(newUser());
});

