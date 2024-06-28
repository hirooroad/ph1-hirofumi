'use strict';

const header = document.getElementById("js-header");
const button = document.getElementById("js-headerButton");

button.addEventListener("click" , () => {
    header.classList.toggle("is-open");
})

//メインビジュアルの要素を取得
const mainVisual = document.getElementById("js-mainVisual");

window.addEventListener("scroll" , function(){
    if(window.scrollY > mainVisual.clientHeight -header.clientHeight){
        header.classList.remove("is-transparent");
    } else {
        header.classList.add("is-transparent");
    }
});



new Splide('#js-eventSlide' , {
    cover: true,
    type: 'loop',
    gap: 40,
    updateOnMove: true,
    fixedWidth: "20em",
    padding: "10rem",
    focus: "center",
    perPage: 3,
    perMove: 1,
    classes: {
		arrows: 'splide__arrows your-class-arrows',
		arrow : 'splide__arrow your-class-arrow',
		prev  : 'splide__arrow--prev your-class-prev',
		next  : 'splide__arrow--next your-class-next',
    },
    breakpoints: {
        768: {
        perPage: 1,
        pagination: false
        },
    },
    }).mount();

    new Splide('#js-dailySlide' , {
        arrows: false,
        breakpoints: {
            768: {
                arrows: true,
                type: 'loop',
        gap: 40,
        padding: {left: 28, right: 28},
        breakpoints: {
            perPage: 1,
            pagination: false
            },
    }}}).mount();