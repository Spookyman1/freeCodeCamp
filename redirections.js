const FORM_PATH = "./form.html";
const SUBMITTED_PATH = "./submitted.html";
const success = () => {
  event.preventDefault(); // i know we agreed to remove this
  //but it doesnt work without it and i cant figure out why
  window.location.href = "./submitted.html";
};
const backToForm = () => {
  window.location.href = FORM_PATH;
};
