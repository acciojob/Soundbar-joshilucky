const sounds = ['clap', 'kick', 'snare', 'tom', 'crash'];

const buttonsDiv = document.getElementById('buttons');
let currentAudio = null;

// Add click event for each sound button
sounds.forEach(sound => {
  const btn = document.querySelector(`button[data-sound="${sound}"]`);
  btn.addEventListener('click', () => {
    stopSound();
    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });
});

// Stop button functionality
document.querySelector('.stop').addEventListener('click', stopSound);

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

