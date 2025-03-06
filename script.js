// script.js
const slider = document.querySelector('.slider');
let angle = 0;

// Rotate manually using left and right arrow keys
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    angle -= 60; // Rotate clockwise
  } else if (e.key === 'ArrowLeft') {
    angle += 60; // Rotate counter-clockwise
  }
  slider.style.transform = `rotateY(${angle}deg)`;
});
let audio = document.getElementById("bgm"),
playlist = ["Khoobsurat_192-(PagalWorldi.In).mp3"],
current = 0;

audio.onended = () => {
current++;
if (current >= playlist.length) { current = 0; }
audio.src = playlist[current];
audio.pause();
audio.load();
audio.play();
};