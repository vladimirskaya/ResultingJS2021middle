export default function scrollPage() {
  const toTop = document.getElementById("totop"),
    headerHeight = document
      .querySelector(".header-main")
      .getBoundingClientRect().height;
  console.log(toTop);

  window.addEventListener("scroll", function (e) {
    let last_known_scroll_position = window.scrollY;
    if (last_known_scroll_position > headerHeight) {
      toTop.style.display = "block";
    } else {
      toTop.style.display = "none";
    }
  });
}
