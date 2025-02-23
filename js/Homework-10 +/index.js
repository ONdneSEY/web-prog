function showPas(selectPasByID, icon){
  const selectPas = document.getElementById(selectPasByID);
  const isPasType = selectPas.type === `text`;

  if(isPasType){
    selectPas.type ="password"
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
  }
  else{
    selectPas.type = "text"
    icon.classList.add("fa-eye");
    icon.classList.remove("fa-eye-slash");
  }
}

function validatePasswords(event){
  const getPas1 = document.getElementById('password1').value;
  const getPas2 = document.getElementById('password2').value;
  const error = document.getElementById('error-message');

  if(getPas1 == getPas2){
    alert('(___ Yor are welcome ___)');
    error.style.display = 'none';
  }
  else{

    error.style.display = 'block';
  }
}