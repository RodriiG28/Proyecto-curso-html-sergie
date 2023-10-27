const musica = document.getElementById("musica");
const botonReproducir = document.getElementById("boton-reproducir");
const botonSilenciar = document.getElementById("boton-silenciar");
const aumentarVolumenBoton = document.getElementById("aumentarVolumen");
const disminuirVolumenBoton = document.getElementById("disminuirVolumen");

botonReproducir.addEventListener("click", function() {
    if (musica.paused) {
        musica.play();
        botonReproducir.innerHTML = '<i class="fas fa-pause"></i> Pausar';
    } else {
        musica.pause();
        botonReproducir.innerHTML = '<i class="fas fa-play"></i> Play';
    }
});

botonSilenciar.addEventListener("click", function() {
    if (musica.muted) {
        musica.muted = false;
        botonSilenciar.innerHTML = '<i class="fas fa-volume-up"></i> Silenciar';
    } else {
        musica.muted = true;
        botonSilenciar.innerHTML = '<i class="fas fa-volume-mute"></i> Activar Sonido';
    }
});

aumentarVolumenBoton.addEventListener("click", function() {
    if (musica.volume < 1.0) {
        musica.volume += 0.1; // Aumenta el volumen en 0.1 unidades
    }
});

disminuirVolumenBoton.addEventListener("click", function() {
    if (musica.volume > 0.0) {
        musica.volume -= 0.1; // Disminuye el volumen en 0.1 unidades
    }
});
