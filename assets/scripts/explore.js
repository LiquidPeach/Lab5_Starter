// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("#voice-select");
  const playButton = document.getElementsByTagName('button');
  
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

  playButton[0].addEventListener("click", myFunction);

  function myFunction() {
    console.log("hello World");
  }
  
}

 