const name = document.getElementById("name");

const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");


const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const pass_error = document.getElementById("pass_error");


form.addEventListener("submit", (e) => {

    var email_check = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;



    if (name.value === "" || name.value == null) {
        e.preventDefault();
        name_error.innerHTML = "name is required"
    }
    else {
        name_error.innerHTML = ""
    }

    if (!email.value.match(email_check)) {
        e.preventDefault();
        email_error.innerHTML = "enter a valid email";
    }

    if (!password.value.length >= 8) {
        e.preventDefault();
        pass_error.innerHTML = "password cannot not be less than 8 characters"
    }
    if (password.value === "password") {
        e.preventDefault();
        pass_error.innerHTML = "password cannot be password"
    }

});


