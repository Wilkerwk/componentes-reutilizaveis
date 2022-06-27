function croTeste() {
    if (window.location.pathname.indexOf("monte-sua-combinacao") > 0) {
        var refreshIntervalId = window.setInterval(function () {
            if (document.querySelectorAll(`section ngu-carousel .ngucarousel-items`).length) {

                clearInterval(refreshIntervalId);

            };
        }, 1);
    };
};

var oldURL = "";
var currentURL = window.location.href;
function checkURLchange(currentURL) {
    if (currentURL != oldURL) {
        croTeste();
        oldURL = currentURL;
    };
    oldURL = window.location.href;
    setTimeout(function () {
        checkURLchange(window.location.href);
    }, 1000);
};

checkURLchange();

document.querySelector(`body`).addEventListener(`click`, function (e) {
    croTeste();
});
