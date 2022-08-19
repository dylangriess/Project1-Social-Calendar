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
  "https://app.ticketmaster.com/discovery/v2/events.json?apikey=2ZnLURLhJnROlKrIvG58yKLMz8NsOCxF&city=Denver&classificationName=Concert&sort=date,asc";

var eventListEl = $("#event-list");

function showEvents() {
  fetch(ticketMaster)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i <= 5; i++) {
        eventListEl.append(
          "<li>" +
            data._embedded.events[i].name +
            " | " +
            data._embedded.events[i]._embedded.venues[0].name +
            " | " +
            data._embedded.events[i].dates.start.localDate +
            "</li>"
        );
        eventListEl.addClass("event-list");
      }
    });
}

showEvents();

var eventFormEl = $("#event-form");
var pastEventListEl = $("#past-event-list");

var allItems = JSON.parse(window.localStorage.getItem("eventItem")) || [];

function handleFormSubmit(event) {
  event.preventDefault();

  var eventItem = $('input[name="event-input"]').val();

  if (!eventItem) {
    console.log("No past event filled out in form!");
    return;
  }

  pastEventListEl.append("<li>" + eventItem + "</li>");

  $('input[name="event-input"]').val("");

  allItems.push(eventItem);

  localStorage.setItem("eventItem", JSON.stringify(allItems));
}

eventFormEl.on("submit", handleFormSubmit);

function displayEvents() {
  console.log(allItems);
  if (!allItems) {
    return;
  }
  for (i = 0; i < allItems.length; i++) {
    pastEventListEl.append("<li>" + allItems[i] + "</li>");
  }
}
displayEvents();

// <SUNDAY AM>
var sundayAMinput = document.getElementById("sunday-am");
var sundayAMsave = document.getElementById("sunday-am-save");
var sundayAMdisplay = document.getElementById("sunday-am-display");

sundayAMsave.addEventListener("click", saveSundayAM);
function saveSundayAM(event) {
  event.preventDefault();
  localStorage.setItem("sundayAM", sundayAMinput.value);
  sundayAMdisplay.textContent = localStorage.getItem("sundayAM");
}

function displaySundayAM() {
  sundayAMdisplay.textContent = localStorage.getItem("sundayAM");
}
displaySundayAM();
// </SUNDAY AM>

// <SUNDAY PM>
var sundayPMinput = document.getElementById("sunday-pm");
var sundayPMsave = document.getElementById("sunday-pm-save");
var sundayPMdisplay = document.getElementById("sunday-pm-display");

sundayPMsave.addEventListener("click", saveSundayPM);
function saveSundayPM(event) {
  event.preventDefault();
  localStorage.setItem("sundayPM", sundayPMinput.value);
  sundayPMdisplay.textContent = localStorage.getItem("sundayPM");
}

function displaySundayPM() {
  sundayPMdisplay.textContent = localStorage.getItem("sundayPM");
}
displaySundayPM();
// </SUNDAY PM>

// <MONDAY AM>
var mondayAMinput = document.getElementById("monday-am");
var mondayAMsave = document.getElementById("monday-am-save");
var mondayAMdisplay = document.getElementById("monday-am-display");

mondayAMsave.addEventListener("click", saveMondayAM);
function saveMondayAM(event) {
  event.preventDefault();
  localStorage.setItem("mondayAM", mondayAMinput.value);
  mondayAMdisplay.textContent = localStorage.getItem("mondayAM");
}

function displayMondayAM() {
  mondayAMdisplay.textContent = localStorage.getItem("mondayAM");
}
displayMondayAM();
// </MONDAY AM>

// <MONDAY PM>
var mondayPMinput = document.getElementById("monday-pm");
var mondayPMsave = document.getElementById("monday-pm-save");
var mondayPMdisplay = document.getElementById("monday-pm-display");

mondayPMsave.addEventListener("click", saveMondayPM);
function saveMondayPM(event) {
  event.preventDefault();
  localStorage.setItem("mondayPM", mondayPMinput.value);
  mondayPMdisplay.textContent = localStorage.getItem("mondayPM");
}

function displayMondayPM() {
  mondayPMdisplay.textContent = localStorage.getItem("mondayPM");
}
displayMondayPM();
// </MONDAY PM>

// <TUESDAY AM>
var tuesdayAMinput = document.getElementById("tuesday-am");
var tuesdayAMsave = document.getElementById("tuesday-am-save");
var tuesdayAMdisplay = document.getElementById("tuesday-am-display");

tuesdayAMsave.addEventListener("click", saveTuesdayAM);
function saveTuesdayAM(event) {
  event.preventDefault();
  localStorage.setItem("tuesdayAM", tuesdayAMinput.value);
  tuesdayAMdisplay.textContent = localStorage.getItem("tuesdayAM");
}

function displayTuesdayAM() {
  tuesdayAMdisplay.textContent = localStorage.getItem("tuesdayAM");
}
displayTuesdayAM();
// </TUESDAY AM>

// <TUESDAY PM>
var tuesdayPMinput = document.getElementById("tuesday-pm");
var tuesdayPMsave = document.getElementById("tuesday-pm-save");
var tuesdayPMdisplay = document.getElementById("tuesday-pm-display");

tuesdayPMsave.addEventListener("click", saveTuesdayPM);
function saveTuesdayPM(event) {
  event.preventDefault();
  localStorage.setItem("tuesdayPM", tuesdayPMinput.value);
  tuesdayPMdisplay.textContent = localStorage.getItem("tuesdayPM");
}

function displayTuesdayPM() {
  tuesdayPMdisplay.textContent = localStorage.getItem("tuesdayPM");
}
displayTuesdayPM();
// </TUESDAY PM>

// <WEDNESDAY AM>
var wednesdayAMinput = document.getElementById("wednesday-am");
var wednesdayAMsave = document.getElementById("wednesday-am-save");
var wednesdayAMdisplay = document.getElementById("wednesday-am-display");

wednesdayAMsave.addEventListener("click", saveWednesdayAM);
function saveWednesdayAM(event) {
  event.preventDefault();
  localStorage.setItem("wednesdayAM", wednesdayAMinput.value);
  wednesdayAMdisplay.textContent = localStorage.getItem("wednesdayAM");
}

function displayWednesdayAM() {
  wednesdayAMdisplay.textContent = localStorage.getItem("wednesdayAM");
}
displayWednesdayAM();
// </WEDNESDAY AM>

// <WEDNESDAY PM>
var wednesdayPMinput = document.getElementById("wednesday-pm");
var wednesdayPMsave = document.getElementById("wednesday-pm-save");
var wednesdayPMdisplay = document.getElementById("wednesday-pm-display");

wednesdayPMsave.addEventListener("click", saveWednesdayPM);
function saveWednesdayPM(event) {
  event.preventDefault();
  localStorage.setItem("wednesdayPM", wednesdayPMinput.value);
  wednesdayPMdisplay.textContent = localStorage.getItem("wednesdayPM");
}

function displayWednesdayPM() {
  wednesdayPMdisplay.textContent = localStorage.getItem("wednesdayPM");
}
displayWednesdayPM();
// </WEDNESDAY PM>

// <THURSDAY AM>
var thursdayAMinput = document.getElementById("thursday-am");
var thursdayAMsave = document.getElementById("thursday-am-save");
var thursdayAMdisplay = document.getElementById("thursday-am-display");

thursdayAMsave.addEventListener("click", saveThursdayAM);
function saveThursdayAM(event) {
  event.preventDefault();
  localStorage.setItem("thursdayAM", thursdayAMinput.value);
  thursdayAMdisplay.textContent = localStorage.getItem("thursdayAM");
}

function displayThursdayAM() {
  thursdayAMdisplay.textContent = localStorage.getItem("thursdayAM");
}
displayThursdayAM();
// </THURSDAY AM>

// <THURSDAY PM>
var thursdayPMinput = document.getElementById("thursday-pm");
var thursdayPMsave = document.getElementById("thursday-pm-save");
var thursdayPMdisplay = document.getElementById("thursday-pm-display");

thursdayPMsave.addEventListener("click", saveThursdayPM);
function saveThursdayPM(event) {
  event.preventDefault();
  localStorage.setItem("thursdayPM", thursdayPMinput.value);
  thursdayPMdisplay.textContent = localStorage.getItem("thursdayPM");
}

function displayThursdayPM() {
  thursdayPMdisplay.textContent = localStorage.getItem("thursdayPM");
}
displayThursdayPM();
// </THURSDAY PM>

// <FRIDAY AM>
var fridayAMinput = document.getElementById("friday-am");
var fridayAMsave = document.getElementById("friday-am-save");
var fridayAMdisplay = document.getElementById("friday-am-display");

fridayAMsave.addEventListener("click", saveFridayAM);
function saveFridayAM(event) {
  event.preventDefault();
  localStorage.setItem("fridayAM", fridayAMinput.value);
  fridayAMdisplay.textContent = localStorage.getItem("fridayAM");
}

function displayFridayAM() {
  fridayAMdisplay.textContent = localStorage.getItem("fridayAM");
}
displayFridayAM();
// </FRIDAY AM>

// <FRIDAY PM>
var fridayPMinput = document.getElementById("friday-pm");
var fridayPMsave = document.getElementById("friday-pm-save");
var fridayPMdisplay = document.getElementById("friday-pm-display");

fridayPMsave.addEventListener("click", saveFridayPM);
function saveFridayPM(event) {
  event.preventDefault();
  localStorage.setItem("fridayPM", fridayPMinput.value);
  fridayPMdisplay.textContent = localStorage.getItem("fridayPM");
}

function displayFridayPM() {
  fridayPMdisplay.textContent = localStorage.getItem("fridayPM");
}
displayFridayPM();
// </FRIDAY PM>

// <SATURDAY AM>
var saturdayAMinput = document.getElementById("saturday-am");
var saturdayAMsave = document.getElementById("saturday-am-save");
var saturdayAMdisplay = document.getElementById("saturday-am-display");

saturdayAMsave.addEventListener("click", saveSaturdayAM);
function saveSaturdayAM(event) {
  event.preventDefault();
  localStorage.setItem("saturdayAM", saturdayAMinput.value);
  saturdayAMdisplay.textContent = localStorage.getItem("saturdayAM");
}

function displaySaturdayAM() {
  saturdayAMdisplay.textContent = localStorage.getItem("saturdayAM");
}
displaySaturdayAM();
// </SATURDAY AM>

// <SATURDAY PM>
var saturdayPMinput = document.getElementById("saturday-pm");
var saturdayPMsave = document.getElementById("saturday-pm-save");
var saturdayPMdisplay = document.getElementById("saturday-pm-display");

saturdayPMsave.addEventListener("click", saveSaturdayPM);
function saveSaturdayPM(event) {
  event.preventDefault();
  localStorage.setItem("saturdayPM", saturdayPMinput.value);
  saturdayPMdisplay.textContent = localStorage.getItem("saturdayPM");
}

function displaySaturdayPM() {
  saturdayPMdisplay.textContent = localStorage.getItem("saturdayPM");
}
displaySaturdayPM();
// </SATURDAY PM>
