var navHeader = document.querySelector(".page-header");
var navButton = document.querySelector(".page-header__button");

navHeader.classList.remove("page-header--nojs");
navButton.addEventListener("click", function () {
  if (navHeader.classList.contains("page-header--closed")) {
      navHeader.classList.remove("page-header--closed");
      navHeader.classList.add("page-header--opened");
    } else {
      navHeader.classList.add("page-header--opened");
      navHeader.classList.remove("page-header--opened");
      navHeader.classList.add("page-header--closed");
    }
  });

  const mapIframe = document.getElementsByClassName("information__img-iframe")[0]
  mapIframe?.classList?.remove("information__img-iframe--nojs")

  const mapPicture = document.getElementsByClassName("information__img-card")[0]
  mapPicture?.classList?.remove("information__img-card--nojs")
  mapPicture?.classList?.add("information__img-card--hidden");

