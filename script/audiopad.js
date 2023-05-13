let audioAtual;

function tocaPad(idElementoAudio) {
  let audio;
  
  if (idElementoAudio.includes('#')) {
    audio = document.getElementById(idElementoAudio.slice(1));
  } else {
    audio = document.querySelector(idElementoAudio);
  }
  
  if (audio !== audioAtual) {
    if (audioAtual) {
      audioAtual.pause();
      audioAtual.currentTime = 0;
    }
    audio.play();
    audioAtual = audio;
  } else {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }
}

const listaDePads = document.querySelectorAll('.tecla');

for (const pad of listaDePads) {
  const instrumento = pad.classList[1];
  const idAudio = `#som_${instrumento}`;
  
  pad.addEventListener('click', function () {
    tocaPad(idAudio);
  });
}

