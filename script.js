const musica = document.getElementById("musica");
const botonReproducir = document.getElementById("boton-reproducir");
const botonSilenciar = document.getElementById("boton-silenciar");

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
        botonSilenciar.innerHTML = '<i class="fas fa-volume-mute"></i> Activar S';
    }
});
