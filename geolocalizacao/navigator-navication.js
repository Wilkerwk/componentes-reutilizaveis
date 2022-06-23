let interval = window.setInterval(function () {

    document.querySelector(`.wrap-btn`).style.display = "none";

    clearInterval(interval)
}, 400);

if (navigator.geolocation) {
    for (var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor), result = "", name = "CC647GEO", nameEQ = name + "\x3d", ca = document.cookie.split(";"), i = 0; i < ca.length; i++) {
        for (var c = ca[i]; " " == c.charAt(0);)
            c = c.substring(1, c.length); 
            0 == c.indexOf(nameEQ) && (result = c.substring(nameEQ.length, c.length)) 
    } 
    1 == isChrome ? "" == result && navigator.permissions.query({ name: "geolocation" }).then(function (a) { 
        "prompt" == a.state && dataLayer.push({ event: "optimize.activate.geoloc" }) }) : "" == result && dataLayer.push({ event: "optimize.activate.geoloc" 
    })
};