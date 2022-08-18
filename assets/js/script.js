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

var eventListEl = $("#event-list");

function showEvents() {
  fetch(ticketMaster)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < 5; i++) {
        eventListEl.append("<li>" + data + "</li>");
        eventListEl.addClass("event-list");
      }
    });
}

showEvents();

var eventFormEl = $('#event-form');
var eventListEl = $('#event-list');

function handleFormSubmit(event) {
  event.preventDefault();

  var eventItem = $('input[name="event-input"]').val();

  if (!eventItem) {
    console.log('No past event filled out in form!');
    return;
  }

  eventListEl.append('<li>' + eventItem + '</li>');

  $('input[name="event-input"]').val('');
}

eventFormEl.on('submit', handleFormSubmit);
