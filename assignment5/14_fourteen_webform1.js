"use strict";
function printFormData (event) {
    event.preventDefault();
    console.log("Email = "+ document.getElementById("email").value);
    console.log("URL = "+ document.getElementById("url").value);
}

//document.getElementById("subBtn").onclick = printFormData;

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", printFormData);