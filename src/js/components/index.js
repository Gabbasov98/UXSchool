function learnSlider() {
    var swiper = new Swiper('.what-learn .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.what-learn .swiper-button-next',
            prevEl: '.what-learn .swiper-button-prev',
        },
        pagination: {
            el: '.what-learn .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            992: {
                allowTouchMove: false,

            }
        }
    })
}



learnSlider()