function ageVerify() {
    var age = document.getElementById('age').value;
    var parentLabel = document.getElementById('parents-title');
    var parentField = document.getElementById('parents');
    if(age==""){
            parentLabel.style.display = 'none';
            parentField.style.display = 'none';
    } else {
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
    if(name =="") {
        nameError.style.display = 'none';
            nameError.innerHTML  = '';
    }
    for(var i = 0; i < name.length;i++){
        if((name.charAt(i) >= 'א' && name.charAt(i) <= 'ת') 
        || (name.charAt(i) >='a' && name.charAt(i) <= 'z') 
        || (name.charAt(i) >='A' && name.charAt(i) <= 'Z') 
        || name.charAt(i) == ' ') {
            nameError.style.display = 'none';
            nameError.innerHTML  = '';
        } else {
            nameError.style.display = 'flex';
            nameError.innerHTML = 'name must contain only letters and spaces';
        }
    }
}
function mailVerify() {
    var regex = /\S+@\S+\.\S+/;
    var mail = String(document.getElementById('mail').value);
    var mailError = document.getElementById('mail-error');
    if(mail == "") {
        mailError.innerHTML = "";
        mailError.style.display = "none";
    } else if(regex.test(mail)) {
        mailError.innerHTML = "";
        mailError.style.display = "none";
    } else {
        mailError.innerHTML = "not a valid mail address";
        mailError.style.display = "flex";
    }
}
