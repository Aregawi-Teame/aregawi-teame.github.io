function showConsol () {
    console.log("Email = "+ document.getElementById("email").value);
    console.log("URL = "+ document.getElementById("url").value);
}

document.getElementById("subBtn").onclick = showConsol;