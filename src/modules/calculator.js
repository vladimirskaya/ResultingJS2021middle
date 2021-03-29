export default function calculator() {
  const cards = document.getElementById("cards"),
    cardOrder = cards.querySelector("#card_order"),
    cardLetoSchelkovo = document.getElementById("card_leto_schelkovo"),
    cardLetoMozaika = document.getElementById("card_leto_mozaika"),
    price = cardOrder.querySelector(".price");
  console.log(cardOrder);

  let finalPrice = price.children[2],
    coupon = price.children[0];

  function getInfo({ period, adress, cost }) {
    console.log(period, adress, cost);
  }

  cardOrder.addEventListener("change", (event) => {
    let url,
      target = event.target;
    console.log(target);
    if (target.closest("div") === coupon) {
      if (coupon.children[0].value.toLowerCase() === "тело2019") {
        finalPrice.innerHTML = Math.round(
          0.33 * parseFloat(price.children[2].innerHTML)
        );
      }
    }
    console.log("xm: ", target, cardLetoSchelkovo, cardLetoMozaika);
    if (target === cardLetoSchelkovo) url = "schelkovo.html";
    else if (target === cardLetoMozaika) url = "mozaika.html";
    else {
      console.log("не прошло: ", target, cardLetoSchelkovo, cardLetoMozaika);
      return;
    }
    console.log(url);
    fetch(url)
      .then(function (response) {
        // The API call was successful!
        return response.text();
      })
      .then(function (html) {
        // This is the HTML from our response as a text string
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");

        // Get the image file
        const info = doc.querySelector(".cards-types");
        console.log(info.children);
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });

    // const request = new XMLHttpRequest();
    // console.log(request);
    // request.open("GET", url);
    // request.addEventListener("readystatechange", () => {
    //   console.log("listen req");
    //   if (request.readyState === 4 && request.status === 200) {
    //     const data = new DOMParser().parseFromString(
    //       this.responseText,
    //       "text/html"
    //     );
    //     let info = data.querySelector(".card-types");
    //     console.log(info);
    //   } else console.log("mist");
  });
  //   });
}
