export default function selectClubs() {
  const clubList = document.querySelector(".clubs-list");
  clubList.addEventListener("click", (event) => {
    [...clubList.children].forEach((elem) => {
      // console.log('elem ', elem);
      if (elem.nodeName === "UL") {
        if (elem.classList.contains("open")) {
          elem.classList.remove("open");
          elem.style.display = "none";
        } else {
          elem.style.display = "block";
          elem.classList.add("open");
        }
      }
    });
  });
}
