window.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bg-music');
  const musicToggle = document.getElementById('music-toggle');
  const clickSound = document.getElementById('click-sound');

  // Unmute background music after user interaction
  bgMusic.play().then(() => {
    bgMusic.muted = false;
  }).catch(() => {
    document.body.addEventListener('click', () => {
      bgMusic.muted = false;
      bgMusic.play();
    }, { once: true });
  });

  // Toggle background music
  musicToggle.addEventListener('click', () => {
    playClickSound();
    if (bgMusic.muted || bgMusic.paused) {
      bgMusic.muted = false;
      bgMusic.play();
      musicToggle.textContent = '🔊';
    } else {
      bgMusic.muted = true;
      musicToggle.textContent = '🔇';
    }
  });

  // Play click sound on all buttons and links
  const clickableElements = document.querySelectorAll('button, a');
  clickableElements.forEach(el => {
    el.addEventListener('click', playClickSound);
  });

  function playClickSound() {
    if (clickSound) {
      clickSound.currentTime = 0; // reset sound if clicked rapidly
      clickSound.play();
    }
  }
});
