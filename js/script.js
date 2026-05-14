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

const totalVideos = 55;
const track1 = document.querySelector('.track-1 .video-grid');

function loadRandomProjects(container, count) {
    for (let i = 0; i < count; i++) {
        const randomId = Math.floor(Math.random() * totalVideos) + 1;
        container.innerHTML += `
            <div class="video-card">
                <video autoplay muted loop playsinline>
                    <source src="assets/vid/project${randomId}.mp4" type="video/mp4">
                </video>
            </div>
        `;
    }
}
// Chame a função para popular as trilhas dinamicamente