const listImg = ["pics/car.jpg", "pics/lights.jpg", "pics/man.jpg"];

const container = document.querySelector(".img-container");

const mainImage = document.createElement("img");
mainImage.src = "pics/car.jpg";
mainImage.className = "mainImage";
container.append(mainImage);

for (i = 1; i < listImg.length; i++) {
  let tnImg = document.createElement("img");
  tnImg.className = "thumbnail";
  tnImg.src = listImg[i];
  container.append(tnImg);
}

let thumbnails = document.querySelectorAll(".thumbnail");

for (let tn of thumbnails) {
  tn.addEventListener("click", () => {
    let tempSrc = mainImage.src;
    mainImage.src = tn.src;
    tn.src = tempSrc;
  });
}
