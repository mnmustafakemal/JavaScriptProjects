const addbtnDOM = document.getElementById("addbtn")
const dltbtnDOM = document.getElementById("dltbtn")
const inputDOM = document.getElementById("list")
const listgroupDOM = document.querySelector(".list-group")

addbtnDOM.addEventListener("click", function(){
    const liElement = document.createElement("li")

    if(inputDOM.value.length == 0){
        const danger = document.querySelector(".alert-danger")
        danger.classList.remove("d-none")
        setTimeout(function(){
            danger.classList.add("d-none")
        }, 3000)
    }
    else{
        liElement.classList.add("list-group-item")
        liElement.innerHTML = `${inputDOM.value}`
        listgroupDOM.prepend(liElement)
        inputDOM.value = ""
        const success = document.querySelector(".alert-success")
        success.classList.remove("d-none")
        setTimeout(function(){
            success.classList.add("d-none")
        }, 3000)
    }
    
    const liDOM = document.querySelector(".list-group-item")

    liDOM.addEventListener("click", function(){
        if(liDOM.style.textDecoration == "line-through"){
            liDOM.style.textDecoration = ""
            liDOM.style.backgroundColor = ""
        }
        else{
            liDOM.style.textDecoration = "line-through"
            liDOM.style.backgroundColor = "#a9c7b7"
        }
    })    

    dltbtnDOM.addEventListener("click", function(){
        liDOM.classList.add("d-none")
    })

})

