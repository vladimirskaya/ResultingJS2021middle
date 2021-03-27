//cslider
//cslider
const slider = () => {
  const gallery = document.querySelector('.gallery-slider'),
    slide = [...gallery.querySelectorAll(".slide")];
  console.log(slide);
  //   btn = gallery.querySelectorAll(".portfolio-btn"),
  //   portfolioDots = document.querySelector(".portfolio-dots"g),
  //   slider = document.querySelector(".portfolio-content");
  gallery.insertAdjacentHTML('beforeend',
    `<button class='karousel-btn' id='arrow-left'></button>
        <button class='karousel-btn' id='arrow-right'></button>`);
  const karouselBtn = gallery.querySelectorAll('button')
  console.log(karouselBtn);

  let dots = document.createElement('ul');
  dots.className = 'slider-dots';
  dots.style.position = 'relative';

  gallery.append(dots);
  for (let i = 0; i < slide.length; i++) {
    let dot = document.createElement("li");
    if (i === 0) dot.className = "slick-active";
    dots.append(dot);
  }
  const sliderDots = gallery.querySelector('.slider-dots').children;
  for (let i = 0; i < sliderDots.length; i++) {
    let btn = document.createElement('button');
    console.log(sliderDots[i], btn);
    sliderDots[i].append(btn)
  }
  console.log(sliderDots);

  for (let i = 0; i < slide.length; i++) {
    if (i !== 0) slide[i].style.display = 'none';
  }

  // const dot = sliderDots.querySelectorAll("li");

  let currentSlide = 0,
    interval;

  const prevSlide = (elem, index) => {
    console.log('prev: ', elem[index].nodeName);
    if (elem[index].nodeName === 'DIV') {
      elem[index].style.display = 'none';
    } else {
      console.log(elem[index].className);
      elem[index].classList.remove('slick-active');
    }
  };
  const nextSlide = (elem, index) => {
    console.log('next: ', elem[index]);
    if (elem[index].nodeName === 'DIV') {
      elem[index].style.display = 'block';

    } else {
      elem[index].classList.add('slick-active')
      console.log('its button');
    }
  }


  const autoPlaySlide = () => {
    console.log('autoplay: slide = ', slide);
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

    let target = event.target;

    prevSlide(slide, currentSlide);
    prevSlide(sliderDots, currentSlide);
    if (!target.matches('.slider-dots, .karousel-btn')) {
      return;
    }

    if (target.matches("#arrow-right")) {
      currentSlide++;
    } else if (target.matches("#arrow-left")) {
      currentSlide--;
    } else if (target.matches(".slider-dots")) {
      sliderDots.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }

    nextSlide(slide, currentSlide);
    nextSlide(slideDots, currentSlide);
  });

  //обработчик события на весь слайдер
  gallery.addEventListener("mouseover", (event) => {
    if (
      event.target.matches(".karousel-btn") ||
      event.target.matches(".slide-dots")
    ) {
      stopSlide();
    }
  });
  gallery.addEventListener("mouseout", (event) => {
    if (
      event.target.matches(".karousel-btn") ||
      event.target.matches(".slide-dots")
    ) {
      startSlide();
    }
  });

  startSlide(1500);

}
//   slider();

export default slider;