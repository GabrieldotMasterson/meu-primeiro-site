document.addEventListener('DOMContentLoaded', function() {
   
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    const totalImages = images.length;
    const imageWidth = images[0].clientWidth;

    
    function updateCarousel() {
        carouselSlide.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
        updateCarousel();
    });


    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    
    setInterval(function() {
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 3000);


    window.addEventListener('resize', function() {
        const newWidth = images[0].clientWidth;
        carouselSlide.style.transform = `translateX(-${currentIndex * newWidth}px)`;
    });
});