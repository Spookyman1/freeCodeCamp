//TODO: ARROW FUNCTIONS DONE!
//make const DONE!
//instead of dealing with style,create classes and switch between them when valid\inval DISAGREE
let ageValid = false;
let nameValid = false;
let mailValid = false;
let descriptionValue = false;
let favoriteValue = false;

const VALID_DISPLAY = "none";
const INVALID_DISPLAY = "flex";

const MAIL_PATTERN = /\S+@\S+\.\S+/;
const NAME_PATTERN = /^[a-zA-Zא-ת\s]*$/;

const addClass = (element, className) => {
  arr = element.className.split(" ");
  if (arr.indexOf(className) == -1) {
    element.className += " " + className;
  }
};
const hideError = (elem) => {
  addClass(elem, "hidden");
  elem.classList.remove("display");
};
const showError = (elem) => {
  addClass(elem, "display");
  elem.classList.remove("hidden");
};
const ageVerify = () => {
  var age = Number(document.getElementById("age").value);
  var parentLabel = document.getElementById("parents-title");
  var parentField = document.getElementById("parents");
  var positiveError = document.getElementById("positive-age");
  if (isNaN(age)) {
    ageValid = false;
    hideError(parentLabel);
    hideError(parentField);
    hideError(positiveError);
  } else if (age < 0) {
    ageValid = false;
    showError(positiveError);
  } else {
    ageValid = true;
    if (age < 18) {
      showError(parentLabel);
      showError(parentField);
      hideError(positiveError);
    } else {
      hideError(parentLabel);
      hideError(parentField);
    }
  }
};
//regex
//name error value
const nameVerify = () => {
  //verify name has hebrew or english letters only
  var nameField = document.getElementById("name").value;
  var nameError = document.getElementById("name-error");
  var name = nameField;
  if (!name) {
    nameValid = false;
    hideError(nameError);
  } else {
    if (NAME_PATTERN.test(nameField)) {
      nameValid = true;
      hideError(nameError);
    } else {
      nameValid = false;
      showError(nameError);
    }
  }
};
//const outside of function
const mailVerify = () => {
  var mail = String(document.getElementById("mail").value);
  var mailError = document.getElementById("mail-error");
  if (mail == "") {
    mailValid = false;
    hideError(mailError);
  } else if (!MAIL_PATTERN.test(mail)) {
    mailValid = false;
    showError(mailError);
  } else {
    mailValid = true;
    hideError(mailError);
  }
};
const descriptionVerify = () => {
  var select = document.getElementById("description").value;
  if (select != "") {
    descriptionValue = true;
  }
};

const featureVerify = () => {
  var select = document.getElementById("favorite").value;
  if (select != "") {
    favoriteValue = true;
  }
};
const formVerify = () => {
  var submitButton = document.getElementById("submit");
  if (ageValid && nameValid && mailValid && favoriteValue && descriptionValue) {
    addClass(submitButton, "valid-submit");

    if (submitButton.classList.contains("invalid-submit")) {
      submitButton.classList.remove("invalid-submit");
    }
    submitButton.disabled = false;
  } else {
    if (submitButton.classList.contains("valid-submit")) {
      submitButton.classList.remove("valid-submit");
    }
    addClass(submitButton, "invalid-submit");
    submitButton.disabled = true;
  }
};
