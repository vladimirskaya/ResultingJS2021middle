export default function slideCarousel() {
    const services = document.querySelector('#services'),
        wrapper = services.querySelector('.wrapper'),
        servicesSlides = services.querySelector('.services-slider');

    console.log(servicesSlides);

    let style = [];
    [...servicesSlides.children].forEach((elem, index) =>{
        elem.style.cssText = `
            flex: 0 1 20%;
            text-align:center;
            margin-right:6px;
            margin-left:6px;
            width:210px`
    });// elem.setAttribute('style','flex: 0 0 20%');
    


    let currentSlide = 0,
        interval;
    const amountOpenSlides = 5;



}