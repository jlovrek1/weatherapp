//weather app

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "aa4f24a351859c26344fa19d00dd5017";

weatherForm.addEventListener("submit", async event => {
event.preventDefault();
const city = cityInput.value;
if(city) {
try{
    const weatherData = await getWeatherData(city);
    displayWeatherInfo(weatherData);

} catch(error) {
console.error(error);
displayError();

}


}else {
    displayError("Please enter a city")
}

});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl)
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();


  


}
function displayWeatherInfo(data) {

    const {name: city,
         main: {temp, humidity}, 
         weather: [{description, id}]} = data;
        card.textContent = "";
        card.style.display ="flex";
    const cityDisplay = docment.createElement("h1");
    const tempDisplay = docment.createElement("p");
    const humidityDisplay = docment.createElement("p");
    const descDisplay = docment.createElement("p");
    const weatherEmoji = docment.createElement("p");


}
function getWeatherEmoji(weatherId){

}
function displayError(message){
const errorDisplay = document.createElement("p")
errorDisplay.textContent = message;
errorDisplay.classList.add("errorDisplay")


card.textContent = "";
card.style.display ="flex"; 
card.appendChild(errorDisplay);
}