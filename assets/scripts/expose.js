// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}

  const hornSelect = document.querySelector("#horn-select");
  const myImage = document.querySelector('img[alt="No image selected"]');

  const volumeSlider = document.querySelector("#volume");
  const volumeImage = document.querySelector('img[alt="Volume level 2"]')
  const audioVolume = document.querySelector(".hidden");

  hornSelect.addEventListener("change", changeImage);
  volumeSlider.addEventListener("change", changeVolumeImage);

  function changeImage(e){
    myImage.src = `./assets/images/${e.target.value}.svg`;
  }

  function changeVolumeImage(e){
    let volume = e.target.value;
    if(volume == 0){
      volumeImage.src = "./assets/icons/volume-level-0.svg";
      audioVolume.volume = volume/100; 
    } else if((volume > 0) & (volume < 33)){
      volumeImage.src = "./assets/icons/volume-level-1.svg";
      audioVolume.volume = volume/100; 
    } else if((volume >= 33) & (volume < 67)){
      volumeImage.src = "./assets/icons/volume-level-2.svg";
      audioVolume.volume = volume/100; 
    } else{
      volumeImage.src = "./assets/icons/volume-level-3.svg";
      audioVolume.volume = volume/100; 
    }

  }