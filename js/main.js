

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    //dots:true,
    items: 3,
    center: true,
    responsive: {
        0: {
            items: 1,
            margin: 30,
            center: false
        },
        768: {
            items: 3,
            margin: 30,
            center: true
        },
        960: {
            items: 3,
            margin: 30,
            center: true
        }
    }
});
// Go to the next item
$('.slider__btn--prev').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.slider__btn--next').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})
//mobile
const mobileBtnOpen = document.querySelector('#btnMobileOpen');
const headerMain = document.querySelector('.header');
const mobileBtnClose = document.querySelector('#mobileBtnClose');
const headerMobile  = document.querySelector('#headerMobile');

mobileBtnOpen.addEventListener('click', function (){
    headerMain.classList.add('none');
    headerMobile.classList.remove('none')
});
mobileBtnClose.addEventListener('click', function (){
    headerMain.classList.remove('none');
    headerMobile.classList.add('none')
})





