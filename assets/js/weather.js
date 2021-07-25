var windSpeedEl = document.querySelector("#wind-speed");
var humidityEl = document.querySelector("#humidity");
var uvIndexEl = document.querySelector("#uv-index");
var cityEl = document.querySelector("#city-date");
var weatherContainerEl = document.querySelector("#weather-container");
var searchButton = document.getElementById("srchButton");
var cityInput = document.getElementById("search-container");
var cityHistory = document.getElementById("search-history");
var apiKey = "fac3e98026caf2998020a1a4238bc7fb";

// listener for search button to record user input
searchButton.addEventListener("click", getUserInput, insertWeather);

// function to store the value of the user input
function getUserInput() {
  var userInput = document.getElementById("input").value;
  console.log(userInput);
}

function insertWeather(event) {
  event.preventDefault();
  var citySearch = document.createElement("li");
  citySearch.textContent = cityInput.value;
  cityHistory.appendChild(citySearch);
    
}

// find a way to plug user input into web api to return specified information

// function to get forecast info from weather api
var getWeatherForecast = function (api) {
  console.log(api);
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=" +
    apiKey;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // temperature
      let temperatureDiv = document.createElement("div");
      // create text node
      let divElementText = document.createTextNode(
        data.main.temp
      );
      // append text node to div
        temperatureDiv.appendChild(divElementText);
      weatherContainerEl.appendChild(temperatureDiv)

      // add data sets for weather forecast here...

      // humidity
      let humidityDiv = document.createElement("div");
      let divhumidityText = document.createTextNode(
        data.main.humidity  
      );
      humidityDiv.appendChild(divhumidityText);
      humidityEl.appendChild(humidityDiv)

      // wind-speed
      let windSpeedDiv = document.createElement("div");
      let divWindSpeedText = document.createTextNode(
        data.wind.speed  
      );
      windSpeedDiv.appendChild(divWindSpeedText);
      windSpeedEl.appendChild(windSpeedDiv)

      // uv index
      let uvIndexDiv = document.createElement("div");
      let divUvIndexText = document.createTextNode(
        data.main.uv
      );
      uvIndexDiv.appendChild(divUvIndexText);
      uvIndexEl.appendChild(uvIndexDiv)

      // city/date
      let cityDiv = document.createElement("div");
      let divCityText = document.createTextNode(
        data.name
      );
      cityDiv.appendChild(divCityText);
      cityEl.appendChild(cityDiv)


    });
};

document.getElementById("srchButton").addEventListener("click", function () {
  document.getElementById("card-deck").innerHTML = "weather goes here";
});



getWeatherForecast("weather");










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