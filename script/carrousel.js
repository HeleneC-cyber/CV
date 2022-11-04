//constante slider intégration
const sliderI = document.getElementById('slider-integration')
const btnIS = document.getElementById('btn-integration-suivant')
const btnIP = document.getElementById('btn-integration-precedent')
const carrouselI = document.getElementById('carrousel-integration')

//constante slider maquette
const sliderM = document.getElementById('slider-maquette')
const btnMS = document.getElementById('btn-maquette-suivant')
const btnMP = document.getElementById('btn-maquette-precedent')
const carrouselM = document.getElementById('carrousel-maquette')

//tableau intégration puis maquette
const contentM = ["idealzen", "sophrologie"]
const content = ["albedo", "digital-reality", "esokia"]

//variable pour slider intégration puis celui maquette
let translate = 0
let translateM = 0

//Récupération des images en deux tableau : l'un intégration, l'autre maquette
window.addEventListener('DOMContentLoaded', () => {
    for(let image of content) {
        sliderI.innerHTML += `
        <div class="image">
        <img src="./assets/images/caroussel-integration/${image}.png" alt="">
    </div>
        `
    }
    for(let image of contentM) {
        sliderM.innerHTML += `
        <div class="image">
        <img src="./assets/images/caroussel-maquette/${image}.png" alt="">
    </div>
        `
    }
})
//CARROUSEL INTEGRATION :
//fonction au click pour le bouton précédent
btnIP.addEventListener('click',() => {
    if (translate == 0) {
        translate = -((content.length-1)*759)
        sliderI.style.transform="translateX("+translate+"px)"
    }
    else {
        translate += 759
        sliderI.style.transform="translateX("+translate+"px)"
    }

})
//fonction au click pour le bouton suivant
btnIS.addEventListener('click',() => {
    if (translate == -((content.length-1)*759)) {
        translate = 0
        sliderI.style.transform="translateX("+translate+"px)"
    }
    else {
        translate -= 759
        sliderI.style.transform="translateX("+translate+"px)"
    }
})


//CARROUSEL MAQUETTE : 
//fonction au click pour le bouton précédent
btnMP.addEventListener('click',() => {
    if (translateM == 0) {
        translateM = -((contentM.length-1)*759)
        sliderM.style.transform="translateX("+translateM+"px)"
    }
    else {
        translateM += 759
        sliderM.style.transform="translateX("+translateM+"px)"
    }

})
//fonction au click pour le bouton suivant
btnMS.addEventListener('click',() => {
    if (translateM == -((contentM.length-1)*759)) {
        translateM = 0
        sliderM.style.transform="translateX("+translateM+"px)"
    }
    else {
        translateM -= 759
        sliderM.style.transform="translateX("+translateM+"px)"
    }
})
