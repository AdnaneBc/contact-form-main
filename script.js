const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const fieldRequired = "This field is required";
const validEmail = "Please enter a valid email address";
const queryType = "Please select a query type";
const consent = "To submit this form, please consent to being contacted";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const queryRadios = document.querySelectorAll('input[name="query-type"]');
let querySelected = false;
const radioboxContainer = document.getElementById("radiobox-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelectorAll(".error").forEach((el) => el.remove());

  if (
    !firstName.value ||
    !lastName.value ||
    !email.value ||
    !email.value.trim() ||
    !emailRegex.test(email.value) ||
    !querySelected
  ) {
    if (!firstName.value) {
      const errorEl = createError(fieldRequired);

      firstName.insertAdjacentElement("afterend", errorEl);
    }
    if (!lastName.value) {
      const errorEl = createError(fieldRequired);
      lastName.insertAdjacentElement("afterend", errorEl);
    }
    if (!email.value) {
      const errorEl = createError(fieldRequired);
      email.insertAdjacentElement("afterend", errorEl);
    }
    if (!email.value.trim() || !emailRegex.test(email.value)) {
      const errorEl = document.createElement("span");
      errorEl.classList.add("error");
      errorEl.innerText = validEmail;
      email.insertAdjacentElement("afterend", errorEl);
    }
    // Check if one radio is selected
    queryRadios.forEach((radio) => {
      if (radio.checked) {
        querySelected = true;
      }
    });

    if (!querySelected) {
      const errorEl = document.createElement("span");
      errorEl.classList.add("error");
      errorEl.innerText = "Please select a query type";

      // Insert after the last radio option (support)
      radioboxContainer.insertAdjacentElement("afterend", errorEl);
    }
  }else{
    
  }
});

function createError(input) {
  const errorEl = document.createElement("span");
  errorEl.classList.add("error");
  errorEl.innerText = input;
  return errorEl;
}
