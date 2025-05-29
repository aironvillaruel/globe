const songs = [
  "music/iyno.mp3",
  "music/itolamang.mp3",
  "music/tot.mp3"
];

const songTitle = [
  "If You're Not the One",
  "Ito Lamang",
  "Celeste"
];

const songArtist = [
  "Daniel Bedingfield",
  "Project Romeo",
  "Tothapi"
];

const coverImages  = [
      "images/iyn.jpg",
  "images/ito.jpg",
  "images/tot.jpg"
];

let currentSongIndex = 1;

const musicOne = document.getElementById('musicOne');
const pauseBtn = document.getElementById('pauseBtn');
const playBtn = document.getElementById('playBtn');
const titleElement = document.getElementById('songTitle');
const artistElement = document.getElementById('songArtist');
const coverImageElement = document.getElementById('coverImage');
// Set song source and update song info
function loadSong(index) {
  musicOne.src = songs[index];
  titleElement.textContent = songTitle[index];
  artistElement.textContent = songArtist[index];
  coverImageElement.src = coverImages[index];
}

// Initial load
loadSong(currentSongIndex);
updateButtons();

// UI update for play/pause
function updateButtons() {
  if (!musicOne.paused) {
    pauseBtn.style.display = 'inline-block';
    playBtn.style.display = 'none';
  } else {
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
  }
}

// Button event handlers
pauseBtn.addEventListener('click', () => {
  musicOne.pause();
  updateButtons();
});

playBtn.addEventListener('click', () => {
  musicOne.play();
  updateButtons();
});

// Optional: react to actual play/pause events
musicOne.addEventListener('play', updateButtons);
musicOne.addEventListener('pause', updateButtons);

function nextSong() {
  if (currentSongIndex < songs.length - 1) {
    currentSongIndex += 1;
  } else {
    currentSongIndex = 0; // Loop back to first song
  }
  loadSong(currentSongIndex);
  musicOne.play();
  updateButtons();
}

function prevSong() {
  if (currentSongIndex > 0) {
    currentSongIndex -= 1;
  } else {
    currentSongIndex = songs.length - 1; // Loop back to last song
  }
  loadSong(currentSongIndex);
  musicOne.play();
  updateButtons();
}

   function toggleLetter() {
            const letter = document.getElementById('letter');
            const music = document.getElementById('music');
            const musicOne = document.getElementById('musicOne');
            // Toggle display between none and block
            if (letter.style.display === 'none' || letter.style.display === '') {
                letter.style.display = 'block';
                music.style.display = 'block';
        musicOne.play(); // Play audio

            } else {
                letter.style.display = 'none';
                music.style.display = 'none';
                  musicOne.pause(); // Optional: pause audio when hidden
        musicOne.currentTime = 0; // Optional: reset audio to start
            }
        }

function closeLetter() {
            const letter = document.getElementById('letter');
            const music = document.getElementById('music');
            // Hide the letter and stop the music
            letter.style.display = 'none';
            music.style.display = 'none';
        }