const FORM_PATH = "./form.html";
const SUBMITTED_PATH = "./submitted.html";
window.backToForm = () => {
  location.href = FORM_PATH;
};
window.success = () => {
  location.href = SUBMITTED_PATH;
};
