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

var ticketMaster =
  "https://app.ticketmaster.com/discovery/v2/events.json?apikey=2ZnLURLhJnROlKrIvG58yKLMz8NsOCxF";

function showEvents() {
  fetch(ticketMaster)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
showEvents();

var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  shoppingListEl.append('<li>' + shoppingItem + '</li>');

  $('input[name="shopping-input"]').val('');
}

shoppingFormEl.on('submit', handleFormSubmit);
