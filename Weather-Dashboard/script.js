// variable declarations

var city = "";
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemp = $("#temperature");
var currentHumidty = $("#humidity");
var currentWSpeed = $("#wind-speed");
var currentUvindex = $("#uv-index");
var searchedCity = [];

// this function searches for the city to see if it exists in local storage
function find(c) {
    for (var i = 0; i < searchedCity.length; i++) {
        if (c.toUpperCase() === searchedCity[i]) {
            return -1;
        }
    }
    return 1;
}
// API key
var APIKey = "cb24d3f29d7ddcca56780c08d9596844";

// Display the curent and future weather after gathering data from input box from user
function findWeather(event) {
    event.preventDefault();
    if (searchCity.val().trim() !== "") {
        city = searchCity.val().trim();
        currentWeather(city);
    }
}
// fucntion for AJAX call
function currentWeather(city) {
    // This is the the URL so we can gather data from openweather servers.
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {

        // parse the response to display the current weather including the City name. the Date and the weather icon. 
        console.log(response);
        //Dta object from server side Api for icon property.
        var weathericon = response.weather[0].icon;
        var iconurl = "https://openweathermap.org/img/wn/" + weathericon + "@2x.png";
        // The date format is  from :  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
        var date = new Date(response.dt * 1000).toLocaleDateString();

        //parse the response for name of city and concanatig the date and icon.

        $(currentCity).html(response.name + "(" + date + ")" + "<img src=" + iconurl + ">");

        // parse the response to display the current temperature.

        // Convert the temp to fahrenheit for american users

        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(currentTemp).html((tempF).toFixed(2) + "&#8457");
        // Display the Humidity percentage from API
        $(currentHumidty).html(response.main.humidity + "%");
        //Display Wind speed and conversion to MPH for US citizens
        var ws = response.wind.speed;
        var windSpeedinMPH = (ws * 2.237).toFixed(1);
        $(currentWSpeed).html(windSpeedinMPH + "MPH");
        // Display UVIndex.
        //By using lat/long coordinates and appid as  parameters we are able to gather our uvindex query inside the function below.
        UVIndex(response.coord.lon, response.coord.lat);
        forecast(response.id);
        if (response.cod == 200) {
            searchedCity = JSON.parse(localStorage.getItem("cityname"));
            console.log(searchedCity);
            if (searchedCity == null) {
                searchedCity = [];
                searchedCity.push(city.toUpperCase());
                localStorage.setItem("cityname", JSON.stringify(searchedCity));
                addToList(city);
            } else {
                if (find(city) > 0) {
                    searchedCity.push(city.toUpperCase());
                    localStorage.setItem("cityname", JSON.stringify(searchedCity));
                    addToList(city);
                }
            }
        }

    });
}
// UVIindex function call
function UVIndex(ln, lt) {
    //ajax, URL for UV index search within API
    var uvqURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lt + "&lon=" + ln;
    $.ajax({
        url: uvqURL,
        method: "GET"
    }).then(function (response) {
        $(currentUvindex).html(response.value);
    });
}

// Function for 5 days forecast for user's searched city.
function forecast(cityid) {
    var dayover = false;
    var queryforcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityid + "&appid=" + APIKey;
    $.ajax({
        url: queryforcastURL,
        method: "GET"
    }).then(function (response) {

        for (i = 0; i < 5; i++) {
            var date = new Date((response.list[((i + 1) * 8) - 1].dt) * 1000).toLocaleDateString();
            var weatherIcon = response.list[((i + 1) * 8) - 1].weather[0].icon;
            var iconurl = "https://openweathermap.org/img/wn/" + weatherIcon + ".png";
            var tempK = response.list[((i + 1) * 8) - 1].main.temp;
            var tempF = (((tempK - 273.5) * 1.80) + 32).toFixed(2);
            var humidity = response.list[((i + 1) * 8) - 1].main.humidity;

            $("#futureDate" + i).html(date);
            $("#futureImg" + i).html("<img src=" + iconurl + ">");
            $("#futureTemp" + i).html(tempF + "&#8457");
            $("#futureHumidity" + i).html(humidity + "%");
        }

    });
}

//adds previous city to search list on left of screen
function addToList(c) {
    var listEl = $("<li>" + c.toUpperCase() + "</li>");
    $(listEl).attr("class", "list-group-item");
    $(listEl).attr("data-value", c.toUpperCase());
    $(".list-group").append(listEl);
}

// recall the past search and repopulate container with previous information on said city
function previousSearch(event) {
    var liEl = event.target;
    if (event.target.matches("li")) {
        city = liEl.textContent.trim();
        currentWeather(city);
    }

}

// render function
function populateprevCity() {
    $("ul").empty();
    var searchedCity = JSON.parse(localStorage.getItem("cityname"));
    if (searchedCity !== null) {
        searchedCity = JSON.parse(localStorage.getItem("cityname"));
        for (i = 0; i < searchedCity.length; i++) {
            addToList(searchedCity[i]);
        }
        city = searchedCity[i - 1];
        currentWeather(city);
    }

}
//Clears the search history 
function clearHistory(event) {
    event.preventDefault();
    searchedCity = [];
    localStorage.removeItem("cityname");
    document.location.reload();

}

//on click events
$("#search-button").on("click", findWeather);
$(document).on("click", previousSearch);
$(window).on("load", populateprevCity);
$("#clear-history").on("click", clearHistory);