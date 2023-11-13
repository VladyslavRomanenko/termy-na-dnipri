const formRef = document.querySelector(".form");
const formModalRef = document.querySelector(".form-call");
const backdropRef = document.querySelector(".backdrop");
const TOKEN = "6977261998:AAFQRCt0T5z1thZtilkZtMMvzcF4fohIzNE";
const CHAT_ID = "-1002022208581";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const backdropThankRef = document.querySelector(".backdrop-thank");

formRef.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = formRef.elements.name.value;
  const phone = formRef.elements.phone.value;
  const date = formRef.elements.date.value;
  const time = formRef.elements.time.value;

  if (phone.length < 10 || phone.length > 13) {
    alert("Введіть коректно номер телефону");
  } else {
    let message = `<b>Бронювання</b>\n`;
    message += `<b>Ім'я: </b> ${name}\n`;
    message += `<b>Номер телефону: </b> ${phone}\n`;
    message += `<b>Дата: </b> ${date}\n`;
    message += `<b>Час: </b> ${time}\n`;

    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then(() => {
        formRef.reset();
      })
      .catch((err) => {
        throw new Error(err);
      });
    backdropThankRef.style.display = "block";
  }
});

formModalRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameModal = formModalRef.elements.name.value;
  const phoneModal = formModalRef.elements.phone.value;
  if (phoneModal.length < 10 || phoneModal.length > 13) {
    alert("Введіть коректно номер телефону");
  } else {
    let message = `<b>Зворотній зв'язок!</b>\n`;
    message += `<b>Ім'я: </b> ${nameModal}\n`;
    message += `<b>Номер телефону: </b> ${phoneModal}\n`;

    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then(() => {
        formModalRef.reset();
      })
      .catch((err) => {
        throw new Error(err);
      });
    backdropRef.classList.remove("visible");
    formModalRef.classList.remove("visible");
    backdropThankRef.style.display = "block";
  }
});
