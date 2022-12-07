let buttoncolorDOM = document.getElementById("buttonColor")
let textColorDOM = document.getElementById("textColor")
const color = ["#C0EEE4", "#FFCAC8", "#CCD6A6", "#495579", "#C147E9", "#FFDCA9", "#DBA39A", "#68B984", "#9C254D", "#285430", "#975C8D", "#A0E4CB", "#815B5B", "#D8D9CF", "#DD5353", "#8BBCCC", "#E1FFB1", "#C7F2A4", "#FD841F", "#F07DEA", "#472D2D", "#FFEEAF", "#42855B", "#005C53", "#D6D58E", "#400101", "#BF2E21", "#F2B6A0", "#F2C36B", "#BF565F", "#D9CAC1", "#BFAAA3", "#402019", "#593C39", "#264773", "#4192D9", "#4BC3F2", "#50D4F2", "#F29BBB", "#5E9ABF", "#F2CD88", "#F2C791", "#34401A", "#64732F", "#CAD959", "#B4BF5E"]

buttoncolorDOM.addEventListener("click", function (){
    const random = getRandom()
    document.body.style.backgroundColor = color[random]
    textColorDOM.textContent = color[random]
})

function getRandom(){
    return Math.floor(Math.random() * color.length)
}

const copyBtnDOM = document.getElementById("copyBtn")
copyBtnDOM.addEventListener("click", function(){
    navigator.clipboard.writeText(textColorDOM.textContent)
    console.log("aaa")
})

