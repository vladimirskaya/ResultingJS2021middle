export default function calculator() {
  const cards = document.getElementById("cards"),
    cardOrder = cards.querySelector("#card_order"),
    cardLetoSchelkovo = document.getElementById("card_leto_schelkovo"),
    cardLetoMozaika = document.getElementById("card_leto_mozaika"),
    price = cardOrder.querySelector(".price"),
    club = cardOrder.querySelector(".club"),
    times = document.querySelector(".time").children;
  console.log(cardOrder);
  let url = "mozaika.html",
    period = 1;

  let finalPrice = price.children[2],
    coupon = price.children[0];

  cardOrder.addEventListener("click", (event) => {
    let target = event.target;
    console.log(target);

    for (let i = 0; i < times.length; i++) {
      if (target === times[i]) {
        if (target.nodeName === "LABEL") {
          console.log("нажали на лабель", target);
          period = target.previousElementSibling.value;
        } else if (target.nodeName === "INPUT") {
          console.log("нажали на инпут", target);
          period = target.value;
        }
      }
    }

    console.log("найденный период", period);

    if (target === cardLetoSchelkovo) url = "schelkovo.html";
    else if (target === cardLetoMozaika) url = "mozaika.html";
    console.log(url);
    // console.log("clubbbb", clubs, cardLetoSchelkovo, cardLetoMozaika);
  });

  cardOrder.addEventListener("change", (event) => {
    let target = event.target;
    console.log(target);

    const getCost = (html) => {
      // This is the HTML from our response as a text string
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");
      console.log("doc", doc);

      // Получаем стоимость
      let cards = doc.querySelector(".cards-types").children;
      console.log(url, "дети контенейра .cards-types", cards);
      let postfix = "s";
      console.log("period + postfix", period + postfix);
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].value === period + postfix) {
          let label = cards[i].nextElementSibling;
          console.log("label", label.innerHTML);

          finalPrice.innerHTML = label.querySelector(".cost").innerHTML;
          break;
        }
      }
      //   console.log(cards);
    };

    if (target.closest("div") === coupon) {
      if (coupon.children[0].value.toLowerCase() === "тело2019") {
        finalPrice.innerHTML = Math.round(
          0.33 * parseFloat(price.children[2].innerHTML)
        );
      }
    }

    fetch(url)
      .then(function (response) {
        // The API call was successful!
        return response.text();
      })
      .then(function (html) {
        getCost(html);
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

    //   });
  });
}
