var ageValid = false;
var nameValid = false;
var mailValid = false;
function ageVerify() {
    var age = document.getElementById('age').value;
    var parentLabel = document.getElementById('parents-title');
    var parentField = document.getElementById('parents');
    if(age==""){
            ageValid = false;
            parentLabel.style.display = 'none';
            parentField.style.display = 'none';
    } else {
        ageValid = true;
        if(Number(age) < 18) {
            parentLabel.style.display = 'flex';
            parentField.style.display = 'flex';
        }
    }
}
function nameVerify() { //verify name has hebrew or english letters only
    var nameField = document.getElementById('name').value;
    var nameError = document.getElementById('name-error');
    var name = String(nameField);
    for(var i = 0; i < name.length;i++){
        if((name.charAt(i) >= 'א' && name.charAt(i) <= 'ת') 
        || (name.charAt(i) >='a' && name.charAt(i) <= 'z') 
        || (name.charAt(i) >='A' && name.charAt(i) <= 'Z') 
        || name.charAt(i) == ' ') {
            nameValid = true;
            nameError.style.display = 'none';
            nameError.innerHTML  = '';
        } else {
            nameValid = false;
            nameError.style.display = 'flex';
            nameError.innerHTML = 'name must contain only letters and spaces';
        }
    }
    if(name =="") {
        nameValid = false;
        nameError.style.display = 'none';
            nameError.innerHTML  = '';
    }
}
function mailVerify() {
    var regex = /\S+@\S+\.\S+/;
    var mail = String(document.getElementById('mail').value);
    var mailError = document.getElementById('mail-error');
    if(mail == "") {
        mailValid = false;
        mailError.innerHTML = "";
        mailError.style.display = "none";
    } else if(!regex.test(mail)) {
        mailValid = false;
        mailError.innerHTML = "not a valid mail address";
        mailError.style.display = "flex";
    } else {
        mailValid = true;
        mailError.innerHTML = "";
        mailError.style.display = "none";
    }
}
function formVerify() {
    console.log("valid");
    var submitButton = document.getElementById('submit');
    if(ageValid && nameValid && mailValid) {
        submitButton.style.backgroundColor ="#37af65";
        submitButton.style.color = "white";
    } else {
        submitButton.style.backgroundColor ="gray";
        submitButton.style.color = "black";
    }
}
