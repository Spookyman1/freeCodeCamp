function backToForm() {
    console.log('lol')
    window.location.replace('./form.html');
}
function success() {
    console.log('redi')
    event.preventDefault();
    window.location.href = './submitted.html';
}