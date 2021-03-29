export default function checkInputFormData() {
  const doc = document.querySelector("body"),
    check2 = document.getElementById("check2"),
    check = document.getElementById("check"),
    card_check = document.getElementById("card_check"),
    check1 = document.getElementById("check1");
  let thanks = document.getElementById("thanks"),
    formContent = thanks.querySelector(".form-content");
  //   const checkbox = document.querySelectorAll("input[checkbox]");
  //   console.log(checkbox, "checkbox");

  const forms = [...document.forms];

  forms.forEach((form) => {
    form.addEventListener("input", (event) => {
      let target = event.target.closest("input");
      let regEx = "";
      if (target.name === "name") {
        regEx = /[^а-я\ ]/gi;
        target.value = target.value.replace(/^\ /, "");
        // target.value = target.value.replace(regEx, "");
      } else if (target.name === "phone") {
        regEx = /[^\d\+]/g;
        // target.value = target.value.replace(regEx, "");
      } else if (target.name === "promo") {
        regEx = /[^а-я0-9]/gi;
      }
      target.value = target.value.replace(regEx, "");

      let btn = target.form.querySelector("button");
      if (target.name === "phone") {
        let value = target.value;
        if (value.replace(/\D/g, "").length < 6) {
          btn.style.opacity = "0.5";
          btn.disabled = true;
          target.title = "Номер телефона должен содержать от 6 до 11 цифр.";
        } else {
          btn.style.opacity = "1";
          btn.disabled = false;
          target.title = "";
        }

        if (/^\+/.test(value)) {
          target.value = "+" + target.value.replace(/\+/g, "");
          if (value[-1] === "+") value.replace(-1, "");
          if (/^\+\d{2}/.test(value)) {
            value = value.replace(/\)*\(*/g, "");
            value = value.slice(0, 2) + "(" + value.slice(2);
            target.value = value;
          }
          if (/^\+\d\(\d{4}/.test(value)) {
            value = value.replace(/\(*\)*/g, "");
            value =
              value.slice(0, 2) +
              "(" +
              value.slice(2, 5) +
              ")" +
              value.slice(5);
            target.value = value;
          }

          if (/^\+\d\(\d{3}\)\d{4}/.test(value)) {
            value = value.replace(/\(*\)*\-*/g, "");
            console.log(value);
            value =
              value.slice(0, 2) +
              "(" +
              value.slice(2, 5) +
              ")" +
              value.slice(5, 8) +
              "-" +
              value.slice(8);
          }

          if (/^\+\d\(\d{3}\)\d{3}\-\d{3}/.test(value)) {
            value = value.replace(/\(*\)*\-*/g, "");
            console.log(value);
            value =
              value.slice(0, 2) +
              "(" +
              value.slice(2, 5) +
              ")" +
              value.slice(5, 8) +
              "-" +
              value.slice(8, 10) +
              "-" +
              value.slice(10);
          }
          if (/^\+\d\(\d{3}\)\d{3}\-\d{2}\-\d{2}/.test(value)) {
            value = value.slice(0, 16);
            target.value = value;
          }
        } else {
          if (/^\d{4}/.test(value)) {
            value = value.replace(/\)*\(*\-*/g, "");
            value = value.slice(0, 3) + "-" + value.slice(3);
            target.value = value;
          }
          if (/^\d{3}\-\d{4}/.test(value)) {
            value = value.replace(/\(*\)*\-*/g, "");
            value =
              value.slice(0, 3) +
              "-" +
              value.slice(3, 5) +
              "-" +
              value.slice(5);
            target.value = value;
          }

          if (
            /^\d{3}\-\d{2,3}\-?\d{0,2}/.test(value) &&
            value.length > 10 &&
            value.length < 14
          ) {
            value = value.replace(/\(*\)*\-*/g, "");
            value =
              value[0] +
              "(" +
              value.slice(1, 4) +
              ")" +
              value.slice(4, 7) +
              "-" +
              value.slice(7);
            target.value = value;
          }

          if (value.length === 14) {
            value = value.replace(/\(*\)*\-*/g, "");
            value =
              value[0] +
              "(" +
              value.slice(1, 4) +
              ")" +
              value.slice(4, 7) +
              "-" +
              value.slice(7, 9) +
              "-" +
              value.slice(9);
            target.value = value;
          }
          if (/^\d\(\d{3}\)\d{3}\-\d{2}\-\d{2}/.test(value)) {
            value = value.slice(0, 15);
            target.value = value;
          }
        }
      }
    });

    let inputs = form.querySelectorAll("input");
    inputs.forEach((inputItem) => {
      if (inputItem.type !== "checkbox") {
        inputItem.addEventListener("blur", (event) => {
          let target = event.target;
          if (target.name === "name") {
            validAlpha(target);
          } else if (target.name === "phone") {
            validPhone(target);
          }

          function validAlpha(t) {
            let value = t.value
                .replace(/\ {2,}/, " ")
                .replace(/\-{2,}/, "-")
                .trim(),
              correctValue = "";
            if (!!value) {
              if (t.name === "user_name") {
                let nameArr = value.split(" ");
                nameArr.forEach((item, i) => {
                  correctValue +=
                    item[0].toUpperCase() + item.slice(1).toLowerCase() + " ";
                });
              } else {
                correctValue =
                  value[0].toUpperCase() + value.slice(1).toLowerCase();
              }
              t.value = correctValue;
            }
          }

          function validPhone(t) {
            let resultValue = "",
              value = t.value;
            if (!!value) {
              value = value
                .replace(/\-/g, "")
                .replace(/\(/g, "")
                .replace(/\)/g, "")
                .replace(/\+/, "");
              if (value.length < 6) {
                resultValue = value;
                return;
              }
              switch (true) {
                case value.length === 6:
                  resultValue = value.slice(0, 3) + "-" + value.slice(3);
                  break;
                case value.length === 7:
                  resultValue =
                    value.slice(0, 3) +
                    "-" +
                    value.slice(3, 5) +
                    "-" +
                    value.slice(5);
                  break;
                case value.length === 8:
                  resultValue =
                    value.slice(0, 4) +
                    "-" +
                    value.slice(4, 7) +
                    "-" +
                    value.slice(7);
                  break;
                case 9 === value.length || value.length === 10:
                  resultValue =
                    value[0] +
                    "(" +
                    value.slice(1, 4) +
                    ")" +
                    value.slice(4, 7) +
                    "-" +
                    value.slice(7);
                  break;
                case 11 === value.length:
                  resultValue =
                    value[0] +
                    "(" +
                    value.slice(1, 4) +
                    ")" +
                    value.slice(4, 7) +
                    "-" +
                    value.slice(7, 9) +
                    "-" +
                    value.slice(9);
                  break;
              }
              if (t.value === "+") resultValue = "+" + resultValue;
            }
            t.value = resultValue;
          }
        });
      }
    });
  });
}
