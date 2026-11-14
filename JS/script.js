// navbar
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        hamburger.classList.toggle('toggle');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(25, 27, 26, 0.9)'; 
        } else {
            navbar.style.background = 'rgba(25, 27, 26, 0.1)';
        }
    });
});

//porfolio card logic
// document.addEventListener('DOMContentLoaded', () => {
//     const modal = document.getElementById('video-modal');
//     const videoContainer = document.getElementById('video-container');
//     const closeBtn = document.querySelector('.close-modal');
//     const projectCards = document.querySelectorAll('.project-card');

//     // Open Modal
//     projectCards.forEach(card => {
//         card.addEventListener('click', () => {
//             const videoUrl = card.getAttribute('data-video');
//             videoContainer.innerHTML = `<iframe src="${videoUrl}" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
//             modal.classList.add('active');
//             document.body.style.overflow = 'hidden';
//         });
//     });

//     // Close Modal
//     const closeModal = () => {
//         modal.classList.remove('active');
//         document.body.style.overflow = '';
//         setTimeout(() => { videoContainer.innerHTML = ''; }, 400);
//     };

//     closeBtn.addEventListener('click', closeModal);
//     modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
//     document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });
// });

// ===== PORTFOLIO CARD / MODAL LOGIC =====
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('video-modal');
    const videoContainer = document.getElementById('video-container');
    const closeBtn = document.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');

    // Open Modal
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoUrl = card.getAttribute('data-video');
            
            // Inject the iframe
            videoContainer.innerHTML = `
                <iframe 
                    src="${videoUrl}?autoplay=1&rel=0" 
                    allow="autoplay; encrypted-media; fullscreen" 
                    allowfullscreen>
                </iframe>
            `;
            
            modal.classList.add('active');
            closeBtn.classList.add('visible');
            document.body.classList.add('modal-open');
        });
    });

    // Close Modal function
    const closeModal = () => {
        modal.classList.remove('active');
        closeBtn.classList.remove('visible');
        document.body.classList.remove('modal-open');
        
        // Wait for fade-out animation, then clear the iframe (stops audio)
        setTimeout(() => { 
            videoContainer.innerHTML = ''; 
        }, 400);
    };

    // Close via X button
    closeBtn.addEventListener('click', closeModal);

    // Close via backdrop click (clicking the dark area)
    modal.addEventListener('click', (e) => {
        // Only close if clicking the backdrop itself, not the video
        if (e.target === modal || e.target.tagName === 'IFRAME' === false && !videoContainer.contains(e.target)) {
            closeModal();
        }
    });

    // Close via Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});