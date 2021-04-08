var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    slidesPerView: "auto",
    spaceBetween: 40,
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        clickable: true,
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        slideShadows: false,
    },
});


// toggle 
const toggleMenu = () => {
    const toggleMenu = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
};
