async function getWeatherData(city) {
            const apiKey = '341fe27a4792a42c3982b0f1b73007b8';
            const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                return {
                    city: data.name,
                    temperature: data.main.temp,
                    humidity: data.main.humidity,
                    conditions: data.weather[0].main,
                };
            } catch (error) {
                console.error('Error fetching weather data:', error);
                throw error;
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

        function updateDashboard(weatherData) {
            const weatherInfoElement = document.getElementById('weather-info');
            weatherInfoElement.innerHTML = `
                <h2>Weather Details for ${weatherData.city}</h2>
                <p>Temperature: ${weatherData.temperature}°C</p>
                <p>Humidity: ${weatherData.humidity}%</p>
                <p>Conditions: ${weatherData.conditions} ${getWeatherEmoji(weatherData.conditions)}</p>
            `;
        }

        async function startMonitoring(city) {
            try {
                const weatherData = await getWeatherData(city);
                updateDashboard(weatherData);
            } catch (error) {
                console.error('Monitoring stopped due to error:', error);
            }
        }

        const weatherForm = document.getElementById('weather-form');
        weatherForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const cityInput = document.getElementById('city');
            const city = cityInput.value;
            startMonitoring(city);
            cityInput.value = ''; // Clear the input field
        });