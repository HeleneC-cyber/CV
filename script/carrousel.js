//constante slider intégration
const sliderI = document.getElementById("slider-integration");
const btnIS = document.getElementById("btn-integration-suivant");
const btnIP = document.getElementById("btn-integration-precedent");
const carrouselI = document.getElementById("carrousel-integration");

//constante slider maquette
const sliderM = document.getElementById("slider-maquette");
const btnMS = document.getElementById("btn-maquette-suivant");
const btnMP = document.getElementById("btn-maquette-precedent");
const carrouselM = document.getElementById("carrousel-maquette");

//tableau intégration puis maquette
const content = [
  {
    src: "albedo",
    title: "Site Albedo",
    paragraphe: "Réalisé à partir d'une maquette photoshop en ligne",
    details: [
      "Langage html/css",
      "Transition et animation css",
      "Carrousel (à partir d'animation css)",
    ],
    icon: "link-solid",
    lien: "https://helenec-cyber.github.io/Site-albedo/",
  },
  {
    src: "digital-reality",
    title: "Site Digital-Reality",
    paragraphe: "Réalisé à partir d'une maquette test via photoshop",
    details: [
      "Langage html/css",
      "Création de modal",
      "Création d'un formulaire",
    ],
    icon: "link-solid",
    lien: "https://helenec-cyber.github.io/Digital-reality/index.html",
  },
  {
    src: "esokia",
    title: "Site Esokia",
    paragraphe: "Réalisé à partir d'une maquette photoshop d'entreprise",
    details: [
      "Langage html/css",
      "flexbox",
      "Liens cliquable et importation d'images",
    ],
    icon: "link-solid",
    lien: "https://helenec-cyber.github.io/esokia/",
  },
];

const contentM = [
  {
    src: "idealzen",
    title: "Maquette du site IdealZen",
    paragraphe: "Réalisée sous le logiciel XD",
    details: ["Maquette intéractive", "Palette de couleur et police défini"],
    icon: "link-solid",
    lien: "https://xd.adobe.com/view/52ca40fb-9864-4181-9b33-214dcddbeacb-0799/grid",
  },
  {
    src: "sophrologie",
    title: "Maquette du site de Sophrologie d'Isabelle Usclade",
    paragraphe: "Réalisée sous le logiciel XD",
    details: [
      "Intéraction uniquement faisable depuis la page d'accueil ",
      "Elément intéractif",
      "Utilisation de composant",
    ],
    icon: "link-solid",
    lien: "https://xd.adobe.com/view/e6215174-d1b5-4a1b-9680-077161a5c30a-b372/screen/5b19d054-60ed-4c5e-9280-e283ef681bd9/https://xd.adobe.com/view/52ca40fb-9864-4181-9b33-214dcddbeacb-0799/screen/21068e8e-b6db-455a-a24c-086f8d08a1c6?fullscreen&hints=off",
  },
];

//variable pour slider intégration puis celui maquette
let translate = 0;
let translateM = 0;

//Récupération des images (et propriétés des images) en deux tableau : l'un intégration, l'autre maquette
window.addEventListener("DOMContentLoaded", () => {
  for (let v = 0; v < content.length; v++) {
    sliderI.innerHTML += `
        <div class="image">
            <img src="./assets/images/caroussel-integration/${content[v].src}.png" alt="">
            <div class="overlay">
                <h6>${content[v].title} </h6>
                <p>${content[v].paragraphe} </p>
                <ul class="list-image" >
                </ul>
                <a href="${content[v].lien}"><img src="./assets/images/${content[v].icon}.svg"/> </a>
            </div>
        </div>
        `;
    //Récupération de l'ul créée avec une classe "list-image". Deuxième boucle for permet de récupérer "detail" soit l'élément du tableau "details" de l'image (qui est un objet du tableau "content")
    let ul = document.getElementsByClassName("list-image");
    for (let i = 0; i < ul.length; i++) {
      for (let detail of content[v].details) {
        ul[i].innerHTML += `
        <li>${detail}</li>
        `;
      }
    }
  }
  //Mêmes boucles pour le deuxième tableau "contentM" soit pour le carrousel maquette.
  for (let w = 0; w < contentM.length; w++) {
    sliderM.innerHTML += `
        <div class="image">
            <img src="./assets/images/caroussel-maquette/${contentM[w].src}.png" alt="">
            <div class="overlay">
                <h6>${contentM[w].title} </h6>
                <p>${contentM[w].paragraphe} </p>
                <ul class="list-image" >
                </ul>
                <a href="${contentM[w].lien}"><img src="./assets/images/${contentM[w].icon}.svg"/> </a>
            </div>
        </div>
        `;
    let ul = document.getElementsByClassName("list-image");
    for (let i = 0; i < ul.length; i++) {
      if (contentM[w].details) {
        for (let detail of contentM[w].details) {
          ul[i].innerHTML += `
        <li>${detail}</li>
        `;
        }
      }
    }
  }
});

//CARROUSEL INTEGRATION :
//fonction au click pour le bouton précédent
btnIP.addEventListener("click", () => {
  if (translate == 0) {
    translate = -((content.length - 1) * 759);
    sliderI.style.transform = "translateX(" + translate + "px)";
  } else {
    translate += 759;
    sliderI.style.transform = "translateX(" + translate + "px)";
  }
});
//fonction au click pour le bouton suivant
btnIS.addEventListener("click", () => {
  if (translate == -((content.length - 1) * 759)) {
    translate = 0;
    sliderI.style.transform = "translateX(" + translate + "px)";
  } else {
    translate -= 759;
    sliderI.style.transform = "translateX(" + translate + "px)";
  }
});

//CARROUSEL MAQUETTE :
//fonction au click pour le bouton précédent
btnMP.addEventListener("click", () => {
  if (translateM == 0) {
    translateM = -((contentM.length - 1) * 759);
    sliderM.style.transform = "translateX(" + translateM + "px)";
  } else {
    translateM += 759;
    sliderM.style.transform = "translateX(" + translateM + "px)";
  }
});
//fonction au click pour le bouton suivant
btnMS.addEventListener("click", () => {
  if (translateM == -((contentM.length - 1) * 759)) {
    translateM = 0;
    sliderM.style.transform = "translateX(" + translateM + "px)";
  } else {
    translateM -= 759;
    sliderM.style.transform = "translateX(" + translateM + "px)";
  }
});
