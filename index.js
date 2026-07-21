const inputEl = document.querySelector("#input-el")
const cityEl = document.querySelector("#city-el")
const temperatureEl = document.querySelector("#temperature-el")
const searchBtn = document.querySelector("#search-btn")


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
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)

        if (!weatherResponse.ok) {
            throw new Error("Could not fetch weather")
        }

        const weatherData = await weatherResponse.json()


        cityEl.textContent = name;
        temperatureEl.textContent = weatherData.current_weather.temperature
       
    } catch(error) {
        console.log(error)
    }
}



searchBtn.addEventListener("click", function() {
    const city = inputEl.value
    fetchData(city)

})