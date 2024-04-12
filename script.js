// const apikey = "f4ddd699ca415ae70fcd62d8668b0fa1";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// let searchinp = document.querySelector(".search");
// let searchbtn = document.querySelector(".search-btn");
// let weathericon = document.querySelector(".w-icon");
// let spinnerContainer = document.querySelector(".spinner-container");
// async function Checkweather(city) {
//     spinnerContainer.style.display = "block";
//   const response = await fetch(apiUrl + city + `&appid=${apikey}`);
//   let data = await response.json();
//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
//   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//   document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

//   if (data.weather[0].main == "Clouds") {
//     weathericon.src = "images/clouds.png";
//   } else if (data.weather[0].main == "Clear") {
//     weathericon.src = "images/clear.png";
//   } else if (data.weather[0].main == "Rain") {
//     weathericon.src = "images/rain.png";
//   } else if (data.weather[0].main == "Drizzle") {
//     weathericon.src = "images/drizzle.png";
//   } else if (data.weather[0].main == "Mist") {
//     weathericon.src = "images/mist.png";
//   }
// }

// searchbtn.addEventListener("click", () => {
//   Checkweather(searchinp.value);
//   spinnerContainer.style.display="block"
//   document.querySelector(".weather").style.display = "flex";
//   setTimeout(() => {
//     document.querySelector(".weather").style.transition = "all 0.5s";
//   }, 500);
// });
const apikey = "f4ddd699ca415ae70fcd62d8668b0fa1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchinp = document.querySelector(".search");
let searchbtn = document.querySelector(".search-btn");
let weathericon = document.querySelector(".w-icon");
let spinnerContainer = document.querySelector(".spinner-container");

async function Checkweather(city) {
  console.log("Fetching weather data for city:", city);
  spinnerContainer.style.display = "block";
  document.querySelector(".weather").style.display = "none";
  try {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    let data = await response.json();
    if (data.cod === "404") {
      document.querySelector(".city").innerHTML = "Incorrect Name Check Spelling";
      spinnerContainer.style.display = "none";
    } else {
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

      if (data.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weathericon.src = "images/mist.png";
      }
    }
  } catch (error) {
    console.log("Error fetching weather data:", error);
  } finally {
    spinnerContainer.style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  Checkweather(searchinp.value);
  document.querySelector(".weather").style.display = "flex";
});
searchinp.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    Checkweather(searchinp.value);
    spinnerContainer.style.display = "block";
    document.querySelector(".weather").style.display = "flex";
  }
});
