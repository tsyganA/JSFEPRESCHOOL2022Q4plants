const burger = document.querySelector("#burger");
const popup = document.querySelector("#popup");
const navmenu = document.querySelector("#heclas").cloneNode(1);
const body = document.body;
const links = Array.from(navmenu.children);

burger.addEventListener("click", openMenu);

function openMenu(event) {
    event.preventDefault();
    popup.classList.toggle("open");
    burger.classList.toggle("active");
    body.classList.toggle("noscroll");
    menuPopup();
}

function menuPopup() {
    popup.append(navmenu);
    navmenu.classList.toggle("burger");
}

links.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

function closeMenu() {
    popup.classList.remove("open");
    burger.classList.remove("active");
    body.classList.remove("noscroll");
    navmenu.classList.remove("burger");
}

// price

const accordOpen = document.querySelectorAll(".accord");
const buttonAcc = Array.from(accordOpen);
buttonAcc.forEach((accordOpen) => {
    accordOpen.addEventListener("click", openPri);

    function openPri(event) {
        event.preventDefault();

        if (accordOpen.classList.contains("opened")) {
            buttonAcc.forEach((accordOpen) =>
                accordOpen.classList.remove("opened")
            );
            buttonAcc.forEach((accordOpen) =>
                accordOpen.nextElementSibling.classList.remove("opened")
            );
        } else {
            buttonAcc.forEach((accordOpen) =>
                accordOpen.classList.remove("opened")
            );
            buttonAcc.forEach((accordOpen) =>
                accordOpen.nextElementSibling.classList.remove("opened")
            );
            accordOpen.classList.toggle("opened");
            accordOpen.nextElementSibling.classList.toggle("opened");
        }
    }
});

// contacts

const cityButton = document.querySelector(".btn-city");
const cityCard = document.querySelectorAll(".cardCity");
const cityMenu = document.querySelectorAll(".selectItem");
const arMenu = Array.from(cityMenu);
const arCard = Array.from(cityCard);

cityButton.addEventListener("click", openContactList);

function openContactList(event) {
    event.preventDefault();

    if (cityButton.classList.contains("active")) {
        cityButton.nextElementSibling.classList.remove("passive");
        cityButton.nextElementSibling.classList.toggle("active");
        cityButton.classList.remove("passive");
        cityButton.classList.remove("active");
    } else {
        cityButton.nextElementSibling.classList.toggle("active");
        cityButton.classList.toggle("active");
    }
}

arMenu.forEach((cityMenu) => {
    cityMenu.addEventListener("click", openCityCard);

    function openCityCard(event) {
        event.preventDefault();

        if (cityMenu.classList.contains("active")) {
            cityMenu.nextElementSibling.classList.remove("active");
            arMenu.forEach((cityMenu) => cityMenu.classList.remove("passive"));
            cityButton.nextElementSibling.classList.remove("passive");
            cityButton.classList.remove("passive");
            cityButton.classList.toggle("active");
            cityMenu.classList.remove("passive");
            cityMenu.classList.toggle("active");
        } else {
            cityMenu.nextElementSibling.classList.toggle("active");
            arMenu.forEach((cityMenu) => cityMenu.classList.toggle("passive"));
            cityButton.nextElementSibling.classList.toggle("passive");
            cityButton.classList.toggle("passive");
            cityMenu.classList.remove("passive");
            cityMenu.classList.toggle("top");
        }
    }
});

// blur

const butGlp = document.querySelectorAll(".buttglp");
const cardGlp = document.querySelectorAll(".service_item");
const cGlp = Array.from(cardGlp);

butGlp[0].addEventListener("click", butGardens);

function butGardens(event) {
    event.preventDefault();

    if (
        butGlp[1].classList.contains("active") &&
        butGlp[2].classList.contains("active")
    ) {
    } else {
        if (
            !butGlp[1].classList.contains("active") &&
            !butGlp[2].classList.contains("active")
        ) {
            if (butGlp[0].classList.contains("active")) {
                cGlp.forEach((cardGlp) => cardGlp.classList.toggle("blur"));
                butGlp[0].classList.remove("active");
                cardGlp[0].classList.toggle("no-blur");
                cardGlp[4].classList.toggle("no-blur");
                cardGlp[0].classList.remove("blur");
                cardGlp[4].classList.remove("blur");
            } else {
                cGlp.forEach((cardGlp) => cardGlp.classList.toggle("blur"));
                butGlp[0].classList.toggle("active");
                cardGlp[0].classList.toggle("no-blur");
                cardGlp[4].classList.toggle("no-blur");
                cardGlp[0].classList.remove("blur");
                cardGlp[4].classList.remove("blur");
            }
        } else {
            if (
                cardGlp[0].classList.contains("blur") &&
                cardGlp[4].classList.contains("blur")
            ) {
                butGlp[0].classList.toggle("active");
                cardGlp[0].classList.remove("blur");
                cardGlp[4].classList.remove("blur");
                cardGlp[0].classList.toggle("no-blur");
                cardGlp[4].classList.toggle("no-blur");
            } else {
                butGlp[0].classList.remove("active");
                cardGlp[0].classList.remove("no-blur");
                cardGlp[4].classList.remove("no-blur");
                cardGlp[0].classList.toggle("blur");
                cardGlp[4].classList.toggle("blur");
            }
        }
    }
}

butGlp[1].addEventListener("click", butLawn);

function butLawn(event) {
    event.preventDefault();

    if (
        butGlp[0].classList.contains("active") &&
        butGlp[2].classList.contains("active")
    ) {
    } else {
        if (
            !butGlp[0].classList.contains("active") &&
            !butGlp[2].classList.contains("active")
        ) {
            if (butGlp[1].classList.contains("active")) {
                cGlp.forEach((cardGlp) => cardGlp.classList.toggle("blur"));
                butGlp[1].classList.remove("active");
                cardGlp[2].classList.toggle("no-blur");
                cardGlp[2].classList.remove("blur");
            } else {
                cGlp.forEach((cardGlp) => cardGlp.classList.toggle("blur"));
                butGlp[1].classList.toggle("active");
                cardGlp[2].classList.toggle("no-blur");
                cardGlp[2].classList.remove("blur");
            }
        } else {
            if (cardGlp[2].classList.contains("blur")) {
                butGlp[1].classList.toggle("active");
                cardGlp[2].classList.remove("blur");
                cardGlp[2].classList.toggle("no-blur");
            } else {
                butGlp[1].classList.remove("active");
                cardGlp[2].classList.remove("no-blur");
                cardGlp[2].classList.toggle("blur");
            }
        }
    }
}

butGlp[2].addEventListener("click", butPlanting);

function butPlanting(event) {
    event.preventDefault();

    if (
        butGlp[0].classList.contains("active") &&
        butGlp[1].classList.contains("active")
    ) {
    } else {
        if (
            !butGlp[0].classList.contains("active") &&
            !butGlp[1].classList.contains("active")
        ) {
            if (butGlp[1].classList.contains("active")) {
                cGlp.forEach((cardGlp) => cardGlp.classList.toggle("blur"));
                butGlp[2].classList.remove("active");
                cardGlp[1].classList.toggle("no-blur");
                cardGlp[3].classList.toggle("no-blur");
                cardGlp[5].classList.toggle("no-blur");
                cardGlp[1].classList.remove("blur");
                cardGlp[3].classList.remove("blur");
                cardGlp[5].classList.remove("blur");
            } else {
                cGlp.forEach((cardGlp) => cardGlp.classList.toggle("blur"));
                butGlp[2].classList.toggle("active");
                cardGlp[1].classList.toggle("no-blur");
                cardGlp[3].classList.toggle("no-blur");
                cardGlp[5].classList.toggle("no-blur");
                cardGlp[1].classList.remove("blur");
                cardGlp[3].classList.remove("blur");
                cardGlp[5].classList.remove("blur");
            }
        } else {
            if (
                cardGlp[1].classList.contains("blur") &&
                cardGlp[3].classList.contains("blur") &&
                cardGlp[5].classList.contains("blur")
            ) {
                butGlp[2].classList.toggle("active");
                cardGlp[1].classList.remove("blur");
                cardGlp[3].classList.remove("blur");
                cardGlp[5].classList.remove("blur");

                cardGlp[1].classList.toggle("no-blur");
                cardGlp[3].classList.toggle("no-blur");
                cardGlp[5].classList.toggle("no-blur");
            } else {
                butGlp[2].classList.remove("active");
                cardGlp[1].classList.remove("no-blur");
                cardGlp[3].classList.remove("no-blur");
                cardGlp[5].classList.remove("no-blur");

                cardGlp[1].classList.toggle("blur");
                cardGlp[3].classList.toggle("blur");
                cardGlp[5].classList.toggle("blur");
            }
        }
    }
}
