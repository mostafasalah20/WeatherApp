
let input_weather = document.getElementById("input_weather");
let submit = document.getElementById("submit");
let country_value = document.getElementById("country_value");
let img = document.getElementById("img");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        weather(`${lat},${lon}`)
    });

} else {
    console.log("Geolocation is not supported by this browser.");
}


async function weather(query) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=cea44fc818eb489ea62221249242806&q=${query}&days=4&aqi=no&alerts=no`);
    let data = await response.json();
    console.log(data);
    display_weather(data);
    display_weather_tomm(data);
    display_weather3(data)
    isplay_weather4(data)
}
// weather("29.3084021,30.8428497")

submit.addEventListener("click", function (e) {
    e.preventDefault();
    let city = input_weather.value;
    weather(city)
})

function display_weather(data) {
    country_value.innerHTML = data.location.country;
    document.getElementById("TEMP_value").innerHTML = `${data.current.temp_c} C`;
    document.getElementById("TEMP_max").innerHTML = `${data.current.temp_f} C`;
    document.getElementById("HUMIDITY").innerHTML = `${data.current.humidity} %`;
    document.getElementById("WIND_SPEED").innerHTML = `${data.current.wind_kph} Km/h`;
    document.getElementById("humidity").innerHTML = `${data.current.humidity}`;
    document.getElementById("city").innerHTML = `${data.location.name}`;
    img.setAttribute('src', data.current.condition.icon);
    let date = new Date(data.current.last_updated);
    document.getElementById("day").innerHTML = `${date.toLocaleString("en-us", { weekday: 'long' })}`;
    document.getElementById("month").innerHTML = `${date.toLocaleString("en-us", { day: 'numeric', month: 'long' })}`;
    document.getElementById("year").innerHTML = ` ${date.toLocaleString("en-us", { year: 'numeric' })}`;
    document.getElementById("hour").innerHTML = `${date.toLocaleString("en-us", { hour: 'numeric', minute: 'numeric', hour12: true })}`;

}

function display_weather_tomm(data){
    let date=new Date(data.forecast.forecastday[1].date)
    document.getElementById("next_day").innerHTML = `${date.toLocaleString("en-us", { weekday: 'long' })}`;
    document.getElementById("next_date2").innerHTML = `${data.forecast.forecastday[1].date}`
    document.getElementById("next_temp").innerHTML = `${data.forecast.forecastday[1].day.maxtemp_c} C`;
    document.getElementById("temp_f").innerHTML = `${data.forecast.forecastday[1].day.maxtemp_f} C`;
    document.getElementById("next_humidity").innerHTML = `${data.forecast.forecastday[1].day.avghumidity} %`;
    document.getElementById("next_wind").innerHTML = `${data.forecast.forecastday[1].day.maxwind_kph} Km/h`;
}

function display_weather3(data){
    let date=new Date(data.forecast.forecastday[2].date)
    document.getElementById("next_day3").innerHTML = `${date.toLocaleString("en-us", { weekday: 'long' })}`;
    document.getElementById("next_date3").innerHTML = `${data.forecast.forecastday[2].date}`
    document.getElementById("next_temp3").innerHTML = `${data.forecast.forecastday[2].day.maxtemp_c} C`;
    document.getElementById("temp_f3").innerHTML = `${data.forecast.forecastday[2].day.maxtemp_f} C`;
    document.getElementById("next_humidity3").innerHTML = `${data.forecast.forecastday[2].day.avghumidity} %`;
    document.getElementById("next_wind3").innerHTML = `${data.forecast.forecastday[2].day.maxwind_kph} Km/h`;
}

function isplay_weather4(data){
    let date=new Date(data.forecast.forecastday[3].date)
    document.getElementById("next_day4").innerHTML = `${date.toLocaleString("en-us", { weekday:'long'})}`;
    document.getElementById("next_date4").innerHTML = `${data.forecast.forecastday[3].date}`;
    document.getElementById("next_temp4").innerHTML = `${data.forecast.forecastday[3].day.maxtemp_c} C`;
    document.getElementById("temp_f4").innerHTML = `${data.forecast.forecastday[3].day.maxtemp_f}C`;
    document.getElementById("next_humidity4").innerHTML = `${data.forecast.forecastday[3].day.avghumidity} %`;
    document.getElementById("next_wind4").innerHTML = `${data.forecast.forecastday[2].day.maxwind_kph} Km/h`;
}
