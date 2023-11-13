// MODAL CALL
const buttonCall = document.querySelector(".chat-phone");
const backdropRef = document.querySelector(".backdrop");
const closeModalBtn = document.querySelector(".modal-close-btn");
const modalRef = document.querySelector(".modal-call");

buttonCall.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  backdropRef.classList.add("visible");
  modalRef.classList.add("visible");
});

closeModalBtn.addEventListener("click", () => {
  document.body.style.overflow = "auto";
  backdropRef.classList.remove("visible");
  modalRef.classList.remove("visible");
});

backdropRef.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    modalRef.classList.remove("visible");
    document.body.style.overflow = "auto";
    backdropRef.classList.remove("visible");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modalRef.classList.remove("visible");
    document.body.style.overflow = "auto";
    backdropRef.classList.remove("visible");
  }
});

//MODSL THANKS
const backdropThankRef = document.querySelector(".backdrop-thank");
const closeModalThankBtn = document.querySelector(".modal-thank-close-btn");
const closeBtn = document.querySelector(".modal-thank-btn");

function openModal() {
  backdropThankRef.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  backdropThankRef.style.display = "none";
  document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeModal);
closeModalThankBtn.addEventListener("click", closeModal);

document.addEventListener("click", (event) => {
  if (event.target === backdropThankRef) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
