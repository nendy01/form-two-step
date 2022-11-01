const form = document.querySelector('.form-first');
const formTwo = document.querySelector(".form-second")


const back = document.querySelector('.back')

form.addEventListener('submit', (e) => {
  e.preventDefault()



  document.querySelector('.progress').value = 50
  form.classList.add('invisible')
  formTwo.classList.add('visible')
})

 back.addEventListener("click", () => {
  document.querySelector('.progress').value = 0
  form.classList.remove('invisible')
  formTwo.classList.remove('visible')
  
}) 