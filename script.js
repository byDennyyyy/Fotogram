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

let picIndex = 0;

function render() {
  let ImageRef = document.getElementById("gallery-content");
  ImageRef.innerHTML = "";

  for (let i = 0; i < gallaryImages.length; i++) {
    ImageRef.innerHTML += getImage(i);
  }
}

function getImage(index) {
  return `
    <div class="gallary-pictures">
     <button class="gallary-button" onclick="openOverlay(${index})">          
  <img src="${gallaryImages[index]}"
       class="gallery-image"
       alt="${gallaryImagesDesc[index]}"
       title="${gallaryImagesDesc[index]}"
       />
</button>
    </div>
  `;
}
// function render() {
//   const content = document.querySelector(".pic-alighn");
//   content.innerHTML = "";

//   for (let i = 0; i < gallaryImages.length; i++) {
//     const button = document.createElement("button");
//     button.classList.add("gallary-button");
//     button.onclick = () => { picIndex = i;
//       openOverlay(picIndex);}

//     const img = document.createElement("img");
//     img.src = gallaryImages[i];
//     img.alt = gallaryImagesDesc[i];
//     img.classList.add("gallary-pictures");

//     button.appendChild(img);
//     content.appendChild(button);
//     overlay.classList.add("d_none");
//   }
// }


const wrapper = document.querySelector(".overlay")

function openOverlay(index) {
  picIndex = index; 
  const overlay = document.getElementById("overlay");
  const imgcont = document.getElementById("overlay-image");
  const desc = document.getElementById("overlay-description");
  const counter = document.getElementById("overlay-footer");

  desc.innerHTML = `
  <h2>${gallaryImagesDesc[index]}</h2>
  <button class="close-btn" onclick="closeDialog()">✕</button>`;

  imgcont.innerHTML = "";
  const img = document.createElement("img");
  img.src = gallaryImages[index];
  img.alt = gallaryImagesDesc[index];
  imgcont.appendChild(img);

  counter.innerHTML = ``;
  counter.innerHTML = ` <button class="nav-btn left-btn" onclick="prevImage()">⬅️</button>
    <span class="image-counter">${index + 1} / ${gallaryImages.length}</span>
    <button class="nav-btn right-btn" onclick="nextImage()">➡️</button>
  `;
  overlay.classList.remove("d_none");
}

  function closeDialog(){
  document.getElementById("overlay").classList.add("d_none");
 }


 const overlay = document.getElementById("overlay");

overlay.addEventListener("click", (event) => {
 
  if (event.target === overlay) {
    closeDialog();
  }
});

 function nextImage(){
    picIndex = (picIndex + 1) % gallaryImages.length;
    openOverlay(picIndex);
 }

function prevImage () {
  picIndex = (picIndex -1 + gallaryImages.length) % gallaryImages.length;
    openOverlay(picIndex);
}








































