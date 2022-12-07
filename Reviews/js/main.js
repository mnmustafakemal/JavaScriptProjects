const info = [
    {
        id: 1,
        name: "Shakira",
        img: "https://tr.web.img2.acsta.net/pictures/15/09/24/11/19/077124.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quibusdam similique."
    },

    {
        id: 2,
        name: "Doja Cat",
        img: "https://ia.tmgrup.com.tr/a271df/0/0/0/0/750/1125?u=https://i.tmgrup.com.tr/cr/2022/03/26/doja-cat-muzigi-biraktigini-soyledi-1648287318733.jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus consectetur in quos ullam nemo ad?"
    },
    {
        id: 3,
        name: "Beyonce",
        img: "https://cdn1.ntv.com.tr/gorsel/HnGhMGXKZkuCxnVeMgZVKw.jpg?width=1000&mode=crop&scale=both",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores consequatur soluta cum."
    },
    {
        id: 4,
        name: "Halsey",
        img: "https://cdn1.ntv.com.tr/gorsel/-i0HQDVdYkODbTRgzIMqnA.jpg?width=1000&mode=crop&scale=both",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto debitis rerum velit earum. Delectus quis suscipit dignissimos."
    },
    {
        id: 5,
        name: "Cardi B",
        img: "https://ia.tmgrup.com.tr/f191f1/0/0/0/0/1280/1925?u=https://i.tmgrup.com.tr/cr/2022/08/15/cardi-b-sac-bakim-sirrini-acikladi-1660564356584.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius deleniti unde assumenda ea quae necessitatibus suscipit?"
    },
    {
        id: 6,
        name: "Nicki Minaj",
        img: "https://akns-images.eonline.com/eol_images/Entire_Site/2021414/rs_1200x1200-210514115341-1200-Nicki-Minaj-LT-51421-GettyImages-839980314.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam!"
    },
    {
        id: 7,
        name: "Rihanna",
        img: "https://cdn1.ntv.com.tr/gorsel/3PElfMQlZEiPtbNKMctmpA.jpg?width=1000&mode=crop&scale=both",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, animi! Aut, eveniet et? Non cumque ad error, itaque atque exercitationem."
    }
]

//* DOM

const imgDOM = document.getElementById("img")
const nameDOM = document.getElementById("name")
const textDOM = document.getElementById("text")

const prevBtnDOM = document.querySelector(".prev-btn")
const nextBtnDOM = document.querySelector(".next-btn")

//*starting item
let currentItem = 0;

//*laod item
window.addEventListener("DOMContentLoaded", function(){
    show(currentItem)
})

function show(person){
    const item = info[person]
    imgDOM.src = item.img;
    textDOM.textContent = item.text;
    nameDOM.textContent = item.name;
}

nextBtnDOM.addEventListener("click", function(){
    currentItem++
    if(currentItem > 6){
        currentItem = 0
    }
    show(currentItem)
})

prevBtnDOM.addEventListener("click", function(){
    currentItem--
    if(currentItem < 0){
        currentItem = 6
    }
    show(currentItem)
})