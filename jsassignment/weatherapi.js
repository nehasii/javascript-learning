async function getWeatherData(city){

            try{
                const weather_info = document.getElementById("weather-info")
                let city = document.getElementById("city").value;
                let weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=341fe27a4792a42c3982b0f1b73007b8`);
                let data = await weather.json();
                    weather_info.innerHTML = 
                    `
                    <h3>Weather details for ${city} </h3>
                    <p>Temperature: ${data.main.temp}°C </p>
                    <p>Humidity: ${data.main.humidity}</p>
                    <p>Conditions: ${data.weather[0].main}${getWeatherEmoji(data.weather[0].main)} </p>
                    `;
                  
            }
            catch(err){
                console.log(err);
            }
}
function getWeatherEmoji(condition) {
    const emojiMap = {
        'Clear': '☀️',
        'Clouds': '☁️',
        'Rain': '🌧️',
        'Snow': '❄️',
    };
    return emojiMap[condition] || '';
}
