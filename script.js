const sounds = ['clap', 'kick', 'snare', 'tom', 'crash'];
const buttons = document.querySelectorAll('.btn');
const stopBtn = document.querySelector('.stop');

// Handle play
buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    stopAllSounds();
    const sound = document.getElementById(sounds[index]);
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {}); // ignore errors (Cypress safe)
    }
  });
});

// Handle stop
stopBtn.addEventListener('click', stopAllSounds);

function stopAllSounds() {
  sounds.forEach(id => {
    const sound = document.getElementById(id);
    if (sound) {
      sound.pause();
      sound.currentTime = 0;
    }
  });
}
