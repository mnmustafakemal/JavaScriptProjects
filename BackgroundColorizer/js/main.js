let buttoncolorDOM = document.getElementById("buttonColor")
let textColorDOM = document.getElementById("textColor")
let copyTextDOM = document.getElementById("copyText")
const color = ["#C0EEE4", "#FFCAC8", "#CCD6A6", "#495579", "#C147E9", "#FFDCA9", "#DBA39A", "#68B984", "#9C254D", "#285430", "#975C8D", "#A0E4CB", "#815B5B", "#D8D9CF", "#DD5353", "#8BBCCC", "#E1FFB1", "#C7F2A4", "#FD841F", "#F07DEA", "#472D2D", "#FFEEAF", "#42855B"]

buttoncolorDOM.addEventListener("click", function (){
    const random = getRandom()
    document.body.style.backgroundColor = color[random]
    textColorDOM.textContent = color[random]
})

function getRandom(){
    return Math.floor(Math.random() * color.length)
}

