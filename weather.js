var weatherContainerEl = document.querySelector("#weather-container");
var searchButton = document.getElementById("srchButton");

searchButton.addEventListener("click", getUserInput, false);

function getUserInput() {
    var userInput = document.getElementById("input").value;
    console.log(userInput);
}

var getWeather = function (api) {
  console.log(api);
  var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=fac3e98026caf2998020a1a4238bc7fb";

  fetch(apiUrl)
  .then(response => response.json()) 
  .then(data => {
      console.log(data.list);
    weatherContainerEl.toString();
    weatherContainerEl.textContent = data.list[0].main.temp;
    
})};

var displayWeather = function (weather) {
  for (var i = 0; i < weather.length; i++) {
    // create a link element to take users to the issue on github
    var weatherEl = document.createElement("a");
    weatherEl.classList =
      "list-item flex-row justify-space-between align-center";
    weatherEl.setAttribute("href", weather[i].html_url);
    weatherEl.setAttribute("target", "_blank");

    // create span to hold issue title
    var titleEl = document.createElement("span");
    titleEl.textContent = weather[i].title;

    // append to container
    weatherEl.appendChild(titleEl);

    // create a type element
    var typeEl = document.createElement("span");

    // check if issue is an actual issue or a pull request
    if (weather[i].pull_request) {
      typeEl.textContent = "(Pull request)";
    } else {
      typeEl.textContent = "(Issue)";
    }

    // append to container
    weatherEl.appendChild(typeEl);
    weatherContainerEl.appendChild(weatherEl);
  }
};

getWeather("weather");
