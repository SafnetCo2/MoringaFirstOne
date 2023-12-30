const username = document.getElementById("username");
const password = document.getElementById('password');
const message = document.getElementById('message');
const form = document.getElementById('form');
let error = [];
let success = "";
form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (username.value = "") {
        error.push("enter details");
    }
    if (password.value = "") {
        error.push("valid password")
    }
    alert("form submited")
    message.innerText = error;
})
