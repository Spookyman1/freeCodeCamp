const FORM_PATH = "./form.html";
const SUBMITTED_PATH = "./submitted.html";
const backToForm = () => {
  window.location.href = FORM_PATH;
};
const success = () => {
  window.location.href = SUBMITTED_PATH;
};
