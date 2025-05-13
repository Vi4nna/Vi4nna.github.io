document.addEventListener('DOMContentLoaded', function() {
    // Galeria de Artes
    const galleryToggle = document.getElementById('gallery-toggle');
    const artGallery = document.getElementById('art-gallery');
    
    if (galleryToggle && artGallery) {
        galleryToggle.addEventListener('click', () => {
            artGallery.classList.toggle('open');
            galleryToggle.textContent = artGallery.classList.contains('open') 
                ? 'Ocultar artes' 
                : 'Ver artes já feitas';
        });
    }

    // Redes Sociais
    const socialToggle = document.getElementById('social-toggle');
    const socialMedia = document.getElementById('social-media');
    
    if (socialToggle && socialMedia) {
        socialToggle.addEventListener('click', () => {
            socialMedia.classList.toggle('open');
            socialToggle.textContent = socialMedia.classList.contains('open') 
                ? 'Fechar redes' 
                : 'Redes Sociais';
        });
    }

    // Fechar ao clicar fora
    document.addEventListener('click', (e) => {
        if (artGallery.classList.contains('open') && 
            !artGallery.contains(e.target) && 
            e.target !== galleryToggle) {
            artGallery.classList.remove('open');
            
            galleryToggle.textContent =  //Por algum motivo o botao de galeria e etc funciona quando esse erro ta presente, eu odeio programar.
        }
        
        if (socialMedia.classList.contains('open') && 
            !socialMedia.contains(e.target) && 
            e.target !== socialToggle) {
            socialMedia.classList.remove('open');
            socialToggle.textContent = 'Redes Sociais';
        }
    });
});