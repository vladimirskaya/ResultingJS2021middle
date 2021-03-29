export default function sendForm() {
  const errorMessage = `Что-то пошло не так.<br> Обратитесь, пожалуйста, позже.`,
    thanks = document.getElementById("thanks"),
    formContentThanks = thanks.querySelector(".form-content").children[1];

  let forms = [...document.forms];
  console.log(forms);
  /*отправлено, ошибка). В последних двух состояниях 
    необходимо заменить сам контент модального окна на оповещение. */

  forms.forEach((form, index) => {
    form.addEventListener("submit", (event) => {
      console.log(event);
      event.preventDefault();
      console.log("cancel standart answer");
      //проверка ,если все заполнено, то выводим сообщение в в отдельном окне, где-то там оно есть
      const formData = new FormData(form);
      console.log(formData);
      let body = {};
      console.log(form.elements);
      formData.forEach((val, key) => {
        body[key] = val;
      }),
        console.log(body);

      // вызов обещания с передачей ему данных из форм
      postData(body)
        .then((response) => {
          //console.log(response);
          if (response.status !== 200) {
            throw new Error("Status network not 200");
          }
          thanks.style.display = "flex";
        })
        // ловим возможную ошибку
        .catch((error) => {
          if (!!error) {
            //console.log(error);
            formContentThanks.innerHTML = errorMessage;
          }
        });
      clearInputs();
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

    function clearInputs() {
      const allInputs = document.querySelectorAll("input");
      for (let input of allInputs) {
        input.value = "";
      }
    }
  });
}
