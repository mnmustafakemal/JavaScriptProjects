let arttirDOM = document.getElementById("arttir")
let sifirlaDOM = document.getElementById("sifirla")
let azaltDOM = document.getElementById("azalt")
let valueDOM = document.getElementById("value")
valueDOM.value = 0
valueDOM.innerHTML = valueDOM.value

arttirDOM.addEventListener("click", function(){
    valueDOM.value = valueDOM.value + 1
    valueDOM.innerHTML = valueDOM.value
})

azaltDOM.addEventListener("click", function(){
    valueDOM.value = valueDOM.value - 1
    valueDOM.innerHTML = valueDOM.value
})

sifirlaDOM.addEventListener("click", function(){
    valueDOM.value = 0
    valueDOM.innerHTML = valueDOM.value
})