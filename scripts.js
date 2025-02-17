const apiKey = "6d5ec116db7efb6b5fc1973588ff67b5";
const city = "London";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById("weather").innerHTML = `
      <h2>Weather in ${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Condition: ${data.weather[0].description}</p>
    `;
    })
    .catch(error => console.error("Error fetching data:", error));
