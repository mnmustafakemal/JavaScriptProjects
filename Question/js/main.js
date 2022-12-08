//* DOM
let plusIconDOM = document.querySelector(".plusIcon")
let minusIconDOM = document.querySelector(".minusIcon")
let cardTextDOM = document.querySelector("#cardText")

minusIconDOM.addEventListener("click", plus)

function plus (e){
    e.preventDefault();
    
    plusIconDOM.classList.remove("d-none")
    cardTextDOM.classList.add("d-none")
    minusIconDOM.classList.add("d-none")
    }

plusIconDOM.addEventListener("click", function(e){
    e.preventDefault()

    minusIconDOM.classList.remove("d-none")
    cardTextDOM.classList.remove("d-none")
    plusIconDOM.classList.add("d-none")
})