var showBreweryBtn = document.getElementById("showBreweryBtn");
var breweryName = document.getElementById("breweryName");
var webSpan = document.getElementById("breweryWeb");
var webLink = document.getElementById("breweryLink");
var phoneSpan = document.getElementById("breweryPhone");

showBreweryBtn.addEventListener("click", showBrewery);

var breweriesDenver =
  "https://api.openbrewerydb.org/breweries?by_city=Denver&per_page=50";

function showBrewery() {
  fetch(breweriesDenver)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      rand = Math.floor(Math.random() * data.length);
      breweryName.textContent = data[rand].name;
      webSpan.textContent = data[rand].website_url;
      webLink.href = data[rand].website_url;
      phoneSpan.textContent = data[rand].phone;
      if (data[rand].website_url === null) {
        webSpan.textContent = "website not available";
      }
      if (data[rand].phone === null) {
        phoneSpan.textContent = "phone not available";
      }
    });
}
