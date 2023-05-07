// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  
  const jsConfetti = new JSConfetti();
  const hornSelect = document.querySelector("#horn-select");
  const myImage = document.querySelector('img[alt="No image selected"]');
  
  const volumeSlider = document.querySelector("#volume");
  const volumeImage = document.querySelector('img[alt="Volume level 2"]')
  const audioVolume = document.querySelector(".hidden");
  const playButton = document.getElementsByTagName('button');

  hornSelect.addEventListener("change", changeImage);
  volumeSlider.addEventListener("change", changeVolumeImage);
  playButton[0].addEventListener("click", playSound);
  
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

  function playSound(e) {
    let sound = '';
    let soundType = hornSelect.value

    if (soundType == "select") 
      return;

    switch (soundType) {
      case 'air-horn':
        sound = "./assets/audio/air-horn.mp3";
        break;
      case 'car-horn':
        sound = "./assets/audio/car-horn.mp3";
        break;
      case 'party-horn':
        sound = "./assets/audio/party-horn.mp3";
        jsConfetti.addConfetti();
        break;
      }
      
      let audio = new Audio(sound);
      audio.volume = audioVolume.volume;
      audio.play();
    }
  }
