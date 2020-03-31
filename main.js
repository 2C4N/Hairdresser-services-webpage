var menuElements = ["Strona Główna", "Oferta", "Galeria", "Opinie", "Kontakt"];
var menuLinks = [
  "index.html",
  "oferta.html",
  "galeria.html",
  "opinie.html",
  "kontakt.html"
];
var priceName = [
  "Oferta | Włosy",
  "Strzyżenie damskie",
  "Strzyżenie męskie",
  "Modelowanie",
  "Koloryzacja",
  "Trwała",
  "Prostowanie keratynowe",
  "Mycie głowy"
];
var pricePrice = [
  "kr | śr | dł",
  "65zł | 70zł | 75zł",
  "20zł | 25zł | 30zł",
  "50zł | 55zł | 65zł",
  "170zł | 180zł | 220zł",
  "150zł | 170zł | 190zł",
  "360zł | 460zł | 560zł",
  "5zł | 10zł | 15zł"
];

function changePage(page) {
  window.location.href = menuLinks[page];
}

function menuGenerator() {
  var row = document.createElement("tr");
  for (i = 0; i < menuElements.length; i++) {
    var element = document.createElement("td");
    var text = document.createTextNode(menuElements[i]);
    element.id = i;
    element.onclick = function() {
      changePage(this.id);
    };

    element.appendChild(text);
    row.appendChild(element);
    document.getElementById("menu").appendChild(row);
  }
}

function stars(focusID, stars) {
  var div = document.createElement("div");
  div.className = "stars";
  for (i = 1; i <= 5; i++) {
    var star = document.createElement("ion-icon");
    star.name = "star";
    star.id = i;
    star.style.marginRight = "4px";

    if (star.id > stars) {
      star.style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--secondary-color");
    }

    div.appendChild(star);
    document.getElementById(focusID).appendChild(div);
  }
}

function priceGenerator() {
  for (i = 0; i < priceName.length; i++) {
    var row = document.createElement("tr");
    var name = document.createElement("td");
    var price = document.createElement("td");
    var nameText = document.createTextNode(priceName[i]);
    var priceText = document.createTextNode(pricePrice[i]);
    name.appendChild(nameText);
    price.appendChild(priceText);
    row.appendChild(name);
    row.appendChild(price);
    if (i == 0) {
      name.style.fontWeight = "bold";
      price.style.fontWeight = "bold";
    }
    name.style.width = "65%";
    name.style.textIndent = "20%";
    name.className = "priceText";
    price.style.width = "35%";
    price.style.textAlign = "center";
    row.style.width = "100%";
    row.style.height = "35px";
    document.getElementById("prices").appendChild(row);
  }
}
