//navbar
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

//portfolio card logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('video-modal');
    const videoContainer = document.getElementById('video-container');
    const closeBtn = document.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');
    
    const modalTitle = document.getElementById('modal-title');
    const modalRole = document.getElementById('modal-role');
    const modalYear = document.getElementById('modal-year');
    const modalDescription = document.getElementById('modal-description');

    //open modal
    projectCards.forEach(card => {
        if (card.classList.contains('coming-soon')) return;

        card.addEventListener('click', () => {
            const videoUrl = card.getAttribute('data-video');
            
            videoContainer.innerHTML = `<iframe src="${videoUrl}?autoplay=1&rel=0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
            
            modalTitle.textContent = card.getAttribute('data-title') || 'Untitled';
            modalRole.textContent = card.getAttribute('data-role') || 'Cinematographer';
            modalYear.textContent = card.getAttribute('data-year') || '';
            modalDescription.textContent = card.getAttribute('data-description') || 'Description coming soon.';
            
            modal.classList.add('active');
            closeBtn.classList.add('visible');
            document.body.classList.add('modal-open');
        });
    });

    //close modal
    const closeModal = () => {
        modal.classList.remove('active');
        closeBtn.classList.remove('visible');
        document.body.classList.remove('modal-open');
        setTimeout(() => { videoContainer.innerHTML = ''; }, 400);
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });
});

// ===== IMAGE LIGHTBOX (About Gallery) =====
document.addEventListener('DOMContentLoaded', () => {
    const imgModal = document.getElementById('image-modal');
    const imgFull = document.getElementById('img-full');
    const imgCaption = document.getElementById('img-caption');
    const imgClose = document.querySelector('.img-close');
    const imgPrev = document.querySelector('.img-prev');
    const imgNext = document.querySelector('.img-next');
    const photos = Array.from(document.querySelectorAll('.bts-photo'));
    let currentIndex = 0;

    const showImage = (index) => {
        currentIndex = (index + photos.length) % photos.length; // wraps around
        const photo = photos[currentIndex];
        imgFull.src = photo.src.replace('w=800', 'w=1600');
        imgCaption.textContent = photo.getAttribute('data-caption') || '';
    };

    photos.forEach((photo, i) => {
        photo.addEventListener('click', () => {
            showImage(i);
            imgModal.classList.add('active');
            document.body.classList.add('modal-open');
        });
    });

    const closeImgModal = () => {
        imgModal.classList.remove('active');
        document.body.classList.remove('modal-open');
    };

    imgClose.addEventListener('click', closeImgModal);
    imgPrev.addEventListener('click', () => showImage(currentIndex - 1));
    imgNext.addEventListener('click', () => showImage(currentIndex + 1));

    imgModal.addEventListener('click', (e) => {
        if (e.target === imgModal) closeImgModal();
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (!imgModal.classList.contains('active')) return;
        if (e.key === 'Escape') closeImgModal();
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });
});