
// MENU

const siteMenu = () => {

    const menu = document.querySelector('.site-menu')
    const menuButton = document.querySelector('.menu-button')
    
    //Toggle
    const toggleMenu = () => {
      menu.classList.toggle('site-menu--forward')
    }
  
    //Event
    menuButton.addEventListener('click', toggleMenu)
}

siteMenu()
  

  
// SWIPER
  
const swiper = new Swiper('.swiper', {
      
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
    
      pagination: {
        el: '.swiper-pagination',
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
});