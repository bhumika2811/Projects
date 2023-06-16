const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9dc53dd8b0msha14790110941e28p19bc94jsn8b35aee828db',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)


            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset



        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Chandigarh")
const getWeather1 = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)


            shangeight.innerHTML = response.temp
            shangtwo.innerHTML = response.feels_like
            shanghumid.innerHTML = response.humidity

            shangfive.innerHTML = response.min_temp
            shangfour.innerHTML = response.max_temp
            shangten.innerHTML = response.wind_speed
            shangnine.innerHTML = response.wind_degrees

            shangsix.innerHTML = response.sunrise
            shangseven.innerHTML = response.sunset
            shangone.innerHTML = response.cloud_pct



        })
        .catch(err => console.error(err));
}
getWeather1("Canada")
const getWeather2 = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)


            baleight.innerHTML = response.temp
            baltwo.innerHTML = response.feels_like
            balthree.innerHTML = response.humidity

            balfive.innerHTML = response.min_temp
            balfour.innerHTML = response.max_temp
            balten.innerHTML = response.wind_speed
            balnine.innerHTML = response.wind_degrees
            // shangten.innerHTML=response.wind_degrees 
            balsix.innerHTML = response.sunrise
            balseven.innerHTML = response.sunset
            balone.innerHTML = response.cloud_pct



        })
        .catch(err => console.error(err));
}
getWeather2("Bali")
const getWeather3 = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            puneone.innerHTML = response.cloud_pct
            puneeight.innerHTML = response.temp
            punetwo.innerHTML = response.feels_like
            punethree.innerHTML = response.humidity

            punefive.innerHTML = response.min_temp
            punefour.innerHTML = response.max_temp
            puneten.innerHTML = response.wind_speed
            punenine.innerHTML = response.wind_degrees

            punesix.innerHTML = response.sunrise
            puneseven.innerHTML = response.sunset




        })
        .catch(err => console.error(err));
}
getWeather3("Pune")
const getWeather4 = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            bangone.innerHTML = response.cloud_pct
            bangeight.innerHTML = response.temp
            bangtwo.innerHTML = response.feels_like
            bangthree.innerHTML = response.humidity

            bangfive.innerHTML = response.min_temp
            bangfour.innerHTML = response.max_temp
            bangten.innerHTML = response.wind_speed
            bangnine.innerHTML = response.wind_degrees

            bangsix.innerHTML = response.sunrise
            bangseven.innerHTML = response.sunset




        })
        .catch(err => console.error(err));
}
getWeather4("Bengaluru")
