var ageValid = false;
var nameValid = false;
var mailValid = false;
var descriptionValue = false;
var  favoriteValue  = false;
function ageVerify() {
    var age = document.getElementById('age').value;
    var parentLabel = document.getElementById('parents-title');
    var parentField = document.getElementById('parents');
    if(Number(age) < 0) {
        parentLabel.style.display = 'flex';
        parentLabel.innerHTML = 'age must be positive';
        parentLabel.style.color = 'red';
    }
   else if(age==''){
            ageValid = false;
            parentLabel.style.display = 'none';
            parentField.style.display = 'none';
    } else {
        ageValid = true;
        if(Number(age) < 18) {
            parentLabel.style.display = 'flex';
            parentField.style.display = 'flex';
            parentLabel.innerHTML ='Participants younger than 18 must provide one parent name';
            parentLabel.style.color = 'white';
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
function descriptionVerify() {
    var select = document.getElementById("description").value;
    if(String(select) != '') {
        descriptionValue = true;
    }
}

function featureVerify() {
    var select = document.getElementById("favorite").value;
    if(String(select) != '') {
        favoriteValue = true;
    }
}
function formVerify() {
    var submitButton = document.getElementById('submit');
    if(ageValid && nameValid && mailValid && favoriteValue && descriptionValue) {
        submitButton.style.backgroundColor ="#37af65";
        submitButton.style.color = "white";
        submitButton.disabled = false;
    } else {
        submitButton.style.backgroundColor ="gray";
        submitButton.style.color = "black";
        submitButton.disabled = true;
    }
}
