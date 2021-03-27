export default function slideLilCarousel() {
    const services = document.querySelector('#services'),
        wrapper = services.querySelector('.wrapper'),
        servicesSlides = services.querySelector('.services-slider');

    //  00000console.log(servicesSlides);

    let currentSlide = 0,
        interval;
    const amountOpenSlides = 5;

    const defaultStart = (arr) => {
        // console.log('defaultStart');
        for (let i = amountOpenSlides; i < arr.length; i++) {
                arr[i].style.display = 'none';    
        }
    }

    defaultStart(servicesSlides.children);

    let indexOpen = 0; //amountOpenSlides;

    const autoPlaySlide = (arr) => {
        
        arr[0].style.display = 'none'
        arr[amountOpenSlides].style.display = 'block';
    
        servicesSlides.insertAdjacentElement('beforeend', arr[0]);
    };

    const startSlide = (time = 2500) => {
        interval = setInterval(autoPlaySlide, time, servicesSlides.children);
    };
    startSlide();
 

}
