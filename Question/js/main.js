let question = document.querySelectorAll(".card")

question.forEach(function(question){
  let textDOM = question.querySelector(".card-text")
  const btnMinus = question.querySelector(".minusIcon")
  const btnPlus = question.querySelector(".plusIcon")
  btnMinus.addEventListener("click", function(){
    textDOM.classList.toggle("d-none")
    btnPlus.classList.toggle("d-none")
    btnMinus.classList.toggle("d-none")
  })
  btnPlus.addEventListener("click", function(){
    textDOM.classList.toggle("d-none")
    btnPlus.classList.toggle("d-none")
    btnMinus.classList.toggle("d-none")
  })
})