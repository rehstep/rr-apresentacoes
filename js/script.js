document.addEventListener('DOMContentLoaded', () => {
    // Efeito de brilho que segue o cursor
    const glow = document.querySelector('.cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });

    // Pausar animação do marquee ao passar o mouse
    const track = document.querySelector('.video-track');
    track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
    track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
});