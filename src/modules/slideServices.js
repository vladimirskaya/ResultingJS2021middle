export default function slideServices() {
  const servicesSliders = document.querySelector(".services-slider");
  let slide = servicesSliders.querySelectorAll(".slide"),
    amount = 5;

  servicesSliders.style.cssText = "position: relative; overflow: hidden";
  slide.forEach((elem) => {
    elem.style.flex = " 0 0 20%";
  });

  servicesSliders.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target.closest("a");
    // console.log('target', target);
    let where, index;
    slide = servicesSliders.querySelectorAll(".slide");

    if (slide.length === amount) return;
    if (target.matches("#arrow-right")) {
      where = where = "beforeend";
      index = 0;
    } else if (target.matches("#arrow-left")) {
      where = "afterbegin";
      index = slide.length - 1;
    }
    servicesSliders.insertAdjacentElement(where, slide[index]);
  });
}
