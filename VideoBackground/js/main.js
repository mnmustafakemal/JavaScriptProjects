const btn = document.querySelector(".switch-btn")
const video = document.querySelector(".video-container")

btn.addEventListener("click", function(){
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide")
        video.pause()   //todo: If I want to play video, I use play(). Or I want to pause video, use pause()
    }
    else{
        btn.classList.remove("slide")
        video.play()
    }
})

