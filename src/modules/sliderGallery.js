//cslider
//cslider
const sliderGallery = () => {
    const gallery = document.querySelector('.gallery-slider'),
      slide = gallery.querySelectorAll(".slide");

    gallery.style.position = 'relative';
  
    let dots = document.createElement('ul');
    dots.className = 'slider-dots';
    gallery.append(dots);

    for (let i = 0; i < slide.length; i++) {
      let dot = document.createElement("li");
      dot.classList.add('dot');
      if (i === 0) dot.classList.add("slick-active");
      dots.append(dot);
    }

    const sliderDots = gallery.querySelectorAll('.dot');
    for (let i = 0; i < sliderDots.length; i++) {
      let btn = document.createElement('button');
      sliderDots[i].append(btn)
    }

    for (let i = 0; i < slide.length; i++) {
      if (i !== 0) slide[i].style.display = 'none';
    }

    let currentSlide = 0,
      interval;

    const prevSlide = (arr, index) => {
      if (arr[index].nodeName === 'DIV') {
        arr[index].style.display = 'none';
      } else {
        arr[index].classList.remove('slick-active');
      }
    };
    const nextSlide = (arr, index) => {
      if (arr[index].nodeName === 'DIV') {
        arr[index].style.display = 'block';

      } else {
        arr[index].classList.add('slick-active')
      }
    }


    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide);
      prevSlide(sliderDots, currentSlide);
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide);
      nextSlide(sliderDots, currentSlide);
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };


    gallery.addEventListener("click", (event) => {
        event.preventDefault();
        let target = event.target.closest('a');
        if (!target) target =  event.target.closest('li');
        console.log('target', target);

        if (!target.matches('.dot, .slider-arrow')) {
          console.log('not that place');
          return;
        }
        prevSlide(slide, currentSlide);
        prevSlide(sliderDots, currentSlide);
       

        if (target.matches("#arrow-right")) {
          console.log('next');
          currentSlide++;
        } else if (target.matches("#arrow-left")) {
          currentSlide--;
          console.log('back');
        } else if (target.matches(".dot")) {
          console.log('по точкам^', sliderDots);
          sliderDots.forEach((elem,index) =>{
            if (elem === target){
              currentSlide = index
              console.log('нужна картинка', index);
            }
          })
      
          }

          if (currentSlide >= slide.length) {
            currentSlide = 0;
          }

          if (currentSlide < 0) {
            currentSlide = slide.length - 1;
          }

          nextSlide(slide, currentSlide);
          nextSlide(sliderDots, currentSlide);
        });

      //обработчик события на весь слайдер
      gallery.addEventListener("mouseover", (event) => {
        // console.log(event.target);
        if (
          event.target.nodeName === 'BUTTON' ||
          event.target.nodeName === 'A'
        ) {
          stopSlide();
        }
      }); gallery.addEventListener("mouseout", (event) => {
        if (
          event.target.nodeName === 'BUTTON' ||
          event.target.nodeName === 'A'
        ) {
          startSlide();
        }
      });

      startSlide(1500);

    }

    export default sliderGallery;