if ((window.location.href).includes("index.html")) {
    document.getElementById("newpostbtn").addEventListener("click", function() {
        window.location.href="newpost.html";
    });
}
if ((window.location.href).includes("comments.html")) {
    document.getElementById("backbtn").addEventListener("click", function() {
        window.location.href="index.html";
    });
}
if ((window.location.href).includes("newpost.html")) {
    document.getElementById("cancelbtn").addEventListener("click", function() {
        window.location.href="index.html";
    });
}
