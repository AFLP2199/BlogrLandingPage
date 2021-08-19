var product = document.getElementById("product");
var company = document.getElementById("company");
var connect = document.getElementById("connect");
var menu1 = document.getElementById("block-one");
var menu2 = document.getElementById("block-two");
var menu3 = document.getElementById("block-three");
var openmenu = document.getElementById("open-menu");
var navbar = document.getElementById("navbar");

function menuDropdown(buttonName, menuName) {
    buttonName.addEventListener("click", function () {
        if (menuName.style.display === "none") {
            menu1.style.display = "none";
            menu2.style.display = "none";
            menu3.style.display = "none";
            menuName.style.display = "block";
        } else {
            menuName.style.display = "none";
        }
    });
}
document.addEventListener("click", function (e) {
    var clickover = e.target;
    if (clickover.classList.contains("button-nav") === false) {
        menu1.style.display = "none";
        menu2.style.display = "none";
        menu3.style.display = "none";
    }
});

var windowWidth = $(window).width();
window.addEventListener("resize", function () {
    if (window.innerWidth <= 1024 && window.innerWidth != windowWidth) {
        navbar.style.display = "none";
        openmenu.style = "background-image: url(images/icon-hamburger.svg); top: 70px;";
    } else if (window.innerWidth > 1024) {
        navbar.style.display = "inline";
    }
    windowWidth = $(window).width();
});

openmenu.addEventListener("click", function () {
    var display = getComputedStyle(navbar).display;
    if (display === "none") {
        navbar.style.display = "block";
        openmenu.style = "background-image: url(images/icon-close.svg); top: 65px;";
    } else {
        navbar.style.display = "none";
        openmenu.style = "background-image: url(images/icon-hamburger.svg); top: 70px;";
    }
});

menuDropdown(product, menu1);
menuDropdown(company, menu2);
menuDropdown(connect, menu3);
