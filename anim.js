// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I have a dream", time: 17 },
  { text: "You are there", time: 18 },
  { text: "High above the cloud somewhere", time: 19 },
  { text: "Rain is falling from the sky", time: 21 },
  { text: "But it never touches you", time: 23 },
  { text: "You're way up high", time: 25 },
  { text: "No more worries, no more fears", time: 31 },
  { text: "You have made them disappear", time: 33 },
  { text: "Sadness try to steal the show", time: 36 },
  { text: "But now it feels like many years ago", time: 38 },
  { text: "And I", time: 44 },
  { text: "I will be with you every step (hey, hey)", time: 46 },
  { text: "Tonight I found a friend in you", time: 54 },
  { text: "And I'll keep you close forever", time: 58 },
  { text: "Come fly with me (oh - oh, oh - oh)", time: 63 },
  { text: "Into a fantasy (oh - oh, oh - oh)", time: 67 },
  { text: "Where you can be", time: 72 },
  { text: "Whoever you want to be", time: 74 },
  { text: "Come fly with me", time: 77 },
  { text: "We can fly all day long", time: 85 },
  { text: "Show me the world, sing me a song", time: 87 },
  { text: "Tell me what the future holds", time: 89 },
  { text: "You and me will paint it all in gold", time: 91 },
  { text: "And I", time: 98 },
  { text: "I wll believe your every way (hey, hey)", time: 100 },
  { text: "'Cause I", time: 108 },
  { text: "I have a friend in you", time: 109 },
  { text: "We'll always stay together", time: 112 },
  { text: "Come fly with me (oh - oh, oh - oh)", time: 117 },
  { text: "Into a fantasy (oh - oh, oh - oh)", time: 121 },
  { text: "Where you can be", time: 126 },
  { text: "Whoever you want to be", time: 128 },
  { text: "Come fly with me", time: 131 },
  { text: "(Hey)", time: 138 },
  { text: "And I", time: 142 },
  { text: "I will be with you every step", time: 144 },
  { text: "Tonight", time: 153 },
  { text: "I found a friend in you", time: 154 },
  { text: "And I'll keep you close forever", time: 156 },
  { text: "Come fly with me", time: 161 },
  { text: "Into a fantasy", time: 165 },
  { text: "Where you can be", time: 170 },
  { text: "Whoever you want to be", time: 172 },
  { text: "Come fly with me", time: 175 },
  { text: "Come fly with me (oh - oh, oh - oh)", time: 177 },
  { text: "Into a fantasy (oh - oh, oh - oh)", time: 181 },
  { text: "Where you can be", time: 186 },
  { text: "Whoever you want to be", time: 189 },
  { text: "Come fly with me", time: 191 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 200000);