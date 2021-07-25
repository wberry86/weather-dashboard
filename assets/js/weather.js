var searchButton = document.getElementById("srchButton");
var cityContainerEl = document.querySelector("#city-container");
var fiveContainerEl = document.querySelector("#five-container");
var citySearchTerm = document.querySelector("#city-search-term");

var apiKey = "fac3e98026caf2998020a1a4238bc7fb";

var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#cityname");

// function to use city serch feature to plug city name into api call
var formSubmitHandler = function (event) {
  event.preventDefault();
  // get value from input element
  var cityName = nameInputEl.value.trim();

  if (cityName) {
    getCityStats(cityName);
    nameInputEl.value = "";
  } else {
    alert("Please enter a City");
  }
  console.log(event);
};
userFormEl.addEventListener("submit", formSubmitHandler);

var getCityStats = function (city) {
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=" +
    apiKey;
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayInfo(data, city);
        
      });
    } else {
      alert("Error: City Not Found");
    }
  })
  .catch(function(error) {
    alert("Unable to connect to OpenWeather");
  });
};

var displayInfo = function (stats, searchTerm) {
  // clear old content
  cityContainerEl.textContent = "";
  citySearchTerm.textContent = searchTerm;

   // create a container for each repo
   var day = document.createElement("div");
   day.classList = "list-item flex-row justify-space-between align-center";
 
   day.textContent = JSON.stringify(stats.city);

   // append container to the dom
   cityContainerEl.appendChild(day);

  for (var i = 0; i < 5; i++) {
    
    // create a span element to hold repository name
    var five = document.createElement("div");
    five.classList = "list-item flex-row justify-space-between align-center";
    five.textContent = JSON.stringify(stats.list[i].main);
    // append to container
    fiveContainerEl.appendChild(five);
  
  }
  console.log(stats);
  console.log(searchTerm);
  
};

// var windSpeedEl = document.querySelector("#wind-speed");
// var humidityEl = document.querySelector("#humidity");
// var uvIndexEl = document.querySelector("#uv-index");
// var cityEl = document.querySelector("#city-date");
// var weatherContainerEl = document.querySelector
// var cityHistory = document.getElementById("search-history");("#weather-container");
// var cityInput = document.getElementById("search-container");

// function insertWeather(event) {
//   event.preventDefault();
//   var citySearch = document.createElement("li");
//   citySearch.textContent = cityInput.value;
//   cityHistory.appendChild(citySearch);
// }

// // listener for search button to record user input
// searchButton.addEventListener("click", getUserInput, insertWeather);

// // function to store the value of the user input
// function getUserInput() {
//   var userInput = document.getElementById("input").value;
//   console.log(userInput);
// }

// find a way to plug user input into web api to return specified information

// function to get forecast info from weather api
// var getWeatherForecast = function (api) {
//   console.log(api);
//   var apiUrl =
//     "https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=" +
//     apiKey;

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       // temperature
//       let temperatureDiv = document.createElement("div");
//       // create text node
//       let divElementText = document.createTextNode(data.main.temp);
//       // append text node to div
//       temperatureDiv.appendChild(divElementText);
//       weatherContainerEl.appendChild(temperatureDiv);

//       // add data sets for weather forecast here...

//       // humidity
//       let humidityDiv = document.createElement("div");
//       let divhumidityText = document.createTextNode(data.main.humidity);
//       humidityDiv.appendChild(divhumidityText);
//       humidityEl.appendChild(humidityDiv);

//       // wind-speed
//       let windSpeedDiv = document.createElement("div");
//       let divWindSpeedText = document.createTextNode(data.wind.speed);
//       windSpeedDiv.appendChild(divWindSpeedText);
//       windSpeedEl.appendChild(windSpeedDiv);

//       // uv index
//       let uvIndexDiv = document.createElement("div");
//       let divUvIndexText = document.createTextNode(data.main.uv);
//       uvIndexDiv.appendChild(divUvIndexText);
//       uvIndexEl.appendChild(uvIndexDiv);

//       // city/date
//       let cityDiv = document.createElement("div");
//       let divCityText = document.createTextNode(data.name);
//       cityDiv.appendChild(divCityText);
//       cityEl.appendChild(cityDiv);
//     });
// };

// document.getElementById("srchButton").addEventListener("click", function () {
//   document.getElementById("card-deck").innerHTML = "weather goes here";
// });

// getWeatherForecast("weather");

/*
// create div element
let divElement = document.createElement("div");
// create text node
let divElementText = document.createTextNode("Dynamically created div element");
// append text node to div
divElement.appendChild(divElementText);
let weatherCard = document.getElementById("weather-container");
weatherCard.appendChild(divElement);
*/
