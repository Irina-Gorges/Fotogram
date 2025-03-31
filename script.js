let pfad = "img/";

let photos = [
    "Bild1.jpg",
    "Bild2.jpg",
    "Bild3.jpg",
    "Heißluftballon.jpg",
    "Rasender_Roland.jpg",
    "Rose.jpg",
    "Rügen_Fähre.jpg",
    "Rügen4.jpg",
    "Rügen5.jpg",
    "Schmetterling.jpg",
    "Sonne_Wolken.jpg",
    "Sonnenuntergang.jpg",
];

function render() {
    let contentRef = document.getElementById("content");
    for (let index = 0; index < photos.length; index++) {
        contentRef.innerHTML += getNoteTemplate(index);
    }
}

function getNoteTemplate(i) {
    return `<div onclick="toggleOverlay('${pfad + photos[i]}')"><img src="${
        pfad + photos[i]
    }" alt="${photos[i]}"></div>`;
}

function toggleOverlay() {
    let overlayRef = document.getElementById("overlay");

    overlayRef.classList.toggle("d_none");
}
