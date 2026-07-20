

// fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true")
// .then(response => {
//     if (!response.ok) {

//     }
//     })
// .then(data => console.log(data.current_weather))
// .catch(error => console.error(error))

fetchData()

async function fetchData() {
    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true")

        if (!response.ok) {
            throw new Error("Could not fetch resource")
        }

        const data = await response.json()
        console.log(data.current_weather)
    } catch(error) {
        console.log("Error")
    }
}