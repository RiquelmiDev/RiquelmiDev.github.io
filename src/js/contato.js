const form = document.querySelector("form");
const fullName = document.getElementById("nome");
const email = document.getElementById("email");
const numero = document.getElementById("numero");
const assunto = document.getElementById("assunto");
const message = document.getElementById("message");

function sendEmaill() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Emaill: ${email.value}<br> Numero De Telefone: ${numero.value}<br> Mensagem: ${message.value}<br>`;

    Email.send({
        SecureToken : "a216f99b-ba04-4e93-83b9-2dcb6408bdba",
        To : 'riquelme.dos.kw@gmail.com',
        From : "riquelme.dos.kw@gmail.com",
        Subject : assunto.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Sucesso!",
                text: "Mensagem enviada com sucesso!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if(item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != "") {
            checkEmaill();
        }
        
        items[1].addEventListener("keyup", () => {
            checkEmaill();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmaill() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Insira um endereço de e-mail válido!";
        }
        else {
            errorTxtEmail.innerText = "Endereço de Email não pode ficar em branco!";
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error"); 
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !numero.classList.contains("error") && !assunto.classList.contains("error") && !message.classList.contains("error")) {
        sendEmaill();

        form.reset();
        return false;
    }

});