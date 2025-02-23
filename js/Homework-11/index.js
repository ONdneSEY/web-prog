document.addEventListener('keydown', function(event){
  const activBattons = document.querySelector('.btn.active');
  if(activBattons)
    activBattons.classList.remove('active');

  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button =>{
    if(button.textContent.toLocaleLowerCase() === event.key.toLocaleLowerCase())
      button.classList.add('active');
  })
})
  