const form = document.getElementById('newHubForm');
const inputfield = document.getElementById('newHubInput');

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const city = inputfield.value.trim()

    if (!city) {
        alert('provide a city')
        return
    }

    try {
        const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)
        const data = await response.json()

        if (!response.ok) {
            alert(data.message)
            return
        }
        console.log(data)
        alert(`${data.city}, ${data.country}: ${data.temp}°C — ${data.description}`)

    } catch (error) {
        console.error(error)
        alert('Something went wrong. Please try again.')
    }
})

function showWeather(data) {
    document.getElementById('locationName').textContent = `${data.city}, ${data.country}`;
    document.getElementById('currentTemp').textContent = `${data.temp}°`
    document.getElementById('feelsLike').textContent = `${data.feels_like}°`
    document.getElementById('humidity').textContent = `${data.humidity}`
    document.getElementById('locationId').textContent = `Location ID: ${data.id}`;
}