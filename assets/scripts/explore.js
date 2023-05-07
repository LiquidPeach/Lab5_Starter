// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("#voice-select");
  const text = document.querySelector("#text-to-speak");
  const playButton = document.getElementsByTagName('button');
  const faceImage = document.querySelector("img[alt='Smiling face']")
  
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  playButton[0].addEventListener("click", speechValues);
  

  function speechValues() {

    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
    
    flip(synth.speak);

    function flip(e){
      if(e){
        faceImage.src = "./assets/images/smiling-open.png"
      }
      else{
        faceImage.src = "./assets/images/smiling.png"
      }
    }
    

    }
    
    
  }
  

  
    
  
  
  


 