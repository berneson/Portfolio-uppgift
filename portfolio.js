const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical', // Den kan vara horisontell från början
    loop: true,
    effect: 'coverflow',
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: true,
    coverflowEffect: {
      slideShadows: true,
      rotate: 0,
      depth: 200
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });