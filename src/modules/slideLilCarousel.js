export default function slideLilCarousel() {
    const services = document.querySelector('#services'),
        wrapper = services.querySelector('.wrapper'),
        servicesSlides = [...services.querySelector('.services-slider').children];

    console.log(servicesSlides);

    let currentSlide = 0,
        interval;
    const amountOpenSlides = 5;

    const defaultStart = (arr) => {
        console.log('defaultStart');
        for (let i = 0; i < arr.length; i++) {
            if (i < amountOpenSlides) {
                arr[i].classList.add('show-active');
                console.log(arr[i]);
            }else {
                arr[i].style.display = 'none';
            }
        }
    }

    defaultStart(servicesSlides);

    // const prevSlide = (elems, strClass) => {
    //     elems[0].classList.remove(strClass);
    // };

    // const nextSlide = (elem, index, strClass) => {
    //     elem[index].classList.add(strClass);
    // };
    let indexOpen = amountOpenSlides;
    const autoPlaySlide = (arr) => {

        let n = 1;
        if (indexOpen < 5) n = -1;
        else if (indexOpen === arr.length) {
            indexOpen = 0;
            n = -1;
        }

        arr[indexOpen].classList.add('show-active');
        arr[indexOpen].style.display = '';
        arr[indexOpen - n * amountOpenSlides].classList.remove('show-active');
        arr[indexOpen - n * amountOpenSlides].style.display = 'none';
        indexOpen++;


        // hidePrevSlide([...openSlides], "show-active");    
        // showNextSlide([...closeSlides], "no-active");
    };

    const startSlide = (time = 1500) => {
        interval = setInterval(autoPlaySlide, time, servicesSlides);
    };
    startSlide();
    // // const stopSlide = () => {
    // //     clearInterval(interval);
    // // };


    // startSlide(1500)

    
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
