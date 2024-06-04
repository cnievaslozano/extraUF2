document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('play').addEventListener('click', function () {
        let nave = document.getElementById('nave');
        let audio = document.getElementById('audio');

        nave.style.animation = 'landing 3s ease-in-out infinite';
        audio.play();
    });
});