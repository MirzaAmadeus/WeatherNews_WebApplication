const api_key = "35c50dab98a94ac7949134705231109";
var api_url = "https://api.weatherapi.com/v1/current.json?";
// var api_url = https://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=<LOCATION_NAME>;
// var search_url = "https://api.weatherapi.com/v1/search.json?";
// var location = "Saharanpur";
// console.log(b)

// function area_Name() {
//     var l_area = document.getElementById("input_text")
//     console.log(l_area.value)
// }

const city = document.getElementById("input-text");
const btn = document.getElementById("btn")
const icon = document.getElementById("weather-icon")
// console.log(city)

async function checkWeather(location_name){
    const response = await fetch(api_url + `key=${api_key}` + `&q=${location_name}`);
    const result = await response.json();
    console.log(result)
    console.log(result.current.temp_c)
    console.log(result.current.wind_kph)
    console.log(result.location.name)
    console.log(result.current.humidity)
    console.log(result.current.condition.text)
    console.log(result.location.localtime)

    document.getElementById("temp").innerHTML = Math.round(result.current.temp_c) + "℃"
    document.getElementById("city").innerHTML = result.location.name
    document.getElementById("humidity").innerHTML = result.current.humidity + "%"
    document.getElementById("wind-speed").innerHTML = result.current.wind_kph + "km/h"
    document.getElementById("weather-type").innerHTML = result.current.condition.text
    // document.getElementById("local_time").innerHTML = result.location.localtime
    icon.src = `https:` + result.current.condition.icon
}

// checkWeather();
btn.addEventListener("click", ()=>{
    // console.log(city.value)
    checkWeather(city.value)
})