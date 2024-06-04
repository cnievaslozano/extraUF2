document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('playButton').addEventListener('click', function () {
        let nave = document.getElementById('nave');
        let audio = document.getElementById('audio');

        // Para reiniciar la animación
        nave.style.animation = 'none';
        // Forzar reflujo
        nave.offsetHeight; 
        // Restablecer la animación
        nave.style.animation = 'landing 3s ease-in-out forwards';

        audio.currentTime = 0; // Reinicia el audio
        audio.play();
    });
});
