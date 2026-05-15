document.addEventListener('DOMContentLoaded', () => {
    const follower = document.querySelector('.mouse-follower');
    const tracks = document.querySelectorAll('.video-track');
    const track1Container = document.querySelector('.track-1 .video-grid');
    const totalVideos = 55;

    const loadRandomProjects = (container, count) => {
        if (!container) return;
        let content = '';
        for (let i = 0; i < count; i++) {
            const randomId = Math.floor(Math.random() * totalVideos) + 1;
            content += `
                <div class="video-card">
                    <video autoplay muted loop playsinline>
                        <source src="assets/vid/project${randomId}.mp4" type="video/mp4">
                    </video>
                </div>`;
        }
        container.innerHTML += content;
    };

    loadRandomProjects(track1Container, 5);

    window.addEventListener('mousemove', (e) => {
        if (follower.style.opacity !== '1') {
            follower.style.opacity = '1';
        }

        follower.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        }, { duration: 500, fill: "forwards" });
    });

    document.addEventListener('mouseleave', () => {
        follower.style.opacity = '0';
    });

    tracks.forEach(track => {
        track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
        track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
    });
});