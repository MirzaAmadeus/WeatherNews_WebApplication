const key = "35c50dab98a94ac7949134705231109";
var api_url = "https://api.weatherapi.com/v1/current.json?";
var Thunder = new Audio('ThunderStormSound.mp3');
var Rain = new Audio('RainSound.mp3');

// So to get current weather for London: 
// JSON: http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London


const searchButton = document.getElementById('btn');

searchButton.addEventListener("click", function(){
    const inputData = document.getElementById('Ip');
    const cityName = inputData.value;   
    if(cityName===""){
        alert('write city Name first');
    }
    else{
        // console.log(cityName);
        var result = api_url + "key=" + key + "&q=" + cityName;
        // console.log(result);
        checkWeather(result);
        inputData.value = '';
    }
});

async function checkWeather(result){
    // console.log(result)
    const response = await fetch(result);
    // console.log(response);
    const jsonOutput = await response.json();
    var count = Object.keys(jsonOutput).length;
    console.log(jsonOutput);
    // console.log(count);
    // console.log(jsonOutput.error.code);
    if(count== 1){
        alert('No matching location found. Enter city name again.');
    }
    else{
        document.getElementById('IconWeather').src = `https:` + jsonOutput.current.condition.icon;
        document.getElementById('temp').innerHTML = jsonOutput.current.temp_c + "℃";
        document.getElementById('cityName').innerHTML = jsonOutput.location.name;
        document.getElementById('humidityPrecentage').innerHTML = jsonOutput.current.humidity + "%";
        document.getElementById('windSpeedLevel').innerHTML = jsonOutput.current.wind_kph + " km/h";
        document.getElementById('wT').innerHTML = "Condition: " + jsonOutput.current.condition.text;
    }
    const videoBg = document.getElementById('video');
    const c = jsonOutput.current.condition.text;
    if(c === "Light rain" || c==="Moderate rain" || c==="Heavy rain"){
        videoBg.src = "./RainVideo.mp4";
        Rain.play();
    }
    else if(c==="Thunderstorm"){
        videoBg.src = "./ThunderStorm.mp4";
        Thunder.play();
    }
    else{
        videoBg.src = "./vecteezy_clouds-cartoon-moving-animated-background-4k_10887770_232.mp4";
    }
    
}


