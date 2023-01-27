$(document).ready(function () {
    var url = window.location.href;
    if(url.includes("https://aldrxc.github.io/")) {
        $("#header").load("https://aldrxc.github.io/header.html");
        $("#footer").load("https://aldrxc.github.io/footer.html");
    }
    else {
        $("#header").load("./header.html");
        $("#footer").load("./footer.html");
    }
});