export default function sendForm() {
  const errorMessage = [
      "Приносим извинения!",
      `Что-то пошло не так.\nОбратитесь, пожалуйста, позже.`,
    ],
    workMessage = ["", `Ваши данные \nпередаются.`],
    successMessage = [
      "Спасибо!",
      `Ваши данные успешно переданы. \n Мы скоро свяжемся в Вами!`,
    ];
  const formContentThanks = thanks.querySelector(".form-content").children[1],
    check2 = document.getElementById("check2"),
    check = document.getElementById("check"),
    card_check = document.getElementById("card_check"),
    check1 = document.getElementById("check1");
  let checkAgree = document.querySelectorAll("form>input[name]");
  // console.log("checkAgree", checkAgree);

  let forms = [...document.forms];
  // console.log(forms);
  /*отправлено, ошибка). В последних двух состояниях 
    необходимо заменить сам контент модального окна на оповещение. */
  let btn;

  forms.forEach((form, index) => {
    //получаем чекбоксы
    // console.log("form[check]", form["check"]);
    form.addEventListener("mouseover", (event) => {
      let target = event.target;
      btn = form.querySelector("button");
      // console.log("form['check']", btn);
      if (target === btn) {
        // console.log("pfikb d button");
        if (!!form["check"]) {
          if (!form["check"].checked) {
            // console.log("button is not actove");
            btn.disabled = true;
            btn.style.opacity = "0.5";
            btn.title = "Необходимо подтвердить согласие на обработку данных.";
            form["check"].nextElementSibling.textContent =
              "Необходимо подтвердить согласие на обработку персональных данных.";
            form["check"].nextElementSibling.style.cssText = `
            color: red;
    font-size: 11px;
    font-weight: 400;
    line-height: 14px;
    text-transform: uppercase;
    margin-left: 10px;
    text-align: justify;
    margin: 0 auto;
    position: relative;`;
          }
        }
      }
    });

    form.addEventListener("change", (event) => {
      let target = event.target;
      if (target === form["check"] && form["check"]) {
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.title = "";
        form["check"].nextElementSibling.textContent =
          "Я СОГЛАСЕН НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ";
        form["check"].nextElementSibling.style.color = `color: #fff;
    font-size: 11px;
    font-weight: 400;
    line-height: 14px;
    text-transform: uppercase;
    margin-left: 10px;
    text-align: justify;
    margin: 0 auto;
    position: relative;`;
      } else return;
    });

    form.addEventListener("submit", (event) => {
      // console.log(event);
      event.preventDefault();

      let popup = form.closest("div.popup");
      if (!!popup) popup.style.display = "none";

      //проверка ,если все заполнено, то выводим сообщение в в отдельном окне, где-то там оно есть
      const formData = new FormData(form);
      let body = {};
      //console.log(form.elements);
      formData.forEach((val, key) => {
        body[key] = val;
      }),
        // console.log("body ", body);

        // вызов обещания с передачей ему данных из форм
        postData(body)
          .then((response) => {
            //console.log(response);
            if (response.status !== 200) {
              throw new Error("Status network not 200");
            }
            // outputPopup(workMessage);
          })
          // ловим возможную ошибку
          .catch((error) => {
            if (!!error) {
              //console.log(error);
              outputPopup(errorMessage);
            }
          });
      outputPopup();
    });
  });

  function postData(body) {
    return fetch("./server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  function outputPopup(message) {
    let thanks = document.getElementById("thanks");
    // console.log(thanks);
    thanks.style.display = "block";
    const content = thanks.querySelector(".form-content");
    if (!!message) {
      content.children[0].textContent = message[0];
      content.children[1].textContent = message[1];
    }
    clearInputs();
    closeForm(thanks);
    function closeForm(paren) {
      paren.addEventListener("click", (event) => {
        let target = event.target;
        if (
          target.closest("div").matches(".close-btn, .close-form") ||
          target.nodeName === "BUTTON"
        ) {
          paren.style.display = "none";
        }
      });
    }

    function clearInputs() {
      const forms = [...document.forms];
      forms.forEach((form) => {
        const elements = [...form.elements];
        elements.forEach((elem) => {
          if (elem.type === "checkbox") elem.checked = false;
          else if (elem.type === "input") elem.value = "";
        });
      });
    }
  }
}
