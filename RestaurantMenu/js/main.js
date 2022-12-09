let items = [
    {
        id: "breakfast",
        name:"Sucuklu Yumurta",
        price: "30tl",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, maiores!",
        img: "https://i.lezzet.com.tr/images-xxlarge/sucuklu_yumurta-764e66f1-1d63-4e81-8ebd-80262c5503aa"
    },
    {
        id: "breakfast",
        name: "Bazlama",
        price: "15tl",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ullam eius officia enim, aliquid deserunt odio natus porro?",
        img: "https://cdn.ye-mek.net/App_UI/Img/out/650/2020/04/mayali-bazlama-resimli-yemek-tarifi(15).jpg"
    },
    {
        id: "breakfast",
        name: "Tereyagli Yumurta",
        price: "25tl",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sunt doloribus eius odit.",
        img: "https://cdn.ye-mek.net/App_UI/Img/out/650/2014/01/sahanda-yumurta-resimli-yemek-tarifi(7).jpg"
    },
    {
        id: "lunch",
        name: "Corba",
        price: "10tl",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio.",
        img: "https://cdn.yemek.com/mnresize/940/940/uploads/2019/10/cesmi-nigar-corbasi-one-cikan-yeni.jpg"
    },
    {
        id: "lunch",
        name: "salata",
        price: "7tl",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "https://im.haberturk.com/2019/10/09/ver1570612285/2529294_810x458.jpg"
    },
    {
        id: "lunch",
        name: "Patates Kizartmasi",
        price: "14tl",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        img: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/patates-kizartmasi-yemekcom.jpg"
    },
    {
        id: "shakes",
        name: "Banana Smoothie",
        price: "30tl",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quam.",
        img: "https://kristineskitchenblog.com/wp-content/uploads/2021/04/banana-smoothie-1200-square-519.jpg"
    },
    {
        id: "shakes",
        name: "Peach Smoothie",
        price: "30tl",
        text: "Lorem ipsum dolor sit amet consectetur.",
        img: "https://www.acouplecooks.com/wp-content/uploads/2020/06/Peach-Smoothie-001.jpg"
    },
    {
        id: "shakes",
        name: "Strawberry Smoothie",
        price: "30tl",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quam. Ankla sit quero.",
        img: "https://www.acouplecooks.com/wp-content/uploads/2020/04/Strawberry-Smoothie-003.jpg"
    },
    {
        id: "dinner",
        name: "Karniyarik",
        price: "40tl",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta harum consectetur obcaecati possimus impedit. Cumque, cum?",
        img: "https://i4.hurimg.com/i/hurriyet/75/750x422/5ad9b23e0f254321e0bebe31.jpg"
    },
    {
        id: "dinner",
        name: "Manti",
        price: "37tl",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta harum consectetur obcaecati possimus impedit.",
        img: "https://cdn.yemek.com/mnresize/940/940/uploads/2020/08/manti-tarifi-guncelleme-son.jpg"
    },
    {
        id: "dinner",
        name: "İcli Kofte",
        price: "45tl",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, perferendis ipsum omnis eos rerum autem placeat voluptatibus eligendi? Consequatur, tempora.",
        img: "https://i.nefisyemektarifleri.com/2014/03/icli-kofte-yapimi-emine-ayse-fotografi-4.jpg"
    }
]

//* DOM 

let cardDOM = document.querySelectorAll(".card")
let currentItem = 0

cardDOM.forEach(function(cardDOM){
    let titleDOM = cardDOM.querySelector(".card-title")
    let imgDOM = cardDOM.querySelector(".card-img-overlay")
    let price = cardDOM.querySelector(".price")
    let textDOM = cardDOM.querySelector(".card-text")

    titleDOM.textContent = items[currentItem].name
    price.textContent = items[currentItem].price
    textDOM.textContent = items[currentItem].text
    imgDOM.src = items[currentItem].img
    currentItem++

})
