const inputEl = document.querySelector("#input-el")
const cityEl = document.querySelector("#city-el")
const temperatureEl = document.querySelector("#temperature-el")
const apparentTempEl = document.querySelector("#apparent-temperature-el")
const weatherCodeEl = document.querySelector("#weather-code-el")
const searchBtn = document.querySelector("#search-btn")
const resultEl = document.querySelector("#result")


async function fetchData(city) {
    try {

        //get city coordinates

        const geoResponce = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)

        if (!geoResponce.ok) {
            throw new Error("Could not fetch location")
        }
        
        const geoData = await geoResponce.json()
        
        if (!geoData.results) {
            throw new Error("Could not find city")
        }

        const { latitude, longitude, name} = geoData.results[0]


        //get city weather 
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weather_code,is_day`)

        if (!weatherResponse.ok) {
            throw new Error("Could not fetch weather")
        }

        const weatherData = await weatherResponse.json()


        cityEl.textContent = name;
        temperatureEl.textContent = weatherData.current.temperature_2m + "℃"
        apparentTempEl.textContent = "Feels like: " + weatherData.current.apparent_temperature +"℃"
        const code = weatherData.current.weather_code
        const isDay = weatherData.current.is_day
        const description = weatherCodes[code][isDay]
        weatherCodeEl.textContent = description

        resultEl.classList.toggle("day-mode", isDay === 1)
        resultEl.classList.toggle("night-mode", isDay === 0)
        

        
       
    } catch(error) {
        console.log(error)
    }
}



searchBtn.addEventListener("click", function() {
    const city = inputEl.value
    fetchData(city)

})