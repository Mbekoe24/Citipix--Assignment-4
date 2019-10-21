function setDefaultBackgroundImage() {
  document.querySelector("body").style.backgroundImage =
    "url(images/citipix_skyline.jpg)";
}

function clearBackgroundImage() {
  backgroundImage().querySelector("body").style.backgroundImage = "none";
}

function selectCities() {
  return document.querySelector("#cities");
}

function setNycBackground() {
  document.querySelector("body").style.backgroundImage = "url(images/nyc.jpg)";
}

function setAustinBackground() {
  document.querySelector("body").style.backgroundImage =
    "url(images/austin.jpg)";
}

function setLaBackground() {
  document.querySelector("body").style.backgroundImage = "url(images/la.jpg)";
}

function setSfBackground() {
  document.querySelector("body").style.backgroundImage = "url(images/sf.jpg)";
}

function setSydneyBackground() {
  document.querySelector("body").style.backgroundImage =
    "url(images/sydney.jpg)";
}
