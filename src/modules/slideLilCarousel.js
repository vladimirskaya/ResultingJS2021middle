export default function slideLilCarousel(){
    const services = document.querySelector('#services'),
        wrapper = services.querySelector('.wrapper'),
        servicesSlider = services.querySelector('.services-slider');

        console.log(servicesSlider);
    /*todo
    1. реализовать и перемещение по времени
    2. реализовать объект style для "окошка" */ 


}  

// class SlideCarousel{
//     constructor({main = '#services', wrap = '.wrapper', slide = '.services-slider' })
//     {
//     this.main = document.querySelector(main),
//     this.wrap = this.main.querySelector(wrap),
//     this.slides = this.main.querySelector(slide).children,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
//     },

//     init(){
//         console.log('class connect');
//     }
// }
// export default SlideCarousel;