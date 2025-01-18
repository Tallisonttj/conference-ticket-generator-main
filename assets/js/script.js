"use strict";
let form = document.querySelector('#myform');
let inpFile = document.querySelector("#avatar");
let image = document.querySelector('#avti');
let h3 = document.querySelector('h3');
let h6 = document.querySelector('h6');
let inpEmail = document.querySelector('#email');
let inpname = document.querySelector('#name');
let avatarArea = document.querySelector('.avatar-area .info');
let avatarPicture = document.querySelector('.avatar-picture');
let inpGit = document.querySelector('#git');
let inc = document.querySelector('.icn img');
let emailArea = document.querySelector('.email-area .info');
emailArea.style.display = 'none';
const max_file_size = 500 * 1024;
let buttonOk = document.querySelector('.buttonok');
let newarea = document.createElement('div');
let removePicture = document.createElement('p');
let changePicture = document.createElement('label');
changePicture.setAttribute('for', 'avatar');
newarea.style.display = 'none';
inpFile.addEventListener('change', getavatar);
function getavatar(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.size > max_file_size) {
            h3.style.display = 'flex';
            h6.innerHTML = 'The selected file is too large. The maximum size allowed is 500KB.';
            h6.classList.add('error');
            avatarArea.classList.add('error');
            inpFile.value = '';
            newarea.style.display = 'none';
            image.src = "assets/images/icon-upload.svg";
        }
        else {
            const fileURL = URL.createObjectURL(file);
            image.src = fileURL;
            image.onload = () => URL.revokeObjectURL(fileURL);
            inc.src = fileURL;
            h3.style.display = 'none';
            h6.innerHTML = 'Upload your photo (JPG or PNG, max size: 500KB)';
            h6.classList.remove('error');
            avatarArea.classList.remove('error');
            newarea.style.display = 'flex';
            changePicture.innerHTML = 'alterar foto';
            removePicture.innerHTML = 'remover foto';
            newarea.append(removePicture);
            newarea.append(changePicture);
            newarea.classList.add('fileok');
            avatarPicture.append(newarea);
            removePicture.addEventListener('click', () => {
                newarea.style.display = 'none';
                image.src = "assets/images/icon-upload.svg";
                inpFile.value = '';
                h3.style.display = 'flex';
                h3.innerHTML = "Drag and drop or click to upload";
            });
            changePicture.addEventListener('click', () => {
                newarea.style.display = 'flex';
                image.src = fileURL;
                inc.src = fileURL;
            });
        }
    }
}
buttonOk === null || buttonOk === void 0 ? void 0 : buttonOk.addEventListener('click', () => {
    if (validarEmail(inpEmail.value) == false) {
        emailArea.style.display = 'flex';
        emailArea.classList.add('error');
        inpEmail.classList.add('error');
    }
    else {
        inpEmail.classList.remove('error');
        emailArea.style.display = 'none';
    }
    if (inpFile.value == '') {
        h6.classList.add('error');
        avatarArea.classList.add('error');
    }
    else {
        h6.classList.remove('error');
        avatarArea.classList.remove('error');
    }
    let form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });
    validadeForm();
});
function validarEmail(email) {
    const regex = /([a-z0-9\-\_\.]{2,})@([a-z0-9]{2,})\.([a-z]{2,})(\.[a-z]{2,})?/g;
    return regex.test(email);
}
function validadeForm() {
    let inputs = document.querySelectorAll('input');
    let allfiled = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allfiled = false;
        }
    });
    if (allfiled) {
        if (validarEmail(inpEmail.value) == true) {
            validarEmail(inpEmail.value);
            let form = document.querySelector('form');
            form.addEventListener('submit', (event) => {
                event.preventDefault();
            });
            form.style.opacity = '0';
            let ticket = document.querySelector('.ticketArea');
            ticket.style.display = 'flex';
            let nameArea = document.querySelector('.nameArea');
            nameArea.textContent = inpname.value;
            let tctName = document.querySelector('.tckname h1 span');
            tctName.textContent = inpname.value;
            let emailArea = document.querySelector('#emailArea');
            emailArea.textContent = inpEmail.value;
            let gitName = document.querySelector('#gitName');
            gitName.textContent = inpGit.value;
        }
    }
}
