function getWeather() {
    const cityInput = document.getElementById('city-input').value;
    const apiKey = '89db17af70f8455684a241cee95626aa';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found!');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('weather-info').textContent = 'City not found!';
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    weatherInfo.innerHTML = `<p>City: ${cityName}</p>
                             <p>Temperature: ${temperature}°C</p>
                             <p>Description: ${description}</p>`;
}
