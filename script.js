const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsDiv = document.getElementById('buttons');

// Create buttons for all sounds
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  
  btn.addEventListener('click', () => {
    stopSounds();
    document.getElementById(sound).currentTime = 0;
    document.getElementById(sound).play();
  });

  buttonsDiv.appendChild(btn);
});

// Add stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopSounds);
buttonsDiv.appendChild(stopBtn);

// Function to stop all sounds
function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
