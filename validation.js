//TODO: ARROW FUNCTIONS
//make const
//instead of dealing with style,create classes and switch between them when valid\inval
let ageValid = false;
let nameValid = false;
let mailValid = false;
let descriptionValue = false;
let favoriteValue = false;
const VALID_DISPLAY = "none";
const INVALID_DISPLAY = "flex";
const ageVerify = () => {
  var age = Number(document.getElementById("age").value);
  var parentLabel = document.getElementById("parents-title");
  var parentField = document.getElementById("parents");
  var positiveError = document.getElementById("positive-age");
  if (!age) {
    ageValid = false;
    parentLabel.style.display = VALID_DISPLAY;
    parentField.style.display = VALID_DISPLAY;
    positiveError.style.display = VALID_DISPLAY;
  } else if (age < 0) {
    ageValid = false;
    positiveError.style.display = INVALID_DISPLAY;
  } else {
    ageValid = true;
    if (age < 18) {
      parentLabel.style.display = INVALID_DISPLAY;
      parentField.style.display = INVALID_DISPLAY;
      positiveError.style.display = VALID_DISPLAY;
      parentLabel.innerHTML =
        "Participants younger than 18 must provide one parent name";
      parentLabel.style.color = "white";
    } else {
      parentLabel.style.display = VALID_DISPLAY;
      parentField.style.display = VALID_DISPLAY;
    }
  }
};
//regex
//name error value
const nameVerify = () => {
  //verify name has hebrew or english letters only
  var nameField = document.getElementById("name").value;
  var nameError = document.getElementById("name-error");
  var name = String(nameField);
  if (name == "") {
    nameValid = false;
    nameError.style.display = VALID_DISPLAY;
    nameError.innerHTML = "";
  }
  for (var i = 0; i < name.length; i++) {
    if (
      (name.charAt(i) >= "א" && name.charAt(i) <= "ת") ||
      (name.charAt(i) >= "a" && name.charAt(i) <= "z") ||
      (name.charAt(i) >= "A" && name.charAt(i) <= "Z") ||
      name.charAt(i) == " "
    ) {
      nameValid = true;
      nameError.style.display = VALID_DISPLAY;
      nameError.innerHTML = "";
    } else {
      nameValid = false;
      nameError.style.display = INVALID_DISPLAY;
      nameError.innerHTML = "name must contain only letters and spaces";
    }
  }
};
//const outside of function
const mailVerify = () => {
  var regex = /\S+@\S+\.\S+/;
  var mail = String(document.getElementById("mail").value);
  var mailError = document.getElementById("mail-error");
  if (mail == "") {
    mailValid = false;
    mailError.innerHTML = "";
    mailError.style.display = VALID_DISPLAY;
  } else if (!regex.test(mail)) {
    mailValid = false;
    mailError.innerHTML = "not a valid mail address";
    mailError.style.display = INVALID_DISPLAY;
  } else {
    mailValid = true;
    mailError.innerHTML = "";
    mailError.style.display = VALID_DISPLAY;
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
    submitButton.style.backgroundColor = "#37af65";
    submitButton.style.color = "white";
    submitButton.disabled = false;
  } else {
    submitButton.style.backgroundColor = "gray";
    submitButton.style.color = "black";
    submitButton.disabled = true;
  }
};
