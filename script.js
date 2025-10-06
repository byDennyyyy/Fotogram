const gallaryImages = [

"./assets/Aqua.webp",
"./assets/Ben.webp",
"./assets/Blacki.webp",
"./assets/Cater.webp",
"./assets/Catty.webp",
"./assets/Chemtek.webp",
"./assets/Chrazy.webp",
"./assets/Denny.webp",
"./assets/Flo.webp",
"./assets/Florian.webp",
"./assets/Noemi.webp",
"./assets/Nici.webp",
"./assets/Saturn.webp",
"./assets/Tiade.webp",
"./assets/Strawpic.webp",
];

const gallaryImagesDesc = [
    "Skin von Aqua",
    "Skin von Ben",
    "Skin von Blacki",
    "Skin von Cater",
    "Skin von Catty",
    "Skin von Chemtek",
    "Skin von Chrazy",
    "Skin von Denny",
    "Skin von Flo",
    "Skin von Florian",
    "Skin von Noemi",
    "Skin von Nici",
    "Skin von Simon",
    "Skin von Tiade",
    "Skin von Steven",
];



function render() {
    const content = document.getElementsByClassName("pic-alighn")[0];
    for (let index = 0; index < gallaryImages.length; index++) {

        let button = document.createElement("button");
        button.classList.add("gallary-button");
        button.onclick = function() {
            ImageClick(index);
        }

        let img = document.createElement("img");
        img.src = gallaryImages[index];
        img.alt = gallaryImagesDesc[index];
        button.appendChild(img);
        content.appendChild(button);
        img.classList.add("gallary-pictures");
    }
}

// function ImageClick()