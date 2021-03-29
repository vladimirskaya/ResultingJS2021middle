import { container } from "webpack";

export default function sendForm() {
  const errorMessage = `Что-то пошло не так.<br> Обратитесь, пожалуйста, позже.`,
    formContentThanks = thanks.querySelector(".form-content").children[1],
    check2 = document.getElementById("check2"),
    check = document.getElementById("check"),
    card_check = document.getElementById("card_check"),
    check1 = document.getElementById("check1");
  let checkAgree = document.querySelectorAll("form>input[name]");
  console.log("checkAgree", checkAgree);

  let forms = [...document.forms];
  console.log(forms);
  /*отправлено, ошибка). В последних двух состояниях 
    необходимо заменить сам контент модального окна на оповещение. */
  let btn;

  forms.forEach((form, index) => {
    //получаем чекбоксы
    console.log("form[check]", form["check"]);
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
      } else return;
    });

    form.addEventListener("submit", (event) => {
      console.log(event);
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
        console.log("body ", body);

      // вызов обещания с передачей ему данных из форм
      postData(body)
        .then((response) => {
          //console.log(response);
          if (response.status !== 200) {
            throw new Error("Status network not 200");
          }
          outputPopup();
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
    console.log(thanks);
    thanks.style.display = "block";
    const content = thanks.querySelector(".form-content");
    if (!!message) {
      content.children[0].textContent = "";
      content.children[1].textContent = message;
    }
    clearInputs();

    function clearInputs() {
      const forms = document.forms;
      forms.forEach((form) => {
        elements = form.elements;
        elements.forEach((elem) => {
          if (elem.type === "checkbox") elem.checked = false;
          else if (elem.type === "input") elem.value = "";
        });
      });
    }
  }
}
