// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}


  const selectElement = document.querySelector("#horn-select");
  const myImage = document.querySelector('img[alt="No image selected"]');

  const volumeSlider = document.querySelector("#volume");
  const audioVolume = document.querySelector(".hidden");
  
  selectElement.addEventListener("change", changeImage);

  function changeImage(e){
    myImage.src = `./assets/images/${e.target.value}.svg`;
  }
  
  function changeVolumeImage(e){
    
  }

  function playSound(e) {
    console.log("honk");
  }